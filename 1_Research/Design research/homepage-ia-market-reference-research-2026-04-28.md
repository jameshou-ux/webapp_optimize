# Homepage IA Market Reference Research

Date: 2026-04-28  
Research mode: live desktop review with Computer Use, plus delegated Mobbin-pattern scan  
Primary revamp context: imToken Web homepage, Spatial View/List View, account-abstraction onboarding, marketing-operable campaigns, personalized token discovery, AI insights

## 1. Research Goal

This research looks at how adjacent web3 and finance products structure their first-screen and home/discovery information architecture. The intent is not to copy visual style. The intent is to identify reusable IA patterns for a homepage that needs to be:

- lightweight enough for first-time users;
- useful before account creation;
- stronger at token motivation than icon/name grids;
- operable by marketing for campaigns and curated collections;
- extensible for personalization, filtering, sorting, and AI insights;
- expressive enough to preserve imToken Web's Spatial View differentiation.

## 2. References Reviewed

### Live References

- Coinbase Wallet web app: `https://wallet.coinbase.com/`
- Coinbase Smart Wallet help: `https://help.coinbase.com/en/wallet/getting-started/smart-wallet`
- Uniswap app home and Explore: `https://app.uniswap.org/`, `https://app.uniswap.org/explore`
- Zerion app connect, Explore, and Featured Dapps: `https://app.zerion.io/connect-wallet`, `https://app.zerion.io/explore`, `https://app.zerion.io/explore/dapps`

### Mobbin / Pattern Scan

Mobbin target: `https://mobbin.com/discover/apps/web/latest`

Keywords used by sub-agent: `web3`, `dashboard`, `wallet`, `crypto`, `portfolio`, `token`, `discover`, `marketplace`, `finance`, `campaign`, `collections`, `onboarding`, `personalization`, `AI insights`.

Access limitation: Mobbin's public latest web apps page was reachable, but the app catalog and screenshot-level IA details were not sufficiently exposed for direct keyword extraction in the available environment. The pattern scan therefore used accessible adjacent references surfaced around the same categories: Magic Eden, OpenSea, CoinStats, Nansen, and Robinhood.

## 3. Competitor IA Snapshots

### 3.1 Coinbase Wallet / Smart Wallet

Observed IA:

- Global top bar: logo, wide search, create wallet, connect.
- Primary home tabs: "Hot" and "Learn".
- First content module: large editorial/campaign feature with visual poster, campaign title, short description, and direct CTA such as Mint.
- Secondary content: "Trending onchain" shelf with item cards and action buttons such as Mint or Play.
- Smart-wallet help page frames onboarding around passkeys, no separate app or extension requirement, cross-device access, balances/assets/transactions/explore, and network-fee sponsorship or batching.

What this means:

Coinbase treats the wallet homepage less like a static landing page and more like an onchain app portal. The IA creates three immediate entry points: search intent, account intent, and editorial discovery. Smart-wallet messaging stays practical: reduced setup friction, passkeys, no extension requirement, and sponsored/batched transaction benefits.

Implication for imToken Web:

- AA onboarding should appear as compact confidence copy near action moments, not as a heavy education block.
- A campaign is strongest when it has a visible destination and a direct action, not only a poster.
- Spatial View needs an equivalent of the Coinbase hero campaign, but rendered as a spatial hub or spotlight rather than a banner.
- "Hot" and "Learn" suggest that discovery and education can be parallel home lenses without forcing users into a long onboarding flow.

### 3.2 Uniswap

Observed IA on app home:

- Global nav: Trade, Explore, Pool, Portfolio.
- Global search: tokens, pools, and wallets.
- Primary action: Connect.
- First-screen content: swap tool as the dominant interaction, with a simple value statement below.
- Ambient market context: token symbols and movement cues surrounding the swap module.
- Below first screen: protocol positioning, stats, product ecosystem cards, help/docs/social links.

Observed IA on Explore:

- Top stat strip: volume, TVL, version-level TVL.
- Object tabs: Tokens, Auctions, Pools, Transactions.
- Chain filter: all networks plus individual networks.
- Time range sorting: 1H, 1D, 1W, 1M, 1Y, all-time volume.
- Search field: token-specific search.
- Dense table: rank, token, price, movement, FDV, volume, chart.

What this means:

Uniswap separates the primary job-to-be-done from the discovery terminal. The app home is task-first: swap. Explore is data-first: compare, filter, sort, inspect. Both use the same global shell, search, and connect action, but their information density differs dramatically.

Implication for imToken Web:

- List View can become imToken's decision and comparison lens, similar to Uniswap Explore, without making Spatial View carry table density.
- Spatial View can preserve immersion while exposing selected insight, not full tabular comparison.
- Filters should map to user decisions: chain, time window, activity, relevance, risk/trust, campaign status.
- A token discovery homepage should make the difference between "browse" and "decide" explicit.

### 3.3 Zerion

Observed IA on connect state:

- Persistent left rail: Explore, Rewards, Favorites, Swap, Settings.
- Product promise in rail: "Your crypto wallet for everything onchain."
- Prominent Connect Wallet CTA, but public navigation remains available.
- Global search: asset, wallet, domain, or identity.
- Wallet connection options plus "Track any wallet" input.
- Download/app promotion is present but secondary.

Observed IA on Explore:

- Public Explore page accessible without wallet connection.
- Sections include Featured Dapps, Top Movers, Market, Custom Collections by Zerion, AI Tokens on Base, Memecoins, ETH liquid staking/restaking tokens, and DeFi tokens by market cap.
- Each section has a small set of items and a "See all" route.
- Featured Dapps has a dedicated grid page.

What this means:

Zerion uses a portfolio-dashboard shell while still making anonymous discovery valuable. The product does not block all value behind connect. Search, track-any-wallet, and Explore let users begin with observation before committing.

Implication for imToken Web:

- imToken can support public exploration first, then progressively personalize after account creation or sign-in.
- The homepage should include stable buckets that users can learn over time: campaigns, top movers, collections, watch/favorites, insights.
- "Track any wallet" is a useful pattern to study conceptually: it turns passive curiosity into a lightweight activation step.
- Spatial View should not hide the product taxonomy; it needs stable anchors or companion panels so users know what they are exploring.

## 4. Cross-Market IA Patterns

### Pattern 1: Home Is A Command Surface, Not A Brochure

Coinbase, Uniswap, and Zerion all make the first screen functional. Coinbase promotes mint/play opportunities, Uniswap puts swap at the center, and Zerion enables search/explore/connect.

Direction for imToken:

The homepage should not become a marketing landing page. It should remain a token discovery command surface where campaigns, collections, search, account creation, and insight all lead to action.

### Pattern 2: Search Is A Primary Navigation Layer

All reviewed products place search high in the hierarchy. Search spans tokens, apps, pools, wallets, domains, or identities depending on product scope.

Direction for imToken:

Search should remain a first-class homepage primitive and should eventually support token, collection, campaign, chain, and wallet/account intents. Spatial View should also make search results visible in spatial context, not only as a flat modal.

### Pattern 3: Public Value Before Connection

Zerion and Uniswap both expose useful discovery before wallet connection. Coinbase Wallet exposes campaign/trending content before account creation.

Direction for imToken:

Anonymous users should get a meaningful homepage: campaigns, curated collections, top movers, explainable token themes, and lightweight exploration. Account creation should unlock personalization and actions, not be required just to understand the product.

### Pattern 4: Campaigns Need Structured Destinations

Coinbase Wallet's editorial hero includes direct action. Marketplace references such as Magic Eden and OpenSea show that drops/campaigns work better when they have detail pages or structured sections: schedule, eligibility, creator/context, assets, FAQ, and CTA.

Direction for imToken:

Marketing-operable campaigns should be modeled as structured content objects. A campaign should render as a List View banner, Spatial View hub, selected-state panel, collection pin, or detail page using the same source metadata.

### Pattern 5: Discovery Lists Need Reasons, Not Just Categories

Zerion labels collections by intent and theme: Top Movers, Market, AI Tokens on Base, Memecoins, liquid staking/restaking, DeFi tokens. Uniswap labels by market object and measurable sort state.

Direction for imToken:

Collections should answer "why this matters" at scan level. Examples: trending now, campaign eligible, stable payments, RWA exposure, high activity, watched by you, held by you, newly listed, AI-highlighted.

### Pattern 6: Dense Comparison Belongs In A Dedicated Lens

Uniswap Explore proves that serious token discovery needs dense metrics, sort, filter, and charts. But Uniswap keeps that separate from the simple swap-first home.

Direction for imToken:

List View should carry the heavier comparison work. Spatial View should carry exploration, relationship, and motivation. Both should share the same data model but not the same density.

### Pattern 7: Personalization Is A Retention Layer

Zerion has Favorites and Rewards in the persistent shell. Robinhood-style finance references use cards and watchlists to surface personalized updates above asset lists.

Direction for imToken:

Returning users should see changed-since-last-visit signals, watched collections, relevant campaigns, holdings-aware recommendations, and AI explanations. This should affect both List ordering and Spatial layout emphasis.

### Pattern 8: AI Should Explain Context Inline

Adjacent AI/portfolio products position AI as a way to interpret portfolio, market, social, and onchain data. The useful pattern is not "add chat"; it is "make unclear data explain itself."

Direction for imToken:

AI insights should appear as inline reasons and summaries: "why this collection appears," "what changed," "what to watch," "why this token is in this cluster," and "what action this campaign unlocks."

## 5. Reference Matrix

| Reference | Homepage IA | Discovery Model | Campaign/Promotion | Account Entry | Best Borrowed Principle |
| --- | --- | --- | --- | --- | --- |
| Coinbase Wallet | Search + create/connect + Hot/Learn tabs + editorial hero + trending shelf | App/opportunity portal | Large hero and action-based cards | Create wallet / Connect | Campaigns should lead to concrete onchain actions |
| Coinbase Smart Wallet | Help/education IA around passkey and app-less setup | Not a discovery page | Not campaign-led | Passkey smart wallet | AA value should be explained as reduced friction at the moment of action |
| Uniswap Home | Transaction tool first, nav/search/connect always visible | Task-first, then product ecosystem | Minimal homepage promotion | Connect | Keep the primary job obvious |
| Uniswap Explore | Metrics + object tabs + chain/time filters + table | Market terminal | None prominent | Connect | Dense comparison needs explicit controls and metrics |
| Zerion Connect | Left rail + search + connect + track wallet | Portfolio-dashboard shell | Download/API secondary | Connect / track wallet | Public value before wallet connection |
| Zerion Explore | Dapps + movers + market + custom collections | Modular discovery feed | Curated dapp placement | Connect remains visible | Collections become useful when labeled by user intent |
| Magic Eden / OpenSea patterns | Marketplace home with drops/stats/rankings | Top/trending/filterable lists | Drops/campaign pages | Connect/create | Campaigns need detail structure, not just banners |
| Finance/watchlist patterns | Cards above watchlists/dashboard | Personalized update feed | Feature/news cards | Account based | Personalized cards should explain why they appear |

## 6. Implications For imToken Spatial View

### 6.1 Make Spatial View Campaign-Capable

Spatial View needs a native campaign pattern. A campaign should be visible as one or more of:

- campaign hub bubble;
- spotlight orbit around related collections;
- guided path from campaign to collection to action;
- ambient poster/background with fixed CTA panel;
- time-limited campaign badge;
- selected campaign panel with summary, eligibility, CTA, and related tokens.

Reason:

List View currently has a hero-banner advantage. If Spatial View remains the default or signature experience, it must support the same business requirements without becoming a flat banner page.

### 6.2 Add A Companion Information Layer

Spatial View should not put long copy inside bubbles. Selecting a bubble or cluster should open a companion panel with:

- collection summary;
- reason for recommendation;
- campaign relationship;
- top tokens or movers;
- AI insight;
- primary action;
- secondary actions such as watch, compare, share, or open list.

Reason:

Competitor references show that motivation and action sit close together. Spatial interaction creates curiosity; the panel should turn curiosity into understanding.

### 6.3 Let Filters Reshape The Space

Filters in Spatial View should not only hide/show bubbles. They should change the spatial map:

- By Chain;
- By Momentum;
- By Personal Relevance;
- By Campaign;
- By Token Type;
- By Risk/Trust;
- By Activity Window.

Reason:

Uniswap's filters make comparison explicit. Spatial View can express the same logic visually through clusters, gravity, size, distance, and highlights.

## 7. Implications For imToken List View

### 7.1 Position List View As The Decision Lens

List View should become the place for:

- richer collection cards;
- sorting and filtering;
- campaign banners;
- market signals;
- AI summaries;
- comparison;
- personalized modules.

Reason:

Uniswap Explore and Zerion Explore show that dense discovery works when users have stable sections and controls. imToken's List View is the better container for that density.

### 7.2 Upgrade Collection Cards From Containers To Reasons

Collection cards should show more than token icons and names. Each card should expose:

- theme;
- short explanation;
- "why now" signal;
- top mover or representative token;
- campaign/personalization label;
- action state;
- last updated or activity cue.

Reason:

Zerion's "Top Movers", "AI Tokens on Base", and "Memecoins" demonstrate intent-based labels. Users need to know why a collection exists before deciding to explore it.

### 7.3 Separate Editorial, Personalized, And Market Logic

List View should avoid a single undifferentiated feed. Content should be labeled by source:

- Campaign;
- Curated by imToken;
- For You;
- Trending;
- Recently Updated;
- AI Insight;
- Watchlist/Holdings.

Reason:

Marketing operation and personalization can coexist only if users understand why something is shown. This is important for trust.

## 8. Directional Recommendations

1. Build one homepage content model that renders into both Spatial View and List View.

2. Treat campaigns as structured content, not posters. Every campaign needs metadata, CTA, targeting, timing, related collection/token, and fallback behavior.

3. Preserve public discovery before account creation. Account creation should unlock personalization, watching, claims, and actions.

4. Use AA messaging as a confidence cue: passkey, no seed phrase setup, no extension, lightweight account.

5. Make token motivation visible at scan level. Every collection should answer "why this, why now, why for me."

6. Make List View the compare/filter/sort lens, borrowing from market terminal patterns without making the homepage feel like an exchange.

7. Make Spatial View the explore/relationship/campaign lens, with a companion panel for explanation and action.

8. Use AI as an explanation layer inside existing modules, not as a separate generic assistant destination.

9. Design filters around user intent, not internal taxonomy. Suggested intents: trending, safe/stable, payments, yield, RWA, memecoins, AI, campaign eligible, held by me, watched, recently updated.

10. Make mode switching meaningful: Spatial = map/explore; List = scan/compare. The same campaign, collection, and insight should be recognizable in both modes.

## 9. Open Questions For Next Phase

- Should Spatial View or List View be the default for anonymous users?
- What are the first campaign types marketing needs to operate: partner campaign, token launch, ecosystem theme, seasonal poster, claim/activation, education?
- What collection metadata is already available versus needs creation: summary, signal, risk, token count, chain, updated date, campaign tag, AI summary?
- What personalization inputs are acceptable for V1: connected account, watched collection, browsing history, holdings, chain preference, campaign participation?
- Should campaign and AI labels be visually distinct to preserve trust?

## 10. Working Thesis

The strongest direction is not to choose between Spatial View and List View. The stronger direction is to make them two expressions of the same operable homepage system:

> Spatial View should create curiosity and relationship. List View should create clarity and decision confidence. Campaigns, collections, AI insights, filters, and personalization should be shared across both.

