# Website QA checklist

## Visual
- [ ] No text overflow at 1440 / 1024 / 768 / 390.
- [ ] No accidental single-word orphan headings.
- [ ] Elena portrait never stretched; focal point remains natural.
- [ ] Card heights are content-safe, not fixed where copy can grow.
- [ ] Brand palette only; no accidental Tailwind blue/indigo.
- [ ] Brand icons used where applicable.
- [ ] No generic AI visual patterns.

## Interaction
- [ ] Header anchors work.
- [ ] Mobile menu works with keyboard.
- [ ] FAQ opens/closes and has correct aria states.
- [ ] All buttons/links have visible hover/focus.
- [ ] Sticky mobile CTA does not cover page content.

## Content
- [ ] No invented prices, contacts, reviews or credentials.
- [ ] No medical/psychotherapist positioning.
- [ ] Gestalt wording is understandable to a non-specialist.
- [ ] CTA language is calm and non-manipulative.

## Technical
- [ ] typecheck passes.
- [ ] lint passes.
- [ ] production build passes.
- [ ] no console errors.
- [ ] no horizontal overflow.
- [ ] prefers-reduced-motion respected.
- [ ] images optimized.
