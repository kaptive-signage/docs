// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import fs from "node:fs";

import tailwindcss from "@tailwindcss/vite";

// Read every release note from the content directory, sorted newest-first by
// version. Release note files are named with hyphenated versions, e.g.
// `0-6-0.mdx`. Adding a new file automatically lists it in the sidebar and
// updates the `/whats-new` redirect target — no config changes needed.
const releaseNotesDir = new URL(
  "./src/content/docs/release-notes/",
  import.meta.url
);
const releaseNotes = fs
  .readdirSync(releaseNotesDir)
  .filter((file) => file.endsWith(".mdx"))
  .map((file) => file.replace(/\.mdx$/, ""))
  .sort((a, b) => {
    const va = a.split("-").map(Number);
    const vb = b.split("-").map(Number);
    for (let i = 0; i < Math.max(va.length, vb.length); i++) {
      const diff = (va[i] ?? 0) - (vb[i] ?? 0);
      if (diff !== 0) return diff;
    }
    return 0;
  })
  .reverse();

// Sidebar entries for the "Release Notes" group, newest first. Labels are the
// dotted version (e.g. `0.6.0`) derived from the hyphenated file name.
const releaseNoteItems = releaseNotes.map((version) => ({
  label: version.replace(/-/g, "."),
  slug: `release-notes/${version}`,
}));

// `/whats-new` always redirects to the latest release note, per locale
// (root + each localized prefix), e.g. `/it/whats-new` -> `/it/release-notes/0-6-0/`.
const localePrefixes = ["", "/fr", "/de", "/it"];
const latestVersion = releaseNotes[0];
const whatsNewRedirects = Object.fromEntries(
  localePrefixes.map((prefix) => [
    `${prefix}/whats-new`,
    `${prefix}/release-notes/${latestVersion}/`,
  ])
);

// https://astro.build/config
export default defineConfig({
  site: "https://docs.kaptive.ch",
  redirects: whatsNewRedirects,
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
              slug: "index",
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
                  label: "Roles",
                  translations: {
                    fr: "Rôles",
                    de: "Rollen",
                    it: "Ruoli",
                  },
                  slug: "guides/general/roles",
                },
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
            {
              label: "Editor",
              translations: {
                fr: "Éditeur",
                de: "Editor",
                it: "Editor",
              },
              items: [
                {
                  label: "Zoom project canvas",
                  translations: {
                    fr: "Zoomer sur le canvas du projet",
                    de: "In die Projekt-Arbeitsfläche zoomen",
                    it: "Zoom sul canvas del progetto",
                  },
                  slug: "guides/editor/zoom-project-canvas",
                },
                {
                  label: "Rotate content elements",
                  translations: {
                    fr: "Faire pivoter les éléments de contenu",
                    de: "Inhaltselemente drehen",
                    it: "Ruotare gli elementi di contenuto",
                  },
                  slug: "guides/editor/element-rotation",
                },
                {
                  label: "Auto-rotate PDF pages",
                  translations: {
                    fr: "Rotation automatique des pages PDF",
                    de: "PDF-Seiten automatisch wechseln",
                    it: "Rotazione automatica delle pagine PDF",
                  },
                  slug: "guides/editor/pdf-page-rotation",
                },
                {
                  label: "Start from a template",
                  translations: {
                    fr: "Partir d'un modèle",
                    de: "Mit einer Vorlage starten",
                    it: "Partire da un template",
                  },
                  slug: "guides/editor/templates",
                },
                {
                  label: "Share and embed projects",
                  translations: {
                    fr: "Partager et intégrer des projets",
                    de: "Projekte teilen und einbetten",
                    it: "Condividere e incorporare i progetti",
                  },
                  slug: "guides/editor/public-sharing",
                },
                {
                  label: "Export a project to PDF",
                  translations: {
                    fr: "Exporter un projet en PDF",
                    de: "Ein Projekt als PDF exportieren",
                    it: "Esportare un progetto in PDF",
                  },
                  slug: "guides/editor/pdf-export",
                },
                {
                  label: "Use custom fonts",
                  translations: {
                    fr: "Utiliser des polices personnalisées",
                    de: "Eigene Schriftarten verwenden",
                    it: "Usare font personalizzati",
                  },
                  slug: "guides/editor/custom-fonts",
                },
                {
                  label: "Hide and Schedule Pages",
                  slug: "guides/editor/page-scheduling",
                }
              ],
            },
            {
              label: "Alerts",
              translations: {
                fr: "Alertes",
                de: "Alarme",
                it: "Alerte",
              },
              items: [
                {
                  label: "Create an Alert",
                  translations: {
                    fr: "Créer une Alerte",
                    de: "Alarm erstellen",
                    it: "Creare un'Alerte",
                  },
                  slug: "guides/alerts/create-an-alert",
                },
              ],
            },
          ],
        },
        {
          label: "Onboarding",
          translations: {
            fr: "Guide d'initiation",
            de: "Einstieg",
            it: "Guida all'avvio",
          },
          items: [
            {
              label: "Workshop",
              translations: {
                fr: "Workshop",
                de: "Workshop",
                it: "Workshop",
              },
              slug: "onboarding/workshop",
            },
            {
              label: "Onboarding Guide",
              translations: {
                fr: "Guide d'initiation",
                de: "Onboarding-Leitfaden",
                it: "Guida all'avvio",
              },
              slug: "onboarding",
            },
          ],
        },
        {
          label: "Release Notes",
          translations: {
            fr: "Notes de version",
            de: "Versionshinweise",
            it: "Note di rilascio",
          },
          items: releaseNoteItems,
        }
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
