# Temporary Handoff: Direction 3 Scroll-Based Onboarding Prototype

Date: 2026-04-29  
Purpose: implementation handoff for Claude to build the new Direction 3 prototype  
Target concept: replace the current Direction 3 activation-first prototype with a scroll-led onboarding experience that transitions into the homepage

## 1. What Changed

Direction 3 should no longer behave like a conventional CTA-first onboarding page.

It should become:

- a guided education experience;
- a scroll-led narrative;
- a product entry sequence that lands users inside the homepage;
- a smoother bridge into signup.

Core shift:

- from `hero -> CTA -> explain later`
- to `educate -> build confidence -> reveal collections -> land in home state -> signup to continue`

## 2. Core Thesis

Direction 3 should teach users the product through motion and progression, not static feature cards.

The page should feel like users are entering the product while scrolling.

It should borrow from:

- Apple product storytelling:
  - simple promise first;
  - short chaptered sections;
  - progressive reveal from abstract value to concrete product state.
- Pally-style scroll structure:
  - persistent product stage;
  - repeated product reveal while the story changes;
  - controlled scroll transitions instead of long static marketing blocks.

## 3. Values To Teach While Scrolling

Use these 3 values as the narrative spine:

1. `Send to anyone`
2. `Access anywhere`
3. `Multi-chain account`

Important:

- these are user-facing values;
- do not lead with technical capability labels like passkey or gas abstraction;
- passkey and other system cues can appear as supporting proof, not as the headline of the story.

## 4. Target Experience

The prototype should feel like:

- a scroll-driven narrative;
- one visual stage that evolves as the user moves downward;
- a transition from abstract value to actual product surface;
- signup appearing at the moment users already want to continue.

It should not feel like:

- a traditional landing page;
- a stack of feature cards;
- a long onboarding education page;
- a static hero with sections below;
- a normal “marketing first, product later” page.

## 5. Scene Structure To Implement

Build Direction 3 as a 6-scene scroll sequence.

### Scene 1: Entry

Headline:

- `A lighter way to start onchain`

Support line:

- `Explore tokens, move value, and create your account only when you're ready.`

Visual:

- quiet abstract token field;
- subtle central node;
- no heavy UI yet.

Goal:

- establish tone;
- avoid wallet jargon;
- create curiosity.

### Scene 2: Send to anyone

Headline:

- `Send to anyone`

Support line:

- `Share value with a link, without forcing the receiver into a wallet-first flow.`

Visual:

- value moves from one node to another;
- expands outward into multiple recipient nodes;
- one node can represent a shared link state.

Goal:

- start with the most intuitive and human value;
- make the product feel immediately useful.

### Scene 3: Access anywhere

Headline:

- `Access anywhere`

Support line:

- `Your account works on the web, without traditional wallet setup ceremony.`

Visual:

- same account node persists;
- surrounding frame or environment changes;
- imply browser-native continuity rather than literal device mockups if possible.

Goal:

- reduce setup anxiety;
- communicate lightness and availability.

### Scene 4: Multi-chain account

Headline:

- `Multi-chain account`

Support line:

- `One lightweight account layer for exploring collections across chains.`

Visual:

- central node branches into multiple chain paths;
- chain paths begin forming collection clusters;
- chain identity can be suggested lightly, not over-labeled.

Goal:

- expand user understanding from simple account to network-wide account model.

### Scene 5: Collections emerge

Headline:

- `Start with collections, not setup`

Support line:

- `Browse what matters first, then create your account when you want to continue.`

Visual:

- branch paths resolve into actual collection clusters;
- one featured collection becomes selected;
- a selected panel or sidebar begins appearing.

Goal:

- transition from education into actual homepage behavior.

### Scene 6: Land in homepage state

Final state:

- real homepage entry state;
- ideally a Spatial or merged Spatial/List home surface;
- one featured collection already selected;
- one clear contextual CTA.

CTA options:

- `Create with passkey to continue`
- `Create account to save this collection`

Goal:

- signup becomes continuation, not interruption.

## 6. Interaction Model

Use one persistent visual stage across the scroll.

Do:

- keep the main visual area sticky or persistent;
- let copy and visual emphasis change chapter by chapter;
- morph the same stage from abstract value scene into product scene;
- use scroll to drive transitions between scenes.

Do not:

- fully reset the composition every section;
- use isolated card sections with unrelated layouts;
- make each scene feel like a separate landing-page block.

## 7. Spatial Logic

Direction 3 should still incorporate the spatial idea of collections.

That means:

- collections should gradually emerge from the scroll story;
- spatial clustering should feel like the natural destination of the narrative;
- the user should feel they have entered the token space by the end;
- the end state should visibly connect to the real homepage concept.

The spatial concept should not appear only at the end as a sudden unrelated screen.

## 8. Relationship To Existing Directions

Direction 3 is still activation-first.

But now it should be:

- activation through immersion;
- activation through progressive proof;
- activation through landing inside the product.

It should not become:

- Direction 1 with more onboarding text;
- Direction 2 with the same merged shell as the main concept.

Direction 2 still owns:

- merged Spatial/List shell;
- persistent collection sidebar as the central homepage pattern.

Direction 3 may land into a homepage state that resembles Direction 2 or Spatial home at the end, but the main concept is the scroll narrative, not the shell itself.

## 9. What To Keep From The Current Direction 3 Prototype

Keep if useful:

- strong first-viewport clarity;
- lightweight tone;
- clear signup language;
- some of the onboarding proof concept.

Replace or rethink:

- static cue-card-first structure;
- hero-first onboarding block as the main experience;
- separate explanation modules that do not connect to the product surface;
- any layout that feels like a standard marketing landing page.

## 10. Output Expectations

Claude should implement a new Direction 3 prototype that:

- uses scroll to move through the 6 scenes;
- feels immersive and intuitive;
- visually teaches the 3 values:
  - Send to anyone
  - Access anywhere
  - Multi-chain account
- resolves into a real homepage state;
- uses signup as the final continuation step.

## 11. Implementation Notes

- keep it visually premium and calm;
- avoid noisy parallax gimmicks;
- motion should feel intentional and controlled;
- copy should stay short;
- the final state must still fit the broader homepage system direction;
- if possible, support both desktop and a reasonable mobile fallback.

## 12. Success Criteria

The prototype is successful if:

- users understand the product through the scroll itself;
- the 3 values feel intuitive and memorable;
- the final transition into collections feels smooth;
- signup feels like the next logical step;
- the prototype feels more like entering a product than reading a landing page.
