# Awesome 第一轮整理记录

日期：2026-10-25。依据[改动前审计](awesome-audit-2026-10-25.md)，本轮只修复明确失效/错指入口、合并真实重复、调整明确错放。不拆文件、不调整侧栏。

## 改动结果

- 仍为 27 个 Awesome 页面，`_meta.json` 未改变。
- 主条目 3,488 → 3,479：移除 3 条，6 组合并各减少 1 条；分类移动不减少条目。
- 修复 12 个确认失效入口和 4 个错指入口。另为 Jaeger exporter 修正官方文档入口并标弃用，为 react-beautiful-dnd 标归档。
- 全部 31 个受限、未确认失效或独立访问已确认正常的 URL 保留，包括 CodeBuddy、面试鸭、Lovart 与 npm 包入口。
- 保留全部旧标题锚点；安全页两个更准确的新标题通过显式 ID 兼容旧锚点。
- 任务前已有的 `react.mdx` 中 tool-ui 删除保留，不计入本轮 9 条净减少。

## 入口修正

| 文件 | 原入口 | 新入口 |
|---|---|---|
| `javascript.mdx` | https://formilyjs.org/zh-CN | https://github.com/alibaba/formily |
| `javascript.mdx` | https://github.com/google/A2UI/tree/main/renderers/markdown/markdown-it | https://github.com/a2ui-project/a2ui/tree/main/typescript/renderers/markdown-it |
| `node.mdx` | https://github.com/WecomGroup/wecom-aibot-node-sdk | https://github.com/WecomTeam/aibot-node-sdk |
| `node.mdx` | https://github.com/prisma/prisma/tree/HEAD/packages/cli | https://github.com/prisma/orm |
| `react.mdx` | https://github.com/clauderic/dnd-kit/tree/main/packages/core | https://dndkit.com/legacy/introduction/installation/ |
| `react.mdx` | https://github.com/clauderic/dnd-kit/tree/main/packages/sortable | https://dndkit.com/legacy/presets/sortable/overview/ |
| `react.mdx` | https://github.com/clauderic/dnd-kit/tree/main/packages/utilities | https://dndkit.com/legacy/introduction/getting-started/ |
| `react.mdx` | https://github.com/google/A2UI/tree/main/renderers/react | https://github.com/a2ui-project/a2ui/tree/main/typescript/renderers/react |
| `react.mdx` | https://github.com/iconify/icon-sets/tree/master/json/vscode-icons | https://github.com/iconify/icon-sets/blob/master/json/vscode-icons.json |
| `react.mdx` | https://github.com/v-plugin/vfit/tree/main/vfit-react | https://www.npmjs.com/package/vfit-react |
| `react.mdx` | https://github.com/muxinc/elements/tree/main/packages/mux-video-react | https://github.com/muxinc/elements/tree/main/packages/mux-player-react |
| `vibe-coding.mdx` | https://github.com/narumiruna/pi-extensions/tree/HEAD/extensions/pi-goal | https://github.com/narumiruna/pi-extensions/tree/HEAD/packages/pi-goal |
| `vue.mdx` | https://github.com/ueberdosis/tiptap/tree/HEAD/packages/vue-3 | https://tiptap.dev/docs/editor/getting-started/install/vue3 |
| `node.mdx` | https://github.com/octokit/core.js | https://github.com/octokit/plugin-paginate-graphql.js |
| `node.mdx` | https://github.com/octokit/core.js | https://github.com/octokit/plugin-paginate-rest.js |
| `node.mdx` | https://github.com/octokit/core.js | https://github.com/octokit/plugin-rest-endpoint-methods.js |

## 移除的确认失效条目

| 条目 | 原链接 | 原因 |
|---|---|---|
| WLOC | https://github.com/Yu9191/wloc | 原公开地址及账号 404；无已证实的官方替代，未把社区恢复版冒充原项目迁移 |
| tiny-csrf | https://github.com/le0nkl/tiny-csrf | 原公开地址 404；同名 npm 包指向另一作者，无证据证明两者为同一项目 |
| @ai-sdk/vercel | https://github.com/vercel/ai/tree/HEAD/packages/vercel | 源目录 404；官方包元数据明确弃用、原 v0 Model API 已移除，不以另一 API 冒充同包修复 |

## 合并的真实重复

| 合并项 | 保留信息 |
|---|---|
| dotlottie-react 两条 | 精确 React 包目录，Vue/Svelte/Solid 独立适配包不动 |
| PDF.js / pdfjs-dist | 一个 PDF.js 条目，说明 npm 发行包为 pdfjs-dist |
| RuView / wifi-densepose | RuView 主入口与旧名 |
| scientific-agent-skills / claude-scientific-skills | 当前仓库与旧名、用途 |
| @lucide/vue / lucide-vue-next | 当前包入口及旧包名、旧版本官方文档 |
| 面试鸭官网 / 源码 | 单一条目同时保留原官网和源码地址，官网访问异常未被删除 |

## 明确分类与父子关系调整

- React：ElevenLabs UI 从 Vue 移入 AI 组件；Cookie 同意移至反馈与引导，react-extras 移至组合与互操作；Geist Next 集成从 JavaScript 移入 Next.js；通用 Semantic UI 移到 JavaScript UI 库。
- React：react-pdf-html 归入 @react-pdf/renderer；Dnd Legacy core 单独列出，sortable/utilities 归其下，不再挂在新一代 @dnd-kit/react 下。
- Vue：通用 Comark 渲染器从 AI 移至文档与打印。
- AI / 语言 / 基础设施：MiroFish 从 Python 智能体框架移入 AI 研究工具；LiveKit 从 Go 移至运维的实时音视频；InsForge、Supabase 从自托管业务 API 移至运维的后端平台。
- Python：Celery 从数据处理移至后台任务与调度，Magika 移至文档处理，3b1b/videos 作为 Manim 示例子项。
- 工程 / 测试：e2e 从代码质量移至端到端与设备测试。
- AI 编程：OpenChamber 从 OpenCode 官方资源移至社区客户端。
- 安全与摘要：区分身份与访问控制、代码与访问保护；AI 辅助代码审计工具放回代码审计；稳定哈希和 MD5 摘要从安全组移出，不移动 bcrypt、noble-hashes 等安全用途库。

## 保留到后续

106 个正常重定向的批量规范化、多用途平台与 Skill 生态归属、Phoenix/硬件/合约范围、完整标题树重整、导航、总览与拆页均未纳入本轮。

## 验证

- AST 条目身份守恒：通过，净减少仅上述 9 条；移动的其余条目全部保留。
- 39 处站内链接及锚点：通过；旧标题锚点均有现存目标。
- 31 个受限/未决 URL：全部保留。
- 前端分类及父子关系独立复核：通过。
- `git diff --check`：通过。
- 首轮 `pnpm lint`：当时有 12 个错误、1 个警告，来自部署配置的两处 YAML 样式错误，以及博客组件的十处 `react/static-components` 错误与一处索引 key 警告。后续经授权一并修复，最终结果见下。
- `pnpm run build`：通过，47 个页面构建成功；27 个 Awesome 页面的旧标题锚点已在实际 HTML 中逐一确认。
- 18 个新增目标的定向 GET：17 个 200；VFit npm 页面 403，官方 registry 和作者 README 200 且包身份一致。未把受限响应算作 200。
- 定向验证修正：Jaeger 的旧 API 文档现场返回 404，最终改为实测 200 的官方 3.x 迁移指南，而非沿用旧网页缓存。

## Lint 修复与提交范围

- 部署配置的 `cache` 使用不带引号的 `pnpm`，不改变缓存行为。
- Rspress 的 `getCustomMDXComponent` 只返回静态导入的组件映射；将解构移到模块作用域，消除渲染内动态组件判定。
- 博客列表使用页面路由 `link` 作为稳定 key，移除索引回退；列表顺序、内容和分隔线逻辑保留。
- 提交包含 Awesome 第一轮整理、审计与处理记录、上述 lint 修复；不包含任务前已有的 tool-ui 删除。工作区口径为 3,488 → 3,479，排除这项既有删除后的提交口径为 3,489 → 3,480。
- 报告仅保留可在仓库独立阅读的证据和统计，不提交本机临时附件路径。

最终验证：`pnpm lint --max-warnings 0` 通过（0 错误、0 警告）；`pnpm run build` 通过。构建后的博客可见文字、链接、标题与分隔线同修复前一致。Awesome 内容守恒、旧锚点及受限入口保留检查通过。
