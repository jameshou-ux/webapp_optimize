# web.token.im Audit Report

Audit date: 2026-04-28, America/Toronto  
Scope: `https://web.token.im/` homepage, token exploration, account entry, settings, and first-time/returning user journeys  
Inputs: local project context files, live website inspection in Chrome, existing `imtoken-web-evaluation.html` diagnostic

## 1. Executive Summary

The current website is visually distinctive, especially the Spatial homepage, but the product story and activation path are still disconnected from the stated positioning:

> imToken Web should be a lightweight browser portal to tokens: a just-in-time way to explore, receive, and use tokens without installing a wallet first.

Today, the homepage behaves primarily as a token collection browser. That is useful after a user already understands the product, but it does not answer the first-time visitor's core questions:

- What is this?
- Why should I create an account?
- What can I do here that I cannot do in a normal wallet, exchange, or block explorer?
- Why is this safe enough to try?
- What should I do first?

The strongest product ideas in the project context are not visible enough on the live homepage:

- Browser + internet connection = access from anywhere
- Passkey account creation without seed phrase
- Send by Link for token sharing through Web2 channels
- Gas abstraction / paymaster support
- Token collections as a way to understand the token universe

The top priority should be revamping the homepage from an atmospheric token visualization into a segmented activation surface:

- Anonymous users: explain value, build trust, and convert to first action
- New users after account creation: drive first receive/send/explore action
- Existing users: return quickly to holdings, activity, send, receive, and watched token collections

## 2. Methodology

Reviewed local context:

- `CLAUDE.md`
- `0_Project Context/imToken webapp project bkg.md`
- `0_Project Context/imtoken-web-evaluation.html`

Inspected live website:

- Homepage in Spatial view
- Homepage in List View
- Search modal
- Token detail page, using `USDT`
- Settings and Preferences
- Language switching between Simplified Chinese and English
- Account creation/sign-in entry modal
- Install app prompt

Account creation was not completed. Creating an account would create a persistent passkey/account and was not required to identify the homepage and onboarding issues in this phase.

## 3. Product Positioning Gap

### Intended Positioning

From project context, imToken Web is:

- A web portal to tokens
- A lightweight application
- An explorer interface to tokens and blockchain
- Internet-required and browser-first
- Not just another crypto wallet
- Not a key manager
- Not a static website
- Not pre-install required

The larger vision is:

- "The Perfect Token Journey"
- Anyone can access the tokenized world from a browser
- Token functions should feel native to the open internet
- Send via Link should allow anyone to send tokens to anyone without requiring the receiver to already have a wallet

### Current Homepage Positioning

Observed hero:

- "Home of Tokens"
- "Digital assets under control"
- Spatial token bubbles or List View collections

This message is too generic. "Digital assets under control" sounds like a wallet/security promise, but the product wants to be more than a wallet. It does not communicate the browser-first breakthrough, passkey onboarding, gas abstraction, or Send by Link.

### Gap

The product concept is strong, but the page does not make the concept legible. The current page shows token categories before it establishes why a first-time user should care.

Severity: Critical

Recommendation: The homepage must lead with a concrete behavior promise, not a brand slogan. Example positioning direction for later PRD/prototype:

> Explore and use tokens from your browser. Create a passkey account in seconds, receive tokens by link, and start without a seed phrase.

## 4. First-Time User Audit

### First Impression

For an anonymous visitor, the page is visually polished but unclear. The Spatial bubbles create curiosity, but the visitor receives almost no explanation of the product model. The homepage assumes the user already understands token collections and imToken Web.

Observed issues:

- The primary visual is decorative before it is useful.
- The page does not explain what a first-time user can do without installing a wallet.
- The Create account button exists in the header, but it is not framed as the primary next step.
- There is no guided path for "I received a token link", "I want to explore tokens", or "I want to create a browser account".
- The product benefits are hidden in Settings/About or account modal copy, not made visible on the homepage.

### Account Entry

The account modal says:

- "Start using your dedicated account"
- "Create a self-custodial account, unlock millions of tokens, permissionless"
- Input account name
- Create account
- Sign in
- Terms and privacy text

The modal is closer to the actual value proposition than the homepage, but it still starts too late. The user has to choose Create account before learning enough about:

- What a passkey account is
- Whether there is a seed phrase
- Whether this is custodial
- What happens after account creation
- Whether they need gas/native token
- What they can do first

Severity: High

Recommendation: Move the education and trust-building before the modal. Account creation should feel like the natural continuation of a clearly explained first journey, not the user's first moment of real product comprehension.

### Search And Token Exploration

Search is useful and fast enough for token discovery, but it exposes crypto complexity immediately:

- Multiple tokens with the same symbol
- Different chains/networks
- Contract addresses
- Similar or suspicious-looking assets

For a first-time user, this is a risky moment. Search results need stronger safety, network, and canonical-token cues.

Severity: Medium

Recommendation: Search should support beginner-safe defaults: canonical badges, network filters, risk flags, and plain-language explanations.

## 5. Existing User Audit

Existing users likely come back for:

- Holdings
- Recent activity
- Send/receive
- Claimed links
- Token details
- Watchlists or collections

The current product partially supports this through token detail pages and collection browsing, but the homepage is not clearly state-aware.

### Returning User Strengths

- Token detail page has useful modules: price, market information, collection membership, token safety, about, recent activity.
- Search can take a knowledgeable user directly to a token.
- List View is more scannable than Spatial view for repeated browsing.
- Preferences support theme, homepage view, language, and currency.

### Returning User Weaknesses

- Signed-out state dominates even when a user is trying to inspect functional pages.
- Recent activity on token detail says "please sign in", but does not explain what signing in unlocks.
- There is no visible dashboard promise for returning users: holdings, saved tokens, links sent, claim history, activity, or alerts.
- Homepage does not distinguish anonymous browsing from logged-in utility.
- List View is hidden behind Preferences, but it is likely the more usable mode for repeated visits.

Severity: High

Recommendation: Define three homepage states:

- Anonymous: product story + activation
- New account: activation checklist
- Returning account: utility dashboard plus token universe

## 6. Journey Audit: Activation, Onboarding, Retention

### Activation

Activation should be the first meaningful action that proves the product's value. For imToken Web, likely activation events are:

- Create passkey account
- Receive or claim a token
- Send by Link
- Search and save/follow a token collection
- Open token detail and understand safety/market context

Current activation problem:

The homepage gives the user browsing affordances, but not a guided activation goal.

Severity: Critical

Recommendation: Pick one primary activation path for anonymous homepage traffic. Best candidate:

1. Learn the value in one screen
2. Create passkey account
3. Receive a demo/token/link or inspect a safe token collection
4. Try Send by Link

### Onboarding

Current onboarding is account-modal-first. It does not provide enough confidence before the user is asked to create an account.

Missing onboarding content:

- No seed phrase explanation
- No passkey recovery expectation
- No gas abstraction explanation
- No "what happens after this" preview
- No safe beginner path
- No Send by Link demonstration

Severity: Critical

Recommendation: Onboarding should be a product journey, not a modal. Use the homepage to preview the exact first 60 seconds:

1. Create browser account with passkey
2. See your token home
3. Receive/claim token
4. Send token by link
5. Return to activity/holdings

### Retention

Retention comes from repeated utility, not visual novelty. The homepage currently over-invests in the token universe visualization and under-invests in habit-forming utility.

Potential retention hooks:

- Watchlist/collections
- Holdings changes
- Recent activity
- Claim/send link history
- Token safety alerts
- RWA/stablecoin collection updates
- "Continue where you left off"

Current retention gap:

There is no visible reason for a returning user to open the homepage daily unless they already use it as a token browser.

Severity: High

Recommendation: For existing users, homepage should prioritize:

- My Holdings
- Recent Activity
- Pending sent/claim links
- Saved collections
- Token alerts
- Quick Send/Receive

## 7. Homepage Spatial Interaction Audit

### What Works

- The Spatial view creates a distinctive identity.
- It supports the "Home of Tokens" metaphor more strongly than a generic dashboard.
- It can visually express the token universe and token collections.
- It has enough novelty to be memorable.

### What Fails

- The bubbles do not communicate the product's key value.
- The hierarchy is unclear: the visual centerpiece competes with the headline and account actions.
- Labels are small and low-contrast.
- The interaction model is not self-evident.
- It is unclear whether bubbles are decorative, navigational, or data-driven.
- It does not explain why these token collections matter to a beginner.
- It does not connect to Send by Link, passkeys, gas abstraction, or just-in-time access.
- It hides scannable content that List View exposes more effectively.

Severity: Critical

Recommendation: Keep Spatial view, but reposition it. It should become a functional "Explore the Token Universe" module after the product promise is established, not the whole anonymous homepage.

## 8. List View Audit

List View is more usable than Spatial view for comprehension:

- The "Welcome to Wall Street 2.0" card immediately gives one topical theme.
- "All collections" makes the page structure clearer.
- Cards are easier to scan than floating bubbles.
- The page has scrollable content and an end state.

However, it still fails as an activation homepage:

- The hero still says only "Home of Tokens / Digital assets under control".
- There is still no strong primary CTA in the body.
- It introduces Stock Tokens before explaining imToken Web.
- It is a collection browser, not a product onboarding surface.

Severity: High

Recommendation: Borrow List View's clarity for the revamp. Use Spatial as a high-value interactive preview, not as the default first explanation.

## 9. Token Detail Audit

Observed token detail page for USDT:

- Price and market information
- Recent activity gated behind sign-in
- Collection membership
- Token safety section
- About section
- Network/token identity indicators
- Share/open in imToken App actions

This page has stronger product utility than the homepage. It demonstrates that imToken Web can become a useful token portal.

Problems:

- "Recent activity: please sign in" is a dead state, not a conversion state.
- The page does not explain what signing in unlocks.
- Safety/about sections are compact but under-explained for new users.
- The bottom CTA favors opening imToken App, which can undermine the web-first positioning.

Severity: Medium

Recommendation: Token detail should contain contextual activation prompts:

- "Create a browser account to track this token"
- "Receive this token"
- "Send this token by link"
- "Add to collection/watchlist"

## 10. Settings And Trust Audit

Settings contains important positioning copy:

> Welcome to imToken Web, centered around tokens. We provide an open, lightweight app that simplifies token exploration and lets digital asset owners enjoy diverse token functions anytime, anywhere.

This copy is closer to the project context than the homepage, but it is hidden in Settings.

Settings also contains:

- Preferences
- Help
- Terms
- Privacy
- Install app
- Download imToken
- Social links
- Regulatory disclaimer

Problems:

- Trust material is not visible before account creation.
- Regulatory disclaimer appears as a warning at the bottom rather than being balanced by safety and self-custody explanations.
- Help is present but not integrated into onboarding.
- PWA install prompt appears, but the product positioning says no pre-install required. The install prompt needs careful framing as optional convenience.

Severity: Medium

Recommendation: Move the useful About language, trust cues, and FAQ into the anonymous homepage. Keep install as optional after value is proven.

## 11. Prioritized Findings

| Priority | Severity | Finding | Impact | Recommended Direction |
|---|---:|---|---|---|
| P0 | Critical | Homepage does not explain the browser-first token access proposition | Anonymous users do not know why to create an account | Replace generic hero with explicit value proposition and primary activation CTA |
| P0 | Critical | Spatial bubbles dominate before product meaning is established | Visual novelty creates curiosity but not conversion | Move Spatial to an "Explore Token Universe" module below the activation hero |
| P0 | Critical | No clear activation journey | Users can browse but are not guided toward first meaningful value | Define first-run journey: create passkey, receive/claim, send by link, track activity |
| P0 | Critical | Passkey, gas abstraction, and Send by Link are not visible enough | Core differentiation is hidden | Add three capability cards plus a 30-second demo flow |
| P1 | High | Existing and anonymous users share the same homepage structure | The page serves neither segment well | Build state-aware homepage: Anonymous, New Account, Returning |
| P1 | High | Account modal asks for commitment before trust is built | First-time users may abandon | Add pre-account education and safety reassurance |
| P1 | High | Returning-user utility is underdeveloped | Weak retention loop | Prioritize holdings, activity, send/receive, sent links, saved collections |
| P1 | Medium | Search exposes token ambiguity without enough protection | Risky for beginners | Add canonical token cues, network filters, and risk explanations |
| P2 | Medium | Settings holds important product copy | Value proposition is buried | Promote About/FAQ/trust content to homepage |
| P2 | Medium | Install prompt competes with no-install positioning | Mixed mental model | Frame PWA install as optional convenience after onboarding |

## 12. Revamp Planning Direction

This is not the PRD yet. It is the recommended planning direction for the PRD phase.

### Core Page Strategy

The homepage should become the bridge between positioning and product use:

- First viewport: explain why imToken Web exists
- Second moment: show the first journey
- Third moment: make token exploration useful
- Fourth moment: build trust and answer objections
- Returning state: replace story with utility

### Recommended Homepage Structure

1. Hero: Browser-first token access
   - Clear headline
   - Short supporting line
   - Primary CTA: Create account with passkey
   - Secondary CTA: Explore tokens
   - Microtrust: self-custodial, no seed phrase, no app install required

2. First Journey Demo
   - Create account
   - Receive/claim token
   - Send by Link
   - Track activity

3. Three Key Product Capabilities
   - Passkey account, no seed phrase
   - Gas abstraction / paymaster support
   - Send by Link to anyone

4. Token Universe
   - Keep the bubble/spatial interaction here
   - Make bubbles clickable and explanatory
   - Pair with List View fallback
   - Use real categories: Stables, RWA, Stock Tokens, DeFi, Memes, Arbitrum

5. Trust And Safety
   - Self-custody explanation
   - Passkey recovery explanation
   - Token safety signals
   - Network support and roadmap
   - Terms/privacy/help

6. Returning User Dashboard
   - My Holdings
   - Recent Activity
   - Quick Send / Receive
   - Sent/Claim links
   - Watched collections
   - Alerts

### Spatial Interaction Role

The bubbles should not be removed. They should be given a clearer job.

Current job:

- Atmospheric visual identity

Recommended job:

- Interactive map of token collections
- A way to discover token categories
- A visual preview of "Home of Tokens"
- A transition from education to exploration

Required improvements:

- Stronger labels
- Clear hover/click affordance
- Selected state
- Linked detail panel
- Real data indicators
- Reduced motion option
- Mobile fallback
- List View pairing

## 13. Suggested Success Metrics

For the PRD phase, define metrics around the journey rather than page views:

- Anonymous homepage to Create account click-through rate
- Create account modal completion rate
- Passkey account creation success rate
- First receive/claim completion rate
- First Send by Link creation rate
- First token detail save/watch rate
- Day 1 and Day 7 return rate
- Returning user quick-action usage
- Search-to-token-detail success rate
- Spatial bubble click-through and comprehension rate

## 14. Open Questions For Review

Before PRD, align on these:

1. What is the single primary homepage activation action: create account, claim token, explore token, or send by link?
2. Should Send by Link be the hero story, or one of three core capabilities?
3. Is the target first-time user crypto-native, wallet-curious, or token receiver from Web2 channels?
4. Should Spatial view remain the default for anonymous users, or become a secondary module?
5. What can imToken safely promise about gas abstraction/paymaster support at launch?
6. What should returning users see first: holdings, recent activity, token collections, or send/receive?
7. Is web.token.im intended to convert users to the imToken mobile app, or stand as a full web-first product?

## 15. Recommendation

Proceed to PRD with this framing:

> Revamp the web.token.im homepage into a state-aware activation surface that connects imToken Web's product positioning, token exploration, passkey account creation, and Send by Link into one coherent first journey.

The revamp should not be a visual refresh only. The main product change is to make the homepage explain, activate, and retain:

- Explain: why browser-first token access matters
- Activate: guide the first meaningful token action
- Retain: give returning users a useful home

