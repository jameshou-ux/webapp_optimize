# imToken Web 首页改版 · Image2 草图生成页面结构文档

日期：2026-04-30  
来源：`4_Present/v2/homepage-redesign-outline-2026-04-30.md`  
用途：供后续输入 image2 / 图像生成模型，生成更详细的低保真或中保真页面草图。  
产品目标：让 imToken Web 首页从「已理解产品的人使用的 Token 可视化页」转向「匿名访客也能理解、信任并愿意开始的 Token 浏览器入口」。

## 0. 图像生成通用约束

### 0.1 产品定位必须体现

imToken Web 不是传统钱包官网，也不是静态营销页。它是 Token 的浏览器门户：

- 浏览器 + 网络连接即可访问 Token 世界。
- 用户可以探索 Token collections、创建 Passkey 账户、接收 Token、通过 Send by Link 发送 Token。
- 首页要让新访客理解：不需要先安装 app、插件或处理助记词。
- 视觉应体现「Token universe / browser-native access / just-in-time access」，但不能牺牲 CTA、信息层级和可读性。

### 0.2 画布建议

用于生成桌面草图：

- 尺寸：1440 x 1024 或 1440 x 1200
- 视角：完整网页界面截图，非海报，非营销 banner
- 风格：高质量低保真 wireframe 或中保真 product UI mockup
- 背景：浅色、中性、干净；避免暗黑霓虹、过强渐变、装饰性光球
- 布局：真实 web app 首页布局，包含导航、主内容、CTA、状态切换

用于生成移动草图：

- 尺寸：390 x 844 或 430 x 932
- 重点：首屏价值主张、主 CTA、领取链接入口、Explore/My Holdings 入口不要消失

### 0.3 统一导航结构

所有方向都应使用同一套导航骨架，除非方向本身是 Modal 覆盖态。

```text
[Logo] [搜索框]  [Explore | My Holdings]  [Spatial/List 切换，可选]  [登录] [创建账户]
```

导航设计要求：

- `Explore` 和 `My Holdings` 是最高层级主 Tab。
- `Explore` 表示公共探索与发现。
- `My Holdings` 表示个人持仓与活动，只在登录后有完整意义。
- `创建账户` 是填充主按钮，不应只是 header icon。
- `收到链接了？领取 Token` 应作为 header 下方、Hero 旁边或固定入口出现，用来承接分享/活动流量。

### 0.4 通用组件词汇

图像生成时建议保留以下英文产品术语：

- imToken Web
- Explore
- My Holdings
- Passkey
- Send by Link
- Spatial View
- List View
- Create account
- Claim token
- Token collections

中文说明可以出现在草图注释或模块标题中，但真实产品按钮建议用英文，以贴近当前国际化产品语境。

### 0.5 不要生成的内容

- 不要生成传统钱包官网 hero：大标题 + 抽象手机 mockup + 泛泛安全口号。
- 不要把页面做成静态营销 landing page。
- 不要让 Token 气泡只是装饰，必须有信息或行动入口。
- 不要让 `My Holdings` 成为匿名用户首屏中心。
- 不要隐藏主 CTA。
- 不要使用过多卡片堆叠，也不要把所有内容都放进玻璃拟态容器。

## 1. 方向 A1：沉浸式滚动叙事

### 1.1 目标

让首次访问用户通过滚动理解 imToken Web 的核心价值：从浏览器访问 Token、用 Passkey 创建账户、通过 Send by Link 发送/领取 Token，并最终进入 Explore 主界面。

适合生成的图像类型：

- 桌面端完整页面草图
- 滚动叙事首页的首屏 + 中段 + 末段合成图
- 也可以生成单张「长页面 wireframe」，展示 4 个章节纵向连续结构

### 1.2 页面结构

```text
┌──────────────────────────────────────────────────────────────┐
│ 顶部导航：Logo / Search / Explore / My Holdings / Create      │
├───────────────────────────────┬──────────────────────────────┤
│ 左侧叙事区 44%                 │ 右侧 sticky 视觉区 56%        │
│ Chapter 01                     │ Token universe preview       │
│ 大标题 + 说明 + CTA             │                              │
├───────────────────────────────┤                              │
│ Chapter 02                     │ Passkey visual transition    │
│ Passkey 账户价值                │                              │
├───────────────────────────────┤                              │
│ Chapter 03                     │ Send by Link flow visual     │
│ 发送链接/领取 Token             │                              │
├───────────────────────────────┤                              │
│ Chapter 04                     │ Transition to Explore        │
│ 创建账户 + 直接探索 + 领取入口    │                              │
└───────────────────────────────┴──────────────────────────────┘
```

### 1.3 首屏详细结构

左侧叙事区：

- 顶部小标签：`CHAPTER 01 / Browser-native token access`
- 主标题：`Explore and use tokens from your browser`
- 副标题：`Create a passkey account, receive tokens by link, and start without installing a wallet app or browser extension.`
- 主按钮：`Create account`
- 次按钮：`Explore tokens`
- 场景入口：`Received a link? Claim token`
- 滚动提示：细小向下箭头或 `Scroll to see how it works`

右侧 sticky 视觉区：

- 一个空间化 Token universe 预览。
- 中心不是 `My Holdings`，而是 `Start your token journey` 或 `Token collections`。
- 周围漂浮 8-12 个 Token/collection 节点。
- 每个节点最好带小信息：`USDT $1.00`、`RWA`、`Arbitrum`、`Stablecoins`、`Top mover +5.4%`。
- 视觉应像产品界面的一部分，不像纯装饰插画。

### 1.4 后续章节结构

Chapter 02：Passkey

- 标题：`Create with Passkey`
- 说明：`Use your device unlock to create an account. No seed phrase as the first step.`
- 视觉：指纹/面容识别图标、设备安全提示、账户创建成功小状态。
- CTA：`Create account in seconds`

Chapter 03：Send by Link

- 标题：`Send tokens like sending a link`
- 说明：`Generate a claimable link and share it through messages, email, WhatsApp, or QR code.`
- 视觉：发送方生成链接 -> 聊天消息气泡 -> 接收方点击 -> Claim token。
- CTA：`See Send by Link`

Chapter 04：Start exploring

- 标题：`Your token journey starts here`
- 说明：`Explore collections, receive your first token, or create an account to personalize your homepage.`
- 主按钮：`Create account`
- 次按钮：`Continue to Explore`
- 场景入口：`Received a link? Claim token`
- 视觉：右侧 sticky 区过渡为正式 Explore 主界面。

### 1.5 视觉层级

- 左侧文案是阅读主线，右侧视觉是证明与演示。
- 主 CTA 必须在每个章节可见或固定在左侧底部。
- `Received a link? Claim token` 必须比普通 footer link 更明显，但低于主 CTA。
- 页面不要显得像幻灯片；它应该是可交互 web app onboarding。

### 1.6 移动端适配

移动端不做左右分栏，改成章节卡片纵向排列：

```text
Header
Hero copy
Create account / Explore tokens
Token universe preview
Passkey section
Send by Link section
Claim token entry
Explore preview
```

移动端首屏必须包含：

- 产品一句话定位
- `Create account`
- `Received a link? Claim token`
- 一张紧凑 Token universe preview

### 1.7 可直接复制的图像生成 Prompt

```text
Create a detailed desktop web app wireframe for imToken Web, a browser-native token access portal. Design direction A1: immersive scroll-led onboarding. Canvas 1440x1200, light refined product UI, not a marketing landing page.

Layout: fixed top navigation with Logo, search, Explore tab, My Holdings tab, Create account filled button. Main area split into two columns: left 44% vertical narrative chapters, right 56% sticky visual product area.

Left column shows four stacked scroll chapters. Chapter 01 headline: "Explore and use tokens from your browser", subcopy about passkey account, receiving tokens by link, no wallet app or extension. Include primary button "Create account", secondary "Explore tokens", and link "Received a link? Claim token". Chapter 02: "Create with Passkey", no seed phrase. Chapter 03: "Send tokens like sending a link". Chapter 04: "Start your token journey", with CTA.

Right sticky visual area shows a functional token universe preview, not decoration: floating token collection nodes with labels like Stablecoins, RWA, Arbitrum, USDT $1.00, Top mover +5.4%. Show visual transitions for passkey and Send by Link flow. Clean hierarchy, readable text, precise spacing, product dashboard feel, subtle imToken brand cues.

Avoid dark neon crypto style, avoid generic wallet landing page, avoid abstract decorative bubbles without data.
```

## 2. 方向 A2：Modal 价值传递

### 2.1 目标

在不大幅改变当前主界面的前提下，用进入首页后的大尺寸 Modal 快速传递核心价值，并给用户两个明确出口：创建账户或跳过直接探索。

适合生成的图像类型：

- 桌面端 Modal overlay 状态
- Modal 4 张卡片总览图
- 移动端 onboarding carousel

### 2.2 页面结构

```text
┌──────────────────────────────────────────────────────────────┐
│ 背景：被虚化/压暗的 Explore Spatial View                       │
│                                                              │
│        ┌──────────────── Modal container ────────────────┐   │
│        │ Progress dots: ● ○ ○ ○                           │   │
│        │ Large visual panel                               │   │
│        │ Title + short copy                               │   │
│        │ [Back] [Next]                                    │   │
│        └──────────────────────────────────────────────────┘   │
│              [Create account]   [Skip, explore first]          │
│              Received a link? Claim token                      │
└──────────────────────────────────────────────────────────────┘
```

### 2.3 背景界面要求

背景不应完全看不见，需要隐约表达这是 imToken Web 主界面：

- 可见导航栏轮廓：Logo、Search、Explore/My Holdings、Create account。
- 可见 Spatial View 的 Token 气泡，但被轻微模糊或降低对比。
- 不要让背景信息抢过 Modal。

### 2.4 Modal 卡片结构

卡片 1：产品定位

- 标题：`A browser portal to tokens`
- 说明：`Explore, receive, and use tokens from any modern browser.`
- 视觉：浏览器窗口 + Token collection 节点。

卡片 2：Passkey

- 标题：`Create with Passkey`
- 说明：`Start with your device unlock. No seed phrase as the first step.`
- 视觉：Passkey 成功状态、设备保护、账户就绪。

卡片 3：Send by Link

- 标题：`Send tokens like a link`
- 说明：`Share a claimable link through message, email, QR code, or WhatsApp.`
- 视觉：链接从发送者到接收者，接收者点击 Claim。

卡片 4：行动出口

- 标题：`Start your token journey`
- 说明：`Create an account, explore public collections, or claim a token you received.`
- 主按钮：`Create account`
- 次按钮：`Explore tokens`
- 第三入口：`Received a link? Claim token`

### 2.5 交互状态

生成草图时可以表达这些状态：

- 卡片轮播 progress dots。
- 左右箭头或底部 Next 按钮。
- 右上角关闭 `X`。
- 最后一屏 CTA 更强。
- `Skip, explore first` 应存在，但视觉低于 `Create account`。

### 2.6 移动端适配

移动端 Modal 应近似全屏 onboarding：

- 顶部：关闭按钮 + progress dots。
- 中部：单张大视觉。
- 下方：标题、说明、主 CTA。
- 底部：`Skip, explore first` 和 `Received a link? Claim token`。

### 2.7 可直接复制的图像生成 Prompt

```text
Create a detailed desktop web app mockup for imToken Web, design direction A2: onboarding value proposition modal over the existing homepage. Canvas 1440x1024, light modern product UI, clear information hierarchy.

Background: blurred Spatial View of token universe with visible but subdued navigation: Logo, search, Explore, My Holdings, Create account. Floating token collection nodes in the background, softened.

Foreground: centered large modal, about 760px wide, with progress dots showing 4 carousel cards. Current card title: "A browser portal to tokens". Copy: "Explore, receive, and use tokens from any modern browser." Include a functional visual of a browser window connected to token collection nodes. Modal has next/back controls, close X, primary button "Create account", secondary "Skip, explore first", and link "Received a link? Claim token".

Also show small thumbnails or side hints for the other cards: Passkey, Send by Link, Start your token journey. The modal should feel like a product onboarding carousel, not an advertisement. Keep text readable and spacing precise.

Avoid dark neon crypto style, avoid generic wallet landing page, avoid decorative glassmorphism.
```

## 3. 方向 B1：Spatial + List 统一 Shell，信息增强

### 3.1 目标

保留 Spatial View 作为 imToken Web 的差异化资产，但让它承担实际探索和转化功能。Spatial 和 List 不是两套分离体验，而是在同一个 Shell 中共享导航、状态、Companion Panel 和行动路径。

适合生成的图像类型：

- 桌面端 Explore / Spatial View 主界面
- 选中 collection 后的 Companion Panel 展开态
- Spatial/List 切换 shell 对比图

### 3.2 页面结构

```text
┌──────────────────────────────────────────────────────────────┐
│ Top nav: Logo / Search / Explore / My Holdings / Create       │
├──────────────────────────────────────────────────────────────┤
│ Secondary controls: Spatial | List / filters / campaign chip  │
├───────────────────────────────────────┬──────────────────────┤
│ Spatial canvas 65%                     │ Companion Panel 35%  │
│ Token/collection nodes with data        │ Collection detail    │
│ Campaign spotlight                      │ Token list           │
│ Relationship layout                     │ Trust cue + CTA      │
└───────────────────────────────────────┴──────────────────────┘
```

### 3.3 导航与控制区

顶部导航：

- Logo
- Search 输入框，占据足够宽度，placeholder：`Search tokens or collections`
- 主 Tab：`Explore` active，`My Holdings`
- 右侧：`Log in`、填充按钮 `Create account`

二级控制区：

- 视图切换：`Spatial` active / `List`
- 筛选 chips：`All`、`Trending`、`Stablecoins`、`RWA`、`Campaigns`、`Beginner-friendly`
- 可选 campaign chip：`Devcon claim live` 或 `New: Send by Link`

### 3.4 Spatial 画布

Spatial canvas 必须功能化：

- 中心选中节点：例如 `Stablecoins` 或 `Blue-chip Stablecoins`。
- 周围节点按关系分布：USDT、USDC、DAI、Yield Stablecoins、RWA、Arbitrum Ecosystem。
- 节点附带真实信息占位：
  - Token price：`$1.00`
  - 24h change：`+0.01%`
  - collection badge：`Low volatility`
  - campaign badge：`Claim available`
- 节点大小表达重要性或相关度。
- 选中节点有明确高亮，但不要使用夸张发光。

### 3.5 Companion Panel

右侧 Companion Panel 是 B1 的关键，不应省略。

结构：

```text
Panel header:
  Collection name
  Category badge
  One-line reason

Key stats:
  Tokens count
  24h movement
  Risk / status badge

Token list:
  USDT  $1.00  +0.01%
  USDC  $1.00  +0.00%
  DAI   $1.00  -0.01%

Trust cue:
  Curated collection
  Arbitrum supported
  Updated 2h ago

Actions:
  Explore this collection
  Watch collection
  Create account to personalize
```

### 3.6 Campaign Hub 状态

可在 Spatial 中央或右侧 panel 上方出现 campaign：

- 标题：`Received a token link?`
- 说明：`Claim with a passkey account in seconds.`
- 主按钮：`Claim token`
- 次按钮：`Learn Send by Link`

Campaign 不应像广告 banner，应像产品任务入口。

### 3.7 移动端适配

移动端不应直接压缩复杂 Spatial。

建议：

- 顶部保留 Search、Explore/My Holdings、Create account。
- Spatial canvas 变为横向可滑动的 collection map 或简化 preview。
- Companion Panel 变成底部抽屉 bottom sheet。
- Filters 变成横向 chips。
- 主 CTA 固定在底部或 panel 内。

### 3.8 可直接复制的图像生成 Prompt

```text
Create a detailed desktop product UI mockup for imToken Web, design direction B1: unified Spatial + List shell with enhanced information. Canvas 1440x1024, light refined web app interface.

Top navigation: Logo, wide search input "Search tokens or collections", Explore tab active, My Holdings tab, Log in, filled Create account button. Under it, secondary controls: Spatial/List segmented switch with Spatial active, filter chips All, Trending, Stablecoins, RWA, Campaigns, Beginner-friendly.

Main layout split 65/35. Left side is a functional Spatial token canvas, not decorative: floating token and collection nodes arranged by relationship. Center selected collection "Blue-chip Stablecoins". Nearby nodes: USDT $1.00 +0.01%, USDC $1.00 +0.00%, DAI $1.00 -0.01%, RWA, Arbitrum, Yield Stablecoins. Use node size to show relevance and small badges like Low volatility or Claim available.

Right side is a Companion Panel. Header: "Blue-chip Stablecoins", badge "Beginner-friendly", one-line reason "Low-volatility assets for starting your token journey." Show key stats, token list with prices, trust cues "Curated collection", "Arbitrum supported", "Updated 2h ago", and actions: primary "Explore this collection", secondary "Watch collection", tertiary "Create account to personalize".

The whole page should look like a usable token exploration app, not a marketing site. Clean hierarchy, precise spacing, readable data labels, subtle imToken brand cues.

Avoid dark neon crypto style, avoid abstract bubbles without data, avoid making My Holdings the center for anonymous users.
```

## 4. 方向 B2：纯结构化列表视图

### 4.1 目标

取消 Spatial View，将首页变成清晰、可操作、可扩展的结构化 Explore 界面。它优先解决新用户看不懂、移动端难用、内容更新难的问题。

适合生成的图像类型：

- 桌面端 Explore list dashboard
- Collection card grid/list
- My Holdings 登录后状态
- 移动端 Explore list

### 4.2 页面结构

```text
┌──────────────────────────────────────────────────────────────┐
│ Top nav: Logo / Search / Explore / My Holdings / Create       │
├──────────────────────────────────────────────────────────────┤
│ Hero/action strip: Explore tokens from your browser + CTA      │
├──────────────────────────────────────────────────────────────┤
│ Campaign banner: claim / event / Send by Link                  │
├──────────────────────────────────────────────────────────────┤
│ Filters + sort: All / Trending / Stablecoins / RWA / Risk      │
├──────────────────────────────────────────────────────────────┤
│ Collection list/cards with reasons, top token, status, action  │
└──────────────────────────────────────────────────────────────┘
```

### 4.3 顶部 Hero / Action Strip

B2 虽然是结构化列表，也需要保留转化信息。

内容：

- 标题：`Explore and use tokens from your browser`
- 说明：`No app install. Create with Passkey, receive tokens by link, and personalize your token home.`
- 主按钮：`Create account`
- 次按钮：`Explore collections`
- 场景入口：`Received a link? Claim token`

布局：

- 不做巨大营销 hero。
- 更像产品 dashboard 顶部 action strip，高度约 180-240px。
- 右侧可以放一个小型 Send by Link 流程示意或 collection preview。

### 4.4 Campaign Banner

位置：Hero 下方、filters 上方。

结构：

- 左侧：campaign icon 或小视觉。
- 中间：标题 + 一句话说明。
- 右侧：主 CTA。

示例：

```text
Claim your first token
Received a link or joined a campaign? Create a passkey account and claim in seconds.
[Claim token]
```

### 4.5 Filters 和排序

必须前置，因为 B2 的价值在可操作性。

筛选项：

- `All`
- `Trending`
- `Stablecoins`
- `RWA`
- `Beginner-friendly`
- `Campaigns`
- `Arbitrum`

排序：

- `Recommended`
- `Top movers`
- `Recently updated`

### 4.6 Collection 卡片

每张 collection 卡片必须包含：

- Collection 名称
- 一句话说明为什么值得看
- Top token 或 top mover
- 价格/涨跌幅数据
- Network/status/safety badges
- Last updated
- 行动按钮

卡片示例：

```text
Blue-chip Stablecoins
Low-volatility assets for starting your token journey.
Top: USDT $1.00 +0.01%
Badges: Arbitrum / Beginner-friendly / Curated
Updated 2h ago
[Explore] [Watch]
```

列表中建议至少出现：

- Blue-chip Stablecoins
- Yield Stablecoins
- Arbitrum Ecosystem
- Real-world Assets
- Meme Momentum
- New Campaigns

### 4.7 My Holdings Tab 登录后状态

虽然 B2 重点是 Explore，但图像生成可以补一张登录后状态。

结构：

```text
Holding summary:
  Total value
  24h movement
  Network/status

Pending actions:
  Pending claim links
  Recent sends
  Recent receives

Watched collections:
  Cards showing saved collections and updates

Recommended next action:
  Send by Link
  Receive token
  Explore campaign
```

### 4.8 移动端适配

移动端 B2 应最强：

- 顶部 Search 可压缩成搜索条。
- Explore/My Holdings 为 segmented control。
- Hero/action strip 保持紧凑。
- Campaign banner 单列。
- Filters 横向滚动。
- Collection cards 单列。
- `Create account` 或 `Claim token` 可作为底部 sticky CTA。

### 4.9 可直接复制的图像生成 Prompt

```text
Create a detailed desktop product UI mockup for imToken Web, design direction B2: structured list-first homepage, no Spatial View. Canvas 1440x1200, light clean web app dashboard, not a marketing landing page.

Top navigation: Logo, wide search input, Explore tab active, My Holdings tab, Log in, filled Create account button. Below nav, a compact action strip hero: headline "Explore and use tokens from your browser", subcopy "No app install. Create with Passkey, receive tokens by link, and personalize your token home." Buttons: primary "Create account", secondary "Explore collections", link "Received a link? Claim token". Right side of the strip shows a small Send by Link flow preview.

Below hero, add a campaign banner: "Claim your first token" with description about received link or campaign, CTA "Claim token". Then filters: All, Trending, Stablecoins, RWA, Beginner-friendly, Campaigns, Arbitrum. Include sort dropdown "Recommended".

Main content: structured collection card list or grid. Each card includes collection name, one-line reason, top token with price and 24h change, badges, last updated, and actions. Example cards: Blue-chip Stablecoins, Yield Stablecoins, Arbitrum Ecosystem, Real-world Assets, Meme Momentum, New Campaigns.

Design should prioritize clarity, scanability, and conversion. Use precise spacing, clear typography, subtle brand cues, and real product UI hierarchy.

Avoid Spatial bubbles, avoid dark neon crypto style, avoid generic wallet landing page, avoid oversized hero.
```

## 5. 登录后共用状态：My Holdings

### 5.1 目标

登录后首页要从说服转化转向实用留存，帮助用户理解自己的资产、待处理动作和下一步机会。

### 5.2 页面结构

```text
Top nav:
  Logo / Search / Explore / My Holdings active / Account

Holding summary:
  Total value
  24h change
  Asset count
  Network

Action queue:
  Pending claim links
  Recent send links
  Receive token
  Send by Link

Watched collections:
  Saved collections with movement since last visit

Activity:
  Recent receive / send / claim

Recommendations:
  Campaigns or collections relevant to holdings
```

### 5.3 图像生成 Prompt

```text
Create a desktop web app mockup for imToken Web logged-in My Holdings state. Canvas 1440x1024, light product dashboard.

Top navigation: Logo, search, Explore tab, My Holdings tab active, account address. Main content starts with holding summary: total value, 24h change, asset count, network. Add an action queue with cards for Pending claim links, Send by Link, Receive token, Recent sends. Add watched collections showing saved collections and "changed since last visit" updates. Add recent activity and personalized campaign recommendations.

The UI should feel like a useful token home after account creation, not a marketing page. Clear hierarchy, practical dashboard layout, readable data, subtle imToken brand cues.
```

## 6. 新账户激活状态

### 6.1 目标

用户创建 Passkey 账户后，不应进入空白状态。页面必须立即引导一个激活动作。

### 6.2 页面结构

```text
Success confirmation:
  "Your Passkey account is ready"
  Trust note: protected by your device, no seed phrase as first step

First action cards:
  Receive a token
  Send by Link
  Follow a collection

Beginner recommendation:
  Stablecoins collection
  Claim campaign if available

Progress cue:
  1/3 steps completed
```

### 6.3 图像生成 Prompt

```text
Create a desktop web app mockup for imToken Web new account activation state, shown immediately after Passkey account creation. Canvas 1440x1024, light product UI.

Top area: success confirmation "Your Passkey account is ready" with trust note "Protected by your device. No seed phrase as the first step." Main area: "Choose your first action" with three clear action cards: Receive a token, Send by Link, Follow a collection. Add a beginner recommendation card for Stablecoins collection and a campaign/claim option if user received a link. Include progress cue "1 of 3 setup steps complete". Primary CTA should guide the first activation, not generic browsing.

Make it feel like a real product activation screen, not an empty dashboard.
```

## 7. 四个方向的使用建议

| 方向 | 最适合生成什么 | 主要验证问题 | 风险 |
| --- | --- | --- | --- |
| A1 沉浸式滚动叙事 | 首次访问 onboarding 长页 | 能否把价值讲清楚，并自然进入 Explore | 可能太重，回访用户需要跳过 |
| A2 Modal 价值传递 | 覆盖态 onboarding carousel | 是否用低成本方式补足价值传递 | 用户可能跳过，信息承载有限 |
| B1 Spatial + List Shell | 主产品探索界面 | Spatial 能否从装饰变成功能 | 复杂度高，新用户学习成本仍在 |
| B2 结构化列表 | 清晰、可操作首页 | 是否最快提升理解和转化 | 差异化视觉会下降 |

推荐生成顺序：

1. 先生成 B2，验证最清晰、最可操作的首页基线。
2. 再生成 B1，判断 Spatial 是否值得保留为核心差异化。
3. 再生成 A1/A2，比较两种 onboarding 承载方式。
4. 最后组合：A1 或 A2 负责首次价值传递，B1 或 B2 负责长期首页主界面。

## 8. 组合方案 Prompt

如果希望一次生成「推荐组合方向」，可以使用：

```text
Create a detailed desktop homepage redesign mockup for imToken Web. Product concept: a browser-native token access portal, not a traditional crypto wallet landing page. Goal: convert anonymous visitors by explaining value, building trust, and guiding account creation, while preserving token exploration.

Canvas 1440x1200, light refined product UI. Top navigation: Logo, search, Explore tab active, My Holdings tab, Spatial/List switch, Log in, filled Create account button.

Above the fold: compact conversion hero with headline "Explore and use tokens from your browser", subcopy about Passkey account, receiving tokens by link, no app or extension. Include primary CTA "Create account", secondary "Explore tokens", and link "Received a link? Claim token".

Main area: use B1 unified shell. Left 65% functional Spatial token canvas with data-rich collection nodes, not decorative bubbles. Right 35% Companion Panel for selected collection, showing reason, token list, trust cues, and CTA. Add filter chips and a campaign/claim entry.

Below or as visible continuation: collection list preview with cards that include one-line reason, top token, badges, updated time, and action.

Design must feel like a real web app for token exploration and just-in-time token access. Clear hierarchy, readable text, product-like controls, restrained visual style, subtle imToken brand cues. Avoid generic wallet landing page, avoid dark neon crypto aesthetics, avoid decorative bubbles without data.
```
