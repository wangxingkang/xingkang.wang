# Awesome 受限与未决链接复查

日期：2026-10-25。基线：`main` / `df69e9f6`。复查原审计 29 个受限或未决入口，加 CodeBuddy、Lovart，以及第一轮新增的 VFit npm 入口，共 32 个不同 URL。下文保留复查时的入口与行号，后续实施结果见末节；原有 `react.mdx` 的 tool-ui 删除保持不变。

## 结论

- 4 项需要处理：Ardot 更新官方入口；Gemini Watermark Cleaner 原域名已过期；PI Agent 学习指南、threejs3d 的 HTTPS 证书已过期。
- 1 项入口可改善：CodeBuddy 可补充可读的官方产品文档，产品仍存在，不判断停运。
- 其余 27 项保留：15 个 npm 包经 registry 确认存在且 latest 未标记 deprecated；8 个受限网站有第一方佐证；又拍云、Lovart、面试鸭、UpDream 按下表分别保留。

## 需要处理的 4 项

| 条目与当前位置 | 本次证据 | 建议 |
| --- | --- | --- |
| [Ardot](https://d.qq.com) · `docs/awesome/ai.mdx:390` | 旧入口 GET / 独立 web 访问超时；[腾讯云产品页](https://cloud.tencent.com/product/adt)的“立即体验”指向 [ardot.tencent.com](https://ardot.tencent.com/)，后者普通 GET 200，标题与产品身份一致；[官方文档](https://docs.ardot.tencent.com/product/introduction.html)同样可读 | 主链接改为 `https://ardot.tencent.com/`；这是更新当前官方入口，不推断旧域名永久失效 |
| [Gemini Watermark Cleaner](https://geminiwatermarkcleaner.com) · `docs/awesome/ai.mdx:373` | HTTPS 握手失败，后续 HTTP GET 报 DNS 解析失败；[Verisign .com 官方 RDAP](https://rdap.verisign.com/com/v1/domain/geminiwatermarkcleaner.com)实测 200，状态为 `redemption period`，expiration 为 `2026-08-20T01:04:43Z`；原域名搜索索引也显示 Cloudflare Registrar 到期页，但不以缓存单独定案 | 从当前推荐移除，或显式标记“原域名已过期”；没有确认同一作者的新入口，不替换成同名工具。域名仍可能续费恢复，不据此宣称项目永久终止 |
| [PI Agent 学习指南](https://pistudy.com.cn) · `docs/awesome/website.mdx:137` | curl 默认校验证书失败（exit 60）；公开 TLS 叶证书 `CN=pistudy.com.cn`、Let’s Encrypt YR2，`notAfter=2026-10-21 08:25:42 UTC`；OpenSSL verify code 10。搜索可读到旧站内容，但不能证明当前 HTTPS 正常 | 保留条目并标记证书过期/暂不可用，等待站点续证；不降级到 HTTP、不绕过校验，也不把 Pi 官方项目冒充该教程的新址 |
| [threejs3d](https://threejs3d.com) · `docs/awesome/website.mdx:148` | curl exit 60；公开 TLS 叶证书 `CN=threejs3d.com`、Let’s Encrypt YE2，`notAfter=2026-09-18 03:32:50 UTC`；OpenSSL verify code 10，独立 web 访问也超时 | 标记证书过期/暂不可用；尚无已确认的新官方入口，保留到续证或取得迁移证据后再决定移除 |

## 可改善入口的 1 项

- [CodeBuddy](https://www.codebuddy.ai) · `docs/awesome/vibe-coding.mdx:41`：此前根路由 404，本次本机 GET 握手超时，独立 web 只能读到无正文的页面；[官方中文产品概述](https://www.codebuddy.ai/docs/zh/ide/Introduction)可读，明确为腾讯云 IDE / CLI 产品，并仍引用该域名。建议给原条目补充这份官方文档作为可靠说明入口；若目录要求单一可读主入口，也可用该文档。没有证据称产品停运或整个域名失效，不根据第三方迁移说法直接改为中国站。

## 保留的 15 个 npm 包

所有 npm 包网页普通 GET 均为 403 / 防护挑战，官方 registry 精确包均为 200。以下版本为复查时 `latest`，同时等于无预发布后缀的最高稳定版本，均未标记 `deprecated`；这是包身份与入口复查，不代表运行、安全或兼容性验收。

| 包与当前引用 | npm GET | registry 证据 | latest | 建议 |
| --- | --- | --- | --- | --- |
| [@arcjet/guard](https://www.npmjs.com/package/@arcjet/guard) · `docs/awesome/security.mdx:55` | 403 防护挑战 | [200：精确包元数据](https://registry.npmjs.org/@arcjet%2Fguard) | `1.14.1` | 保留 |
| [@builder.io/mitosis](https://www.npmjs.com/package/@builder.io/mitosis) · `docs/awesome/javascript.mdx:64` | 403 防护挑战 | [200：精确包元数据](https://registry.npmjs.org/@builder.io%2Fmitosis) | `0.14.1` | 保留 |
| [@latitude-data/telemetry](https://www.npmjs.com/package/@latitude-data/telemetry) · `docs/awesome/ai.mdx:132` | 403 防护挑战 | [200：精确包元数据](https://registry.npmjs.org/@latitude-data%2Ftelemetry) | `4.3.0` | 保留 |
| [@pocketjs/cli](https://www.npmjs.com/package/@pocketjs/cli) · `docs/awesome/desktop.mdx:133` | 403 防护挑战 | [200：精确包元数据](https://registry.npmjs.org/@pocketjs%2Fcli) | `0.15.0` | 保留 |
| [@tobilu/qmd](https://www.npmjs.com/package/@tobilu/qmd) · `docs/awesome/ai.mdx:341` | 403 防护挑战 | [200：精确包元数据](https://registry.npmjs.org/@tobilu%2Fqmd) | `2.8.3` | 保留 |
| [e2e](https://www.npmjs.com/package/e2e) · `docs/awesome/test.mdx:83` | 403 防护挑战 | [200：精确包元数据](https://registry.npmjs.org/e2e) | `0.21.3` | 保留 |
| [egg](https://www.npmjs.com/package/egg) · `docs/awesome/node.mdx:142` | 403 防护挑战 | [200：精确包元数据](https://registry.npmjs.org/egg) | `4.2.0` | 保留 |
| [electerm](https://www.npmjs.com/package/electerm) · `docs/awesome/ops.mdx:246` | 403 防护挑战 | [200：精确包元数据](https://registry.npmjs.org/electerm) | `5.7.5` | 保留 |
| [inngest](https://www.npmjs.com/package/inngest) · `docs/awesome/node.mdx:466` | 403 防护挑战 | [200：精确包元数据](https://registry.npmjs.org/inngest) | `4.26.0` | 保留 |
| [openship](https://www.npmjs.com/package/openship) · `docs/awesome/ops.mdx:24` | 403 防护挑战 | [200：精确包元数据](https://registry.npmjs.org/openship) | `0.9.5` | 保留 |
| [shaders](https://www.npmjs.com/package/shaders) · `docs/awesome/react.mdx:188` | 403 防护挑战 | [200：精确包元数据](https://registry.npmjs.org/shaders) | `4.0.5` | 保留 |
| [tsc-rs](https://www.npmjs.com/package/tsc-rs) · `docs/awesome/node.mdx:35` | 403 防护挑战 | [200：精确包元数据](https://registry.npmjs.org/tsc-rs) | `0.8.0` | 保留 |
| [turbo](https://www.npmjs.com/package/turbo) · `docs/awesome/engineering.mdx:68` | 403 防护挑战 | [200：精确包元数据](https://registry.npmjs.org/turbo) | `2.11.10` | 保留 |
| [uploadthing](https://www.npmjs.com/package/uploadthing) · `docs/awesome/javascript.mdx:553` | 403 防护挑战 | [200：精确包元数据](https://registry.npmjs.org/uploadthing) | `7.7.4` | 保留 |
| [vfit-react](https://www.npmjs.com/package/vfit-react) · `docs/awesome/react.mdx:249` | 403 防护挑战 | [200：精确包元数据](https://registry.npmjs.org/vfit-react) | `0.0.2` | 保留 |

VFit 目前缺少 registry repository/homepage 元数据，但包名与用途仍匹配，不能据此删除或猜测新的源码地址。历史版本存在弃用标记也不等于当前 latest 弃用。

## 保留的 8 个受限网站

| 条目与当前位置 | 当前访问证据与第一方来源 | 建议 |
| --- | --- | --- |
| [DeepSeek](https://chat.deepseek.com) · `docs/awesome/ai.mdx:323` | CloudFront 403 Request blocked；web 抓取同样 403。 [DeepSeek 官方首页](https://www.deepseek.com/en/) | 保留 |
| [ChatGPT](https://chatgpt.com) · `docs/awesome/ai.mdx:329` | 普通 GET 为 Cloudflare 403；web 可读取公开未登录聊天界面。 [ChatGPT 官方页面](https://chatgpt.com/) | 保留 |
| [Codex](https://chatgpt.com/zh-Hans-CN/codex) · `docs/awesome/vibe-coding.mdx:52` | 普通 GET 为 Cloudflare 403；web 自动规范化为 https://chatgpt.com/zh-Hans-CN/codex/ 并读取中文产品页。 [Codex 官方中文产品页](https://chatgpt.com/zh-Hans-CN/codex/) | 保留 |
| [Lovable](https://lovable.dev) · `docs/awesome/vibe-coding.mdx:258` | 普通 GET 为 Cloudflare 403 Just a moment；web 可读取官网与文档。 [Lovable 官网](https://lovable.dev/)；[Lovable 官方文档](https://docs.lovable.dev/introduction/welcome) | 保留 |
| [OpenAI Tokenizer](https://platform.openai.com/tokenizer) · `docs/awesome/ai.mdx:220` | 普通 GET 为 Cloudflare 403；web 返回 OpenAI Platform 标题但 0 行正文，属于未解析出的 JS 应用。 [OpenAI 官方 Tokenizer 说明](https://help.openai.com/en/articles/4936856-understanding-and-counting-tokens)；[Tokenizer 原入口](https://platform.openai.com/tokenizer) | 保留 |
| [AutoPiano 3D](https://www.autopiano.cn/3d) · `docs/awesome/website.mdx:80` | 普通 GET 为 nginx 403，含 X-SHIELD 安全注入；web 对 /3d 超时。 [AutoPiano 官方首页](https://www.autopiano.cn/) | 保留 |
| [IPAddress](https://www.ipaddress.com/website) · `docs/awesome/website.mdx:30` | 普通 GET 为 Cloudflare 403 Security Check；web 无尾斜杠抓取失败，有尾斜杠 /website/ 可读取。 [IPAddress 官方 Website Lookup 页面](https://www.ipaddress.com/website/)；[IPAddress 官方首页](https://www.ipaddress.com/) | 保留；可选补尾斜杠，不算死链修复 |
| [TRAE 中国版](https://www.trae.cn) · `docs/awesome/vibe-coding.mdx:40` | 普通 GET 为 volc-dcdn 403，正文“抱歉，您当前区域不支持访问”；web 能读取官网。 [TRAE 中国官网](https://www.trae.cn/)；[TRAE 官方文档](https://docs.trae.cn/) | 保留 |

## 另外保留的 4 项

| 条目与当前位置 | 本次结果 | 建议 |
| --- | --- | --- |
| [又拍云 WebP](https://www.upyun.com/webp) · `docs/awesome/website.mdx:53` | 本机 GET 握手超时；独立 web 可读原页面的 WebP 演示、上传体验与官方开发文档链接，内容和目录用途一致 | 保留 |
| [Lovart](https://www.lovart.ai/) · `docs/awesome/ai.mdx:384` | 本机 TLS 握手失败；独立 web 可读取原页面的 Lovart 2.0、项目、素材与 Skills 界面 | 保留，排除仅凭本机 TLS 失败判断死链 |
| [面试鸭](https://www.mianshiya.com) · `docs/awesome/website.mdx:157` | 本机及独立 web 均返回 567；定制 HTML 只显示状态码和请求标识，未取得产品正文，不能仅以 567 判断失效；[作者仓库](https://github.com/liyupi/mianshiya)可读，About 与 README 仍指向官网 | 保留官网和已有源码辅助链接，567 不记为 404 |
| [UpDream](https://www.updream.cn) · `docs/awesome/ai.mdx:421` | 本机两次 GET 均握手超时，独立 web 返回无正文的 HTML；没有足够现场证据确认产品界面，也没有确证新址或停运 | 继续保留为未决；不把空正文算已恢复，也不以第三方介绍代替验收 |

## 证据口径与验证

- 普通 GET 跟随重定向，初查并发最多 3；网络失败与 HTTP 状态分开记录。受限项通过独立 web 通道及第一方文档/源码交叉验证，npm 另查官方 registry。
- 两个证书问题同时用默认 curl 校验和公开 TLS 证书确认；未关闭证书校验读取应用内容，未绕过安全挑战。域名过期另以官方 RDAP 交叉确认。
- HTTP 成功、产品文档存在、JS 应用壳可返回是不同证据；未登录产品、调用模型、上传文件或测试付费流程。
- 已核对 29 + 2 + 1 个不同 URL 恰好全部覆盖，无漏项；报告位置来自当前文件，不复用分类优化前的旧行号。
- 复查阶段仅新增本报告，未修改收录内容。经确认后的实施范围见下节。

## 本轮实施

- Ardot 主链接更新为 `https://ardot.tencent.com/`。
- 移除原域名已过期的 Gemini Watermark Cleaner 条目，不以同名项目替换。
- PI Agent 学习指南与 threejs3d 保留原 HTTPS 链接，标注“暂不可用”及证书过期原因、复查日期。
- CodeBuddy 保留官网主链接，补充官方中文产品文档入口。
- 其余受限与未决条目继续保留；不拆文件，不改分类或侧栏。提交包含三个目录页面及本复查报告，原有 tool-ui 删除不纳入提交。

实施验证：精确差异检查确认仅上述五项条目变化，其余 Awesome 内容与侧栏保持不变；`pnpm lint --max-warnings 0`、`pnpm run build`、`git diff --check` 均通过。构建 HTML 中已确认新 Ardot 入口、过期域名条目移除、两个带日期的暂不可用标记，以及 CodeBuddy 官网和文档双入口。
