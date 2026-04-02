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
        it: "Kaptive Docs",
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
          lang: "fr",
        },
        de: {
          label: "Deutsch",
          lang: "de",
        },
        it: {
          label: "Italiano",
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
            it: "Per Iniziare",
          },
          items: [
            {
              label: "Introduction",
              translations: {
                fr: "Introduction",
                de: "Einführung",
                it: "Introduzione",
              },
              slug: "getting-started/introduction",
            },
            {
              label: "Account & Licences",
              translations: {
                fr: "Compte & Licences",
                de: "Konto & Lizenzen",
                it: "Account e Licenze",
              },
              slug: "getting-started/account-and-licence",
            },
            {
              label: "Connect a Player",
              translations: {
                fr: "Connecter un Player",
                de: "Player verbinden",
                it: "Collegare un Player",
              },
              slug: "getting-started/connect-player",
            },
            {
              label: "Create a Project",
              translations: {
                fr: "Créer un Projet",
                de: "Projekt erstellen",
                it: "Creare un Progetto",
              },
              slug: "getting-started/create-project",
            },
            {
              label: "Customize Page Style",
              translations: {
                fr: "Personnaliser le Style de la Page",
                de: "Seitenstil anpassen",
                it: "Personalizzare lo Stile della Pagina",
              },
              slug: "getting-started/customize-page-style",
            },
            {
              label: "Add Interactivity",
              translations: {
                fr: "Ajouter de l'Interactivité",
                de: "Interaktivität hinzufügen",
                it: "Aggiungere Interattività",
              },
              slug: "getting-started/add-interactivity",
            },
            {
              label: "Assign your Project",
              translations: {
                fr: "Assigner votre Projet",
                de: "Projekt zuweisen",
                it: "Assegnare il tuo Progetto",
              },
              slug: "getting-started/assign",
            },
            {
              label: "Schedule your Project",
              translations: {
                fr: "Planifier votre Projet",
                de: "Projekt planen",
                it: "Pianificare il tuo Progetto",
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
            it: "Guide",
          },
          items: [
            // {
            //   label: "Assemble your own player",
            //   translations: {
            //     fr: "Assembler votre propre Player",
            //     de: "Eigenen Player zusammenbauen",
            //   },
            //   slug: "guides/assemble-player",
            // },
            {
              label: "Players",
              translations: {
                fr: "Players",
                de: "Players",
                it: "Players",
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
              label: "General",
              translations: {
                fr: "Général",
                de: "Allgemein",
                it: "Generale",
              },
              items: [
                {
                  label: "Find your Workspace ID",
                  translations: {
                    fr: "Trouver l'identifiant de votre Workspace",
                    de: "Workspace-ID finden",
                    it: "Trova il tuo Workspace ID",
                  },
                  slug: "guides/general/find-workspace-id",
                },
              ],
            },
            // {
            //   label: "Alerts",
            //   translations: {
            //     fr: "Alertes",
            //     de: "Warnungen",
            //   },
            //   items: [
            //     {
            //       label: "Create an Alert",
            //       translations: {
            //         fr: "Créer une Alerte",
            //         de: "Eine Warnung erstellen",
            //       },
            //       slug: "guides/alerts/create-an-alert",
            //     },
            //     // {
            //     //   label: "Connect the Alert to your Building Alarm",
            //     //   translations: {
            //     //     fr: "Connecter l'Alerte à votre alarme de bâtiment",
            //     //     de: "Warnung mit Gebäudealarm verbinden",
            //     //   },
            //     //   slug: "guides/alerts/connect-alert-to-building-alarm",
            //     // },
            //   ],
            // },
            // {
            //   label: "Content Creation",
            //   translations: {
            //     fr: "Création de Contenu",
            //     de: "Inhaltserstellung",
            //   },
            //   items: [
            //     {
            //       label: "Simple Digital Signage",
            //       translations: {
            //         fr: "Affichage dynamique simple",
            //         de: "Einfaches Digital Signage",
            //       },
            //       slug: "guides/content-creation/simple-digital-signage",
            //     },
            //     {
            //       label: "Interactive Digital Signage",
            //       translations: {
            //         fr: "Affichage dynamique interactif",
            //         de: "Interaktives Digital Signage",
            //       },
            //       slug: "guides/content-creation/interactive-digital-signage",
            //     },
            //     {
            //       label: "iPad Application Creation",
            //       translations: {
            //         fr: "Création d'application iPad",
            //         de: "iPad-Anwendung erstellen",
            //       },
            //       slug: "guides/content-creation/ipad-application-creation",
            //     },
            //   ],
            // },
          ],
        },
      ],
    }),
  ],

  redirects: {
    "/": "/getting-started/introduction",
    "/fr/": "/fr/getting-started/introduction",
    "/de/": "/de/getting-started/introduction",
    "/it/": "/it/getting-started/introduction",
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
