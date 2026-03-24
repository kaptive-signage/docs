# Kaptive Docs — Copilot Instructions

## Documentation Rules

Before writing or editing ANY documentation content (`.mdx`, `.md` files in `src/content/docs/`), you MUST read `STYLE_GUIDE.md` at the root of this repository. It contains:

- **Mandatory terminology** — exact product names, feature names, and UI labels. Using wrong terms (e.g. "web player" instead of "Kaptive Web") is not acceptable.
- **Writing style rules** — voice, tone, heading levels, formatting.
- **Hardware terminology** — exact capitalization for technical terms.
- **Localization references** — established FR/DE translations for sidebar labels.
- **Key concept definitions** — the difference between Assign, Publish, and Schedule; Alert override behavior; Player comparison.

Never deviate from the terminology in the style guide. If a term is not in the guide, flag it and ask before inventing one.

## Project Structure

- Astro + Starlight documentation site
- Content lives in `src/content/docs/` (English at root, `fr/` and `de/` for translations)
- Sidebar is manually configured in `astro.config.mjs`
- i18n files are in `src/content/i18n/`
- Custom components override Starlight defaults in `src/components/`
- Heading levels: `##` for sections (TOC entries), `###` for subsections. Never use `#` in content body.
