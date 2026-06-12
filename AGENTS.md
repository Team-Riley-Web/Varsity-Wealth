# Starter Project Instructions

## Goal

Build fast, polished client websites. Start with client-specific information
before adding complexity.

## Stack

- Use Astro `.astro` components and layouts with slots.
- Use static output unless the client explicitly requires server rendering.
- Use Tailwind CSS utilities. Keep theme extensions in `tailwind.config.cjs`.
- Use Alpine.js for client-side behavior.
- Register Alpine plugins in `src/alpine.ts`.
- Use `x-intersect` for scroll-triggered reveals.
- Use Lucide Astro for interface icons.
- Use Netlify Forms for static contact forms when required.

## Images

- Store production images in `src/assets/images/`.
- Use Astro's `Image` component from `astro:assets`.
- Include descriptive alt text.
- Provide responsive widths and sizes where the layout requires them.
- Use `priority` for above-the-fold hero images.
- Prefer high-quality client photography. Use Unsplash or Pexels only as a
  temporary source when client assets are unavailable.

## Design

- Establish hierarchy with weight, spacing, and contrast before adding color.
- Use softer ink colors for secondary content instead of pure black.
- Keep paragraph lines readable, generally 45-75 characters.
- Prefer spacing, subtle background changes, and layered shadows over borders.
- Use the brand palette deliberately. Do not decorate every element.
- Replace generic bullets with consistent icons where it improves scanning.
- Keep the page feature-first: communicate the client's value before adding
  ornamental sections.

## Engineering

1. Do not assume missing client details. Mark placeholders clearly.
2. Use the minimum code needed for the requested site.
3. Touch only files needed for the current client.
4. Run `npm run check` and `npm run build` before handoff.
