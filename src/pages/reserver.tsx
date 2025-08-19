import React, { useState } from "react";
import Head from "next/head";
import {
  Calendar,
  Users,
  Clock,
  ShoppingBag,
  CheckCircle,
  Info,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { postReservation } from "@/lib/services/forms";
import { CONTACT } from "@/utils/constants";

interface ReservationForm {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  type: "table" | "event" | "click-collect";
  message: string;
  eventId?: string;
}

const ReserverPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "table" | "event" | "click-collect"
  >("table");
  const [formData, setFormData] = useState<ReservationForm>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 2,
    type: "table",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTabChange = (tab: "table" | "event" | "click-collect") => {
    setActiveTab(tab);
    setFormData((prev) => ({ ...prev, type: tab }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(false);
    setIsSubmitting(true);
    try {
      await postReservation(formData);
      setSubmitSuccess(true);
      // garder les valeurs si click-collect, sinon reset
      if (formData.type !== "click-collect") {
        setFormData((prev) => ({ ...prev, date: "", time: "", message: "" }));
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Erreur inconnue";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const timeSlots = [
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
  ];

  const upcomingEvents = [
    {
      id: "morning-run",
      name: "Course Matinale du Parc",
      date: "2024-02-15",
      time: "07:30",
      price: "Gratuit",
      spots: 7,
    },
    {
      id: "nutrition-workshop",
      name: "Atelier Nutrition Sportive",
      date: "2024-02-20",
      time: "19:00",
      price: "25€",
      spots: 7,
    },
    {
      id: "bike-ride",
      name: "Sortie Vélo Monts du Lyonnais",
      date: "2024-02-25",
      time: "08:00",
      price: "35€",
      spots: 6,
    },
  ];

  const popularItems = [
    { name: "Smoothie Bowl Energisant", price: "12,50€" },
    { name: "Sandwich Sportif Complet", price: "14,00€" },
    { name: "Salade de Quinoa Power", price: "15,50€" },
    { name: "Energy Balls Maison (x4)", price: "8,50€" },
    { name: "Jus Vert Détox", price: "6,50€" },
  ];

  return (
    <>
      <Head>
        <title>
          Réserver - Le Ravito | Table, Événements & Click & Collect à Lyon
        </title>
        <meta
          name="description"
          content="Réservez votre table au Ravito, inscrivez-vous à nos événements sportifs ou commandez en click & collect. Simple et rapide à Lyon 6ème."
        />
        <meta
          name="keywords"
          content="réserver table le ravito, événements sportifs lyon, click collect, inscription cours, réservation café"
        />
        <link rel="canonical" href="https://leravito.fr/reserver" />
      </Head>

      <div className="min-h-screen bg-light-white">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-accent-blue/10 to-accent-orange/10">
          <div className="container-custom text-center">
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="w-20 h-1 bg-accent-orange mx-auto" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-custom-grey">
                Réservation
              </h1>
              <div className="w-32 h-0.5 bg-accent-blue mx-auto" />
              <p className="text-lg md:text-xl text-custom-grey/70 leading-relaxed">
                Réservez votre table, inscrivez-vous à nos événements ou
                commandez en click & collect
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              {/* Tabs */}
              <div className="flex flex-col sm:flex-row bg-white rounded-xl p-1 mb-8 shadow-lg">
                <button
                  onClick={() => handleTabChange("table")}
                  className={`
                    flex-1 flex items-center justify-center space-x-2 px-6 py-4 rounded-lg font-medium transition-all duration-200
                    ${
                      activeTab === "table"
                        ? "bg-accent-blue text-white shadow-md"
                        : "text-custom-grey hover:bg-gray-50"
                    }
                  `}
                >
                  <Users size={20} />
                  <span>Réserver une table</span>
                </button>

                <button
                  onClick={() => handleTabChange("event")}
                  className={`
                    flex-1 flex items-center justify-center space-x-2 px-6 py-4 rounded-lg font-medium transition-all duration-200
                    ${
                      activeTab === "event"
                        ? "bg-accent-blue text-white shadow-md"
                        : "text-custom-grey hover:bg-gray-50"
                    }
                  `}
                >
                  <Calendar size={20} />
                  <span>Événement</span>
                </button>

                <button
                  onClick={() => handleTabChange("click-collect")}
                  className={`
                    flex-1 flex items-center justify-center space-x-2 px-6 py-4 rounded-lg font-medium transition-all duration-200
                    ${
                      activeTab === "click-collect"
                        ? "bg-accent-blue text-white shadow-md"
                        : "text-custom-grey hover:bg-gray-50"
                    }
                  `}
                >
                  <ShoppingBag size={20} />
                  <span>Click & Collect</span>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Form */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-custom-grey mb-2">
                        {activeTab === "table" && "Réservation de table"}
                        {activeTab === "event" && "Inscription à un événement"}
                        {activeTab === "click-collect" &&
                          "Commande Click & Collect"}
                      </h2>
                      <p className="text-custom-grey/70">
                        {activeTab === "table" &&
                          "Réservez votre table pour une expérience optimale"}
                        {activeTab === "event" &&
                          "Rejoignez nos événements sportifs et ateliers"}
                        {activeTab === "click-collect" &&
                          "Commandez en ligne et récupérez à l'heure souhaitée"}
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-custom-grey mb-2"
                          >
                            Nom complet *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-200"
                            placeholder="Votre nom"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-custom-grey mb-2"
                          >
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-200"
                            placeholder="votre@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-custom-grey mb-2"
                          >
                            Téléphone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-200"
                            placeholder="06 12 34 56 78"
                          />
                        </div>

                        {activeTab === "table" && (
                          <div>
                            <label
                              htmlFor="guests"
                              className="block text-sm font-medium text-custom-grey mb-2"
                            >
                              Nombre de personnes
                            </label>
                            <select
                              id="guests"
                              name="guests"
                              value={formData.guests}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-200"
                            >
                              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                <option key={num} value={num}>
                                  {num} personne{num > 1 ? "s" : ""}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}

                        {activeTab === "event" && (
                          <div>
                            <label
                              htmlFor="eventId"
                              className="block text-sm font-medium text-custom-grey mb-2"
                            >
                              Événement *
                            </label>
                            <select
                              id="eventId"
                              name="eventId"
                              value={formData.eventId || ""}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-200"
                            >
                              <option value="">
                                Sélectionner un événement
                              </option>
                              {upcomingEvents.map((event) => (
                                <option key={event.id} value={event.id}>
                                  {event.name} - {event.date}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}
                      </div>

                      {/* Date and Time */}
                      {(activeTab === "table" ||
                        activeTab === "click-collect") && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label
                              htmlFor="date"
                              className="block text-sm font-medium text-custom-grey mb-2"
                            >
                              Date *
                            </label>
                            <input
                              type="date"
                              id="date"
                              name="date"
                              value={formData.date}
                              onChange={handleInputChange}
                              required
                              min={new Date().toISOString().split("T")[0]}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-200"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="time"
                              className="block text-sm font-medium text-custom-grey mb-2"
                            >
                              Heure *
                            </label>
                            <select
                              id="time"
                              name="time"
                              value={formData.time}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-200"
                            >
                              <option value="">Sélectionner une heure</option>
                              {timeSlots.map((time) => (
                                <option key={time} value={time}>
                                  {time}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      )}

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-custom-grey mb-2"
                        >
                          {activeTab === "click-collect"
                            ? "Votre commande *"
                            : "Message (optionnel)"}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required={activeTab === "click-collect"}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-200 resize-none"
                          placeholder={
                            activeTab === "click-collect"
                              ? "Décrivez votre commande (ex: 2 smoothies banane, 1 sandwich avocat...)"
                              : "Demandes particulières, allergies, informations supplémentaires..."
                          }
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="pt-4">
                        {submitError && (
                          <p className="text-red-600 text-sm mb-3" role="alert">
                            {submitError}
                          </p>
                        )}
                        {submitSuccess && (
                          <p
                            className="text-green-700 text-sm mb-3"
                            role="status"
                          >
                            Demande envoyée ✅
                          </p>
                        )}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          aria-busy={isSubmitting}
                          className={`w-full px-8 py-4 bg-accent-orange text-white font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-accent-orange/50 ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:scale-105 hover:shadow-xl"}`}
                        >
                          <CheckCircle size={20} className="inline mr-2" />
                          {isSubmitting
                            ? "Envoi…"
                            : activeTab === "table"
                              ? "Réserver ma table"
                              : activeTab === "event"
                                ? "M'inscrire à l'événement"
                                : "Passer ma commande"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Information Card */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="font-semibold text-custom-grey mb-4 flex items-center">
                      <Info className="mr-2 text-accent-blue" size={20} />
                      Informations Utiles
                    </h3>

                    {activeTab === "table" && (
                      <div className="space-y-3 text-sm text-custom-grey/70">
                        <p>• Réservation recommandée, surtout les week-ends</p>
                        <p>• Tables disponibles de 7h à 19h30</p>
                        <p>• Annulation gratuite jusqu'à 2h avant</p>
                        <p>• Places à l'extérieur selon météo</p>
                      </div>
                    )}

                    {activeTab === "event" && (
                      <div className="space-y-3">
                        <p className="text-sm text-custom-grey/70 mb-4">
                          Événements à venir :
                        </p>
                        {upcomingEvents.map((event) => (
                          <div
                            key={event.id}
                            className="p-3 bg-gray-50 rounded-lg"
                          >
                            <div className="font-medium text-custom-grey text-sm">
                              {event.name}
                            </div>
                            <div className="text-xs text-custom-grey/60 mt-1">
                              {event.date} à {event.time} • {event.price} •{" "}
                              {event.spots} places restantes
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === "click-collect" && (
                      <div className="space-y-3">
                        <p className="text-sm text-custom-grey/70 mb-4">
                          Produits populaires :
                        </p>
                        {popularItems.map((item, index) => (
                          <div
                            key={index}
                            className="flex justify-between text-sm"
                          >
                            <span className="text-custom-grey">
                              {item.name}
                            </span>
                            <span className="text-accent-orange font-medium">
                              {item.price}
                            </span>
                          </div>
                        ))}
                        <p className="text-xs text-custom-grey/60 mt-4">
                          Délai de préparation : 15-30 minutes selon la commande
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Contact Card */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="font-semibold text-custom-grey mb-4">
                      Une Question ?
                    </h3>
                    <p className="text-sm text-custom-grey/70 mb-4">
                      Notre équipe est là pour vous aider
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock size={16} className="text-accent-blue" />
                        <span className="text-custom-grey">
                          Lun-Ven : 6h-20h
                        </span>
                      </div>
                      <a
                        href={`tel:${CONTACT.phoneE164}`}
                        className="flex items-center space-x-2 text-accent-orange hover:text-accent-blue transition-colors"
                      >
                        <span>📞 {CONTACT.phoneDisplay}</span>
                      </a>
                      <a
                        href={`mailto:${CONTACT.email}`}
                        className="flex items-center space-x-2 text-accent-orange hover:text-accent-blue transition-colors"
                      >
                        <span>✉️ {CONTACT.email}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ReserverPage;
