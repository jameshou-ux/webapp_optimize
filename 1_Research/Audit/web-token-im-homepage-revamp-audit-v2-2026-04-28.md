# web.token.im Homepage Revamp Audit V2

Audit date: 2026-04-28, America/Toronto  
Scope: homepage revamp, Spatial/List View mode strategy, collection discovery, campaign operations, account-abstraction onboarding, personalized/AI insight direction  
Live website reviewed: `https://web.token.im/`  
Source context reviewed: `CLAUDE.md`, `AGENTS.md`, `0_Project Context/imToken webapp project bkg.md`, `0_Project Context/imtoken-web-evaluation.html`, and V1 audit report

## 1. Executive Summary

V1 identified the main positioning problem: the homepage shows a token universe before it explains why imToken Web matters.

V2 adds four important product constraints:

1. imToken Web is account-abstraction based. There is no seed phrase journey, and the product should feel much lighter than a traditional wallet.
2. The homepage must be operable by marketing. Campaign posters, featured collections, and collection ordering need to be managed without engineering release dependency.
3. Token discovery will require personalization, richer filtering, sorting, and collection controls.
4. AI insights will be involved, so collections should become informative and personalized, not only icon/name grids.

The updated audit conclusion:

> The homepage should not be redesigned as a static landing page. It should become an operable, intelligent token discovery surface: part campaign hub, part lightweight onboarding entry, part personalized token portal.

The current page already hints at this direction through two homepage modes:

- List View has the beginning of a campaign system through a hero banner/poster, collection cards, filters, and scrollable content.
- Spatial View has the beginning of a differentiated product identity through immersive bubble-based token exploration.

The gap is that the two modes currently split value unevenly. List View supports campaign and content operations better, while Spatial View supports brand expression better. Neither mode fully supports the complete requirement set: campaign operation, token discovery motivation, personalization, AI insight, and lightweight AA onboarding.

## 2. What Changed Since V1

V1 focused on:

- First-time vs returning users
- Activation, onboarding, retention
- Spatial bubbles as unclear product storytelling
- Need to connect homepage to passkey, gas abstraction, and Send by Link

V2 refines the homepage strategy:

- Do not over-explain seed phrases. In an AA product, "no seed phrase" is a reassurance, not the whole story.
- Do not turn homepage into traditional wallet education. The experience should remain lightweight and action-forward.
- Treat homepage content as an operating system for marketing and growth.
- Treat collections as editorial/product surfaces, not just token containers.
- Treat AI insights as a core layer for motivation and navigation.
- Treat Spatial View and List View as two expressions of the same homepage system, not as two isolated experiences with different product capabilities.

## 3. Live Site Observations Relevant To Homepage Revamp

### Current Homepage Modes

The homepage has two modes:

- Spatial View: immersive, bubble-based token collection visualization
- List View: scrollable content and collection cards with a hero campaign banner

This is a strong foundation. It allows imToken Web to serve both the emotional "Home of Tokens" vision and practical token browsing. The current problem is capability asymmetry: List View has campaign support, while Spatial View does not expose an equivalent campaign or editorial layer.

### Current Homepage In List View

Observed structure:

- Header with logo, search, settings, sign in, create account
- Hero title: "Home of Tokens"
- Subtitle: "Digital assets under control"
- Campaign hero poster: "Welcome to Wall Street 2.0" / "Stock Tokens"
- Collection list: Arbitrum Ecosystem, Stock Tokens, Bluechip Stables, Regulated Stables, Remit Stables, Yield Stables, DeFi Stables, Non-USD Stables, Top CMC, DePIN, Top Memes, Top Collectibles, Top RWAs, DeFi Bluechips, Perp DEX
- Filter control
- End state: "That's all for now. We'll add more collections soon!"

List View is currently the better operating surface:

- It can host a hero banner.
- It can expose ordered collections.
- It can support more content density.
- It is easier to extend with summaries, filters, sorting, and AI insight snippets.

But List View risks becoming a conventional content page unless it keeps a strong connection to the "Home of Tokens" spatial metaphor and lightweight token access proposition.

### Current Homepage In Spatial View

Observed structure from prior live inspection and project context:

- Hero title: "Home of Tokens"
- Subtitle: "Digital assets under control"
- Floating/spatial collection bubbles
- Token icons inside bubbles
- Search/settings/sign-in/create account in header

Spatial View is currently the better brand surface:

- It makes the product feel different from a wallet, block explorer, or exchange.
- It visually supports the "token universe" and "Home of Tokens" metaphor.
- It can become the signature interaction for token discovery.

But Spatial View currently lacks the content and operational layers needed for the business:

- No campaign banner or campaign node equivalent
- No campaign CTA
- No visible campaign context
- No collection summaries
- No AI insight preview
- No personalized reason for why a bubble is shown
- No sorting/filtering affordance beyond spatial arrangement
- No lightweight AA onboarding cue inside the experience

The key question is not "Spatial or List?" The key question is how both modes can share the same content model while expressing it differently.

### Filter Modal

Current filter categories:

- All
- Preset
- Bucket
- Social
- Pool
- Collectible

This is structurally useful but not yet user-useful. These categories describe collection type, not user intent. A first-time or casual user is more likely to ask:

- What is trending?
- What is safe?
- What can I earn from?
- What can I pay with?
- What is relevant to my holdings?
- What changed today?
- What is beginner-friendly?
- What can I claim or try?

### Collection Detail Overlay

Observed for Stock Tokens:

- Large collection title
- Token icon grid
- Collection information modal:
  - Token number: 24
  - Created by: Preset
  - Theme: Bucket
  - Created time: July 31, 2025
  - Updated time: October 1, 2025

This confirms a collection metadata model already exists, but the visible information is operational metadata rather than user decision metadata.

Missing decision metadata:

- Why this collection exists
- Who it is for
- What changed recently
- Top movers
- Risk level
- Network availability
- Liquidity/depth
- Fees/gas support
- AI summary
- Suggested next action
- Whether the collection is campaign-sponsored/editorial/system-personalized

### Account Entry

The live site exposes sign-in/create account, but the homepage still does not frame AA onboarding as the product's natural interaction model. The user is not taught that this is a browser-native account experience with no seed phrase burden. The product should avoid traditional wallet ceremony, but still needs a plain confidence cue.

Recommended message:

> Create a lightweight token account with passkey. No seed phrase setup, no extension, no app install required.

This should be treated as a confidence line near the primary CTA, not a large educational block.

## 4. Product Audit

### Finding P0: Homepage Has Campaign Slots But No Campaign System

Evidence:

- "Welcome to Wall Street 2.0" appears as a hero poster.
- Stock Tokens are featured in the first viewport.
- Collection cards are curated and ordered.
- Campaign support is visible in List View but not in Spatial View.

Problem:

The page has the shape of a campaign surface, but no visible campaign framework:

- No campaign label or context
- No clear CTA
- No campaign-specific explanation
- No tracking goal made visible in UX
- No relationship between hero poster and collection cards beyond proximity
- No support for multiple campaign modules or rotation logic
- No equivalent campaign expression in Spatial View

Impact:

Marketing can attract attention but cannot reliably guide behavior. A poster without a task becomes decoration.

Severity: Critical

Recommendation:

Define homepage campaign modules as first-class content:

- Hero Campaign
- Featured Collection
- Claim/Activation Campaign
- Partner/Ecosystem Campaign
- Educational Campaign
- Returning User Campaign

Each module needs:

- Title
- Subtitle
- Visual asset
- Target audience
- CTA
- Linked collection/token/action
- Priority
- Start/end time
- Localization
- Tracking events

This system should be mode-agnostic:

- In List View, a campaign can render as a hero banner, featured card rail, or pinned collection.
- In Spatial View, the same campaign should render as a campaign constellation, featured hub bubble, spotlight orbit, or guided path.

### Finding P0: Spatial View Does Not Support The Same Business Requirements As List View

Evidence:

- List View has a hero campaign banner.
- Spatial View primarily shows token collection bubbles.
- Spatial View does not provide an obvious campaign slot, message layer, CTA, or "why now" context.

Problem:

Spatial View is the most distinctive product expression, but it is currently weaker for campaign operation, education, and conversion. That creates a product tension: the view with the strongest identity is the view least equipped to support business needs.

Impact:

If Spatial View remains the default, marketing loses operational leverage. If List View becomes the default, the product loses its most differentiated interaction. Both outcomes are avoidable.

Severity: Critical

Recommendation:

Make Spatial View a first-class campaign and discovery surface, not only a visualization.

Potential Spatial campaign patterns:

- Campaign Hub: one large central campaign bubble connected to relevant collection bubbles.
- Spotlight Orbit: campaign collection is visually emphasized with orbiting tokens and a short insight panel.
- Guided Path: a 3-step spatial trail such as "Stock Tokens -> Top movers -> Create passkey account to watch".
- Campaign Layer Toggle: switch between "All tokens", "Featured", "For You", and "Campaigns".
- Context Panel: selecting a bubble opens summary, AI insight, CTA, and collection metadata.
- Spatial Poster Background: marketing visual becomes ambient scene/background, while the CTA lives in a fixed panel.
- Time-boxed Event State: campaign bubble includes badge, countdown, or "updated today" signal.

Spatial View should support the same campaign content entity as List View, but render it spatially.

### Finding P0: Collections Lack Motivation Content

Evidence:

- Collection cards mainly show title and token icons.
- Collection overlay shows icon grid and metadata.
- Users can identify the theme, but not why to explore it.

Problem:

The current collection model answers "what tokens are inside?" but not "why should I care?"

Impact:

Users must already have intent. The page does not create intent.

Severity: Critical

Recommendation:

Every collection card should carry at least one motivation signal:

- AI summary: "Stablecoins used most for payments this week"
- Market signal: "3 tokens trending, 2 down today"
- Utility signal: "Good for remittance, payment, savings"
- Risk signal: "Verified tokens only" or "High volatility"
- Personal signal: "You hold 2 tokens in this collection"
- Campaign signal: "Featured for Wall Street 2.0"

### Finding P0: Homepage Does Not Yet Express AA As Lightweight Onboarding

Evidence:

- Create account is in the header.
- Account entry modal asks for account name.
- Homepage copy does not explain AA/passkey in context.

Problem:

The product's best onboarding advantage is that there is no seed phrase journey and no heavy wallet setup. But the homepage does not make this lightweight path obvious.

Impact:

Users may interpret the product as "another wallet" and bring traditional wallet anxiety with them.

Severity: Critical

Recommendation:

Frame account creation as a lightweight browser action:

- "Create with passkey"
- "No seed phrase setup"
- "No extension required"
- "Start with token discovery, receive, or Send by Link"

Keep this short. Do not add long wallet education.

### Finding P1: Filters Reflect Internal Collection Types, Not User Jobs

Evidence:

- Filters are All, Preset, Bucket, Social, Pool, Collectible.

Problem:

These categories may reflect backend collection taxonomy, but they do not help the user discover interesting tokens.

Impact:

Filtering is available, but not powerful enough to guide exploration.

Severity: High

Recommendation:

Add user-facing filter/sort dimensions:

- Category: Stables, RWA, Stock Tokens, DeFi, Meme, NFT, Payment, Yield
- Intent: Pay, Save, Earn, Trade, Collect, Watch, Claim
- Risk: verified, audited, flagged, experimental
- Network: Arbitrum, Ethereum, Base, Optimism, etc.
- Activity: trending, new, most viewed, most saved, recently updated
- Personal: held by me, watched by me, similar to my holdings
- Campaign: featured, partner, reward, event

### Finding P1: Personalization Is Missing From The Collection Layer

Evidence:

- Anonymous and returning views use largely the same structure.
- Collections are ordered globally.
- No visible "for you", "because you viewed", "because you hold", or "continue" module.

Problem:

The homepage cannot become a daily product habit if it is the same static list for every user.

Impact:

Returning users have little reason to revisit unless they already know which token they want.

Severity: High

Recommendation:

Add a personalization layer:

- For anonymous users: contextual personalization by campaign, locale, device, referrer, and viewed tokens.
- For signed-in users: holdings, saved collections, claim/send history, recent token views, risk alerts, and preferred networks.
- For new users: onboarding status and first-action recommendations.

### Finding P1: AI Insight Layer Has No Surface Yet

Evidence:

- Collection and token cards are mostly visual identifiers.
- No generated summaries, explanations, or contextual next steps are visible.

Problem:

AI insights cannot be bolted on as text blobs later. The homepage needs structured surfaces where AI can safely summarize and guide.

Impact:

Without designed insight containers, AI output will either clutter the page or remain hidden.

Severity: High

Recommendation:

Define AI insight components now:

- Collection Insight Card
- Token Movement Summary
- "Why this collection" summary
- Personalized recommendation reason
- Risk and verification explanation
- Action suggestion: watch, open, receive, send, claim

Each AI insight should have:

- Source/context label
- Freshness timestamp
- Confidence/risk boundary
- Link to supporting data
- Short form and expanded form

### Finding P1: Hero Poster Is Visually Strong But Functionally Weak

Evidence:

- "Welcome to Wall Street 2.0" is a large visual asset.
- It connects to Stock Tokens, but the card does not explain the campaign.

Problem:

The hero poster is operating as an image, not a campaign module.

Impact:

Users can admire the theme but do not get enough reason to enter.

Severity: High

Recommendation:

The hero should include:

- Campaign title
- 1-line reason
- CTA
- Featured collection link
- Optional secondary action
- Date/status if campaign-based
- Clear "why now" insight

Example:

Title: Wall Street 2.0  
Reason: Explore tokenized stocks now available onchain.  
CTA: Explore Stock Tokens  
Insight: 24 assets, updated Oct 1, top viewed this week.

## 5. User Journey Audit

### First-Time User

What they see now:

- Brand name
- Generic subtitle
- Campaign image
- Collection list
- Create account in header

What they need:

- Understand this is lightweight token access, not a traditional wallet setup.
- See one high-confidence first action.
- Learn why collections are worth exploring.
- Get safety and relevance cues before clicking tokens.

Primary failure:

The homepage asks users to browse before it creates intent.

Recommended first-time journey:

1. Arrive through a campaign, token link, direct visit, or search.
2. See a campaign/positioning hero with one action.
3. Explore a collection with meaningful preview data.
4. Open token/collection insight.
5. Create passkey account only when an action requires identity: watch, receive, send, claim, personalize.

This keeps onboarding lightweight and avoids forcing account creation too early.

### Existing User

What they need:

- Resume where they left off.
- See personalized collections.
- Watch changes relevant to their holdings.
- Access send/receive/claim quickly.
- Understand what changed since last visit.

Primary failure:

The homepage is not sufficiently different for returning users.

Recommended returning journey:

1. Personalized top module: holdings, watched collections, recent activity.
2. "For You" collections with reasons.
3. Campaign modules only if relevant.
4. AI insight digest: what changed, what matters, what needs action.
5. Quick actions: Send, Receive, Claim, Watch.

### Marketing/Growth Operator

What they need:

- Run campaigns without changing code.
- Feature token collections based on business priority.
- Localize hero posters and copy.
- A/B test CTA and ordering.
- Measure downstream activation.

Primary failure:

The current page appears curated, but the product requirements for operations are not yet visible in the UX model.

Recommended operator journey:

1. Create/update campaign.
2. Attach hero image/poster.
3. Attach one or more collections.
4. Define CTA and target route.
5. Define audience and priority.
6. Preview anonymous/new/returning states.
7. Publish with tracking.

## 6. Homepage Information Architecture Recommendation

### Two-Mode Strategy

The homepage should keep both modes, but they need a shared underlying content system.

Recommended role split:

| Mode | Primary Job | Best For | Risk If Unchanged |
|---|---|---|---|
| Spatial View | Immersive discovery and product identity | Exploring the token universe, campaigns as constellations, personalized recommendations, brand differentiation | Beautiful but hard to operate, explain, or convert |
| List View | Dense browsing and decision-making | Campaign banners, collection comparison, filtering, sorting, AI summaries, repeat use | Practical but too conventional and less differentiated |

The mode toggle should not feel like switching between two unrelated products. It should feel like switching between two lenses on the same token universe:

- Same campaigns
- Same collections
- Same personalization
- Same AI insights
- Same account actions
- Different layout and interaction model

### Shared Homepage Content Model

Both Spatial View and List View should consume the same entities:

- Campaign
- Collection
- Token
- Insight
- CTA
- Audience segment
- Personalization rule
- Sort/filter state

Mode-specific rendering:

- List View renders campaigns as banners/cards and collections as scannable rows or grids.
- Spatial View renders campaigns as highlighted hubs, clusters, paths, or spotlighted constellations.
- List View shows more text by default.
- Spatial View shows compact labels by default and reveals explanations through hover/select panels.

### Spatial View Optimization Direction

Spatial View should evolve from "floating collection bubbles" to "interactive token universe with operating layers."

Recommended layers:

1. Base universe
   - All major collections
   - Stable layout and clear hierarchy
   - Collection size, category, or relevance reflected visually

2. Campaign layer
   - Featured campaign hub
   - Linked campaign collections
   - CTA panel
   - Campaign label, freshness, and why-now insight

3. Personalization layer
   - "For You" bubbles
   - Recently viewed
   - Held/watched collections
   - Recommendations with short reasons

4. AI insight layer
   - Bubble badges for movement, risk, updates, and opportunities
   - On-select insight panel
   - "Why this is shown" explanation

5. Action layer
   - Watch collection
   - Open collection
   - Create passkey account
   - Receive/claim/send if relevant

Spatial View should avoid putting long text inside bubbles. Use a persistent side/bottom insight panel for explanations, CTAs, and AI summaries.

### Anonymous Homepage

Recommended page order:

1. Operable campaign hero
   - Marketing-controlled visual
   - Product-controlled CTA and route
   - Clear reason to click

2. Lightweight account entry
   - "Create with passkey"
   - "No seed phrase setup"
   - "No extension required"
   - Kept compact, not educationally heavy

3. Featured collections
   - Cards with title, summary, insight, token preview, CTA
   - Marketing can pin/sequence

4. Explore by intent
   - Pay, Save, Earn, Trade, Collect, Watch, Claim

5. AI insights
   - Trending themes
   - Beginner-friendly collections
   - Safety summaries

6. Full collection browser
   - Sort, filter, search
   - Spatial/List toggle

Mode behavior:

- Default to Spatial View when the goal is brand impression, campaign immersion, or discovery.
- Default to List View when the user arrives from search, filter, a specific collection, or a content-heavy campaign.
- Let marketing choose campaign-preferred default mode per campaign.

### New Account Homepage

Recommended page order:

1. Activation checklist
   - Receive token
   - Claim link
   - Send by Link
   - Watch first collection

2. Starter collections
   - Stablecoins
   - Arbitrum ecosystem
   - Beginner-safe verified tokens

3. Personalized recommendations
   - Based on onboarding path and first viewed tokens

4. Learn-in-context cards
   - Tiny explanations only when relevant

### Returning Homepage

Recommended page order:

1. Personal token home
   - Holdings
   - Recent activity
   - Pending links or claims
   - Alerts

2. For You collections
   - Based on holdings, views, saved tokens, campaigns, locale

3. AI insight digest
   - "What changed since your last visit"
   - "Why this matters to your tokens"

4. Full collection discovery
   - Advanced filters and sorting

## 7. Collection Card And Spatial Node Content Model

Current List View card:

- Title
- Token icons
- Count

Current Spatial View node:

- Collection label
- Token icons
- Bubble size/position

Recommended shared collection content:

- Title
- Short description
- Token preview
- Token count
- Collection type
- Updated timestamp
- Campaign badge if applicable
- AI summary
- Key metrics:
  - top mover
  - total market cap/liquidity if available
  - number of verified tokens
  - network coverage
- Personal indicator:
  - held by you
  - watched
  - viewed recently
  - recommended because...
- CTA:
  - Explore
  - Watch
  - Compare
  - Receive
  - Claim

This changes collection cards and spatial nodes from visual labels into navigation decisions.

Mode-specific display:

- List View card: show title, short description, preview tokens, key metric, insight snippet, and CTA directly.
- Spatial node: show title, token preview, visual status badge, and selection affordance; reveal the richer description, AI insight, and CTA in a connected panel.
- Spatial campaign node: show campaign badge, active state, and highlighted relationship to featured collections.

## 8. Filtering And Sorting Requirements Direction

Current filter is too coarse. V2 recommends these dimensions for PRD exploration:

### Filters

- Collection type: Preset, Bucket, Social, Pool, Collectible
- Intent: Pay, Save, Earn, Trade, Collect, Watch, Claim
- Asset category: Stablecoin, RWA, Stock Token, DeFi, Meme, NFT, Infra
- Risk/safety: Verified, Audited, Flagged, Experimental
- Network: Ethereum, Arbitrum, Base, Optimism, Tron, etc.
- Market behavior: Trending, New, Top volume, Top gainers, High volatility
- Personal: In my holdings, Watched, Recently viewed, Similar to my holdings
- Campaign: Featured, Partner, Reward, Event

### Sorting

- Recommended for me
- Recently updated
- Trending
- Most viewed
- Most watched
- Market cap
- Volume
- Risk level
- Newest
- Campaign priority

## 9. AI Insight Requirements Direction

AI should not be a generic chatbot layer on the homepage. It should increase collection comprehension and help users decide where to go.

Recommended AI surfaces:

1. Collection summary
   - "This collection groups tokenized public equities, useful for tracking onchain exposure to US-listed companies."

2. Personalized reason
   - "Recommended because you viewed USDT and Stock Tokens this week."

3. Change summary
   - "3 tokens were added, 2 moved more than 5 percent, and the collection was updated Oct 1."

4. Safety summary
   - "18/24 tokens are verified. 2 have limited liquidity. Review before sending."

5. Next-step suggestion
   - "Start by watching this collection" or "Open top verified token."

Design requirement:

AI insights should be short, attributed, expandable, and actionable. They should not replace raw data.

## 10. Operability Requirements Direction

Marketing and product teams need a homepage console or CMS-like configuration model.

Recommended content entities:

- Campaign
- Hero poster
- Collection
- Collection card
- Token list
- Insight module
- CTA
- Audience segment
- Locale variant

Recommended controls:

- Pin/unpin collection
- Reorder collection
- Schedule campaign
- Localize copy
- Attach poster image
- Attach CTA route
- Select audience
- Select preferred homepage mode: Spatial, List, or Auto
- Select Spatial campaign template: hub, orbit, guided path, spotlight, ambient poster
- Preview states
- Define fallback
- Track event mapping

Governance requirements:

- Clear owner: Marketing, Product, or System
- Review status: Draft, Scheduled, Live, Archived
- Compliance/safety review flag where needed
- Expiration date for campaigns
- Audit log for changes

## 11. Prioritized Findings V2

| Priority | Severity | Finding | Impact | Recommendation |
|---|---:|---|---|---|
| P0 | Critical | Homepage has campaign surfaces but no explicit campaign system | Marketing cannot reliably drive activation | Define campaign modules with CTA, audience, schedule, tracking, and collection linkage |
| P0 | Critical | Spatial View does not support the same campaign/business requirements as List View | The most differentiated mode cannot carry campaigns, AI insight, or conversion well | Add Spatial campaign templates, insight panels, campaign nodes, and mode-agnostic content entities |
| P0 | Critical | Collections show icons/names but not user motivation | Users do not know why to explore | Add summaries, insights, metrics, risk, and next actions to collection cards |
| P0 | Critical | AA/no-seed onboarding advantage is under-communicated | Users may assume traditional wallet friction | Add compact passkey/no seed phrase/no extension confidence copy near CTA |
| P1 | High | Filters reflect internal taxonomy, not discovery intent | Users cannot easily find interesting tokens | Add intent, risk, network, market, personal, and campaign filters |
| P1 | High | No visible personalization layer | Returning users lack habit-forming utility | Add For You collections, watched collections, holdings-based recommendations |
| P1 | High | AI insights have no designed home | Future AI output may become clutter | Define collection insight, change summary, safety summary, and next-action components |
| P1 | High | Hero poster is a visual asset, not an activation module | Campaign attention does not convert | Pair hero with reason, CTA, linked collection, and "why now" insight |
| P1 | High | Spatial View and List View are separate modes, not complementary lenses | Users choose between emotion and utility | Build a shared content model rendered differently per mode |
| P2 | Medium | Collection metadata is operational, not user-facing | Information exists but does not aid decisions | Keep metadata for transparency, but prioritize decision metadata |

## 12. Revamp Planning Recommendation

For the PRD phase, frame the homepage revamp around this product thesis:

> The homepage is the operating surface for token discovery. It must let marketing run campaigns, let users discover relevant tokens, let AI explain why collections matter, and let account abstraction make the first action feel lightweight.

Recommended PRD modules:

1. Campaign Hero System
2. Spatial Campaign And Discovery System
3. Two-Mode Homepage Content Model
4. Collection Card / Spatial Node 2.0
5. Collection Detail 2.0
6. Discovery Filter/Sort System
7. Personalization Rules
8. AI Insight Components
9. Lightweight AA Onboarding CTA
10. Anonymous/New/Returning Homepage States
11. Marketing Operations Console Requirements
12. Measurement And Event Taxonomy

## 13. Success Metrics

Marketing operations:

- Campaign publish frequency
- Campaign CTR
- Campaign-to-collection click-through
- Campaign-to-account creation
- Time to publish/update campaign

Discovery:

- Collection card CTR
- Spatial node selection rate
- Spatial-to-List switch rate
- List-to-Spatial switch rate
- Campaign engagement by mode
- Collection detail open rate
- Token detail open rate from collection
- Filter usage rate
- Sort usage rate
- Search-to-token success rate

Personalization:

- For You collection CTR
- Watch/save collection rate
- Returning user collection engagement
- Day 1 / Day 7 return rate
- AI insight expand/click rate

Activation:

- Create account CTA click-through
- Passkey account completion
- First watch/save
- First receive/claim
- First Send by Link

## 14. Open Questions For PRD

1. Which homepage module has highest business priority: campaign conversion, account creation, or token discovery?
2. Should marketing be able to publish hero posters directly, or should Product approve every campaign?
3. What is the first personalized signal available before login: locale, referrer, clicked collection, viewed token, or campaign source?
4. What signed-in signals are available: holdings, watched tokens, sent links, claimed links, transaction history, token views?
5. What AI sources are allowed: token metadata, price/market data, internal collection configs, onchain activity, user behavior?
6. What AI risk boundaries are required, especially around financial interpretation?
7. Should Spatial View remain the default homepage mode, or should default mode be campaign/user-context dependent?
8. What campaign templates should Spatial View support first: hub, orbit, guided path, spotlight, or ambient poster?
9. Should marketing be able to choose default mode per campaign?
10. What collection metadata must be admin-editable vs system-generated?
11. Which actions require account creation, and which should stay anonymous?

## 15. Final Recommendation

Proceed to PRD with a sharper scope than V1:

> Homepage Revamp = Two-mode, campaign-operable, AI-assisted, personalized token discovery with lightweight AA onboarding.

The homepage should not become a heavy wallet landing page. It should preserve the lightweight browser feel, but add enough information and motivation for users to know what to explore, why it matters, and what action to take next.

The two modes should be treated as complementary:

- Spatial View: immersive, memorable, campaign-capable token universe.
- List View: scannable, information-rich, filterable collection browser.

Both modes must support the same value propositions and requirements: campaign operation, AA onboarding, collection discovery, personalization, AI insight, and measurable activation.
