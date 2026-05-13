# imToken Web V5 Unsigned Dashboard PRD

Date: 2026-05-12
Owner: Product Design / Prototype
Status: Draft for iteration
Scope: V5 unsigned dashboard, web default view
Reference: `3_Prototypes/v4/combined.html`

## 1. Product Intent

V5 shifts the prototype direction from the V4 spatial exploration concept into a more traditional dashboard for unsigned users.

The dashboard should still serve the imToken Web product goal: a browser plus an internet connection should make token access possible from anywhere. The unsigned user should be able to discover tokens, understand why tokens are grouped into collections, and browse the broader collection universe before signing in.

This version is not a wallet portfolio dashboard. It is an unsigned token discovery dashboard that makes token and collection access feel immediate, structured, and useful without account setup.

## 2. Problem Statement

Unsigned users need a clearer dashboard entry point before they create an account or sign in. V4 proves that anonymous exploration is possible, but its spatial-first layout is less conventional and may require more explanation. V5 should provide a familiar, scannable dashboard structure that helps unsigned users answer three questions quickly:

- What tokens are currently interesting?
- What collections explain or organize those tokens?
- What else can I browse from here?

The page should make collections feel like the primary organizing layer for token discovery, while still allowing individual tokens to be the entry point.

## 3. Goals

- Create a traditional dashboard layout for unsigned users.
- Preserve the consistent V4 global navigation.
- Make trending tokens visible at the top of the page.
- Show that one token can belong to multiple collections.
- Help users discover recommended topics through horizontally scrollable cards.
- Provide a full vertical collection list below the dashboard cards.
- Define token click-through as the entry point to token detail pages, while leaving token detail page design out of scope.
- Define collection click-through as a wide sliding right panel with collection detail and token list content.
- Reuse the V4 list-view behavior and collection data structure where practical.
- Keep exploration available without requiring sign-in.

## 4. Success Metrics

Prototype success should be evaluated through product and usability signals:

- Users can identify the page as a token discovery dashboard within 5 seconds.
- Users understand that tokens can belong to multiple collections.
- Users can find the full collection list without relying on search.
- Users can open or inspect collection details from both top cards and the full list.
- The layout remains readable at common desktop widths without clipped text or overlapping controls.

For production later, candidate metrics include:

- Collection detail click-through rate from trending token cards.
- Collection detail click-through rate from interested-in cards.
- Scroll depth to full collection list.
- Filter usage rate in the all-collections section.
- Sign-in or create-account conversion after collection browsing.

## 5. Non-Goals

- Signed-in dashboard behavior is out of scope for this PRD.
- Portfolio, balances, transaction history, and wallet-management features are out of scope.
- Real token pricing integration is out of scope for the prototype.
- Real collection filtering logic can be mocked if needed.
- Mobile-specific layout is not fully defined in this PRD, though the prototype should not break on narrower viewports.
- Token detail page design is out of scope. Token clicks should route to or imply token detail entry, but the destination screen does not need to be shown in V5.

## 6. Target User

### Unsigned Visitor

Someone lands on imToken Web from a link, search result, campaign, or direct navigation. They may not have an imToken account and may not be ready to create one.

Primary needs:

- understand what token opportunities are available now;
- browse token collections without setup;
- evaluate token categories through clear grouping;
- decide whether a collection or token is worth opening;
- sign in or create an account only after seeing value.

## 7. Information Architecture

The V5 unsigned dashboard has five vertical zones:

1. Global navigation
2. Home action and promo split row
3. Trending token and collection section
4. You might be interested in section
5. All collections section

The page scrolls vertically. The top content row is a 50/50 split. The next two content sections contain horizontal rails. The final section is a vertical list.

## 8. Global Navigation

### Requirement

Use the same consistent global navigation from the V4 combined prototype.

### Assumption

For this PRD, "same global navigation from V4" means the current unsigned navigation in `3_Prototypes/v4/combined.html`:

- imToken logo on the far left;
- search icon button on the right;
- settings icon button on the right;
- `Sign in` secondary action;
- `Create account` primary action.

### Behavior

- Navigation remains fixed at the top or visually persistent in the same manner as V4.
- Search opens or implies token/collection search.
- Settings opens or implies preferences.
- `Sign in` and `Create account` use the existing V4 passkey-demo behavior if the prototype reuses that interaction.
- The nav should not dominate the dashboard. Main content should carry the product value.

## 9. Page Layout

### Desktop Structure

The dashboard content sits below the global nav in a vertically scrolling page.

Recommended structure:

- A constrained page container with generous horizontal margins.
- Section spacing that makes the page feel like a product dashboard, not a marketing landing page.
- A top 50/50 split row should introduce the product promise and featured promotion before the trending token rail.
- Horizontal rails should show part of the next card at the right edge to communicate scrollability.
- Cards should use consistent radius, border, background, hover, and active states.

### Visual Direction

- Quiet, structured, and information-first.
- Token icons and token stacks provide the primary visual interest.
- Avoid oversized hero treatment.
- Avoid wallet-centric language such as balances, assets under management, recovery phrase, or portfolio unless a later signed-in state requires it.

## 10. Section 1: Home Action and Promo Split Row

### Purpose

This row is the dashboard entry point. It gives unsigned users a clear product identity, three immediate token actions, and one visual promotion before they reach the trending token rail.

### Layout

- The row sits directly below the global navigation and above `Trending token and collection`.
- The row contains two cards in a 50/50 split on desktop.
- Both cards should share the same height so the row reads as one dashboard band.
- The left card is the product/action card.
- The right card is the promo card.

### Left Card: Home of Tokens

The left card contains:

- main title: `Home of Tokens`;
- slogan below the title;
- three key CTA buttons below the slogan.

CTA labels:

1. `Send token`
2. `Send with link`
3. `Receive and Scan`

CTA behavior:

- `Send token` enters or implies the standard token-send flow.
- `Send with link` enters or implies the link-based send flow.
- `Receive and Scan` enters or implies a receive/scan flow.
- If these flows are not implemented in V5, the prototype can show lightweight click feedback or placeholder states.

### Right Card: Promo

The right card is an image-led promo card.

Required content:

- filled image treatment that covers the card surface;
- promo title placed on top of the image;
- title typography consistent with the `Home of Tokens` title treatment;
- arrow affordance in the bottom-right corner.

Interaction:

- The promo card is clickable as one card.
- The bottom-right arrow reinforces clickability but should not be the only active target.
- Hover/focus state should preserve image legibility and keep the title readable.

### Product Rationale

This row balances utility and discovery. The left card tells users what imToken Web enables immediately; the right card gives the dashboard room for campaign, education, or editorial promotion without turning the page into a marketing landing page.

## 11. Section 2: Trending Token and Collection

### Purpose

This is the top dashboard module. It introduces the most immediately relevant tokens and shows which collections each token belongs to.

### Section Header

Title: `Trending token and collection`

Optional supporting copy can be added later if needed, but the current prototype should prioritize the card rail over explanatory text.

### Layout

- Horizontal scroll rail.
- Three cards in the initial prototype.
- At desktop width, show two to three cards depending on available space, with the next card peeking if possible.
- Each card uses the same layout pattern.

### Card Anatomy

Each trending token card contains:

- Left area:
  - large token icon;
  - token name below the icon;
  - 24h price change below the token name.
- Right area:
  - two small rectangular collection sections;
  - each rectangle represents one collection the token belongs to;
  - each collection rectangle includes collection name, short description, and a right-arrow affordance.

### Content Requirements

Each token card should include:

- token icon;
- token name;
- token symbol if space allows;
- 24h price movement;
- positive, neutral, or negative movement styling;
- two related collections.

Each collection rectangle should include:

- collection name;
- one-line or two-line collection description;
- right arrow icon;
- clickable/tappable state.

### Interaction

- Clicking the token area or token card enters the token detail page flow.
- Each collection rectangle must be independently clickable.
- Clicking a collection rectangle opens the V5 collection detail sliding panel.
- Horizontal scroll should support trackpad, mouse wheel where appropriate, drag/swipe, and keyboard focus.
- Hover should clarify clickable collection rectangles without making the card feel noisy.

### Product Rationale

This module teaches the collection model through the token a user already recognizes. The user does not need to understand the full taxonomy first; they see a trending token, then learn which collections give it context.

## 12. Section 3: You Might Be Interested In

### Purpose

This section recommends broader discovery paths for unsigned users. It should feel like curated exploration, not personalized portfolio advice.

### Section Header

Title: `You might be interested in`

### Layout

- Horizontal scroll rail.
- Three cards in the initial prototype.
- Cards share a consistent base layout with the trending section but use topic-oriented content.

### Card Anatomy

Each recommendation card includes:

- top title;
- short description;
- two small collection groups below.

Assumption: the two collection groups are inside each recommendation card. If the intended design is two groups below the whole rail, this should be revised in the next iteration.

### Collection Group Anatomy

Each collection group represents one collection and includes:

- collection title;
- short collection description;
- token count;
- stacked token icons, recommended count: five;
- right-arrow or row affordance if the group is clickable.

### Content Requirements

Each recommendation card should include:

- one discovery topic title;
- one short description that explains why the topic matters;
- two collection groups.

Each collection group should include:

- collection name;
- collection description;
- number of tokens;
- five stacked token icons when available;
- click target to inspect that collection.

### Interaction

- The recommendation card can act as a container, but the collection groups should be the primary click targets.
- Clicking a collection group opens the V5 collection detail sliding panel.
- Token icon stacks are decorative unless a later interaction defines token-level entry.
- Horizontal rail behavior should match the trending section.

### Product Rationale

This section gives unsigned users curated paths after they have seen individual trending tokens. It bridges token-level interest to collection-level browsing.

## 13. Section 4: All Collections

### Purpose

The all-collections section gives users a complete browsable index after the curated dashboard modules.

### Section Header

Title: `All collection`

Note: final copy may become `All collections` for grammar unless the product language intentionally uses singular `collection`.

### Header Controls

- Filter control on the right side of the section header.
- The filter can be an icon button, compact button, or dropdown trigger.
- Filtering behavior may be mocked in the first prototype if data is static.

### List Layout

Reuse the V4 list-view pattern from `combined.html` where possible:

- collection icon;
- collection name;
- token count;
- average 24h movement or collection trend signal if available;
- open/view action;
- selected/hover state.

For V5, the list should be vertically scrollable with the page. If the list becomes long, use pagination, lazy loading, or an internal scroll only if needed later.

### Row Anatomy

Each collection row should include:

- collection icon or visual marker;
- collection title;
- short description or metadata line;
- token count;
- stacked token icons if space allows;
- 24h movement or popularity indicator if available;
- right arrow or `View` action.

### Interaction

- Clicking a row opens the V5 collection detail sliding panel.
- Filter control allows users to narrow collections by category, chain, trend, or token count in later iterations.
- Hover and keyboard focus states should make row clickability clear.

### Product Rationale

The full list supports users who want comprehensive browsing instead of curated cards. It prevents the dashboard from feeling like a closed editorial feed.

## 14. Collection Detail Sliding Panel

### Purpose

The sliding panel is the primary collection-detail experience for V5. It lets users inspect a collection without losing their place in the unsigned dashboard.

### Trigger

The panel opens when a user clicks any collection entry from:

- the collection rectangles inside trending token cards;
- the collection groups inside `You might be interested in` cards;
- any row in the `All collection` list.

Token clicks do not open this panel. Token clicks enter the token detail page flow.

### Web Layout

Web is the priority viewport for this interaction.

- Panel slides in from the right side of the viewport.
- Recommended panel width: 720-800px.
- The dashboard remains visible behind the panel, with a dimmed or softened backdrop if needed.
- The panel contains two vertical rails:
  - left rail: collection overview;
  - right rail: included token list.
- The panel should support independent vertical scrolling if content exceeds viewport height.
- A close control should be available at the top right or top edge of the panel.

### Left Rail: Collection Overview

The left rail presents the identity, context, and management actions for the selected collection.

Required content from top to bottom:

- large wide hero image or cover image for the collection;
- collection name as the primary title;
- collection description;
- basic information block;
- related collections;
- fixed bottom CTA area.

### Collection Basic Information

The basic information block should include:

- created time;
- created by;
- token count if useful;
- category or chain if available.

### Related Collections

Related collections should be shown as compact rows, chips, or mini cards.

Each related collection should include:

- collection name;
- optional short metadata or description;
- click affordance.

Clicking a related collection should update the drawer content to that collection without closing the panel.

### Sticky Bottom CTAs

The left rail has a sticky CTA area fixed to the bottom of the rail.

CTA order:

1. `Copy`
2. `Edit`
3. `Delete`

Prototype behavior:

- `Copy` can show copied feedback or duplicate-state feedback.
- `Edit` can be a non-functional prototype control unless edit flow is later defined.
- `Delete` can be a non-functional prototype control or show a confirmation affordance if needed.

Product note: because V5 is focused on unsigned users, these actions may later require permission gating. For the prototype, they can remain visible to validate layout and hierarchy.

### Right Rail: All Tokens List

The right rail shows every token included in the selected collection.

Header:

- title: `All tokens`;
- token count in brackets, for example `All tokens (18)`.

Each token row includes:

- token icon;
- token name;
- token full name or expanded name;
- token price;
- 24h price change;
- arrow button to enter token detail page.

### Token Row Behavior

- Clicking a token row or its arrow enters the token detail page flow.
- The token detail page destination does not need to be designed in V5.
- Hover and focus states should clearly distinguish token-row click targets from collection links.
- Positive and negative price changes should use text signs and color.

### Panel Behavior

- Opening the panel should not scroll the underlying dashboard unexpectedly.
- Closing the panel returns the user to the same dashboard position.
- Pressing `Esc` closes the panel.
- Clicking outside the panel may close it if the backdrop is used.
- If another collection is selected while the panel is open, update panel content rather than closing and reopening.
- The panel should not cover the global nav in a way that breaks account or close controls.

### Product Rationale

The drawer keeps collection inspection lightweight. Users can move from dashboard-level discovery to a deeper collection view, then continue into token detail pages without committing to account creation.

## 15. Data Model For Prototype

The prototype can use static sample data shaped around tokens and collections.

### Token Fields

- `name`
- `symbol`
- `icon`
- `price`
- `change24h`
- `collections`
- `fullName`

### Collection Fields

- `name`
- `description`
- `coverImage`
- `tokenCount`
- `tokenIcons`
- `tokens`
- `avgChange24h`
- `category`
- `chain` if available
- `createdAt`
- `createdBy`
- `relatedCollections`

### Recommended Initial Content

The V5 prototype can reuse or adapt V4 collection examples:

- DeFi Summer 2026
- DeFi Blue Chips
- GameFi
- AI Tokens
- Base Ecosystem
- Yield Stablecoins
- Layer 2 Leaders
- Real World Assets

## 16. States

### Loading

- Use lightweight skeletons for card rails and collection rows.
- Use a panel-level skeleton when opening collection details if the content is loading.
- Preserve card dimensions during loading to prevent layout shift.

### Empty

- Trending section: show a calm empty state if no trending tokens are available.
- Interested-in section: hide the rail or show generic collection recommendations.
- All collections: show an empty-state message with a reset-filter action if filters produce no results.
- Collection detail panel: show an empty token-list state if a collection has no included tokens.

### Error

- Show section-level retry affordances where data would normally load.
- Avoid full-page failure if only one module fails.
- If panel content fails, keep the panel open and show a retry state inside the panel.

### Unsigned Auth State

- The entire dashboard remains browseable.
- Sign-in and create-account controls remain available in global nav.
- Any action requiring account ownership should prompt sign-in only at the moment it is needed.

## 17. Responsive Requirements

Desktop is the primary target for this PRD.

Minimum responsive behavior:

- Horizontal rails remain scrollable on narrower widths.
- The 50/50 top row should remain two columns on normal desktop widths.
- On narrower web widths, the top row can stack with the `Home of Tokens` card first and the promo card second.
- Cards maintain fixed or constrained dimensions so content does not reflow unpredictably.
- Long collection names and descriptions truncate cleanly.
- Token icon stacks do not overlap text.
- The all-collections list can collapse secondary metadata before clipping primary content.
- The collection detail panel uses the 720-800px width on desktop when viewport space allows.
- On narrower web widths, the panel can reduce width but should preserve the two-rail structure as long as readable.
- If the two-rail panel becomes too narrow, the token list can stack below collection overview in a later responsive pass.

Detailed tablet and mobile layouts should be defined in a later PRD or prototype pass.

## 18. Accessibility Requirements

- Card rails and collection rows must be keyboard navigable.
- Top-row CTAs and the promo card must be keyboard accessible.
- Collection panel open, close, and internal navigation must be keyboard accessible.
- Focus should move into the panel when it opens and return to the triggering element when it closes.
- Icon-only controls require accessible labels.
- Right arrows are visual affordances and should not be the only clickable area.
- 24h change color must be supported by text signs such as `+` or `-`.
- Horizontal scroll areas should not trap keyboard focus.
- Token icons need alt text when they convey identity.
- `Copy`, `Edit`, and `Delete` controls need clear accessible labels and visible focus states.

## 19. Analytics Events

For later production instrumentation:

- `dashboard_viewed`
- `home_action_send_token_clicked`
- `home_action_send_with_link_clicked`
- `home_action_receive_scan_clicked`
- `promo_card_clicked`
- `trending_token_card_clicked`
- `trending_collection_clicked`
- `recommendation_card_viewed`
- `recommendation_collection_clicked`
- `all_collections_filter_opened`
- `all_collections_filter_applied`
- `collection_row_clicked`
- `collection_panel_opened`
- `collection_panel_closed`
- `collection_panel_related_collection_clicked`
- `collection_panel_copy_clicked`
- `collection_panel_edit_clicked`
- `collection_panel_delete_clicked`
- `token_detail_clicked`
- `unsigned_nav_sign_in_clicked`
- `unsigned_nav_create_account_clicked`

## 20. Acceptance Criteria

- V5 has the same unsigned global nav as the V4 combined prototype.
- The page is structured as a traditional vertical dashboard.
- The first dashboard content row is a 50/50 split with two cards.
- The left split card includes `Home of Tokens`, a slogan, and three CTAs: `Send token`, `Send with link`, `Receive and Scan`.
- The right split card is a filled-image promo card with title text on top of the image and an arrow in the bottom-right corner.
- The promo title uses typography consistent with the `Home of Tokens` title.
- The next content section is titled `Trending token and collection`.
- The trending section contains three horizontally scrollable token cards.
- Each trending token card shows a large token icon, token name, and 24h price change on the left.
- Each trending token card shows two collection rectangles on the right.
- Each collection rectangle includes collection name, short description, and right arrow.
- The following content section is titled `You might be interested in`.
- The second section contains three horizontally scrollable recommendation cards.
- Each recommendation card includes a title, short description, and two collection groups.
- Each collection group includes title, description, token count, and a stack of five token icons.
- The bottom section is titled `All collection` or the approved final copy.
- The bottom section includes a filter control on the right.
- The full collection list reuses the V4 list-view direction where practical.
- Clicking a token card, token row, or token arrow enters the token detail page flow.
- Clicking any collection rectangle, collection group, or collection row opens a right-side sliding panel.
- The collection sliding panel is approximately 720-800px wide on desktop.
- The collection sliding panel has a left rail for collection overview and a right rail for included tokens.
- The left rail includes a wide cover image, collection name, description, created time, created by, related collections, and sticky bottom CTAs.
- The sticky bottom CTAs are ordered `Copy`, `Edit`, `Delete`.
- The right rail is titled `All tokens` with token count in brackets.
- Each token list entry includes token icon, token name, token full name, price, price change, and arrow button.
- Clicking a related collection updates the panel content without closing it.
- Closing the panel returns the user to the same dashboard position.
- Users can browse the dashboard without signing in.
- Primary text and controls do not overlap or clip at the default desktop viewport.

## 21. Open Questions

- Should the bottom section title be `All collection` or `All collections`?
- What exact slogan should appear below `Home of Tokens`?
- What promo should the right split card feature first?
- What are the exact first three trending tokens?
- What are the exact first three recommendation topics?
- Should the filter expose category, chain, trend, token count, or all of these?
- Should sign-in and create-account stay in the global nav for V5, matching the current V4 combined prototype, or move into contextual dashboard prompts?
- Are the two collection groups in the interested-in section inside each recommendation card, or below the card rail as a separate row?
- Should unsigned users see active `Edit` and `Delete` controls, or should those controls display a sign-in/permission prompt?
- What metadata should appear under `Created by` for official imToken-created collections versus user-created collections?
- Should the collection panel backdrop close on outside click, or require the explicit close control?
