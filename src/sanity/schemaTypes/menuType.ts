import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const menuType = defineType({
  name: "menu",
  title: "Menu",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "title",
      title: "Titre du menu",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "menuImage",
      title: "Image du menu",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: "isActive",
      title: "Menu actif",
      type: "boolean",
      initialValue: true,
      description: "Détermine si ce menu est actuellement affiché sur le site",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "menuImage",
    },
  },
});
