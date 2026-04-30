# Narrow List Design Direction

Date: 2026-04-28  
Updated: 2026-04-29  
Source: `web-token-im-homepage-design-optimization-directions-2026-04-28.md`, `0_Project Context/imtoken-web-evaluation.html`  
Purpose: define 3 parallel homepage directions for concept generation, updated with the current V2 merged-homepage direction

## How To Use This Document

These 3 directions are parallel concept tracks.

They are not cumulative.

They should not be merged into one homepage architecture during prototype generation.

The output should be:

- 3 separate prototypes;
- each prototype should have its own homepage premise;
- each prototype should make different layout and IA choices;
- each prototype should avoid inheriting the same global nav plus sub-nav stack unless that direction explicitly requires it.

Important rule:

- shared business constraints can stay consistent across all directions;
- shared layout structure should not be forced across all directions;
- the V2 merged Spatial/List homepage with persistent collection sidebar belongs only to Direction 2 in this phase.

## Shared Constraints Across All Directions

All directions should respect these constraints:

- no seed phrase framing; account abstraction and passkey onboarding are core product assumptions;
- keep onboarding lightweight;
- do not depend on AI insight features;
- do not depend on a new personalization engine;
- prefer low-effort use of existing APIs and existing content fields;
- campaigns must be operable by marketing;
- collection cards can show richer existing information such as token count, chain, representative tokens, price, or 24h movement if already available;
- current homepage information density is too thin and should be improved;
- homepage should motivate exploration and deeper navigation.

## Direction Framing

The 3 directions below should be treated as 3 different answers to the homepage problem:

1. `Direction 1` solves the homepage as a stronger token discovery and campaign surface.
2. `Direction 2` solves the homepage as a merged Spatial/List discovery shell with a collection sidebar.
3. `Direction 3` solves the homepage as a lightweight activation and onboarding entry point.

They are related at a business level, but they should remain visually and structurally separate in prototype output.

## Direction 1: Discovery-First Homepage

### Core Intent

Make the homepage primarily about token discovery, campaign comprehension, and collection motivation.

This direction should answer:

- Why should I open this collection?
- What is featured right now?
- What useful token information can I understand before account creation?

### Core Design Moves

- richer collection cards using existing metadata and token signals;
- campaign modules with title, description, linked collection/token, CTA, and status if relevant;
- stronger collection detail as a decision layer;
- clearer scan-level explanation of why a collection matters.

### What This Direction Emphasizes

- collection understanding;
- campaign clarity;
- token motivation at scan level;
- better reasons to click and explore.

### What This Direction Does Not Need To Center

- a large onboarding-first hero;
- a `Market` / `My Holdings` tab split as the homepage frame;
- a stacked nav model with top-level tab plus mode sub-tab;
- portfolio ownership as a primary homepage message.

### Prototype Guidance

Direction 1 can use:

- one homepage discovery surface;
- one dominant browse mode;
- campaign-led modules;
- richer editorial/market cards.

Direction 1 should not read like Direction 2 with the same merged shell applied on top.

## Direction 2: Merged Spatial/List Homepage

### Core Intent

Make the homepage primarily about one unified discovery shell where Spatial View and List View are two lenses on the same collection system.

This direction should answer:

- How can Spatial and List feel like one homepage instead of two separate experiences?
- How can users switch modes without losing context?
- How can collection understanding stay visible while browsing?

### Core Design Moves

- one shared homepage shell for Spatial and List;
- compact mode switch between Spatial and List;
- persistent collection sidebar or selected panel as the core decision layer;
- campaign hub or featured collection auto-selected on entry;
- same collection object rendered in both modes;
- list mode uses the same sidebar logic instead of a separate modal/detail pattern;
- `My Holdings` can exist as a secondary tab, but the merged market shell is the core idea.

### What This Direction Emphasizes

- continuity across modes;
- collection understanding without leaving the homepage;
- Spatial as the main exploration lens;
- List as the same content in a denser scan mode;
- sidebar as the bridge between browsing and action.

### What This Direction Does Need

- Spatial and List inside one shared shell;
- a collection sidebar or selected panel that persists across modes;
- a layout that makes the sidebar a first-class element, not a temporary detail modal;
- enough room for campaign context, token rows, CTA, and account cue inside the sidebar.

### Prototype Guidance

Direction 2 should use the current V2 merged-homepage pattern from existing materials:

- 65/35 or similar split between main browsing area and collection sidebar;
- Spatial canvas in one mode;
- List grid or list rows in the other mode;
- the same selected collection panel on the side in both modes;
- campaign hub auto-selected on open;
- switching mode preserves selected collection context.

Direction 2 is the only direction that should use this merged shell plus collection sidebar pattern.

## Direction 3: Activation-First Homepage

### Core Intent

Make the homepage primarily about helping users understand how lightweight account creation is, then routing them into first action.

This direction should answer:

- What is this product?
- How easy is setup?
- Why should I create an account now?
- What happens right after account creation?

### Core Design Moves

- clear primary account CTA;
- compact AA/passkey reassurance;
- 3 capability cues: passkey account, gas abstraction, Send by Link;
- quick 15s onboarding demo;
- post-CTA flow back into meaningful action;
- one or two featured campaigns or collections as the action context.

### What This Direction Emphasizes

- activation confidence;
- reduced setup anxiety;
- first-action clarity;
- onboarding as a flow, not an education page.

### What This Direction Does Not Need To Center

- dense collection taxonomy;
- a broad market browsing framework;
- `Market` / `My Holdings` as the main homepage structure;
- equal emphasis on Spatial and List as peer homepage modes.

### Prototype Guidance

Direction 3 can use:

- a stronger first-viewport CTA block;
- a visible demo/proof moment;
- supportive browse modules beneath or beside activation;
- a shorter path from homepage to account creation.

Direction 3 should not become a merged discovery shell with persistent sidebar. Its main job is activation.

## Direction Separation Rules

To avoid overlapping prototypes, use these explicit rules:

- Direction 1 should not inherit the merged Spatial/List shell with persistent collection sidebar.
- Direction 3 should not inherit the merged Spatial/List shell with persistent collection sidebar.
- Direction 2 may use `Market` / `My Holdings` if needed, but its real differentiator is the merged Spatial/List shell and sidebar continuity.
- Direction 1 should prioritize richer campaign and collection understanding over onboarding structure.
- Direction 2 should prioritize mode continuity and selected-state understanding over hero-led activation.
- Direction 3 should prioritize onboarding clarity over broad discovery density.

## Shared Low-Effort Opportunities

Any direction may still use:

- price and 24h movement if already available;
- chain/network labels;
- token count;
- representative token names;
- campaign labels and CTA;
- source/type labels;
- passkey/no seed phrase copy;
- gas abstraction cue;
- Send by Link cue;
- lightweight trust/status cues.

These are shared content opportunities, not proof that the directions should share the same layout.

## Working Summary

The next prototype phase should generate 3 parallel homepage directions, not 1 combined IA split into 3 visual variations.

- Direction 1 is discovery-first.
- Direction 2 is the merged Spatial/List homepage with collection sidebar.
- Direction 3 is activation-first.

Only Direction 2 should carry the merged Spatial/List shell plus persistent collection sidebar pattern.
