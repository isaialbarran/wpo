# Technology Stack & Build System

## Core Technologies

- **Framework**: Astro v6 (Static Site Generator)
- **UI Library**: React v19 (for interactive components)
- **Styling**: Tailwind CSS v4 (utility-first CSS)
- **Language**: TypeScript v5.9
- **Package Manager**: Yarn v4.6.0
- **Node Version**: >=22.12.0

## Key Dependencies

- **Content Management**: Astro Content Collections with Zod schemas
- **Image Processing**: Sharp for optimization, @resvg/resvg-js for SVG
- **Search**: Pagefind for static site search
- **BibTeX Processing**: bibtex-parse-js for publication import
- **Icons**: Lucide React
- **Build Tools**: Vite v6.0

## Common Commands

### Development
```bash
npm run dev          # Start development server with HMR
npm run astro        # Run Astro CLI commands
```

### Build & Deploy
```bash
npm run build        # Full production build (includes BibTeX import + search index)
npm run preview      # Preview production build locally
```

### Content Management
```bash
npm run import-bibtex    # Import publications from citations.bib
npm run lint            # Run Astro type checking
```

## Build Process

1. **BibTeX Import**: Processes `citations.bib` → generates Markdown files in `src/content/`
2. **Astro Build**: Compiles static site with optimized assets
3. **Search Index**: Pagefind generates search index from built HTML

## Configuration Files

- `astro.config.mjs`: Astro configuration with React integration
- `tsconfig.json`: TypeScript configuration extending Astro strict preset
- `src/content.config.ts`: Content collection schemas with Zod validation
- `src/config.ts`: Site-wide configuration (metadata, navigation, i18n)

## Performance Optimizations

- Zero JavaScript by default (Astro Islands architecture)
- Automatic image optimization and lazy loading
- Inline critical CSS (assets <10KB)
- Compressed HTML output
- Static generation for optimal CDN caching