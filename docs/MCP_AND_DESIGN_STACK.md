# MCP / design tools — recommended stack

## 1. 21st MCP — best first addition for visual quality
Use as a searchable catalogue of human-made React UI and marketing blocks. Ask for 3–4 options before installing anything. Good for heroes, testimonials, tasteful interactions and editorial section patterns. Do not install an entire template and do not accept foreign colours/spacing unchanged.

## 2. shadcn MCP — reliable primitives
Good for accordion, dialog, form, button, sheet/menu and other structural UI. Treat shadcn as primitives, not the site's visual identity.

## 3. Playwright MCP — mandatory QA
Use after implementation to open the real site, click through it and verify responsive behaviour. This is more valuable than generating one more decorative component.

## 4. Figma MCP — optional
Use if there is a real Figma source or if you decide to create one first. It can supply structured variables/components/layout to Cursor. Do not connect it merely to generate a random design direction.

## 5. Aceternity registry via shadcn MCP — optional and selective
Useful for a few sophisticated interaction patterns. Avoid flashy 3D, particles and overly animated heroes for this brand. Search the registry only when a section needs a specific interaction.

## Cursor-native tools
- Project Rules: already included in `.cursor/rules/`.
- Agent Skills: already included in `.cursor/skills/`.
- Use `/review` after the page is functionally complete.
- Keep `MASTER_PROMPT_FOR_CURSOR.md` as the first task context.
