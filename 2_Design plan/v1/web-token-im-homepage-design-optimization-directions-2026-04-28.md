# web.token.im Homepage Design Optimization Directions

Date: 2026-04-28  
Sources: `web-token-im-homepage-revamp-audit-v2-2026-04-28.md`, `homepage-ia-market-reference-research-2026-04-28.md`  
Purpose: directional design optimization list, not feature scope

## 1. Reframe Homepage As A Token Command Surface

Direction:

Position the homepage as an active token discovery and action surface, not a static product landing page or decorative token universe.

Reason:

Market references show that strong web3 homepages are immediately functional. Coinbase Wallet uses search, create/connect, campaign features, and trending onchain actions. Uniswap puts a primary transaction tool at the center. Zerion makes Explore, search, connect, and track-any-wallet available before sign-in. The common pattern is clear: the first screen should let users do something meaningful.

Design implication:

The imToken Web homepage should connect campaign, collection discovery, search, account creation, AI insight, and token action into one operating surface. Brand storytelling should come through the interaction model, not through passive explanation.

## 2. Unify Spatial View And List View Around One Content Model

Direction:

Treat Spatial View and List View as two expressions of the same homepage system, not two separate homepage products.

Reason:

The current two-mode model splits value unevenly. List View supports campaign banners, collection ordering, filters, and content density. Spatial View supports brand distinction and the "Home of Tokens" metaphor, but lacks equivalent campaign and information layers. Market references reinforce the need for a consistent shell and content logic even when density changes across views.

Design implication:

Both modes should draw from the same campaign, collection, token, AI insight, CTA, personalization, filter, and sorting data. The difference should be expression: Spatial View creates curiosity and relationship; List View creates clarity and decision confidence.

## 3. Make Spatial View The Explore And Relationship Lens

Direction:

Optimize Spatial View into an interactive token map that explains relationships, highlights momentum, and supports campaign discovery.

Reason:

Spatial View is the most differentiated part of imToken Web, but it currently behaves mostly as a visual atmosphere. It creates attention without enough motivation. The competitive pattern is not to make home visual only; even immersive or branded surfaces need visible actions, context, and reasons to continue.

Design implication:

Spatial View should support campaign hubs, spotlight orbits, guided paths, selected-state panels, insight badges, and relationship-based clustering. Bubbles should invite exploration, but explanation and action should live in a companion panel rather than inside overcrowded bubble labels.

## 4. Make List View The Scan And Decision Lens

Direction:

Position List View as the dense, scannable, comparison-oriented homepage mode.

Reason:

Uniswap Explore demonstrates that serious token discovery needs metrics, object tabs, chain filters, time range sorting, search, and ranked comparison. Zerion Explore demonstrates that a discovery feed can stay approachable when organized into stable sections such as Featured Dapps, Top Movers, Market, and Custom Collections. List View is the natural place for this density.

Design implication:

List View should carry richer collection cards, campaign modules, filtering, sorting, market signals, AI summaries, and comparison cues. It should not feel like a fallback mode; it should be the practical decision surface paired with the Spatial View's exploratory surface.

## 5. Make Search A Primary Navigation Layer

Direction:

Treat search as a core homepage navigation system, not only a utility in the header.

Reason:

Coinbase, Uniswap, and Zerion all place search high in the IA. Their search patterns span tokens, apps, pools, wallets, domains, or identities depending on product scope. This matters because token discovery often begins with partial intent: a chain, theme, ticker, campaign, collection, or account.

Design implication:

Search should eventually support token, collection, campaign, chain, and account intents. In List View, search can narrow and rank results. In Spatial View, search should reveal where the result lives in the token map so the user understands its relationship to nearby collections.

## 6. Preserve Public Value Before Account Creation

Direction:

Make the anonymous homepage useful before sign-in or account creation, then progressively personalize after the user creates or connects an account.

Reason:

Zerion and Uniswap expose meaningful discovery before wallet connection. Coinbase Wallet exposes campaigns and trending onchain actions before account creation. This aligns with imToken Web's lightweight AA promise: users should understand the product and discover value before they are asked to commit.

Design implication:

Anonymous users should see campaigns, curated collections, top movers, explainable token themes, and lightweight exploration. Account creation should unlock personalization, watching/favorites, claims, sending, and deeper action rather than gating basic comprehension.

## 7. Keep AA Onboarding Lightweight And Contextual

Direction:

Express account abstraction as reduced friction at the moment of action, not as a heavy wallet education block.

Reason:

Coinbase Smart Wallet frames its value around passkeys, no separate app or extension requirement, cross-device access, and reduced transaction friction. imToken Web has no seed phrase journey, so it should not inherit traditional wallet onboarding ceremony. But users still need confidence that "Create account" is not a conventional seed phrase setup.

Design implication:

Use compact confidence copy near account actions: passkey, no seed phrase setup, no extension required, lightweight token account. Introduce account creation when it unlocks a meaningful action such as watch, receive, claim, Send by Link, personalization, or campaign participation.

## 8. Make Campaigns Native To Both Modes

Direction:

Design campaigns as structured homepage content that can render as banners in List View and as spatial moments in Spatial View.

Reason:

List View already supports a campaign-like hero poster, while Spatial View does not. Coinbase Wallet shows that editorial campaigns work better when paired with direct action. Marketplace references such as Magic Eden and OpenSea also show that campaign/drops surfaces need structure beyond a promotional image.

Design implication:

Campaigns should have mode-aware treatments: hero banner, featured card, spatial hub, spotlight orbit, guided path, ambient poster with CTA panel, or selected-state campaign panel. The campaign object should remain the same across modes; only the presentation changes.

## 9. Treat Campaigns As Structured Destinations, Not Posters

Direction:

Move from campaign posters to campaign systems with clear context, destination, and action.

Reason:

A poster can create attention, but it does not reliably guide behavior. Campaigns need to explain what is happening, why it matters, who it is for, what the user can do, and when the opportunity changes or expires.

Design implication:

Campaign content should carry title, summary, visual asset, CTA, related collection/token/action, eligibility, start/end timing, audience targeting, localization, tracking intent, and fallback behavior. The user-facing design should make campaign context visible without overwhelming the homepage.

## 10. Shift Collections From Token Containers To Reason-Bearing Surfaces

Direction:

Design collections as curated, explainable, actionable themes rather than groups of token icons.

Reason:

The current collection cards and overlays mostly show token names/icons and operational metadata. Market references show stronger labels and sections: Top Movers, Market, AI Tokens on Base, Memecoins, ETH liquid staking/restaking, DeFi tokens, Top, Trending, and Drops. These structures tell users why a group exists.

Design implication:

Every collection should communicate a reason to explore: theme, use case, top mover, campaign context, risk/trust cue, update signal, personal relevance, or AI-generated explanation. Users should understand the collection's purpose before opening it.

## 11. Make Motivation Visible At Scan Level

Direction:

Before asking users to click into tokens or create an account, give them a clear reason to continue.

Reason:

The current homepage asks users to browse a token universe before it creates motivation. First-time users may not understand why Stock Tokens, stablecoins, or DeFi collections matter to them. Existing users need reasons tied to holdings, watched collections, recent changes, campaign eligibility, or market movement.

Design implication:

Use short "why now / why this / why for you" cues across hero, collection, token, campaign, and spatial selected states. Navigation should follow motivation, not replace it.

## 12. Make Filtering And Sorting Reflect User Intent

Direction:

Move filtering from internal taxonomy toward user goals and discovery intent.

Reason:

Current filters such as Preset, Bucket, Social, Pool, and Collectible may map to system structure, but they do not match how users think. Uniswap's Explore controls show the value of chain, time window, object type, and sortable market metrics. Zerion's sections show the value of intent-based groupings.

Design implication:

Filtering and sorting should support intent, risk/trust, network, market behavior, time window, personal relevance, and campaign status. Suggested directional filters include trending, stable/safe, payments, yield, RWA, AI, memecoins, campaign eligible, held by me, watched, and recently updated. Spatial View can express filters as reshaped clusters; List View can express them as controls.

## 13. Use AI To Explain And Prioritize Inline

Direction:

Use AI insights to make collections, campaigns, and token clusters more understandable and navigable.

Reason:

Current information density is too low. Users only see icons and names, so AI can add real value by explaining why a collection exists, what changed, what risks exist, why something is personally relevant, and what action might be useful. Market references suggest AI is most useful when it interprets data in context, not when it becomes a separate generic chat layer.

Design implication:

AI should appear as short, attributed, expandable insight units: collection summary, change summary, risk summary, personalized reason, campaign explanation, cluster explanation, and suggested next step. It should support user decisions without overwhelming the first layer.

## 14. Design For Personal Relevance As A Retention Layer

Direction:

Move from globally curated collections toward a mixed model of editorial, campaign, market, and personalized recommendations.

Reason:

A static collection list can support first discovery, but it does not create a strong retention loop. Zerion's Favorites and Rewards, and finance-style watchlist/card patterns, show that returning users need continuity and changed-since-last-visit signals.

Design implication:

Introduce "For You" logic across both modes. In Spatial View, personal relevance can affect position, scale, gravity, or highlight. In List View, it can affect ordering, labels, and recommendation reasons. Personalized surfaces should explain why they appear to preserve trust.

## 15. Create Clear States For Anonymous, New, And Returning Users

Direction:

Design homepage states around user maturity rather than serving everyone the same collection list.

Reason:

Anonymous users need motivation and confidence. New users need activation guidance. Returning users need relevance and continuity. The market pattern is progressive: public discovery first, then connected personalization and action.

Design implication:

Anonymous view should prioritize campaign and discovery. New-account view should prioritize first meaningful action. Returning view should prioritize personal token home, watched collections, campaign eligibility, holdings-aware modules, and changed-since-last-visit insights.

## 16. Treat Collection Detail As The Bridge Between Browsing And Action

Direction:

Optimize collection detail as the moment where curiosity becomes intent.

Reason:

Current collection detail shows token icons and basic metadata. It does not yet help users decide whether to explore deeper, watch the collection, compare tokens, create an account, or act. Competitive discovery surfaces make detail pages and expanded states carry the reasoning layer.

Design implication:

Collection detail should explain the theme, show what changed, identify important tokens, expose AI insight, clarify campaign relationship, and provide next actions. This applies whether detail is opened from Spatial View or List View.

## 17. Make Mode Switching Meaningful

Direction:

The Spatial/List toggle should communicate a change in viewing lens, not just layout preference.

Reason:

If users experience mode switching as arbitrary, they will not understand when to use which mode. The market research supports different density modes: Uniswap keeps task-first and Explore-terminal states distinct, while Zerion keeps dashboard navigation and modular discovery distinct.

Design implication:

Use clear mode labels, remembered preference, context-aware defaults, and consistent object identity across modes. Spatial should mean map/explore/relationship. List should mean scan/compare/filter. The same campaign, collection, or insight should feel recognizable in both views.

## 18. Design For Marketing Control With Product Guardrails

Direction:

Make the homepage operable by marketing while preserving product quality, trust, and consistency.

Reason:

Campaign agility is a business requirement, but unmanaged campaign publishing can fragment the experience, weaken trust, or overload users with promotional content. Market references show that strong campaign surfaces are structured and action-led, not arbitrary promotional insertions.

Design implication:

Campaign and collection modules need design constraints: CTA limits, copy length, visual ratios, localization rules, expiry, audience targeting, priority, safety/compliance state, source labels, and fallback behavior. Operability should not mean visual inconsistency or unclear promotion.

## Summary Direction

The homepage should optimize toward this design thesis:

> imToken Web should become a two-mode token command surface: Spatial View creates curiosity, relationships, and campaign discovery; List View creates scanability, filtering, and decision confidence; both modes share the same campaign, collection, personalization, AI insight, search, and lightweight AA onboarding system.

