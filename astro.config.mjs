// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: {
        en: "Kaptive Docs",
        fr: "Kaptive Docs",
        de: "Kaptive Docs",
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
      components: {
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
                fr: "Compte & licence",
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
                fr: "Créer un projet",
                de: "Projekt erstellen",
              },
              slug: "getting-started/create-project",
            },
            {
              label: "Customize Page Style",
              translations: {
                fr: "Personnaliser le style de la page",
                de: "Seitenstil anpassen",
              },
              slug: "getting-started/customize-page-style",
            },
            {
              label: "Add Interactivity",
              translations: {
                fr: "Ajouter de l'interactivité",
                de: "Interaktivität hinzufügen",
              },
              slug: "getting-started/add-interactivity",
            },
            {
              label: "Assign your Project",
              translations: {
                fr: "Assigner votre projet",
                de: "Projekt zuweisen",
              },
              slug: "getting-started/assign",
            },
            {
              label: "Schedule your Project",
              translations: {
                fr: "Planifier votre projet",
                de: "Projekt planen",
              },
              slug: "getting-started/schedule",
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
            // {
            //   label: "Assemble your own player",
            //   translations: {
            //     fr: "Assembler votre propre player",
            //     de: "Eigenen Player zusammenbauen",
            //   },
            //   slug: "guides/assemble-player",
            // },
            {
              label: "Players",
              translations: {
                fr: "Players",
                de: "Players",
              },
              items: [
                {
                  label: "Kaptive Player",
                  slug: "guides/players/kaptive-player",
                },
                {
                  label: "Kaptive Web",
                  slug: "guides/players/kaptive-web",
                },
                {
                  label: "Kaptive iOS",
                  slug: "guides/players/kaptive-ios",
                },
              ],
            },
            {
              label: "Alerts",
              translations: {
                fr: "Alertes",
                de: "Warnungen",
              },
              items: [
                {
                  label: "Create an Alert",
                  translations: {
                    fr: "Créer une alerte",
                    de: "Eine Warnung erstellen",
                  },
                  slug: "guides/alerts/create-an-alert",
                },
                // {
                //   label: "Connect the Alert to your Building Alarm",
                //   translations: {
                //     fr: "Connecter l'alerte à votre alarme de bâtiment",
                //     de: "Warnung mit Gebäudealarm verbinden",
                //   },
                //   slug: "guides/alerts/connect-alert-to-building-alarm",
                // },
              ],
            },
            {
              label: "Content Creation",
              translations: {
                fr: "Création de contenu",
                de: "Inhaltserstellung",
              },
              items: [
                {
                  label: "Simple Digital Signage",
                  translations: {
                    fr: "Affichage dynamique simple",
                    de: "Einfaches Digital Signage",
                  },
                  slug: "guides/content-creation/simple-digital-signage",
                },
                {
                  label: "Interactive Digital Signage",
                  translations: {
                    fr: "Affichage dynamique interactif",
                    de: "Interaktives Digital Signage",
                  },
                  slug: "guides/content-creation/interactive-digital-signage",
                },
                {
                  label: "iPad Application Creation",
                  translations: {
                    fr: "Création d'application iPad",
                    de: "iPad-Anwendung erstellen",
                  },
                  slug: "guides/content-creation/ipad-application-creation",
                },
              ],
            },
          ],
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
