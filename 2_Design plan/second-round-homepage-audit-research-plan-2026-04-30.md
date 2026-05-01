# 第二轮首页审计、研究、规划与原型执行计划

日期：2026-04-30  
范围：imToken Web 首页、匿名用户到账户转化、首页信息架构、低保真/高保真原型方向  
核心产品目标：通过让基于浏览器的 Token 访问在首页变得清晰、可信、有动机，支撑「Perfect Token Journey」。

## 1. 为什么需要第二轮

第一轮已经确立了核心诊断：imToken Web 拥有差异化的产品方向，但当前首页还没有把这个方向转化为清晰的用户转化路径。

第二轮应将该诊断转化为更完整的产品/设计包：

1. 用清晰语言总结 imToken Web 的优势和目标用户。
2. 解释为什么首页转化在当前尤其重要，特别是在现阶段用户量较低的情况下。
3. 定义首页必须承担的职责。
4. 按这些职责审计当前首页。
5. 找出最重要的能力与信息表达缺口。
6. 提出改进方向。
7. 产出低保真设计草稿；如果低保真 AI 输出无法清楚表达交互，则使用高保真作为备选。

交付物应该是一条连贯叙事，而不是一组互不相干的 UX 评论：

> imToken Web 拥有强大的浏览器原生 Token 访问主张。由于当前用户量有限，首页必须成为主要转化窗口。今天的首页展示了一个 Token 宇宙，但还没有充分解释用户为什么应该在意、为什么可以信任，以及为什么要创建账户。下一步设计方向应将首页转化为一个轻量激活界面：解释价值、建立动机，并引导账户创建。

## 2. 来自既有评估的优先级基线

第二轮应将 `0_Project Context/imtoken-web-evaluation.html` 作为优先级基线。该评估已经包含最强的问题框架，应指导研究、审计、规划和原型工作的顺序。

### 2.1 需要优先处理的评估发现

| 优先级 | 既有评估点 | 为什么它必须主导第二轮 | 第二轮行动 |
| --- | --- | --- | --- |
| P0 | 访客到注册的漏斗是断裂的。首屏对匿名用户没有清晰价值主张或 CTA。 | 在当前用户量较低时，这是杠杆最高的问题。没有清晰转化路径，首页流量无法变成账户。 | 审计首屏清晰度，并原型化一个新的匿名 Hero，包含主 CTA 和三个能力卡片。 |
| P0 | "My Holdings" 很突出，但对新用户没有意义。 | 它在用户创建账户或持仓之前，就优先优化了回访用户状态。 | 定义匿名、刚创建、回访三种首页状态。 |
| P0 | 视觉层级弱；气泡吸引注意力，却没有解释产品。 | 最令人记住的视觉资产还没有承担转化工作。 | 将气泡/空间视觉从装饰性 Hero 移到功能性 Token 探索或活动预览中。 |
| P0 | 首屏没有可见的主填充 CTA。 | 账户创建动作被隐藏在 header 行为中，而不是成为明显下一步。 | 将 "Create account" / "Create wallet in 10 seconds" 作为主 CTA 原型，并定义追踪事件。 |
| P0 | "Home of Tokens" 没有被转译成具体品牌叙事。 | 口号不足以让新用户、媒体或合作伙伴复述和理解。 | 写 2-3 条首页定位文案，解释浏览器原生 Token 访问、Passkey 和 Send by Link。 |
| P0 | GTM/活动流量没有被转化为闭环。 | Devcon 类或活动流量需要具体目的地，例如 claim、explore 或 create account。 | 定义活动首页模块，并至少原型化一个活动到账户或活动到 claim 的流程。 |
| P1 | Beta 与仅支持 Arbitrum 的限制缺少 framing。 | 用户会将限制理解为产品未完成，而不是路线图进展。 | 将 Trust Bar、Roadmap 和 FAQ 模块加入原型范围。 |
| P1 | 激活指标与 telemetry 缺失，或在产品策略中不可见。 | 改版需要可衡量结果，而不只是视觉改善。 | 定义激活事件：create passkey、first receive、first Send by Link、collection follow、campaign CTA。 |
| P1 | 主视觉动效更像装饰，而不是叙事。 | 动效应该帮助用户理解 Token 旅程，而不只是制造氛围。 | 原型化一个 30 秒 demo 或流程条：passkey account -> receive link -> send token link -> friend claims。 |
| P1 | 产品定位在 beginner wallet、RWA/stablecoin 入口和 AA infrastructure 之间显得含混。 | 混合定位削弱转化文案和目标用户清晰度。 | 以轻量浏览器 Token 访问为主线；将 RWA/stables/collections 作为用例，而不是顶层品类。 |
| P1 | 国际信任与语言质量需要主动处理。 | 地区感知和历史信任顾虑会增加海外用户摩擦。 | 在研究/原型标准中包含信任证明、谨慎英文文案、生态信号和 FAQ。 |
| P2 | 首屏有约 3 秒白屏感知，且没有 skeleton/static fallback。 | 性能感知会塑造第一信任印象。 | 纳入性能和 skeleton 建议，但优先级低于转化和 CTA 问题。 |
| P2 | 气泡应移动到 Explore 区域，并获得真实数据/可点击性。 | 这能保留资产，同时让它变得有用。 | 用真实价值占位符原型化 Token 探索预览：价格、涨幅榜或 collection reasons。 |

### 2.2 需要保留的评估策略

第二轮工作应保留评估中的核心战略转向：

> 对匿名用户而言，首页是「说服 + 转化」；对已登录用户而言，首页可以成为当前资产/Token 浏览体验。

评估要求的状态模型：

| 状态 | 评估方向 | 第二轮原型职责 |
| --- | --- | --- |
| Anonymous | Hero + 三个能力 + 30 秒 demo + CTA | 让价值明显，并推动账户创建。 |
| Just Created | 引导首次 receive、Send by Link 或 Explore 动作 | 将注册转化为激活。 |
| Returning | 展示 Token browser、holdings、collections 和 activity | 保留实用性与留存价值。 |

评估要求的内容模块：

- 具备具体标题和副标题的 Hero
- 主 CTA，例如 "Create wallet in 10 seconds"
- 三个能力卡片：Passkey security、gas simplification、Send by Link
- 30 秒 demo 或交互循环
- 使用当前气泡视觉、但更具功能性的 Token 探索预览
- 带有生态/安全信号的 Trust Bar
- Beta/Roadmap framing
- FAQ 和 Footer

评估要求的设计系统检查：

- 正文字体对比度目标：WCAG AA 或更高
- 清晰的主按钮填充样式
- 气泡作为叙事/功能动效，而不是消耗注意力的装饰
- 组件：Empty Hero、Feature Card、Demo Player、Trust Bar、Roadmap、FAQ Accordion
- 静态 Hero 首屏绘制目标低于 1 秒，气泡动画延迟加载或提供 skeleton fallback

## 3. 产品摘要应如何开场

### 3.1 imToken Web 优势

imToken Web 应被定位为一个轻量的 Token 与区块链访问浏览器门户，而不是一个传统钱包网站。

需要传达的核心优势：

| 优势 | 对用户的意义 | 首页含义 |
| --- | --- | --- |
| 浏览器原生访问 | 用户只要有现代浏览器和互联网连接，就可以访问 Token 功能。 | 强调「无需安装 app」和「随处访问」。 |
| Passkey / 账户抽象 onboarding | 用户不需要从助记词、插件或复杂钱包设置开始。 | 账户创建可以被描述为快速、轻量且熟悉。 |
| Send by Link | Token 可以通过消息、邮件、二维码等普通 web2 渠道分享。 | 展示一个具体用例：向还没有钱包的人发送 Token 链接。 |
| Gas 抽象 / Paymaster 方向 | 用户可以先开始使用，而不必先理解原生 gas Token。 | 降低首次行动焦虑；在 CTA 附近解释 gas 简化。 |
| Token 宇宙 / collection 模型 | 用户可以通过主题和 collections 探索 Token，而不是直接面对链和合约地址。 | 将 collections 作为动机界面，而不只是 Token 容器。 |
| imToken 品牌与生态历史 | 既有钱包可信度和 Token 基础设施经验可以降低信任门槛。 | 增加信任信号和安全解释，但不要让页面显得企业化或沉重。 |

第二轮工作的推荐一句话 framing：

> imToken Web 让人们可以从浏览器探索、接收和使用 Token，并通过轻量 Passkey 账户创建和链接分享 Token。

### 3.2 目标用户摘要

首页不应只对专家级加密用户说话。它应该支持三层用户：

| 用户 | 当前需求 | 他们需要首页提供什么 |
| --- | --- | --- |
| Token-curious users | 对 Token 感兴趣，但不想承担钱包设置复杂度。 | 简单解释这里能做什么，以及为什么账户创建低摩擦。 |
| Token receivers / invited users | 他们来自链接、活动、朋友、社区或二维码。 | 在不需要预先钱包知识的情况下，直接 claim、receive 或理解一个 Token。 |
| Web3-aware explorers | 他们理解 Token，并想要更快的发现、collections 和账户实用功能。 | Search、collections、活动模块、市场语境和回访理由。 |

次级用户：

- 需要轻量分发或活动 onboarding 的项目方和 Token issuer。
- 可能信任 imToken 品牌、但需要理由使用 Web app 的既有 imToken 用户。
- 需要可见、可衡量活动位的生态合作伙伴。

首页原则：

> 匿名首页必须在账户创建前就有用，但每一个有用时刻都应该让账户创建感觉像自然下一步。

## 4. 第二轮输出的叙事结构

最终审计/研究/原型包应遵循这个顺序：

1. 产品定位摘要：imToken Web 是什么、不是什么，以及为什么重要。
2. 目标用户摘要：首页必须转化谁，以及每组用户需要什么。
3. 当前业务/用户问题：用户量较低，因此首页转化是杠杆最高的界面。
4. 首页职责模型：首页必须为匿名、新用户和回访用户完成什么。
5. 当前首页审计：首页今天做了什么，以及在哪些职责上失败。
6. 缺口分析：缺失的信息表达、信任、动机、转化、交互和内容系统能力。
7. 改进方向：推荐的信息架构、内容模块、交互模型和状态策略。
8. 原型执行：先做低保真流程，只有在需要视觉保真或空间交互时才做高保真。
9. 衡量计划：用哪些事件和成功指标验证改版。
10. 下一步 backlog：哪些可以快速上线，哪些需要更深入的产品/数据工作。

## 5. 首页职责模型

第二轮审计应将首页评估为一个转化型产品界面，而不是静态视觉页面。

### 5.1 首页必须为匿名用户完成什么

核心职责：

- 在 5 秒内解释 imToken Web 是什么。
- 展示用户在创建账户前后可以做什么。
- 让账户创建显得低风险、快速且有用。
- 提供一个具体首个动作，而不只是探索。
- 建立足够信任，克服钱包/安全顾虑。
- 在要求登录前展示 Token discovery 价值。
- 支持活动流量、推荐流量和直接访问首页流量。

首页必须释放的关键信息：

- 浏览器 + 互联网连接就足以开始。
- 不需要安装 app 或浏览器插件。
- 账户创建使用 Passkey，应该感觉熟悉。
- 助记词设置不是第一步。
- Token 可以通过链接接收或发送。
- Token collections 是理解 Token 宇宙的策展方式。
- 账户创建会解锁个性化、已保存活动、发送/接收和活动动作。

### 5.2 首页必须为刚创建账户的用户完成什么

核心职责：

- 确认账户创建成功。
- 立即给出第一个任务。
- 通过行动教学，而不是长篇解释。
- 推动一个激活事件。

候选首个任务：

- Claim 或 receive 一个 Token。
- 尝试 Send by Link。
- 保存或 follow 一个 collection。
- 探索一个推荐的 beginner-safe collection。
- 查看用户新的 Token home 和 activity。

### 5.3 首页必须为回访用户完成什么

核心职责：

- 帮助用户从之前的活动继续。
- 展示 holdings、watched collections、recent activity 和 pending links。
- 让 Token discovery 与个人相关。
- 保持活动可见，但不覆盖实用功能。

需要评估的回访用户模块：

- My Holdings
- Pending claim/send links
- Recent activity
- Watched collections
- Recommended collections
- 与持仓或浏览历史相关的 Campaigns
- "What changed since last visit" insight

## 6. 第二轮审计计划

### 6.1 需要 review 的输入

本地上下文：

- `CLAUDE.md`
- `0_Project Context/imToken webapp project bkg.md`
- `0_Project Context/imtoken-web-evaluation.html`
- `1_Research/Audit/web-token-im-audit-report-2026-04-28.md`
- `1_Research/Audit/web-token-im-homepage-revamp-audit-v2-2026-04-28.md`
- `1_Research/Design research/homepage-ia-market-reference-research-2026-04-28.md`

需要检查的线上产品界面：

- Homepage, Spatial View
- Homepage, List View
- Search
- Collection detail overlay
- Token detail page
- Sign in / create account entry
- First-time modal 或 onboarding prompts
- Settings / Preferences，特别是默认首页模式
- Mobile viewport behavior

如果研究会话允许创建账户，需要检查：

- Passkey account creation
- 首次登录后的首页状态
- Holdings empty state
- Send / receive 入口
- 当前 build 中可用的任何 claim-link 或 Send-by-Link flow

如果不允许创建账户，将此记录为研究限制，并仅使用可见的未登录状态。

### 6.2 审计视角

使用三个视角，并标注严重性：Critical、High、Medium、Low。

产品视角：

- 首页是否传达了浏览器原生 Token 访问主张？
- 它是否支持「Perfect Token Journey」？
- 它是否创造了清晰激活路径？
- 它是否支持活动与增长需求？
- 它是否区别于钱包、交易所和区块浏览器？

用户视角：

- 首次访问用户能否理解这是什么？
- 用户能否识别第一步该做什么？
- 页面是否降低了钱包/安全焦虑？
- 页面是否解释了为什么创建账户值得？
- 页面是否在登录前提供有用价值？
- 页面是否适用于受邀/Token 接收者场景？

设计视角：

- 首屏层级是否清晰？
- 是否有主 CTA？
- Spatial View 和 List View 是否传达互补价值？
- 交互状态是否清晰？
- 移动端是否可读且利于转化？
- 信任、解释和行动是否彼此靠近？

### 6.3 审计问题

第二轮审计应回答：

1. 当前首页实际在优化什么？
2. 在用户量较低的情况下，它应该优化什么？
3. 当前首屏是否回答了「这是什么、为什么重要、为什么可信、下一步做什么」？
4. 用户第一次在哪里了解到 Passkey、账户抽象、Send by Link 和 gas 简化？
5. 首页是在创造创建账户的动机，还是只提供账户入口？
6. 当前首页哪些部分有用，应该保留？
7. 哪些部分在视觉上有辨识度，但战略上被低估？
8. List View 比 Spatial View 做得更好的是什么？
9. Spatial View 比 List View 做得更好的是什么？
10. 两种模式之间必须共享哪些能力？

## 7. 研究计划

### 7.1 研究目标

研究应支持设计决策，而不是产出泛泛的竞品笔记。

目标：

- 识别浏览器优先的 web3 产品如何转化匿名访客。
- 识别钱包/账户产品如何解释 passkey、无需插件、无需助记词的低摩擦收益。
- 识别 Token discovery 产品如何通过活动、collections、市场信号和个性化创造动机。
- 识别在探索与账户创建之间取得平衡的首页 CTA 模式。
- 识别低摩擦产品如何在不过度压迫用户的情况下传达信任。

### 7.2 参考类别

研究应将 imToken Web 与邻近类别比较：

| 类别 | 为什么重要 | 示例参考 |
| --- | --- | --- |
| Smart wallet / passkey onboarding | 解释账户创建摩擦降低。 | Coinbase Smart Wallet, Safe, Argent, Privy-powered apps |
| Token discovery / explore | 展示如何组织 collections、search、filters 和 market context。 | Uniswap Explore, Zerion Explore, Coinbase Wallet |
| Campaign and claim flows | 展示活动如何变成用户动作。 | Coinbase Wallet campaigns, Magic Eden drops, OpenSea drops |
| Consumer finance onboarding | 展示信任、激活和账户创建文案模式。 | Robinhood, Revolut, Wise |
| Browser-native productivity tools | 展示「从浏览器即时使用」的定位。 | Figma, Notion, Canva |

### 7.3 研究输出格式

对每个参考对象记录：

- 首页承诺
- 主 CTA
- 账户创建前有什么有用内容
- 如何建立信任
- 如何激发账户创建动机
- 活动或 featured content 如何组织
- imToken 应该借鉴什么模式
- imToken 应该避免什么模式

综合应被组织为设计原则：

- 账户创建前先提供公共价值
- 具体首个动作优先于抽象品牌陈述
- 信任靠近行动
- 活动需要目的地，而不只是海报
- Collections 需要理由，而不只是名称
- 空间探索需要配套信息层
- List View 应支持决策信心

## 8. 当前首页缺口框架

使用这张表作为审计骨架。

| 首页职责 | 当前状态问题 | 需要验证的可能缺口 | 需要收集的证据 |
| --- | --- | --- | --- |
| 解释产品价值 | 用户能否在 5 秒内理解 imToken Web？ | 当前文案过于泛化。 | Hero 文案、首屏截图、导航标签 |
| 激发账户创建 | 页面是否解释了为什么要创建账户？ | 账户入口存在，但动机弱。 | CTA 位置、modal 文案、点击后的预期 |
| 建立信任 | 页面是否在要求创建账户前降低安全焦虑？ | Passkey/no-seed/no-extension 安心信息不够可见。 | 信任信号、文案、FAQ、帮助链接 |
| 展示具体实用性 | 用户是否看到一个真实能做的事情？ | Token 气泡展示类别，但没有展示任务价值。 | Spatial/List 模块、campaign CTA、collection cards |
| 支持活动 | 市场投放能否将注意力转化为行动？ | 海报存在，但活动系统和目的地未充分定义。 | Hero banner、campaign metadata、CTA、相关页面 |
| 支持 Token discovery | Collections 是否创造意图？ | Collections 缺少「为什么重要」的信号。 | Collection cards、overlays、filters |
| 支持首次流程 | 首页到首次行动是否有引导路径？ | Onboarding 由 modal 主导，而不是 journey 主导。 | Create account flow、first empty states |
| 支持回访用户 | 登录后首页是否变得有用？ | 回访状态的首页承诺不清晰。 | Logged-in state、holdings、activity、saved items |
| 跨模式工作 | Spatial 和 List 是否共享同一套产品能力？ | Spatial 有身份感；List 有操作实用性。 | Mode comparison |
| 移动端可用 | 转化叙事能否在小屏成立？ | Spatial/视觉密度可能削弱移动端清晰度。 | 移动端截图和文字适配 |

## 9. 建议探索的改进方向

这些是第二轮原型的假设，不是最终决定。

### 9.1 首页定位

用行为承诺替换抽象的钱包式信息表达：

> Explore and use tokens from your browser.

支持信息：

> Create a lightweight passkey account, receive tokens by link, and start without installing a wallet app or browser extension.

CTA 方向：

- 主：Create account
- 次：Explore tokens
- 场景化：Received a link? Claim token

### 9.2 首屏结构

推荐模块：

1. 清晰标题与副标题。
2. 带账户低摩擦提示的主 CTA。
3. 三个能力卡片：
   - Create with passkey
   - Receive or send by link
   - Explore token collections
4. 视觉证明：
   - 简化的 Spatial token universe preview
   - 或展示 Create -> Receive -> Send by Link 的迷你流程
5. Trust strip：
   - Browser-native
   - Self-custodial direction
   - Passkey
   - Supported networks/ecosystem signals

### 9.3 首页状态策略

设计三种状态：

| 状态 | 页面目标 | 主要模块 |
| --- | --- | --- |
| Anonymous | 解释、建立信任、转化 | Hero、CTA、capabilities、demo flow、public collections、FAQ |
| New account | 推动首次激活 | Success state、setup checklist、receive/claim/send action、beginner collection |
| Returning | 支持实用性和留存 | Holdings、activity、pending links、watched collections、personalized insights |

### 9.4 Spatial View 方向

保留 Spatial View 作为标志性探索模式，但让它更行动导向：

- 当选择 collection/campaign 时增加 companion panel。
- 增加 campaign hub 或 spotlight state。
- 增加简短的「为什么重要」解释。
- 从气泡到账户创建或 collection detail 增加清晰 CTA 路径。
- 用空间布局表达关系，而不只是装饰。

Spatial 低保真概念示例：

- 中心："Start your token journey"
- 轨道 1：Passkey account、Receive by Link、Explore collections
- 轨道 2：Stock Tokens、Stables、RWAs、DeFi、Arbitrum Ecosystem
- 右侧面板：选中模块摘要、trust cue、CTA

### 9.5 List View 方向

将 List View 用作清晰度和决策视角：

- Hero conversion module
- 带 CTA 的 Campaign card
- 带摘要和 "why now" 信号的 Collection cards
- 基于用户意图的 Filters
- 账户创建前的 public preview
- 账户创建后的 personal modules

改进后的 collection card 内容示例：

- Collection name
- 一句话 reason
- Top token 或 top mover
- Network/safety/status badges
- Last updated
- Action：Explore、Watch、Create account to personalize

### 9.6 账户创建动机

账户创建应被定位为解锁有用能力：

- Save collections
- Receive tokens
- Send by Link
- Track activity
- Personalize homepage
- 在符合条件时 claim campaign rewards

避免：

- 让首页感觉像通用钱包注册页。
- 过早过度解释账户抽象。
- 将 "no seed phrase" 作为唯一价值主张。
- 在展示任何公共价值前要求用户创建账户。

## 10. 原型执行计划

### 10.1 原型目标

原型应回答：

1. 首次访问者能否在一屏内理解产品？
2. 页面是否创造了创建账户的理由？
3. 设计是否保留了 Token 宇宙的差异化？
4. 活动内容和 Token collections 能否与 onboarding 共存？
5. 流程是否支持匿名、新账户和回访三种状态？

### 10.2 原型保真度决策

如果目标是信息架构和流程清晰度，先从低保真线框开始。

仅在以下情况下使用高保真：

- Spatial View 无法用低保真清楚解释。
- Stakeholders 需要判断视觉身份或动效方向。
- 活动模块需要真实视觉层级。
- 原型必须用于 executive 或 GTM 对齐。

推荐方式：

- 用低保真处理页面结构、流程和状态逻辑。
- 如果低保真无法传达 "Home of Tokens" 体验，则对一个 hero/Spatial 概念做中/高保真。

### 10.3 原型产物

创建四个原型 frame 或 screen：

| 原型 | 目的 | 保真度 |
| --- | --- | --- |
| A. Anonymous homepage | 展示定位、CTA、能力卡片、公共 discovery、trust。 | 先低保真 |
| B. Spatial campaign/discovery view | 展示 Token universe 如何变得有动机且可行动。 | 低保真或中保真 |
| C. New account activation state | 展示账户创建后立即发生什么。 | 低保真 |
| D. Returning user homepage | 展示实用性、留存钩子和个性化。 | 低保真 |

可选第五屏：

- Mobile anonymous homepage，因为转化文案和 CTA 必须能在最小 viewport 中成立。

### 10.4 建议的低保真屏幕内容

#### Screen A: Anonymous Homepage

Sections:

- Header：logo、search、explore、create account
- Hero：
  - Headline："Explore and use tokens from your browser"
  - Subheadline："Create a passkey account, receive tokens by link, and start without installing a wallet app."
  - Primary CTA："Create account"
  - Secondary CTA："Explore tokens"
  - Tertiary link："Received a link?"
- 三个卡片：
  - Passkey account
  - Send/receive by link
  - Token collections
- Public collection preview
- Trust strip
- FAQ preview

#### Screen B: Spatial Campaign / Discovery View

Sections:

- Spatial token map，突出一个 campaign 或 collection。
- Companion panel：
  - Campaign title
  - Why it matters
  - Related collections/tokens
  - CTA
  - Trust/safety cue
- Mode switch：Spatial / List
- Filter chips：Trending、Stable、RWA、Campaign、Beginner-friendly

#### Screen C: New Account Activation

Sections:

- Account created success message
- "Choose your first action" checklist：
  - Receive a token
  - Send by Link
  - Follow a collection
- Beginner-safe recommendation
- 简短解释 passkey account 解锁什么

#### Screen D: Returning User Homepage

Sections:

- My Holdings summary
- Pending links / claim activity
- Watched collections
- "Changed since last visit" insight
- 与用户活动相关的 Campaigns
- Continue exploring token universe

### 10.5 原型评审标准

按以下标准评估每个原型：

- Clarity：用户能否快速理解产品？
- Motivation：是否有创建账户的理由？
- Trust：安全和账户顾虑是否在行动附近被处理？
- Flow：页面是否暗示下一步会发生什么？
- Differentiation：它是否仍然像 imToken Web，而不是通用钱包 landing page？
- Operability：活动和 collections 能否在不重新设计页面的情况下更新？
- Responsiveness：同一层级能否在移动端成立？

## 11. 衡量计划

在 design sign-off 前定义成功指标。

主指标：

- 首页访客到 create-account 点击率
- Create-account 点击到账户创建完成率
- 匿名访客到 token/collection 探索率
- 账户创建到首次激活事件率

激活事件：

- Account created
- Token claimed or received
- Send-by-Link created
- Collection followed or saved
- Token detail opened from collection
- Search completed with result click

质量指标：

- First meaningful paint / perceived load time
- Mobile CTA visibility
- Scroll depth
- FAQ/trust section interaction
- Campaign CTA click-through
- Drop-off from account modal

分群：

- Anonymous direct traffic
- Campaign/referral traffic
- Link receiver traffic
- Returning signed-in traffic
- Desktop vs mobile
- Language/region where available

## 12. 推荐交付物

第二轮交付物应按需要存放在 `1_Research`、`2_Design plan` 和 `3_Prototypes` 下。

Research folder：

- `1_Research/Audit/homepage-second-round-audit-YYYY-MM-DD.md`
- `1_Research/Design research/homepage-conversion-reference-research-YYYY-MM-DD.md`
- `1_Research/homepage-second-round-synthesis-YYYY-MM-DD.md`

Design plan folder：

- `2_Design plan/homepage-conversion-prd-YYYY-MM-DD.md`
- `2_Design plan/homepage-content-model-YYYY-MM-DD.md`
- `2_Design plan/homepage-measurement-plan-YYYY-MM-DD.md`

Prototype folder：

- `3_Prototypes/v4/anonymous-homepage-lowfi.html`
- `3_Prototypes/v4/spatial-discovery-lowfi.html`
- `3_Prototypes/v4/new-account-activation-lowfi.html`
- `3_Prototypes/v4/returning-user-homepage-lowfi.html`

如果需要高保真：

- `3_Prototypes/v4/homepage-hifi-concept.html`

## 13. 执行时间线

### Phase 1: Context And Current-State Audit

预计工作量：0.5-1 天

Activities：

- Review 本地上下文和 prior audits。
- 捕捉当前首页的桌面端和移动端截图。
- 检查 Spatial View、List View、account entry、search、collection details 和 token details。
- 按职责模型评估首页。

Output：

- 带严重性标签 findings 的第二轮审计。
- 当前状态截图和证据。
- 对首页转化缺口的清晰陈述。

### Phase 2: Focused Market And Pattern Research

预计工作量：0.5-1 天

Activities：

- Review 6-10 个邻近参考。
- 聚焦账户创建动机、注册前公共价值、活动模块、collection discovery 和 trust copy。
- 提取 imToken 应借鉴或避免的模式。

Output：

- Reference research note。
- Pattern synthesis。
- 首页改版原则。

### Phase 3: Product Plan And Homepage Requirements

预计工作量：0.5 天

Activities：

- 定义首页用户状态。
- 定义必需模块。
- 定义转化文案。
- 定义活动和 collection 内容要求。
- 定义 measurement events。

Output：

- Homepage conversion PRD。
- Content model draft。
- Measurement plan。

### Phase 4: Low-Fi Prototype

预计工作量：1-2 天

Activities：

- 为 anonymous homepage 创建低保真结构。
- 创建 Spatial campaign/discovery concept。
- 创建 new-account activation state。
- 创建 returning-user state。
- 如果时间允许，创建 mobile version。

Output：

- Low-fi prototype files。
- 解释 flow、module responsibility 和 trade-offs 的 notes。

### Phase 5: Prototype Review And Hi-Fi Decision

预计工作量：0.5 天

Activities：

- 按产品目标和转化标准评审原型。
- 决定低保真是否足够。
- 如果不足，选择一个概念进行高保真处理。

Output：

- Prototype review notes。
- Hi-fi recommendation 或 hi-fi execution brief。

### Phase 6: Final Synthesis And Backlog

预计工作量：0.5 天

Activities：

- 总结 findings、decisions 和 prototype implications。
- 排序 quick wins 和 strategic bets。
- 将 implementation-ready items 与 product/data dependencies 分开。

Output：

- Final second-round synthesis。
- Ranked backlog。
- Recommendation for next sprint。

## 14. 第二轮优先级 Backlog

| 优先级 | 工作项 | 为什么重要 | 工作量 |
| --- | --- | --- | --- |
| P0 | 审计并重设计匿名 Hero：headline、subheadline、CTA、三个能力卡片 | 直接解决评估中最大的漏斗断点：首屏没有价值主张或 CTA。 | Low-Medium |
| P0 | 增加主填充 CTA 并定义账户创建 tracking | 让转化可见、可衡量，而不是隐藏在 header account icon 后面。 | Low |
| P0 | 对匿名用户，将首页从 "Visualization page" 重构为 "Onboarding page" | 评估的核心策略是：匿名用户需要先被说服和转化，再进入资产浏览。 | Medium |
| P0 | 解决匿名用户看到 "My Holdings" 的错位问题 | 避免页面对新访客优先展示一个空的回访用户概念。 | Medium |
| P0 | 原型化 campaign/GTM 入口流程，例如 "Claim free token" 或 "Received a link?" | 闭合评估中指出的活动流量循环。 | Medium |
| P0 | 在原型中修复首屏可读性和层级目标 | 处理评估中的视觉层级、对比度和可访问性风险。 | Low-Medium |
| P1 | 增加 30 秒 demo 概念：passkey -> receive -> Send by Link -> friend claims | 通过具体行为循环让产品可信。 | Medium |
| P1 | 增加 Trust Bar、Roadmap 和 FAQ 模块 | 重新 framing Beta/Arbitrum 限制，并降低国际信任摩擦。 | Medium |
| P1 | 定义激活衡量计划 | 支持 create passkey、first receive、first Send by Link 和 collection exploration 指标。 | Low |
| P1 | 定义三种首页状态：Anonymous、Just Created、Returning | 避免一个页面服务互相冲突的用户需求。 | Medium |
| P2 | 将气泡/空间视觉移到带真实数据占位的功能性 Explore preview | 保留差异化，同时让视觉有用。 | Medium |
| P2 | 增加 skeleton/static fallback 和性能建议 | 改善感知信任，但优先级低于转化和 CTA 修复。 | Medium |
| P2 | 为一个选定方向创建高保真概念 | 仅在低保真无法传达空间质量或 executive alignment 需要时有用。 | Medium-High |
| P2 | 定义 AI insight 放置规则 | 对后续个性化重要，但不要求纳入首次转化原型。 | Medium |

## 15. 风险与开放问题

风险：

- 如果 Token 宇宙探索被推得太靠后，首页可能变得太像传统钱包 landing page。
- 如果不增加活动和 CTA 层，Spatial View 可能保持视觉强但商业弱。
- 过度解释账户抽象可能拖慢用户；文案应聚焦用户能做什么。
- 如果 paid/editorial/system recommendations 没有清楚标注，活动模块可能降低信任。
- 低保真原型可能无法充分传达空间交互质量。

开放问题：

- 匿名用户应该进入 Spatial View、List View，还是带 Spatial preview 的专用转化首页？
- 下一版本的主要激活事件是什么：create account、claim token、receive token、send link，还是 follow collection？
- 近期最重要的活动类型是什么：claim campaign、ecosystem campaign、partner campaign、education campaign，还是 token collection campaign？
- 产品数据中已经有哪些 collection metadata？
- 第一版个性化可以使用哪些用户数据？
- 是否可以为审计/原型验证创建账户，或者第二轮应避免创建持久账户？

## 16. 推荐最终叙事

展示第二轮工作时使用这条叙事：

1. imToken Web 的优势不是它又是一个钱包。它的优势是浏览器原生、just-in-time 的 Token 访问。
2. 目标用户包括 Token-curious users、Token receivers 和 web3-aware explorers。三类用户都需要首页先解释价值，再要求承诺。
3. 当前用户量有限，因此首页必须成为主要转化窗口。
4. 转化型首页必须解释产品是什么、建立信任、展示有用的公共价值，并让账户创建感觉像自然下一步。
5. 当前首页具有强视觉身份和有潜力的 Token collection 系统，但对价值、动机、信任和首个行动的表达不足。
6. 改进方向不是放弃 Spatial View，而是将 Spatial 和 List 变成同一首页系统的两种表达：Spatial 创造好奇心和关系感；List 创造清晰度和决策信心。
7. 下一步原型应从低保真开始，以便对齐结构；只有在需要判断视觉/空间质量时，才将一个选定方向推进到高保真。
