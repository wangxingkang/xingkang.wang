# Awesome 目录审计与优化建议（改动前快照）

日期：2026-10-25。范围：`docs/awesome/` 全部 27 个 MDX 页面及 `_meta.json`。基线：`main` / `dbcb745f`，包含工作树现有的 `react.mdx` 一行删除。本次不调整收录内容、导航或站点配置。

本报告保留整理前的统计与调查结论；实施结果及最终验证见[第一轮整理记录](awesome-round1-2026-10-25.md)。

## 总体判断

27 个分类文件承载 3,488 个列表条目，文件数量本身合理。问题主要是：大页面过于集中、小页面小节过细，以及按技术生态、产品用途、安装载体、部署方式混合分类。应先修正失效和错误入口、明确主归属，再做少量拆页；不建议为了减少文件数，把语言与框架生态合成大杂烩。

JavaScript 767 条、React 462 条、AI 402 条、Node.js 356 条，四页共 1,987 条，占 57.0%。另一端 Swift 1 条、Java 2 条、开源发现与数据集 6 条、IDE 8 条。621 个 H2–H6 标题中，543 个是叶子小节，其中 92 个只有一条，占 16.9%。页面长度与导航权重明显不均衡。

## 范围和证据口径

- 使用项目现有 `unified` / `remark-parse` 解析 Markdown AST。列表项首个链接计为主条目，嵌套子包也计入；同一行的附带官网链接不另算条目。共 3,488 条，其中顶层 3,316 条、嵌套 172 条。
- 全部 Markdown 链接 3,543 处；外部链接 3,506 处，对应 3,471 个不同 URL。外链检查覆盖官网、源码仓库、包目录、辅助说明链接。
- 37 处文内站内链接及 2 处侧栏 custom-link 共 39 项全部通过。锚点直接调用当前 Rspress 的 `parseToc` / `github-slugger` 验证。27 个侧栏文件引用与 27 个实际页面完全对应，无孤儿页面、无悬空文件引用。
- HTTP 探测跟随重定向，异常用普通 GET 和精选官方来源交叉核验。HEAD 404 不直接判死链；403、429、连接失败、5xx 均保留不确定性。批检曾触发 GitHub 限流，后续使用 4 并发、请求起始间隔至少 0.25 秒，并对 429 暂停至少 60 秒。
- HTTP 可响应只说明入口可达，不等于产品功能、登录、下载、付费流程或 SDK 兼容性已验收。外部网页锚点未逐一验证；站内锚点已全量验证。维护状态仅对具体问题条目做精选核实，不是全仓库活跃度普查。

## 全量外链检查结果

3,471 个不同外链均已发起检查，按普通 GET 优先于 HEAD、429 不覆盖有效结果的规则归并。状态表描述本次访问证据，不代表所有产品端到端可用。

| 归并分级 | URL 数 |
|---|---:|
| HTTP 2xx | 3424 |
| GET 404/410，当前公开入口不可用 | 16 |
| 入口异常、产品仍有官方可读信息 | 1 |
| 401/403/429，访问受限 | 22 |
| 连接或服务器异常，待复核 | 7 |
| 本机异常、独立访问已通过 | 1 |

成功访问中有 111 个 URL 发生重定向；排除尾斜杠及 GitHub owner/repo 大小写差异后，有 106 个地址值得统一到最终入口。重定向通常不是死链，且需保留包/子目录身份，不能自动替换成仓库首页。

### 需要修正或进一步核验的公开入口

| 条目与位置 | 本次结果 | 建议 |
|---|---|---|
| [formilyjs · `docs/awesome/javascript.mdx:505`](https://formilyjs.org/zh-CN) | GET 404 | [建议入口](https://github.com/alibaba/formily)；中文深链失效，官方源码可读；根官网只有JS壳，未做浏览器渲染验收 |
| [@wecom/aibot-node-sdk · `docs/awesome/node.mdx:450`](https://github.com/WecomGroup/wecom-aibot-node-sdk) | GET 404 | [建议入口](https://github.com/WecomTeam/aibot-node-sdk)；官方包身份匹配，修正当前源码地址；未推断历史迁移经过 |
| [wloc · `docs/awesome/ops.mdx:156`](https://github.com/Yu9191/wloc) | GET 404 | 原公开地址及账号404，无证实官方新址；社区恢复版不可冒充官方迁移 |
| [@dnd-kit/core · `docs/awesome/react.mdx:372`](https://github.com/clauderic/dnd-kit/tree/main/packages/core) | GET 404 | [建议入口](https://dndkit.com/legacy/introduction/installation/)；旧包仍发布且未标deprecated，源码主干已调整；改Legacy官方安装文档，不自动改成新@dnd-kit/react |
| [@dnd-kit/sortable · `docs/awesome/react.mdx:373`](https://github.com/clauderic/dnd-kit/tree/main/packages/sortable) | GET 404 | [建议入口](https://dndkit.com/legacy/presets/sortable/overview/)；旧包仍发布且未标deprecated；使用官方Legacy Sortable文档 |
| [@dnd-kit/utilities · `docs/awesome/react.mdx:374`](https://github.com/clauderic/dnd-kit/tree/main/packages/utilities) | GET 404 | [建议入口](https://dndkit.com/legacy/introduction/getting-started/)；旧包仍发布且未标deprecated；官方Legacy入门文档包含CSS工具用法，保留实际包名 |
| [@a2ui/markdown-it · `docs/awesome/javascript.mdx:772`](https://github.com/google/A2UI/tree/main/renderers/markdown/markdown-it) | GET 404 | [建议入口](https://github.com/a2ui-project/a2ui/tree/main/typescript/renderers/markdown-it)；官方registry与精确目录API核实 |
| [@a2ui/react · `docs/awesome/react.mdx:40`](https://github.com/google/A2UI/tree/main/renderers/react) | GET 404 | [建议入口](https://github.com/a2ui-project/a2ui/tree/main/typescript/renderers/react)；官方registry与精确目录API核实，新目录包含README/package.json/src |
| [@iconify-json/vscode-icons · `docs/awesome/react.mdx:464`](https://github.com/iconify/icon-sets/tree/master/json/vscode-icons) | GET 404 | [建议入口](https://github.com/iconify/icon-sets/blob/master/json/vscode-icons.json)；原路径缺少.json且把文件写成tree；官方API确认实际为文件 |
| [tiny-csrf · `docs/awesome/node.mdx:126`](https://github.com/le0nkl/tiny-csrf) | GET 404 | 原公开地址404；同名npm包指向另一作者，无历史证据证明同一项目迁移，不自动换成同名仓库 |
| [@narumitw/pi-goal · `docs/awesome/vibe-coding.mdx:107`](https://github.com/narumiruna/pi-extensions/tree/HEAD/extensions/pi-goal) | GET 404 | [建议入口](https://github.com/narumiruna/pi-extensions/tree/HEAD/packages/pi-goal)；官方包元数据与精确目录API确认已在packages下 |
| [prisma · `docs/awesome/node.mdx:230`](https://github.com/prisma/prisma/tree/HEAD/packages/cli) | GET 404 | [建议入口](https://github.com/prisma/orm)；原CLI目录失效；本站位于ORM且描述ORM，建议官方ORM根仓库。若明确收CLI，另用prisma/prisma-cli的packages/prisma |
| [@tiptap/vue-3 · `docs/awesome/vue.mdx:111`](https://github.com/ueberdosis/tiptap/tree/HEAD/packages/vue-3) | GET 404 | [建议入口](https://tiptap.dev/docs/editor/getting-started/install/vue3)；保留@tiptap/vue-3稳定包名，使用官方Vue3安装文档；不能因main目录变成vue就替换成状态不一致的新包名 |
| [vfit-react · `docs/awesome/react.mdx:201`](https://github.com/v-plugin/vfit/tree/main/vfit-react) | GET 404 | [建议入口](https://www.npmjs.com/package/vfit-react)；作者当前README明确提供该npm入口；原源码目录已不可用，未证实源码迁移。npm直抓可能触发反爬 |
| [@ai-sdk/vercel · `docs/awesome/javascript.mdx:32`](https://github.com/vercel/ai/tree/HEAD/packages/vercel) | GET 404 | [建议入口](https://v0.app/docs/api)；@ai-sdk/vercel的官方npm元数据已标deprecated，原v0 Model API已移除；建议撤出当前推荐或标历史。新API文档不是同一个SDK的直接替换 |
| [lucide-vue-next · `docs/awesome/vue.mdx:56`](https://lucide.dev/guide/packages/lucide-vue-next) | GET 404 | [建议入口](https://lucide.dev/guide/vue)；官方v1更名@lucide/vue，本站已有新条目，应合并新旧入口 |
| [codebuddy · `docs/awesome/vibe-coding.mdx:24`](https://www.codebuddy.ai) | GET 404 | [建议入口](https://www.codebuddy.ai/docs/zh/ide/Introduction)；根路由HEAD/GET404，独立客户端只读到HTML壳；官方产品文档可读。标入口异常，不称产品下线 |

### 访问受限与未决项

这些条目不计为确认死链。npm 的统一反爬响应、ChatGPT/DeepSeek 等 403，不能据此判断对应包或产品不存在。

| 位置 | URL | 结果 |
|---|---|---|
| `docs/awesome/ai.mdx:292` | [deepseek](https://chat.deepseek.com) | GET 403 |
| `docs/awesome/ai.mdx:298` | [chatgpt](https://chatgpt.com) | GET 403 |
| `docs/awesome/vibe-coding.mdx:35` | [官网](https://chatgpt.com/zh-Hans-CN/codex) | GET 403 |
| `docs/awesome/ai.mdx:485` | [ardot](https://d.qq.com) | GET 连接失败 |
| `docs/awesome/ai.mdx:324` | [geminiwatermarkcleaner](https://geminiwatermarkcleaner.com) | GET 连接失败 |
| `docs/awesome/vibe-coding.mdx:275` | [lovable](https://lovable.dev) | GET 403 |
| `docs/awesome/website.mdx:124` | [PI Agent 学习指南](https://pistudy.com.cn) | GET 连接失败 |
| `docs/awesome/ai.mdx:190` | [OpenAI Tokenizer](https://platform.openai.com/tokenizer) | GET 403 |
| `docs/awesome/website.mdx:135` | [threejs3d](https://threejs3d.com) | GET 连接失败 |
| `docs/awesome/website.mdx:67` | [AutoPiano 3D](https://www.autopiano.cn/3d) | GET 403 |
| `docs/awesome/website.mdx:17` | [ipaddress](https://www.ipaddress.com/website) | GET 403 |
| `docs/awesome/website.mdx:144` | [mianshiya](https://www.mianshiya.com) | GET 567 |
| `docs/awesome/security.mdx:39` | [@arcjet/guard](https://www.npmjs.com/package/@arcjet/guard) | GET 403 |
| `docs/awesome/javascript.mdx:49` | [@builder.io/mitosis](https://www.npmjs.com/package/@builder.io/mitosis) | GET 403 |
| `docs/awesome/ai.mdx:135` | [@latitude-data/telemetry](https://www.npmjs.com/package/@latitude-data/telemetry) | GET 403 |
| `docs/awesome/desktop.mdx:120` | [@pocketjs/cli](https://www.npmjs.com/package/@pocketjs/cli) | GET 403 |
| `docs/awesome/ai.mdx:376` | [@tobilu/qmd](https://www.npmjs.com/package/@tobilu/qmd) | GET 403 |
| `docs/awesome/engineering.mdx:66` | [e2e](https://www.npmjs.com/package/e2e) | GET 403 |
| `docs/awesome/node.mdx:107` | [egg](https://www.npmjs.com/package/egg) | GET 403 |
| `docs/awesome/ops.mdx:225` | [electerm](https://www.npmjs.com/package/electerm) | GET 403 |
| `docs/awesome/node.mdx:428` | [inngest](https://www.npmjs.com/package/inngest) | GET 403 |
| `docs/awesome/ops.mdx:11` | [openship](https://www.npmjs.com/package/openship) | GET 403 |
| `docs/awesome/react.mdx:140` | [shaders](https://www.npmjs.com/package/shaders) | GET 403 |
| `docs/awesome/node.mdx:20` | [tsc-rs](https://www.npmjs.com/package/tsc-rs) | GET 403 |
| `docs/awesome/engineering.mdx:59` | [turbo](https://www.npmjs.com/package/turbo) | GET 403 |
| `docs/awesome/javascript.mdx:543` | [uploadthing](https://www.npmjs.com/package/uploadthing) | GET 403 |
| `docs/awesome/vibe-coding.mdx:23` | [trae cn](https://www.trae.cn) | GET 403 |
| `docs/awesome/ai.mdx:355` | [updream](https://www.updream.cn) | GET 连接失败 |
| `docs/awesome/website.mdx:40` | [upyun](https://www.upyun.com/webp) | GET 连接失败 |

### 已排除的典型误报

- SVGator：HEAD 404，GET 200 登录页；保留应用入口。
- RemovePhotos 中文页：HEAD 404，GET 200，官网语言切换也指向同址。
- Kaggle：HEAD 404，GET 200 正常页面。
- IPAddress：HEAD 404，GET 403 安全检查页；归访问受限，不能判死链。
- Lovart：本机 TLS 失败，独立 web 客户端能读取正常产品界面；保留原址。


## 分类边界：优先修“找不到”和“放错了”

建议每个条目有一个主归属，其他维度使用标签或交叉索引。包的归属由使用者接入方式决定；成品工具按主要任务决定。实现语言、是否支持 AI、是否提供 MCP、自托管或桌面版，不应单独决定主分类。

| 问题 | 当前实例 | 建议 |
|---|---|---|
| AI 基础设施和成品应用混在一页 | `ai.mdx` 的模型/推理/平台/网关与 183 条“产品”并列 | 优先拆为“AI 开发与基础设施”和“AI 应用与创作”；编程用途继续由 `vibe-coding` 承接 |
| AI 编程中的产品生态与任务分类交叉 | 同页有 Codex、Claude Code、Pi、Skill、工作流、会话管理 | 主体按用途组织；具体宿主扩展保留生态小组；用宿主标签和互链补充检索 |
| 桌面开发和日常软件混放 | `desktop.mdx` 70 条开发资源、98 条应用工具 | 现有侧栏已用锚点提供两种入口，短期保留并明确范围；继续增长时再拆开发与应用 |
| 通用组件被放进 AI 组件 | `react.mdx:52` 的 shadcn-cookie-consent、`:53` 的 react-extras | 前者移交互/隐私同意，后者移通用工具；AI 组件按实际用途筛选 |
| 平台产品和 SDK 混放 | 自托管里的 Supabase / InsForge，语言页里的服务端应用 | 后端平台与基础设施放基础设施；业务应用保留自托管；语言页仅保留对应 SDK / 可嵌入库 |
| 测试分类混合工具品牌和能力 | Vitest/Jest/Playwright 与组件测试/接口模拟/测试替身并列 | 一级采用测试任务，框架生态作为下级；先合并重复的测试替身类，减少单条目子标题 |
| 开发工程覆盖面不清 | 工程化混入硬件、应用框架、测试框架；IDE 独立只有 8 条 | 明确“开发环境、代码质量、构建、发布、文档”边界；不要把所有开发相关内容都丢进工程化 |
| 资源页按载体聚合，成为兜底页 | `website.mdx` 兼有工具、规范、课程、博客、设计素材和账号服务 | 分清“在线工具”与“学习和参考”；网络账号服务明确用途和入选理由 |
| 开源发现与数据集独立页内容较少 | 展示标题已准确，`github.mdx` 仅 3 条项目导航与 3 条数据资源 | 可合入资源页的“项目发现”和“开放数据”，依据导航价值决定，保留旧路径入口 |

多数同 URL 收录是合理的不同绑定包。跨文件相同主 URL 有 14 组、40 次出现，例如 TanStack Virtual、dotLottie、Embla、XYFlow 的框架绑定；不应按 URL 或仓库一刀切去重。应按“项目 + 包/产品身份”判断。

## 页面拆并建议

第一阶段保持现有大分组和大多数路径，先做确定性整理：合并重复条目、修正错误入口、调整明显错放、合并低价值小节。拆页前保留旧页面为目录/兼容入口，维护现有 39 处内部引用，不能仅改文件名。

第二阶段优先拆 JavaScript 与 AI 页面。JavaScript 可按“通用 JS/TS 与浏览器能力”“Web UI、交互与可视化”“文档、编辑器与媒体”分为三页，仍放在同一 Web 前端导航组。其中文件与文档 116 条、图像与音视频 62 条，已有适合独立的内容体量。AI 按资源角色拆为两页，继续与现有 AI 编程页并列。桌面与浏览器扩展当前有开发/应用锚点双入口，无条目复制，暂不需要物理拆页。

React 462 条、Node.js 356 条也需要优化，但不宜与前述拆页同时全面重构。先把标题树分组清楚、减少重复，若检索仍困难，再按真实使用任务拆 React 基础/组件、Node 服务/系统与工具。保留 Vue、React Native、Svelte、Solid 各自生态，不把小框架页面硬套 React 的细颗粒模板。

Swift、Java 可降低侧栏权重、放进可折叠的语言分组，页面继续保留。按量少合并成“其他语言”会牺牲查找的可预测性，当前收益有限。IDE 可以先作为开发工程导航的子入口；若合并，应结合工程化拆分一起做，避免 8 条转移后只是把另一长页变得更长。

建议导航继续保留现有 7 个领域：AI、Web 前端、编程语言与生态、跨平台开发、开发与工程化、基础设施与安全、应用与资源。优化分组的可折叠性与页面主归属，比追求更少的一级领域更有效。增加一个轻量的 Awesome 总览，解释边界、给常用任务入口；目前主页“精选资源”直接落到 AI 页，不能代表全部目录。

## 日常收录规则建议

1. 新条目至少提供“一句话用途 + 主链接”。当前有 235 个顶层条目没有说明；嵌套 provider 或插件包可共享父条目上下文，不必重复写。
2. 开发库优先官方源码/文档与准确包路径，成品应用优先官方产品入口；官网和源码作为同一条目的辅助链接。独立子包可单独列，不能把不相干插件都链到核心仓库。
3. 用很少的标签补充平台与状态，如桌面/浏览器/自托管、官方/社区、已归档/维护模式；避免用每种标签再建一个页面。
4. 相同包名、重定向后同一产品先复查；同 monorepo 的不同包和不同框架绑定允许保留。
5. 小节只有一两条且没有独立导航价值时，优先归入上级；官方资源、外部引用的稳定锚点等可保留，不设机械数量下限。
6. 默认分支与 `HEAD` 目录代表源码主干，不保证对应 npm 稳定版。包名/版本不一致时优先官方安装文档或明确版本入口，不能因为主干重命名就自动替换包。
7. 链接检查区分正常、重定向、明确公开地址失效、受限/待复核。初次 404/网络失败先记问题并重试，避免自动删除。归档不等于链接失效，是否保留取决于历史价值与替代方案。

## 实施优先级

P0：修正明确坏链、包入口错误和同包重复，补充已归档/弃用状态。

P1：调整具体错放条目，收紧测试/Go/Svelte/工程化小节；明确 AI、业务应用与基础设施的边界。

P2：试拆 JavaScript、AI 页面，增加总览与兼容入口；再根据使用情况处理 React、Node 长页。

P3：补关键条目说明，建立轻量的链接复查记录和维护状态标识。当前 Markdown 足够用，无需先改造成数据库或重写目录站点。

## 已有明确证据的内容与入口问题

下表既包含可直接确认的错链、官方误标、重复和历史状态，也包含根据使用任务提出的归类建议；分类建议不等于项目本身存在问题。这些情况并非都能由 HTTP 状态码发现。

| 位置 | 结论 | 建议与证据 |
|---|---|---|
| `react.mdx:601` | Mux Player React 链到了 Mux Video React 包 | 改为 [mux-player-react 官方包目录](https://github.com/muxinc/elements/tree/main/packages/mux-player-react)，官方 npm 元数据和源码包名已核对 |
| `node.mdx:480–482` | 3 个独立 Octokit 插件都指向 core.js | 分别使用官方 [GraphQL 分页插件](https://github.com/octokit/plugin-paginate-graphql.js)、[REST 分页插件](https://github.com/octokit/plugin-paginate-rest.js)、[REST 方法插件](https://github.com/octokit/plugin-rest-endpoint-methods.js) |
| `react.mdx:413 / 420` | 同一个 @lottiefiles/dotlottie-react 重复 | 保留一个准确的 React 包入口；框架不同的 Vue/Svelte/Solid 包继续保留 |
| `javascript.mdx:562 / 564` | PDF.js 与 pdfjs-dist 两条平行入口指同一项目 | 主项目与发行包合为父子说明，统一 HTTPS |
| `ai.mdx:263 / 267` | claude-scientific-skills 与 scientific-agent-skills 已重定向到同一仓库 | 合并为 [scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)，旧名保留为曾用名 |
| `ai.mdx:38 / 42` | wifi-densepose 重定向到已收录的 RuView | 保留 [RuView](https://github.com/ruvnet/RuView)，旧名写进说明 |
| `vue.mdx:53 / 56` | 同时保留 Lucide 新包和旧包入口，旧文档已 404 | 合并到新包；[官方 v1 迁移说明](https://lucide.dev/guide/version-1) 与[新 Vue 文档](https://lucide.dev/guide/vue) |
| `vue.mdx:23` | ElevenLabs UI 是 React 组件，被放进 Vue | 移 React 的 AI UI；[官方组件源码](https://raw.githubusercontent.com/elevenlabs/ui/main/apps/www/registry/elevenlabs-ui/ui/conversation.tsx) 直接使用 React |
| `react.mdx:156` | 所指 Semantic UI 是通用框架，非 React 绑定 | 要么移通用 UI，要么明确收录 [Semantic UI React](https://react.semantic-ui.com/)；不能改显示名却仍留原错误目标 |
| `javascript.mdx:414` | Geist 所指是 Next 专用包 | 放 React/Next 集成；CSS 页已保留字体资源。[官方包元数据](https://raw.githubusercontent.com/vercel/geist-font/main/packages/next/package.json) |
| `react.mdx:555` | react-pdf-html 嵌在 PDF 查看器下面，实际基于 PDF 生成体系 | 移到 @react-pdf/renderer 子项，并区分“查看 PDF”和“生成 PDF”。[官方 README](https://github.com/danomatic/react-pdf-html) |
| `vibe-coding.mdx:80` | OpenChamber 在“官方资源”下，但它是独立社区项目 | 移到社区客户端/工作区；[项目声明](https://github.com/openchamber/openchamber#why-opencode) |
| `go.mdx:16` | LiveKit 所指为服务端产品，按实现语言归 Go | 放实时媒体基础设施；Go SDK 可作为不同条目。[官方架构与 SDK](https://docs.livekit.io/intro/overview/) |
| `python.mdx:20` | MiroFish 预测模拟应用放在智能体框架 | 放 AI 研究/预测产品，保留开发说明互链。[官方项目](https://github.com/666ghj/MiroFish) |
| `self-hosted.mdx:92–93` | InsForge / Supabase 与消息 API 混列 | 新设基础设施页内“后端平台”，消息集成留业务应用；不新增零散小页 |
| `engineering.mdx:66` | e2e 测试框架放代码质量 | 放测试页的端到端测试 |
| `engineering.mdx:277` | 工程化页中有 Elixir 的 Phoenix 应用框架，页内范围待明确 | 明确工程页范围，放服务端框架总入口或先保留待整体整理；不为一条新建 Elixir 页。[官方项目](https://github.com/phoenixframework/phoenix) |
| `javascript.mdx:32` | @ai-sdk/vercel 官方元数据已标弃用，原 v0 Model API 被移除 | 撤出当前推荐或标历史；[官方包元数据](https://registry.npmjs.org/@ai-sdk%2Fvercel/latest)、[当前 API 文档](https://v0.app/docs/api)。当前 API 不是同包无缝替换 |
| `node.mdx:502` | Jaeger exporter 已弃用，根仓库 200 掩盖了包状态 | 标历史或撤出当前推荐，改列 OTLP 方案；[官方 API 文档](https://open-telemetry.github.io/opentelemetry-js/modules/_opentelemetry_exporter-jaeger.html)、[3.x 迁移指南](https://github.com/open-telemetry/opentelemetry-js/blob/main/doc/3.x/migration-guide.md) |
| `react.mdx:378` | react-beautiful-dnd 仓库已于 2025-08-18 归档 | 保留历史价值时明确状态，不与当前维护方案无差别并列。[官方仓库](https://github.com/atlassian/react-beautiful-dnd) |
| `website.mdx:144–145` | 面试鸭官网与源码分成两条 | 同一条目提供官网/源码两个入口；官网 567 单列访问异常，不称永久下线 |

不要误删 `@react-oauth/github`：虽然仓库 About 只写 Google，[完整官方 README](https://github.com/MomenSherif/react-oauth#packages) 确实列有 Google 与 GitHub 两包，并提供 GitHub 登录用法。这是只看标题或相同 URL 容易误判的例子。

## 27 页逐页建议

| 文件 | 条目 | 行数 | 单条目叶子/全部叶子 | 建议 |
|---|---:|---:|---:|---|
| `ai.mdx` | 402 | 528 | 2/36 | 拆出 AI 应用；模型、框架、平台与技能明确层级 |
| `browser-extension.mdx` | 25 | 54 | 3/7 | 保留开发/应用两段和现有锚点入口，不拆短页 |
| `cpp.mdx` | 12 | 31 | 3/6 | 保留生态页，合并不必要的单条目层级 |
| `css.mdx` | 44 | 82 | 0/11 | 保留；统一类名/变体、样式解析与构建边界 |
| `desktop.mdx` | 168 | 266 | 3/28 | 保留开发/应用锚点双入口，设备与 CLI 标清形态 |
| `engineering.mdx` | 167 | 285 | 11/34 | 修错放、归拢依赖工具与开发脚本，减少孤立小节 |
| `github.mdx` | 6 | 13 | 0/2 | 6 条合入资源页，保留旧路由兼容入口 |
| `go.mdx` | 25 | 61 | 8/11 | 保留生态；移出 LiveKit 服务，合并低容量工具小节 |
| `ide.mdx` | 8 | 20 | 1/3 | 保留独立任务入口，可在导航下收，不强并长页 |
| `java.mdx` | 2 | 11 | 2/2 | 保留精简生态页，不为数量平衡混入其他语言 |
| `javascript.mdx` | 767 | 993 | 4/70 | 优先试拆文档/编辑器或图形/媒体专题，保留母页索引 |
| `node.mdx` | 356 | 517 | 7/45 | 名称可改“JS 服务端与运行时”；先修入口和页内边界 |
| `ops.mdx` | 167 | 273 | 3/31 | 补 BaaS/实时媒体；终端工具可作为下一批独立专题 |
| `python.mdx` | 80 | 127 | 2/14 | 区分模型、可编程库与成品应用；修 MiroFish/Celery 等归属 |
| `react-native.mdx` | 110 | 173 | 1/20 | 保留，微调加密/文件等个别归类 |
| `react.mdx` | 462 | 661 | 4/58 | 修重复和身份/嵌套错误；区分原语、组件体系和源码素材 |
| `rust.mdx` | 56 | 102 | 2/13 | 整体边界较好，保持；多语言接口用互链补充 |
| `security.mdx` | 52 | 91 | 2/12 | 分清认证/授权、混淆/加密、AI 防护/AI 辅助审计 |
| `self-hosted.mdx` | 59 | 126 | 4/19 | 按个人/团队业务用途；后端平台归基础设施 |
| `solid.mdx` | 12 | 28 | 2/5 | 保留框架页，少量标题压平，不合成“其他框架” |
| `svelte.mdx` | 21 | 57 | 6/11 | 保留框架页，压平过细组件子节 |
| `swift.mdx` | 1 | 5 | 1/1 | 保留精选入口，降低侧栏权重，不凑数扩充 |
| `test.mdx` | 43 | 112 | 7/20 | 统一测试任务主轴，合并替身/覆盖率重复分类 |
| `uni.mdx` | 22 | 50 | 2/9 | 保留，写清通用库的 uni-app 集成用途 |
| `vibe-coding.mdx` | 225 | 319 | 3/25 | 区分官方/社区，按任务+宿主索引，技能按用途归属 |
| `vue.mdx` | 97 | 181 | 4/26 | 移出 React 组件，合并 Lucide 新旧包入口 |
| `website.mdx` | 99 | 182 | 5/24 | 区分在线工具、资源与学习；吸收开源发现和数据集 |

## 证据保存口径

本报告保留归并统计、逐页建议与可复查的官方入口。逐 URL 探测原始记录未纳入仓库，访问受限与未确认失效的入口按待复核处理。
