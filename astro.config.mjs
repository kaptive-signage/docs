// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      
      title: {
        en: "kaptive docs",
        fr: "kaptive docs",
        de: "kaptive docs",
      },
      customCss: ["./src/styles/global.css"],
      logo: {
        src: "./src/assets/kaptive-orange.svg",
        replacesTitle: true,
      },
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        fr: {
          label: "Français",
        },
        de: {
          label: "Deutsch",
        },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/kaptive-signage/docs",
        },
      ],
      lastUpdated: true,
      editLink: {
        baseUrl: "https://github.com/kaptive-signage/docs/edit/main/",
      },
      components:{
        Pagination: "./src/components/Pagination.astro",
        ContentPanel: "./src/components/ContentPanel.astro",
        PageTitle: "./src/components/PageTitle.astro",
      },
      sidebar: [
        {
          label: "Getting Started",
          translations: {
            fr: "Premiers pas",
            de: "Erste Schritte",
          },
          items: [
            {
              label: "Account & Licence",
              translations: {
                fr: "Compte & Licence",
                de: "Konto & Lizenz",
              },
              slug: "getting-started/account-and-licence",
            },
            {
              label: "Connect a Player",
              translations: {
                fr: "Connecter un Player",
                de: "Player verbinden",
              },
              slug: "getting-started/connect-player",
            },
            {
              label: "Create a Project",
              translations: {
                fr: "Créer un Projet",
                de: "Projekt erstellen",
              },
              slug: "getting-started/create-project",
            },
            {
              label: "Customize Page Style",
              translations: {
                fr: "Personnaliser le Style de la Page",
                de: "Seitenstil anpassen",
              },
              slug: "getting-started/customize-page-style",
            },
            {
              label: "Add Interactivity",
              translations: {
                fr: "Ajouter de l'Interactivité",
                de: "Interaktivität hinzufügen",
              },
              slug: "getting-started/add-interactivity",
            },
            {
              label: "Publish",
              translations: {
                fr: "Publier",
                de: "Veröffentlichen",
              },
              slug: "getting-started/publish",
            },
          ],
        },
        {
          label: "Guides",
          translations: {
            fr: "Guides",
            de: "Anleitungen",
          },
          items: [
            {
              label: "Assemble your own player",
              translations: {
                fr: "Assembler votre propre player",
                de: "Eigenen Player zusammenbauen",
              },
              slug: "guides/assemble-player",
            },
            // {
            //   label: "Alerts",
            //   translations: {
            //     fr: "Alertes",
            //     de: "Warnungen",
            //   },
            //   slug: "guides/alerts",
            // },
          ],
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
