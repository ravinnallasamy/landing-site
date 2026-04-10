# Font System Documentation

This document provides a comprehensive overview of all fonts used in the WayTree landing site, their usage patterns, and where they are applied.

## Font Imports

The project uses two Google Fonts imported from Google Fonts API:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');
```

### Available Fonts

| Font Name | Weights | Purpose |
|-----------|---------|---------|
| **Inter** | 400, 500, 600, 700 | Body text, UI elements, paragraphs |
| **Space Grotesk** | 500, 600, 700 | Display headings, titles, hero text |

---

## Font Family Configuration (Tailwind)

The fonts are configured in `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ["Inter", "sans-serif"],      // Default sans-serif font
  display: ["Space Grotesk", "sans-serif"],  // Display/headings font
  body: ["Inter", "sans-serif"],      // Body text font
}
```

### Tailwind Font Classes

| Tailwind Class | Actual Font | Usage |
|----------------|-------------|-------|
| `font-sans` | Inter | Default text, UI components |
| `font-display` | Space Grotesk | Headings, titles, display text |
| `font-body` | Inter | Body text, paragraphs, content |

---

## Typography System Classes

### Headings

#### `.headline-xl`
- **Font:** Space Grotesk (`font-display`)
- **Weight:** Bold (700)
- **Size:** 4xl (mobile) → 5xl (sm) → 6xl (md) → 7xl (lg)
- **Line Height:** 1.1
- **Tracking:** Tight
- **Usage:** Main hero titles, major section headings
- **Example:** "AI-Powered Networking Memory"

#### `.headline-lg`
- **Font:** Space Grotesk (`font-display`)
- **Weight:** Bold (700)
- **Size:** 3xl (mobile) → 4xl (md) → 5xl (lg)
- **Line Height:** Tight
- **Tracking:** Tight
- **Usage:** Section headings, page titles
- **Example:** "Features", "About Us"

#### `.headline-md`
- **Font:** Space Grotesk (`font-display`)
- **Weight:** Semibold (600)
- **Size:** xl (mobile) → 2xl (md) → 3xl (lg)
- **Line Height:** Snug
- **Tracking:** Tight
- **Usage:** Subsection headings, card titles
- **Example:** Feature card titles, step headings

#### `.hook-text`
- **Font:** Space Grotesk (`font-display`)
- **Weight:** Bold (700)
- **Size:** xs (mobile) → sm (md)
- **Case:** Uppercase
- **Tracking:** 0.25em (wide letter spacing)
- **Color:** Accent (emerald)
- **Usage:** Section tags, labels, small decorative text
- **Example:** "PRODUCT", "FEATURE", "STEP 1"

### Body Text

#### `.body-lg`
- **Font:** Inter (`font-body`)
- **Weight:** Medium (500)
- **Size:** base (mobile) → lg (md) → xl (lg)
- **Line Height:** Relaxed
- **Color:** Muted foreground
- **Usage:** Large descriptions, featured content
- **Example:** Feature descriptions, hero subtitles

#### `.body-md`
- **Font:** Inter (`font-body`)
- **Weight:** Regular (400)
- **Size:** sm (mobile) → base (md)
- **Line Height:** Relaxed
- **Color:** Muted foreground
- **Usage:** Standard body text, descriptions
- **Example:** Card descriptions, paragraph content

#### `.body-sm`
- **Font:** Inter (`font-body`)
- **Weight:** Regular (400)
- **Size:** xs (mobile) → sm (md)
- **Line Height:** Relaxed
- **Color:** Muted foreground (80% opacity)
- **Usage:** Small text, captions, metadata
- **Example:** Footer links, small labels

### Content Typography (Legal/Documentation)

#### `.content-h1`
- **Font:** Space Grotesk (`font-display`)
- **Weight:** Bold (700)
- **Size:** 3xl (mobile) → 4xl (md)
- **Tracking:** Tight
- **Usage:** Legal page main titles
- **Example:** "Privacy Policy", "Terms and Conditions"

#### `.content-h2`
- **Font:** Space Grotesk (`font-display`)
- **Weight:** Semibold (600)
- **Size:** xl (mobile) → 2xl (md)
- **Tracking:** Tight
- **Usage:** Legal section headings
- **Example:** "1. Information Collection"

#### `.content-h3`
- **Font:** Space Grotesk (`font-display`)
- **Weight:** Medium (500)
- **Size:** lg (mobile) → xl (md)
- **Tracking:** Tight
- **Usage:** Legal subsection headings
- **Example:** "1.1 Personal Information"

#### `.content-p`
- **Font:** Inter (`font-body`)
- **Weight:** Regular (400)
- **Size:** base
- **Line Height:** 1.8
- **Alignment:** Justified (mobile/tablet) → Left (desktop)
- **Usage:** Legal body text, policy content
- **Example:** Privacy policy paragraphs

#### `.content-list`
- **Font:** Inter (`font-body`)
- **Weight:** Regular (400)
- **Size:** base
- **Style:** Disc list
- **Usage:** Legal document lists
- **Example:** Bullet points in policies

### Card Typography

#### `.card-title`
- **Font:** Space Grotesk (`font-display`)
- **Weight:** Bold (700)
- **Size:** 9px (mobile) → 10px (sm) → sm (md) → xl (lg)
- **Line Height:** None
- **Tracking:** Wide
- **Color:** White with text glow
- **Usage:** Feature card titles in neural network
- **Example:** "AI Chat", "Events"

#### `.card-description`
- **Font:** Inter (`font-body`)
- **Weight:** Semibold (600)
- **Size:** 7px (mobile) → 8px (sm) → xs (md)
- **Line Height:** None
- **Color:** White (90% opacity)
- **Usage:** Feature card descriptions in neural network
- **Example:** "Smart scheduling"

---

## Component-Specific Font Usage

### Hero Section
- **Main Title:** `.headline-xl` (Space Grotesk, Bold)
- **Subtitle:** `.body-lg` (Inter, Medium)
- **Feature Cards:** `.card-title` and `.card-description`

### Section Headings (`SectionHeading` component)
- **Tag:** `.hook-text` (Space Grotesk, Bold, Uppercase)
- **Title:** `.headline-lg` (Space Grotesk, Bold)
- **Description:** `.body-lg` (Inter, Medium)

### Feature Cards (`FeatureCard` component)
- **Title:** `.card-title` (Space Grotesk, Bold)
- **Description:** `.card-description` (Inter, Semibold)

### Buttons
- **Font:** Inter (font-sans)
- **Weight:** Semibold (600)
- **Size:** sm, md, lg variants

### Navbar
- **Logo:** Space Grotesk, Bold
- **Links:** Inter, Medium
- **Mobile Menu:** Inter, Medium

### Footer
- **Logo:** Space Grotesk, Bold, 2xl
- **Section Headings:** Space Grotesk, Bold, uppercase, tracking-widest
- **Links:** Inter, Medium

### Contact Form
- **Labels:** Inter, Bold, uppercase, tracking-widest
- **Inputs:** Inter, Regular
- **Placeholders:** Inter, Regular (20% opacity)

### Team Cards
- **Name:** `.headline-lg` (Space Grotesk, Bold)
- **Role:** Inter, Bold
- **Description:** Inter, Medium

### How It Works
- **Step Numbers:** Space Grotesk, Bold
- **Step Titles:** `.headline-md` (Space Grotesk, Semibold)
- **Step Descriptions:** `.body-md` (Inter, Regular)

---

## Font Weight Reference

| Weight | Inter | Space Grotesk | Usage |
|--------|-------|---------------|-------|
| 400 | ✅ | - | Regular body text |
| 500 | ✅ | ✅ | Medium body, display light |
| 600 | ✅ | ✅ | Semibold headings, emphasized text |
| 700 | ✅ | ✅ | Bold headings, titles |

---

## Responsive Font Scaling

All typography classes follow a consistent responsive pattern:

```
mobile (default) → sm (640px) → md (768px) → lg (1024px) → xl (1280px)
```

Example for `.headline-xl`:
- Mobile: `text-4xl` (36px)
- Small: `text-5xl` (48px)
- Medium: `text-6xl` (60px)
- Large: `text-7xl` (72px)

---

## CSS Custom Properties

Fonts interact with these CSS variables for color theming:
- `--foreground`: Main text color
- `--foreground/90`: 90% opacity
- `--foreground/80`: 80% opacity
- `--muted-foreground`: Secondary text color
- `--accent`: Accent/emerald color

---

## Notes

1. **Poppins** is imported but not currently used in the CSS classes. It can be used for future design variations.
2. **anter** is the primary body font for all content and UI elements.
2. All heading classes use `tracking-tight` for better visual density.
3. Body text uses `leading-relaxed` (1.625) for better readability.
4. Legal content uses `leading-[1.8]` for maximum readability in documentation.
5 in documentation.
6. **Centralized Typography System**: All typography is controlled globally through `index.css` and `tailwind.config.ts` - changing fonts in one place updates the entire project automatically.
7. **No Inline Font Usage**: All components use predefined global typography classes (headline-xl, headline-lg,headle-md, hook-text, body-lg, body-md,boy-sm, content-h1, cntent-h2, ontent-p, card-title, card-description).
8. **Semantic Color System**: All text ses seantic color variables (text-foreground, text-muted-foreground, txt-accent) instead of hardcoded colors.
9. **Consistent Fo Weights**: Hedings use 700/600 weighs, body text uses 400/500 weghts for cnsistecy across the project