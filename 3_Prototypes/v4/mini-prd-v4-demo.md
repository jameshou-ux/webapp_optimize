# imToken Web V4 Demo PRD

Date: 2026-05-09  
Owner: Product Design / Prototype  
Status: Draft for review  
Scope: Web default view only  
Prototype location: `3_Prototypes/v4/`

## 1. Product Intent

This V3 demo presents imToken Web as a lightweight token portal where users can explore tokens and collections from the browser before deciding whether to create or sign into an account.

The experience should support the "Perfect Token Journey": a user with only a browser and internet connection can discover token opportunities, inspect collection details, and enter deeper token pages without wallet-first friction.

This version combines a dynamic home/activation area on the left with a mixed Spatial/List exploration area on the right.

## 2. Problem Statement

Previous directions separated discovery, spatial exploration, and activation into distinct prototype tracks. For this V3 demo, the product needs a more integrated homepage concept:

- users should understand the product promise immediately;
- anonymous users should be able to explore without signing in;
- account creation should be prompted contextually, not forced through the global nav;
- signed-in users should see useful next-step cards instead of generic onboarding CTAs;
- Spatial and List exploration should remain available, but as a right-side exploration module rather than the whole page.
- collection selection should reuse the left side as the detail surface, so users can inspect a collection without leaving the homepage context.

## 3. Goals

- Establish a clear web homepage layout for V3.
- Keep the global nav simple and product-like.
- Make the left side dynamic based on sign-in state and selected collection state.
- Keep account creation/sign-in CTAs out of the global nav.
- Let anonymous and signed-in users explore collections on the right.
- Support Spatial/List switching inside the right exploration module.
- Use the left dynamic card rail for campaigns, recommended collections, and token action recommendations.

## 4. Non-Goals

- Pad and mobile layouts are out of scope for this PRD and will be defined later.
- Token detail pages are out of scope; clicking into a token main page should keep the existing behavior.
- Production data integration is out of scope.
- Real account creation, passkey, claim, send, or transaction execution is out of scope.
- This PRD does not define a full portfolio dashboard.

## 5. Target Users

### Anonymous Visitor

Someone who lands on imToken Web and wants to understand what can be explored before creating an account.

Primary needs:

- understand what imToken Web is;
- browse collections without signing in;
- view collection details;
- create an account or sign in only when ready.

### Signed-In User

Someone who already has an imToken Web account and expects the homepage to help them continue useful token actions.

Primary needs:

- resume exploration quickly;
- see relevant campaigns or promotions;
- discover recommended collections;
- receive prompts for token actions such as Send by Link.

## 6. Web Default Layout

The web default view has three major zones:

1. Global nav bar
2. Left dynamic section
3. Right Spatial/List exploration module

The page should feel like one integrated token portal, not a marketing landing page and not a conventional wallet dashboard.

The left section has two major states:

1. Home state: title, subtitle, and account or recommendation content
2. Collection detail state: selected collection information and token list

## 7. Global Nav Requirements

### Layout

- The global nav bar sits at the top of the page.
- The imToken logo is placed on the far left.
- The right side contains:
  - `Explore` tab
  - `My Holdings` tab
  - user profile icon
  - settings icon

### Behavior

- `Explore` and `My Holdings` remain the primary top-level product tabs.
- Create account and sign-in CTAs must not appear in the global nav.
- User profile and settings are icon-based controls.
- The nav should stay visually quiet so the main homepage content carries the product story.

## 8. Left Dynamic Section

The left section sits below the global nav and owns the product message, user-state-dependent actions, and selected collection detail.

When no collection is selected, the left section shows the home state. When a user clicks any collection from the right-side Spatial or List view, the left section changes into the collection detail state.

### Shared Content

Both anonymous and signed-in states should include:

- page title: `Home of Tokens`
- subtitle that explains browser-based token access
- no gradient color treatment on the title
- left-aligned content

The title should be visually strong but clean. It should not rely on gradient text for impact.

## 9. Anonymous State

When the user is not signed in, the left section should show:

- `Home of Tokens` title
- product subtitle
- create account / sign in CTA bundle below the subtitle

### CTA Requirements

- CTAs are placed in the left section, not the global nav.
- `Create account` should be the primary action.
- `Sign in` should be the secondary action.
- The CTA bundle should make account entry feel optional and contextual.
- The right-side exploration module remains fully visible and usable without signing in.

### Product Rationale

Anonymous users should not be blocked from exploring. The homepage should first prove value through browsing and collection inspection, then offer account creation when the user is ready.

## 10. Signed-In State

When the user is signed in, the left section should show:

- `Home of Tokens` title
- product subtitle
- a dynamic horizontal card container below the subtitle

The create account / sign in CTA bundle should be removed in this state.

## 11. Dynamic Card Rail

The signed-in state includes a horizontally swippable card rail.

### Card Layout

Each card should share the same base layout:

- banner-style horizontal card
- core text as the main content
- arrow indicator to imply clickability
- optional icon indicator when useful
- consistent spacing, radius, and hierarchy across card types

The cards should feel like actionable prompts, not static announcements.

### Card Types

The card rail should support three content categories:

1. Promo or campaign
2. Recommended collections
3. Token action recommendations, such as Send by Link

### Rail Behavior

- Cards are horizontally swippable.
- The rail should include gradient/fade/blur treatment at the edge.
- The fade should make the rail feel naturally connected to the right-side collection exploration area.
- The rail should support multiple cards without making the left section feel crowded.

## 12. Collection Detail State

When a user clicks a collection in Spatial view or List view, the left section should replace the home-state content with the selected collection detail.

### Trigger

- Triggered by clicking any collection item in the right-side Spatial view.
- Triggered by clicking any collection row or card in the right-side List view.
- The behavior should be consistent across both exploration modes.

### Required Content

The collection detail state should include:

- collection title
- collection subtitle or short description
- token list
- action CTAs

### Token List Requirements

Each token row should include:

- token icon
- token name
- token symbol if useful
- price
- 24h movement
- optional chain/network indicator if available

The token list should be scannable and should help the user decide whether to go deeper into the token main page.

### CTA Requirements

The collection detail state should include actions for:

- Share
- Copy to create
- Modify

CTA treatment should make the primary next action clear while keeping secondary actions available. If the exact permission model is not defined, the prototype may show all three actions as demo controls.

### Navigation Behavior

- The right-side collection remains selected while details are shown on the left.
- Users can click another collection to update the left detail state.
- Users should have a clear way to return from collection detail to the default home state.
- Clicking a token inside the token list may route to the existing token main page behavior.
- Token main page behavior remains out of scope for this PRD.

## 13. Right Spatial/List Exploration Module

The right side of the web default view contains the exploration module.

### Default State

- The module defaults to Spatial view.
- Users can explore this module without signing in.
- Users can click all collections to view collection details in the left section.
- From collection details, users can click deeper into the token main page.
- Token main page behavior stays the same and is not included in this PRD scope.

### Spatial/List Toggle

- The Spatial/List toggle sits at the top right of the right-side module.
- The toggle should use icons instead of text to save space.
- Spatial is the default selected mode.
- List mode should be available from the same module.
- Switching modes should preserve the user's exploration context where possible.

### Collection Behavior

- Collection items should be clickable in both Spatial and List modes.
- Clicking a collection updates the left section into the collection detail state.
- Collection details should provide enough context to decide whether to go deeper.
- The interaction should work for anonymous users and signed-in users.

## 14. Interaction Requirements

- Hover and click states should be visible for nav tabs, icons, CTAs, cards, toggle controls, and collection items.
- Spatial/List mode switching should feel lightweight and local to the right-side module.
- Left-side dynamic content should not cause layout shifts that disrupt the exploration module.
- Switching the left section from home state to collection detail state should feel intentional and preserve right-side selection context.
- Horizontal card swiping should feel smooth and should communicate that more content exists off-canvas.
- The page should avoid overlapping text, clipped controls, or crowded card content in the default web viewport.

## 15. Content Requirements

### Required Copy Areas

- Page title: `Home of Tokens`
- Subtitle explaining browser-based token access
- Anonymous CTA labels
- Signed-in card copy
- Collection names
- Collection metadata
- Collection title and subtitle in detail state
- Token row labels, prices, and 24h movement
- Collection detail CTA labels: Share, Copy to create, Modify
- Campaign/promo card content
- Recommended collection card content
- Token action recommendation copy

### Copy Direction

Copy should position imToken Web as:

- a token portal;
- a browser-based access layer;
- a place to explore before account creation;
- a lightweight way to continue token actions.

Copy should avoid positioning imToken Web as:

- just another wallet;
- a key manager;
- a static marketing site;
- a portfolio-only dashboard.

## 16. Acceptance Criteria

- The web default view has a clear top global nav, left dynamic section, and right exploration module.
- The imToken logo appears on the far left of the global nav.
- `Explore`, `My Holdings`, profile icon, and settings icon appear on the right side of the global nav.
- Create account and sign-in CTAs do not appear in the global nav.
- Anonymous users see create account / sign in CTAs in the left section.
- Signed-in users see the dynamic card rail instead of account CTAs.
- The right-side module defaults to Spatial view.
- Spatial/List toggle uses icons, not text labels.
- Users can explore collections without signing in.
- Clicking a collection in Spatial view updates the left section to collection detail.
- Clicking a collection in List view updates the left section to collection detail.
- Collection detail includes collection title, subtitle, token list, and Share / Copy to create / Modify CTAs.
- Token rows include icon, name, pricing, and 24h movement.
- Users can click deeper from collection detail into token pages.
- The `Home of Tokens` title uses no gradient color.
- Pad and mobile behavior are not required for this PRD version.

## 17. Open Questions

- What exact subtitle should be used under `Home of Tokens`?
- What are the first three signed-in dynamic cards for the demo?
- Should `My Holdings` show a signed-in-only state, or remain visible but gated for anonymous users?
- What is the exact layout hierarchy for the left-side collection detail state?
- Should Share, Copy to create, and Modify all be visible for anonymous users, or should any be gated?
- How many cards should be visible in the signed-in card rail at the default web viewport?
- Which icon set should be used for Spatial/List, profile, settings, and card indicators?
