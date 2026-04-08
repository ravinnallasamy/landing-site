# WayTree Typography Flow Audit

## 1. Overview
This document provides a comprehensive audit of the typography system across the WayTree landing site. The project currently uses a hybrid approach: a partially implemented standardized typography system in `index.css` paired with extensive inline Tailwind classes and hardcoded values in specific pages and components.

---

## 2. Global Font System
The project defines a multi-layered font system in `tailwind.config.ts`:

| Token | Font Family | Usage |
|-------|-------------|-------|
| `sans` | **Inter** | Default sans-serif stack |
| `body` | **Inter** | Applied globally to body text |
| `heading` | **Poppins** | Intended for section headings |
| `display` | **Space Grotesk** | Applied to `h1`-`h6` via global CSS |

### Applied Fonts Location:
- **Defined**: `tailwind.config.ts:17-22`
- **Imported**: `index.css:1` (Google Fonts API)
- **Base Application**: `index.css:112-119` (Body uses `font-body`, Headings use `font-display`)

---

## 3. Current Usage Mapping

| Location | Element | Classes Used | Standard Class Mapping | Purpose |
|----------|--------|-------------|-----------------------|---------|
| **Hero** | `h1` | `headline-xl gradient-text mb-4` | `.headline-xl` | Primary Value Prop |
| **Hero** | `h2` | `headline-md text-white/90 mb-4` | `.headline-md` | Sub-headline / Hook |
| **About** | `h1` | `headline-xl text-white mb-4` | `.headline-xl` | Section Title |
| **Why Us** | `h2` | `headline-lg text-white` | `.headline-lg` | Section Headline |
| **Legal** | `h1` | `text-3xl font-bold mb-6` | **MISSING** | Page Title |
| **Legal** | `h2` | `text-xl font-semibold mb-4` | **MISSING** | Section Header |
| **Cards** | `h3` | `font-extrabold text-white text-xl`| **MISSING** | Card Title |
| **CTA** | `h2` | `headline-lg text-white mb-6` | `.headline-lg` | Conversion Title |

---

## 4. Issues Found & Inconsistencies

### A. Semantic Misalignment
- **Hook Text**: Small uppercase tags are often wrapped in `h2` or `h3` tags (e.g., `AboutSection:75`), which breaks document hierarchy.
- **Hierarchy Skips**: Some sections jump from `h1` directly to `h3` using `headline-md`, skipping the `h2` logical level.

### B. Standard System Bypass
- **Legal Pages**: `PrivacyPolicy.tsx` and `TermsAndConditions.tsx` completely bypass the `headline-xl/lg/md` system, using generic `text-3xl` and `text-xl` classes. This creates a disjointed user experience between the landing page and the app's documentation.
- **Component Specifics**: `FeatureCard` uses hardcoded arbitrary values like `text-[9px]` instead of a standardized `body-xs` or similar.

### C. Color Fragmentation
- **White Variations**: Usage of `text-white`, `text-white/90`, `text-gray-300`, `text-slate-200`, and `!text-white` makes maintenance difficult.
- **Emerald/Green Gaps**: Gradients for "gradient-text" are hardcoded with specific emerald-400/600 values instead of using semantic primary tokens consistently.

---

## 5. Hierarchy Analysis
The visual hierarchy is generally strong in the **Hero** and **CTA** sections but weakens in the **Feature** and **Legal** sections.

*   **L1 (Display):** `headline-xl` (Used for Hero and Vision - 5xl to 7xl). Clear and impactful.
*   **L2 (Section):** `headline-lg` (Used for Why Us/About - 3xl to 5xl). Mostly consistent.
*   **L3 (Sub-header):** `headline-md` (Used for small cards/subtitles - xl to 2xl).
*   **Body:** Mixed usage of `body-lg` (base/lg) and `body-md` (base).

**Gap Found:** There is no "Medium Headline" for standard document-style pages, leading to the `text-3xl` fallback in legal pages.

---

## 6. Design System Gaps
1.  **Missing "Content" Typography**: No system for long-form text (lists, blockquotes, secondary headings).
2.  **Hardcoded Overrides**: Frequent use of `!text-black` and `!font-bold` indicates the standard classes are either too restrictive or missing variants.
3.  **Responsive Inconsistency**: `FeatureCard` uses custom logic for `isMobile` font scaling rather than relying on the Tailwind `sm/md/lg` breakpoints defined in `index.css`.

---

## 7. Recommendations

### 1. Unified Typography Scale
Move the hardcoded legal page styles into the `index.css` system:
```css
.content-h1 { @apply text-3xl font-bold mb-6 text-white; }
.content-h2 { @apply text-xl font-semibold mb-4 text-white/90; }
.content-p  { @apply text-gray-300 leading-relaxed mb-4; }
```

### 2. Semantic Correction
Stop using `h2/h3` for `hook-text`. Change it to:
```tsx
<span className="hook-text">OUR VISION</span>
```
This preserves the SEO hierarchy for the actual headers.

### 3. Tokenize Gradients & Colors
Introduce typography-specific color tokens in `tailwind.config.ts`:
- `text-primary-glow`: (The emerald gradient)
- `text-secondary-dim`: (The white/90 or gray-300 variant)

### 4. Standardize Card Typography
Create a `.card-title` and `.card-description` class that handles the `isMobile` logic via standard Tailwind breakpoints instead of JS props:
```css
.card-title {
  @apply font-extrabold text-white text-[9px] md:text-xl leading-none;
}
```

### 5. Standardize Shadow/Glows
The `drop-shadow-[0_0_12px_rgba(255,255,255,1)]` used in cards should be a utility class in `index.css` (e.g., `.text-glow-sm`, `.text-glow-lg`) to reduce class string repetition.

---

## 8. Summary Performance Impact
Current performance is generally good, but the repetition of 10+ Tailwind classes on every card and heading increases the initial HTML size and makes the codebase "noisy." Consolidating into the `.headline-*` and `.body-*` classes will improve developer velocity and ensure a pixel-perfect "Premium" feel across every single page.
