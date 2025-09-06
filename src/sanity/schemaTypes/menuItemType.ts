import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const menuItemType = defineType({
  name: "menuItem",
  title: "Élément du Menu",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "name",
      title: "Nom du plat",
      type: "string",
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "price",
      title: "Prix",
      type: "number",
      validation: (rule: any) => rule.required().positive(),
    }),
    defineField({
      name: "category",
      title: "Catégorie",
      type: "reference",
      to: { type: "category" },
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: "subcategory",
      title: "Sous-catégorie",
      type: "string",
      description: "Obligatoire uniquement pour les boissons",
      options: {
        list: [
          { title: "Boissons froides", value: "boissons-froides" },
          { title: "Boissons chaudes", value: "boissons-chaudes" },
          { title: "Boissons alcoolisées", value: "boissons-alcoolisees" },
          { title: "Smoothies", value: "smoothies" },
          { title: "Cafés", value: "cafes" },
          { title: "Thés", value: "thes" },
          { title: "Cocktails", value: "cocktails" },
          { title: "Bières", value: "bieres" },
        ],
      },
      // Utilisation d'une fonction de validation pour gérer l'affichage conditionnel
      validation: (rule: any) =>
        rule.custom((value: string, context: any) => {
          // Récupérer la catégorie depuis le document
          const category = context.document?.category;

          // Si c'est une référence non résolue, on ne peut pas valider
          if (category && typeof category === "object" && category._ref) {
            return true;
          }

          // Si la catégorie est "Boissons", la sous-catégorie est obligatoire
          if (category?.name === "Boissons" && !value) {
            return "La sous-catégorie est obligatoire pour les boissons";
          }

          return true;
        }),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "allergens",
      title: "Allergènes",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Arachides", value: "arachides" },
          { title: "Céleri", value: "celeri" },
          { title: "Crustacés", value: "crustaces" },
          { title: "Fruits à coques", value: "fruits-a-coques" },
          { title: "Gluten", value: "gluten" },
          { title: "Lait", value: "lait" },
          { title: "Lupin", value: "lupin" },
          { title: "Mollusques", value: "mollusques" },
          { title: "Moutarde", value: "moutarde" },
          { title: "Œufs", value: "oeufs" },
          { title: "Poissons", value: "poissons" },
          { title: "Sésame", value: "sesame" },
          { title: "Sulfites", value: "sulfites" },
          { title: "Soja", value: "soja" },
        ],
      },
    }),
    defineField({
      name: "isVegetarian",
      title: "Végétarien",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "isAvailable",
      title: "Disponible",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category.name",
      media: "image",
    },
  },
});
