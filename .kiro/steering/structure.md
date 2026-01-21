# Project Structure & Organization

## Root Directory Structure

```
├── .astro/                 # Astro build artifacts and type definitions
├── .kiro/                  # Kiro configuration and steering files
├── public/                 # Static assets (served as-is)
├── scripts/                # Build and utility scripts
├── src/                    # Source code and content
└── citations.bib           # BibTeX file for publication import
```

## Source Code Organization (`src/`)

### Core Application
- `src/config.ts` - Site configuration (metadata, navigation, hero content)
- `src/content.config.ts` - Content collection schemas and validation

### Content Management (`src/content/`)
All content is managed through Astro Content Collections:

- `publications/` - Research papers and articles (auto-generated from BibTeX)
- `books/` - Academic books and textbooks (auto-generated from BibTeX)
- `team/` - Lab members and collaborators
- `research/` - Research areas and projects
- `news/` - Lab news and announcements
- `activities/` - Events, workshops, conferences
- `patents/` - Invention patents and IP
- `softwares/` - Software copyrights and tools
- `honors/` - Awards and recognitions
- `services/` - Lab services or offerings

### UI Components (`src/components/`)
- `Header.astro` - Site navigation and branding
- `TeamCard.astro` - Team member display component
- `PublicationItem.astro` - Publication list item
- `BookItem.astro` - Book display component
- `HonorCard.astro` - Award/honor display

### Pages (`src/pages/`)
- `index.astro` - Homepage with hero section
- `research/` - Research area pages (dynamic routing)
- `team/` - Team member pages (dynamic routing)
- `activities/` - Activity detail pages
- `services/` - Service detail pages
- `achievements.astro` - Publications, patents, software showcase
- `search.astro` - Search interface

### Internationalization (`src/i18n/`)
- `constants.ts` - Language configuration
- `ui.ts` - UI text translations
- `utils.ts` - i18n utility functions

### Assets (`src/assets/`)
Store all images here for automatic optimization:
- Team photos (prefer 1:1 aspect ratio)
- Publication covers
- Research project images
- Activity photos

## Content File Conventions

### Frontmatter Standards
All content files use YAML frontmatter with strict Zod schemas:

```markdown
---
title: "Required title"
date: 2024-01-20        # ISO date format
authors: ["Name One", "Name Two"]  # Array format
cover: "../../assets/image.jpg"    # Relative path from content file
---

Content body in Markdown...
```

### File Naming
- Use kebab-case for filenames
- Include year prefix for dated content: `2024-paper-title.md`
- Auto-generated files follow: `{year}-{firstAuthor}-{titleSlug}.md`

## Asset Management

### Image Optimization
- **Preferred**: Import images in `src/assets/` for automatic optimization
- **Avoid**: Large images in `public/` (no optimization)
- **Formats**: WebP preferred, optimized JPG acceptable

### BibTeX Integration
- Place `citations.bib` in project root
- Run `npm run import-bibtex` to generate content files
- System auto-classifies @book vs @article entries
- Supports cover images, PDF links, code repositories, awards

## Configuration Hierarchy

1. **Site Config** (`src/config.ts`) - Global settings, navigation, hero content
2. **Content Schemas** (`src/content.config.ts`) - Data validation and structure
3. **Astro Config** (`astro.config.mjs`) - Build settings and integrations
4. **i18n Config** (`src/i18n/`) - Language and localization settings