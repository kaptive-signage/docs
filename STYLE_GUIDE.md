# Kaptive Documentation Style Guide

This is the authoritative reference for writing Kaptive documentation. Every documentation page MUST follow these rules. Read this file completely before writing or editing any content.

---

## Product Terminology

These are the ONLY correct names. Never invent alternatives.

| Correct Term | Description | NEVER Use |
|---|---|---|
| **Kaptive** | The brand and platform. Always capitalized. | kaptive (in prose), KAPTIVE |
| **Kaptive Player** | The dedicated hardware player device (Raspberry Pi-based). | kaptive player, physical player, hardware player, dedicated player, Raspberry Pi |
| **Kaptive Web** | The browser-based player at player.kaptive.app. | web player, Web Player, browser player, online player |
| **Kaptive iOS** | The iOS application for playing content on iPads. | iOS player, iPad player, mobile player |
| **Players** | Only used when speaking in a sentence about several different Players, like in normal English. | Never use the single player word to describe a specific Player.|
| **Kaptive Manager** | The web dashboard at kaptive.app where you manage Projects, Players, Schedules, and account settings. | dashboard, admin panel, control panel, back office |
| **Kaptive Editor** | The web-based project creation and editing interface within Kaptive Manager. | editor, project editor, the editor (without "Kaptive") |
| **Kaptive OS** | The operating system flashed onto Kaptive Player hardware. | kaptive OS, KaptiveOS, player OS |
| **Kaptive Account** | A user's account on the platform. | account (standalone in ambiguous contexts) |

### Rules

- When referring to any Kaptive product, always include "Kaptive" as the prefix on first mention in a section. After the first mention, the short form (e.g. "the Player", "the Editor") is acceptable if unambiguous.
- "kaptive" (lowercase) is ONLY acceptable in code/URLs.

---

## Feature Terminology

When these terms refer to the Kaptive concept, they are **always capitalized** (e.g. "your Project", "a Page", "the Schedule"). Lowercase is only acceptable when the word is used in a generic, non-Kaptive sense (rare).

| Correct Term | Definition | Notes |
|---|---|---|
| **Project** | A container for digital signage content. Contains one or more Pages. | Never "presentation", "slideshow", or "document". |
| **Page** | A single full-screen view within a Project. | Never "slide", "screen", or "frame". |
| **Project Page Style** | The visual configuration of a Page (background, fonts, colors). | Never "theme", "template", or "design". Two words, no hyphen. |
| **Content** | The contents that are played on a page. E.g. Texts, Images, Videos, 3D models. | Never confuse Project, Content and Page. |
| **Workspace** | An organizational unit that contains Projects and Players. | Never "organization", "team", or "folder". |
| **Alert** | An urgent content override triggered by an administrator. | Never "notification", "warning", or "emergency message". |
| **Schedule** | A time-based collection of Projects shown on a Player. | Never "playlist", "timeline", or "calendar". |
| **Assigning** | The act of binding a Project or Schedule to one or more Players. | Never "deploying", "sending", or "pushing". |
| **Publishing** | Pushing updated content or schedule to already-assigned Players. | Never "deploying", "syncing", or "updating" (as a verb for this action). |
| **Interactivity** | Touch-responsive elements in a Project (buttons, scrollable PDFs, 3D models). | Never "interaction", "touch features", or "clickables". |
| **Content Element** | A media or widget item placed on a Page (image, video, text, button, etc.). | Never "component", "block", "widget" standalone, or "asset". |
| **Licence** | A subscription plan for Kaptive features. British spelling. | Never "license" (American spelling). |

---

## UI Element Names

Always use the exact UI label in backticks when referring to buttons or interface elements.

| Element | How to Write | Context |
|---|---|---|
| Assign button | Click `Assign` | Top-right of the Kaptive Editor |
| Publish button | Click the orange `Publish` button | Next to `Assign` in the Kaptive Editor |
| Create button | Click `Create` | In the project creation dialog |
| Start new Project | Click `Start new Project` | In the Projects section of the dashboard |
| Verify Device | Click `Verify Device` | In the player connection flow |
| Save button | Click `Save` | In Page Style editor |
| Write button | Click `Write` | In Raspberry Pi Imager when flashing |
| Sign up | Click `Sign up` | Account creation |
| Sign in with Google / Sign in with GitHub | Social login options | Account creation |

---

## URLs

Use these exact URLs. Never guess or invent URLs.

| Service | URL |
|---|---|
| Kaptive Manager (Manager, Editor, Dashboard) | `https://kaptive.app` |
| Kaptive Web | `https://player.kaptive.app` |
| Device Verification | `https://kaptive.app/verify` |
| Kaptive Website | `https://kaptive.ch` |
| Features & Pricing | `https://kaptive.ch/features` |
| Contact | `mailto:info@kaptive.ch` |
| Contact Page | `https://kaptive.ch/contact` |

### Contact Links

Whenever the documentation says "contact us" or invites the reader to get in touch, the text **must** be a hyperlink. Use one of these two forms:

- Email link: `[contact us](mailto:info@kaptive.ch)`
- Contact page link: `[contact us](https://kaptive.ch/contact)`

Never leave "contact us" as plain, unlinked text.

---

## Writing Style

### Voice & Tone
- Second person ("you" / "your"). Never first person ("we"/"our") except when referring to Kaptive as a company in a recommendation (e.g. "We recommend using...").
- Active voice. Direct instructions. No hedging.
- Professional but approachable. Not corporate, not casual.

### Structure
- Every page starts with frontmatter (`title`, `description`).
- Use `##` for major sections (these appear in the Table of Contents). Never use `#` in content — the page title comes from frontmatter.
- Use `###` for subsections within a `##` section.
- Use Starlight's `<Steps>` component for numbered procedures.
- Use Starlight's `<Aside>` for tips, warnings, and notes.
- Use Starlight's `<Tabs>` and `<TabItem>` for OS-specific or platform-specific instructions.

### Formatting Rules
- Button and UI element names: backtick-wrapped (`Assign`).
- File paths and code: code blocks.
- Kaptive product and feature names are already capitalized — do not bold them. Reserve bold for emphasis on non-Kaptive terms only.
- Image alt text: always descriptive, never empty.
- Links: use descriptive text, never "click here".

### Sentence Style
- Keep sentences short and scannable.
- One idea per sentence.
- Lead with the action in instructions: "Click `Assign`" not "You should click the Assign button".
- Use present tense: "The Player shows the content" not "The Player will show the content".
- Use **imperative mood** for page titles and headings: "Create a Project" not "Creating a Project". The imperative gives direct instructions; the gerund (-ing form) describes an activity. Titles should instruct.
- Each page should be self-contained. Do not add cross-reference links like "For more details, see…" or "As explained in…". If content is repeated across pages, write it naturally in context instead of pointing elsewhere.

---

<!-- ## Hardware Terminology

For the Kaptive Player assembly guide and related hardware docs:

| Correct Term | Notes |
|---|---|
| **Compute Module 5** | Full name on first mention, then "Compute Module". Always capitalized. |
| **IO Board** | Always capitalized, no hyphen. Never "I/O board" or "io board". |
| **eMMC** | Lowercase 'e', uppercase 'MMC'. Storage type. |
| **NVMe** | Capitalization matters. Storage type. |
| **Wi-Fi** | Always hyphenated. Never "WiFi" or "wifi". |
| **Raspberry Pi Imager** | Capitalized. The official flashing tool. |
| **rpiboot** | Always lowercase, monospace. The boot utility. |
| **Jumper** | Lowercase unless starting a sentence. The small connector piece. |
| **eMMC_BOOT_DISABLE** | Exact case, monospace. The header label on the IO Board. |

--- -->

## Capitalization Rules

Capitalization differs by language. These rules are mandatory across all content, headings, sidebar labels, and frontmatter titles.

### English — Title Case

All English headings, sidebar labels, and page titles use **Title Case**:
- Capitalize the first and last word.
- Capitalize all nouns, verbs, adjectives, adverbs, and pronouns.
- Lowercase articles (a, an, the), coordinating conjunctions (and, but, or), and short prepositions (in, on, to, for, of, with) — UNLESS they are the first or last word.

| Correct | Wrong |
|---|---|
| Create a Project | Creating a Project |
| Assign your Project | Assigning your Project |
| Add Interactivity | Adding Interactivity |
| Connect a Player | Connecting a Player |
| Customize Page Style | Customize page style |
| Connect the Alert to your Building Alarm | Connecting The Alert To your Building Alarm |
| Simple Digital Signage | Simple digital signage |

**Kaptive product names are always capitalized** regardless of position: Kaptive Player, Kaptive Web, Kaptive iOS, Kaptive Editor.

### French — Sentence Case (Casse de Phrase)

French headings, sidebar labels, and page titles use **sentence case**: capitalize only the first word and proper nouns. Common nouns are lowercase, even if they are capitalized in English.

- Capitalize: first word of the title, brand names (Kaptive, Player), and **all Kaptive feature terms** (Projet, Page, Contenu, Schedule, Workspace, Alerte, Licence, Interactivité, Style de Page, Élément de Contenu).
- Lowercase: all other common nouns, adjectives, verbs (after the first word).

| Correct | Wrong |
|---|---|
| Premiers pas | Premiers Pas |
| Créer un Projet | Créer un projet |
| Personnaliser le Style de la Page | Personnaliser le style de la page |
| Ajouter de l'Interactivité | Ajouter de l'interactivité |
| Assigner votre Projet | Assigner votre projet |
| Planifier votre Projet | Planifier votre projet |
| Connecter un Player | Connecter un player |
| Création de Contenu | Création de contenu |
| Assembler votre propre Player | Assembler votre propre player |
| Créer une Alerte | Créer une alerte |

**Kaptive feature terms** (Projet, Page, Contenu, Alerte, Schedule, Workspace, Licence, Interactivité, etc.) are treated as proper nouns in French and are **always capitalized**, just like "Player" and "Kaptive" themselves.

### German — Nouns Capitalized (Standard German Rules)

German follows standard German orthography: **all nouns are capitalized**, verbs and adjectives are lowercase (unless they are the first word).

- Capitalize: first word, all nouns (including compound nouns), brand names.
- Lowercase: verbs, adjectives, prepositions, articles.

| Correct | Wrong |
|---|---|
| Erste Schritte | Erste schritte |
| Projekt erstellen | Projekt Erstellen |
| Player verbinden | Player Verbinden |
| Seitenstil anpassen | Seitenstil Anpassen |
| Interaktivität hinzufügen | interaktivität hinzufügen |
| Projekt zuweisen | Projekt Zuweisen |
| Projekt planen | Projekt Planen |
| Inhaltserstellung | inhaltserstellung |
| Eine Warnung erstellen | Eine warnung erstellen |

### Summary Table

| Language | Rule | First Word | Nouns | Verbs | Adjectives |
|---|---|---|---|---|---|
| English | Title Case | Capitalize | Capitalize | Capitalize | Capitalize |
| French | Sentence case | Capitalize | lowercase | lowercase | lowercase |
| German | German orthography | Capitalize | Capitalize | lowercase | lowercase |

### Applying These Rules

These capitalization rules apply to:
1. **Page titles** (frontmatter `title:`)
2. **Page descriptions** (frontmatter `description:` — all languages use sentence case for descriptions)
3. **Section headings** (`##`, `###`) — follow the language's heading rule above
4. **Sidebar labels** (in `astro.config.mjs` — both `label` and `translations`)
5. **i18n file values** (in `src/content/i18n/`)

Descriptions (frontmatter `description:` field) always use **sentence case** in all languages — they are full sentences, not titles.

---

## Localization Notes

When adding translations in the sidebar config or i18n files:

- "Player" is kept as "Player" in FR and DE (not translated) — it is a Kaptive product name.
- "Kaptive" is never translated.
- Apply the capitalization rules above for each language.
- Use these established translations for sidebar labels:

| English | French | German |
|---|---|---|
| Getting Started | Premiers pas | Erste Schritte |
| Guides | Guides | Anleitungen |
| Players | Players | Players |
| Alerts | Alertes | Warnungen |
| Content Creation | Création de contenu | Inhaltserstellung |
| Account & Licence | Compte & licence | Konto & Lizenz |
| Connect a Player | Connecter un Player | Player verbinden |
| Create a Project | Créer un projet | Projekt erstellen |
| Customize Page Style | Personnaliser le style de la page | Seitenstil anpassen |
| Add Interactivity | Ajouter de l'interactivité | Interaktivität hinzufügen |
| Assign your Project | Assigner votre projet | Projekt zuweisen |
| Schedule your Project | Planifier votre projet | Projekt planen |
| Assemble your Own Player | Assembler votre propre Player | Eigenen Player zusammenbauen |
| Create an Alert | Créer une alerte | Eine Warnung erstellen |
| Connect the Alert to your Building Alarm | Connecter l'alerte à votre alarme de bâtiment | Warnung mit Gebäudealarm verbinden |
| Simple Digital Signage | Affichage dynamique simple | Einfaches Digital Signage |
| Interactive Digital Signage | Affichage dynamique interactif | Interaktives Digital Signage |
| iPad Application Creation | Création d'application iPad | iPad-Anwendung erstellen |

---

## Key Concepts to Get Right

### Assign vs Publish vs Schedule
- **Assign**: Bind a Project to a Player for the first time. The Project becomes the default content.
- **Publish**: Push updates to an already-assigned Player. Used after editing content in a project.
- **Schedule**: Create a time-based rotation of multiple Projects on a Player. When no scheduled Project is active, the assigned (default) Project plays.

### Alert Override Behavior
- An Alert overrides ALL content (assigned or scheduled) on the assigned Players.
- When the Alert is deactivated, content returns to its previous state (schedule or default project).

### Player Comparison
- **Kaptive Player**: Best for commercial deployments. Full feature set including screenshots.
- **Kaptive Web**: Suitable for testing and small-scale use. Some features (e.g. player screenshots) are unavailable.
- **Kaptive iOS**: For iPad-based deployments and application creation.
