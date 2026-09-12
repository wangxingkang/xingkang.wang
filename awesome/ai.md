# AI

按模型、智能体平台、基础设施、工具集成与应用用途收录 AI 资源。编程工具及其开发工作流见 [AI 编程与工作流](/awesome/vibe-coding.md)，语言 SDK 见 [Node.js](/awesome/node.md#ai-开发)、[Python](/awesome/python.md#ai-开发)、[Go](/awesome/go.md#ai-开发)、[Rust](/awesome/rust.md#ai-开发)和 [Java](/awesome/java.md#ai-开发)。

## 资源导航

- [moge](https://moge.ai/zh) 实时收录全球最新AI工具
- [watcha](https://watcha.cn) AI 产品的大众点评
- [魔搭社区](https://modelscope.cn/home)
- [kaggle](https://www.kaggle.com)
- [huggingface](https://huggingface.co) 模型、数据集、应用程序

## 模型与推理

### 图像与视频模型

- [Sana](https://github.com/NVlabs/Sana) 图像生成模型
- [z-image](https://github.com/Tongyi-MAI/Z-Image) 图像生成模型，拥有 6B 参数

### 交互与专用模型

- [fara](https://github.com/microsoft/fara) Fara-7B：一个高效的计算机操作智能体模型
- [Mano-P](https://github.com/Mininglamp-AI/Mano-P) 开源 GUI-VLA 项目，支持在 Mac mini/MacBook 上或通过算力棒本地运行推理，实现纯视觉驱动的跨平台 GUI 自动化操作
- [TimesFM](https://github.com/google-research/timesfm) Google Research 开源的预训练时间序列基础模型，用于时间序列预测
- [VibeVoice](https://github.com/microsoft/VibeVoice) 开源前沿语音人工智能
- [HRM](https://github.com/sapientinc/HRM) 层级推理模型，使用双层循环架构在单次前向传播中处理复杂推理任务

### 感知与推荐

- [RuView](https://github.com/ruvnet/RuView) 将普通 WiFi 信号转化为实时空间感知、生命体征监测和存在检测
- [x-algorithm](https://github.com/xai-org/x-algorithm) 驱动 X 平台"为你推荐"信息流的算法
- [mediapipe](https://github.com/google-ai-edge/mediapipe) 跨平台、可定制的机器学习和流媒体解决方案
- [facex](https://github.com/facex-engine/facex) 可在浏览器内完整运行的全脸技术栈。包含人脸检测、576 点 3D 网格建模、人脸识别、活体防欺骗、微笑识别
- [wifi-densepose](https://github.com/ruvnet/wifi-densepose) 一款革命性的基于 WiFi 的密集人体姿态估计系统，利用商品网格路由器实现墙壁内的实时全身追踪

### 本地运行与部署

- [shimmy](https://github.com/Michael-A-Kuykendall/shimmy) 无 Python 依赖的 Rust 推理服务器
- [NIGHTRUN](https://github.com/hardrave/NIGHTRUN) 一种本地化的 LLM 运行环境，可以通过 USB 启动，并且无需传统操作系统即可运行
- [llmfit](https://github.com/AlexsJones/llmfit) 兼容数百款模型与服务商，一条命令即可筛选适配本机硬件运行的模型
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [ollama](https://github.com/ollama/ollama)
- [LocalAI](https://github.com/mudler/LocalAI)
- [LM Studio](https://lmstudio.ai)
- [colibri](https://github.com/JustVugg/colibri) 在仅有 25GB 内存的消费级机器上运行 GLM-5.2
- [airllm](https://github.com/lyogavin/airllm) 使用 AirLLM 在单张 4GB GPU 上运行 70B 模型推理
- [freetoken](https://github.com/FlashML-org/FreeToken) Edge-native 的 MoE 本地推理引擎，支持消费级硬件上运行 frontier 规模模型并提供桌面客户端与 API
- [ncnn](https://github.com/Tencent/ncnn) 跨平台轻量级神经网络推理框架，适用于移动端和边缘端的高性能模型部署
- [modular](https://github.com/modular/modular) 开源 AI 平台，提供 MAX 推理运行时与 Mojo 语言生态，支持构建与部署 AI 模型服务（含 OpenAI 兼容接口）。
- [omlx](https://github.com/jundot/omlx) 面向苹果芯片的大语言模型推理服务器，支持持续批处理与 SSD 缓存，可通过 macOS 菜单栏进行管理
- [ds4](https://github.com/antirez/ds4) 适配 Metal、CUDA、ROCm 的 DeepSeek 4 Flash 与专业版本地推理引擎
- [BitNet](https://github.com/microsoft/BitNet) 1-bit 大语言模型官方推理框架

### 文档识别

- [TurboOCR](https://github.com/aiptimizer/TurboOCR) 基于 C++、CUDA、TensorRT 与 PP-OCRv6 的高速 GPU 文档解析服务，支持 OCR、版面、表格、公式到 Markdown
- [PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) OCR
- [GLM-OCR](https://github.com/zai-org/GLM-OCR) GLM-OCR：精准・快速・全面

## 智能体平台与工作流

- [FastGPT](https://github.com/labring/FastGPT) AI Agent 构建平台，提供开箱即用的数据处理、模型调用等能力，同时可以通过 Flow 可视化进行工作流编排，从而实现复杂的应用场景
- [ToolJet](https://github.com/ToolJet/ToolJet) ToolJet 是 ToolJet AI 的开源底层框架，这是一款面向企业的应用生成平台，可用于搭建内部工具、数据看板、业务系统、工作流以及 AI 智能体
- [activepieces](https://github.com/activepieces/activepieces) AI 智能体 & MCP（模型上下文协议）& AI 工作流自动化
- [gitagent](https://github.com/open-gitagent/gitagent) 一套**与框架无关、原生支持 Git**的 AI 智能体定义标准
- [deer-flow](https://github.com/bytedance/deer-flow) 一款开源的超级智能代理框架，具备调研、编码与创作能力。借助沙箱、记忆体、工具集、技能库与子代理，它可处理耗时从数分钟到数小时不等的不同层级任务
- [genkit](https://github.com/genkit-ai/genkit) 开源框架，用于使用 JavaScript、Go 和 Python 构建人工智能驱动的应用，由谷歌开发并在生产环境中使用
- [ruflo](https://github.com/ruvnet/ruflo) 面向 Claude 的主流智能体编排平台
- [n8n](https://github.com/n8n-io/n8n) 具备原生 AI 能力的公平代码工作流自动化平台
- [dify](https://github.com/langgenius/dify) 面向智能体工作流开发的生产级平台
- [Flowise](https://github.com/FlowiseAI/Flowise) 可视化构建 AI 智能体
- [langflow](https://github.com/langflow-ai/langflow) Langflow 是一款用于构建和部署人工智能驱动型智能体与工作流的强大工具
- [hatchet](https://github.com/hatchet-dev/hatchet) 一款用于后台任务、AI 智能体与持久化工作流的编排引擎
- [ax](https://github.com/google/ax) 谷歌开源分布式智能体运行时

## 基础设施

### 模型服务与网关

- [hub](https://github.com/traceloop/hub) Traceloop 开源的高性能 LLM 网关，提供 OpenAI 兼容 API、多模型提供商接入和内置 OpenTelemetry 可观测性
- [9router](https://github.com/decolua/9router) 无限免费 AI 代码编写
- [manifest](https://github.com/mnfst/manifest) 面向个人智能体的**智能模型路由技术**，可**降低成本高达70%**。
- [one-api](https://github.com/songquanpeng/one-api) LLM API 管理 & 分发系统，支持 OpenAI、Azure、Anthropic Claude、Google Gemini、DeepSeek、字节豆包、ChatGLM、文心一言、讯飞星火、通义千问、360 智脑、腾讯混元等主流模型，统一 API 适配，可用于 key 管理与二次分发。单可执行文件，提供 Docker 镜像，一键部署，开箱即用。
- [AIClient-2-API](https://github.com/justlovemaki/AIClient-2-API) 一个能将多种仅客户端内使用的大模型 API（Gemini CLI, Antigravity, Qwen Code, Kiro ...），模拟请求，统一封装为本地 OpenAI 兼容接口的强大代理
- [new-api](https://github.com/QuantumNous/new-api)  新一代大模型网关与AI资产管理系统
- [teamorouter](https://teamorouter.com/zh) 为你的 Claude Code 和 Codex 打造的原生 LLM Router
- [chatgpt2api](https://github.com/basketikun/chatgpt2api) ChatGPT官网接口纯协议的逆向实现，支持GPT-Image-2模型、文本模型，兼容OpenAI接口协议，在线批量生图/编辑图，号池管理，支持可编辑PPT/PSD文件逆向，支持导入CPA、sub2api号池 、支持接入Cherry Studio、New Api 等软件
- [ZenMux](https://zenmux.ai)
- [OpenRouter](https://openrouter.ai)
- [OmniRoute](https://github.com/diegosouzapw/OmniRoute) 统一接入多家模型提供商的开源 AI 网关，支持配额感知自动回退
- [千问系列](https://www.qianwenai.com)
- [硅基流动-国际站](https://www.siliconflow.com)
- [硅基流动-国内站](https://www.siliconflow.cn)
- [higress](https://github.com/higress-group/higress) AI 网关｜原生 AI 专用 API 网关
- [CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) 将 Gemini CLI、Antigravity、ChatGPT Codex、Claude Code 进行封装，提供兼容 **OpenAI / Gemini / Claude / Codex** 标准的API服务，让你可通过API免费使用 Gemini 3.1 Pro、GPT 5.5、Claude 系列模型
- [llama-swap](https://github.com/mostlygeek/llama-swap) 适配各类本地兼容 OpenAI、Anthropic 接口的服务端，可稳妥切换模型，支持 llama.cpp、vllm 等程序

### 沙箱与运行环境

嵌入式 Rust 沙箱库见[Rust / 系统与嵌入式](/awesome/rust.md#系统与嵌入式)。

- [forkd](https://github.com/deeplethe/forkd) 面向 AI 智能体微型虚拟机的 Fork 机制
- [CubeSandbox](https://github.com/TencentCloud/CubeSandbox) 面向 AI 智能体的即时、并发、安全、轻量沙箱环境
- [OpenShell](https://github.com/NVIDIA/OpenShell) OpenShell 是专为自主 AI 智能体打造的安全、私密运行时
- [zeroboot](https://github.com/zerobootdev/zeroboot) 通过写时复制（Copy-on-Write）分叉技术，为 AI 智能体实现亚毫秒级虚拟机沙箱
- [agent-os](https://github.com/rivet-dev/agent-os) 一款面向智能体的便携开源操作系统。冷启动速度约 6 毫秒，成本比沙箱低 32 倍。基于 WebAssembly 与 V8 隔离环境驱动
- [AgentENV](https://github.com/kvcache-ai/AgentENV) 用于大规模运行 Agent 环境的分布式平台，基于 Firecracker 微虚拟机并兼容 E2B API
- [executor](https://github.com/RhysSullivan/executor) 优先本地运行的 AI 智能体执行环境
- [OpenSandbox](https://github.com/opensandbox-group/OpenSandbox) 为 AI 代理提供安全、快速且可扩展的沙盒运行环境
- [sandbox-runtime](https://github.com/anthropic-experimental/sandbox-runtime) 一款轻量级沙箱工具，可在操作系统层面针对任意进程强制实施文件系统与网络权限限制，无需依赖容器

### 记忆与上下文

- [TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) 腾讯云开源的团队级 Agent 记忆中枢，将对话、文档和代码沉淀为可复用记忆资产
- [agentmemory](https://github.com/rohitg00/agentmemory)
- [MemOS](https://github.com/MemTensor/MemOS) 面向 LLM 与 AI Agent 的记忆操作系统

### 账号管理

- [any-auto-register](https://github.com/lxf746/any-auto-register) ChatGPT / Cursor / Kiro / Grok / Windsurf / Trae 等 13+ AI 平台账号自动注册与管理
- [Antigravity-Manager](https://github.com/lbjlaq/Antigravity-Manager) 基于 Tauri 的 Antigravity 账号管理与一键切换工具

## 工具与集成

### 计算机与移动设备

- [phone-harness](https://github.com/ShawnPana/phone-harness) 让 AI Agent 通过 macOS iPhone Mirroring 控制真实 iPhone 的轻量 Harness 与 Skill
- [DesktopCommanderMCP](https://github.com/wonderwhy-er/DesktopCommanderMCP) 为 Claude 提供的 MCP 服务器，赋予其终端控制、文件系统搜索和差异文件编辑能力
- [cua](https://github.com/trycua/cua) 支持在 macOS、Windows 系统后台运行计算机操控任务
- [agent-device](https://github.com/callstackincubator/agent-device) 面向 AI 智能体、用于控制 iOS 与 Android 设备的命令行工具（CLI）
- [mobile-mcp](https://github.com/mobile-next/mobile-mcp) 面向 AI 智能体的移动端自动化 MCP 服务器，支持通过无障碍树与截图操作 iOS、Android 真机及模拟器，用于应用测试、交互与数据提取
- [CLI-Anything](https://github.com/HKUDS/CLI-Anything) 让所有软件全部被代理驱动
- [Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM) 以多模态方式理解手机屏幕内容，并通过自动化操作帮助用户完成任务

### 浏览器与网页

- [AutoCLI](https://github.com/nashsu/AutoCLI) 极速、安全的命令行工具 —— 一行命令快速获取任意网站信息
- [obscura](https://github.com/h4ckf0r0day/obscura) 面向AI智能体与网页爬虫的**无头浏览器**
- [webclaw](https://github.com/0xMassi/webclaw) 面向大语言模型、高性能优先本地运行的网页内容提取工具
- [BrowserOS](https://github.com/browseros-ai/BrowserOS) 开源智能体浏览器，可替代 ChatGPT Atlas、Perplexity Comet、Dia
- [Browser-BC](https://github.com/Einsia/Browser-BC) 面向浏览器场景的智能体行为复刻方案，适配通用图形界面操作，支持分布式操作轨迹采集
- [bb-browser](https://github.com/epiral/bb-browser) 你的浏览器就是 API
- [extractor](https://github.com/lightfeed/extractor) 使用大语言模型与AI浏览器自动化技术，稳健地提取网页数据
- [tabbit](https://www.tabbit-ai.com) AI 浏览器
- [browser-harness](https://github.com/browser-use/browser-harness) 浏览器自动化测试框架 | 具备自愈能力，可让大语言模型完成任意任务
- [browser-act](https://github.com/browser-act/skills) 专为 AI 智能体打造的浏览器自动化命令行工具
- [agent-browser](https://github.com/vercel-labs/agent-browser) 面向 AI 智能体的浏览器自动化命令行工具
- [ego-lite](https://github.com/citrolabs/ego-lite) 面向 AI 智能体的浏览器，可共享本机登录态并让 Agent 在独立空间中执行浏览器自动化任务
- [browser-use](https://github.com/browser-use/browser-use) 让网站可被 AI 智能体访问。轻松实现线上任务自动化
- [lightpanda](https://github.com/lightpanda-io/browser) 为 AI 智能体与自动化打造的轻量级无头浏览器，基于 Zig 从零构建，内存与执行速度远超 Headless Chrome，支持 CDP 协议与原生 MCP
- [chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) 面向智能体开发的 Chrome 开发者工具
- [opencli](https://github.com/jackwener/opencli) 把任何网站或 Electron 应用变成你的命令行工具
- [Agent-Reach](https://github.com/Panniantong/Agent-Reach) 为你的 AI 智能体赋予浏览全网的视觉能力
- [firecrawl](https://github.com/firecrawl/firecrawl) 大规模搜索、抓取和交互式访问网页的 API
- [pinchtab](https://github.com/pinchtab/pinchtab) 高性能浏览器自动化桥接与多实例编排器，具备高级隐身注入与实时控制面板功能

### 提示词与 Token

- [OpenAI Tokenizer](https://platform.openai.com/tokenizer) 按模型查看文本的 Token 切分与数量
- [prompt-optimizer](https://github.com/linshenkx/prompt-optimizer) 强大的AI提示词优化工具，帮助你编写更好的AI提示词，提升AI输出质量
- [awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) GPT-Image2 工业级提示词引擎与模板库，370+ 个案例逆向工程，20+ 套工业级模板
- [awesome-gpt-image-2](https://github.com/YouMind-OpenLab/awesome-gpt-image-2) 全球最大 GPT Image 2 提示词库
- [awesome-gpt-image-2-API-and-Prompts](https://github.com/EvoLinkAI/awesome-gpt-image-2-API-and-Prompts) 精选适配 OpenAI API 的 GPT-Image-2 提示词库
- [awesome-seedance-2-prompts](https://github.com/YouMind-OpenLab/awesome-seedance-2-prompts) 两千余条精选 Seedance 2.0 视频生成提示词，涵盖电影质感、二次元、用户原创内容、商业广告、趣味梗图等风格
- [CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) ChatGPT、Gemini、Grok、Claude、Perplexity、Cursor、Devin、Replit 等多款 AI 的系统提示词泄露！—— 面向所有人的 AI 系统透明度公开！

### 工具注册与 SaaS

- [treg](https://github.com/superdesigndev/treg) 面向智能体的工具注册与代理服务，统一调用第三方 API、CLI 和 Skill，并在服务端托管凭据

### 三维与媒体

- [video-use](https://github.com/browser-use/video-use) 用编程智能体编辑视频
- [blender-mcp](https://github.com/ahujasid/blender-mcp) Blender 模型上下文协议集成工具
- [claude-video](https://github.com/bradautomates/claude-video) 赋予 Claude 观看任意视频的能力

### 联网搜索

- [tavily](https://app.tavily.com)
- [brave](https://brave.com/zh/search/api/)

### MCP 服务

- [servers](https://github.com/modelcontextprotocol/servers) 模型上下文协议服务端
- [supergateway](https://github.com/supercorp-ai/supergateway) 通过 SSE 运行 MCP 标准输入输出服务器，并通过标准输入输出运行 SSE。AI 网关

## Skill

### 设计与内容创作

- [text-to-cad](https://github.com/earthtojake/text-to-cad) 一套适用于 CAD、CAE 和 CAM 领域的代理技能库
- [ian-xiaohei-illustrations](https://github.com/helloianneo/ian-xiaohei-illustrations) 小黑配图
- [cheat-on-content](https://github.com/XBuilderLAB/cheat-on-content) 网红作弊器 — 把每一条内容变成可校准的实验
- [codex-ppt-skill](https://github.com/ningzimu/codex-ppt-skill) 一个面向 Codex 的 PPT 生成 skill，也可在 Claude Code、OpenClaw、Hermes Agent 等支持 SKILL.md 的 agent 中使用
- [dashi-ppt-skill](https://github.com/chuspeeism/dashi-ppt-skill) 一款可编辑网页式 PPT Skill，支持模板化生成与结构化排版，结果可直接在浏览器微调并导出 HTML/PDF/PPTX
- [seedance-2.0](https://github.com/Emily2040/seedance-2.0) 基于 Seedance 2.0 的四模态 AI 电影制作综合生产管线
- [guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill) 用于生成精致 HTML 幻灯片的 AI 智能体技能：支持杂志排版、瑞士极简版式、图片提示词生成、社交封面制作，以及一套低功耗 WebGL 演示运行环境
- [humanizer](https://github.com/blader/humanizer) 可消除文本中 AI 写作痕迹的 Claude Code 智能技能
- [humanizer-zh](https://github.com/op7418/Humanizer-zh) Humanizer 的汉化版本，Claude Code Skills，旨在消除文本中 AI 生成的痕迹
- [webnovel-writer](https://github.com/lingfengQAQ/webnovel-writer) 基于 Claude Code 的长篇网文创作插件，提供大纲、章节写作、一致性审查与长期记忆管理
- [html-ppt-skill](https://github.com/lewislulu/html-ppt-skill) HTML 演示文稿制作工具 — 内置智能体技能，提供 24 套主题、31 种版式、20 余种动画，用于制作专业级 HTML 演示幻灯片
- [seedance2-skill](https://github.com/dexhunter/seedance2-skill) 使用 Seedance2.0 生成视频时，编写优质提示词的技巧
- [huashu-design](https://github.com/alchaincyf/huashu-design) Claude Code 里 HTML 原生的设计 skill · 高保真原型 / 幻灯片 / 动画 + 20 设计哲学 + 5 维评审 + MP4 导出 · Agent-agnostic
- [frontend-slides](https://github.com/zarazhangrui/frontend-slides) 利用编码 Agent 的前端技能在网页上创建精美的幻灯片
- [x-article-publisher-skill](https://github.com/wshuyi/x-article-publisher-skill) 一键将 Markdown 文章发布到 X (Twitter) Articles，告别繁琐的富文本编辑
- [md2wechat-skill](https://github.com/geekjourneyx/md2wechat-skill) 一键排版发布到微信公众号

### 规范与管理

- [skill-recorder](https://github.com/microsoft/skill-recorder) 录制一次你的操作，就能把它变成你的 AI 代理可以反复执行的技能
- [cocoloop](https://hub.cocoloop.cn) 更快更安全的 AI Agent Skills 商店
- [autoskills](https://github.com/midudev/autoskills) 一条命令，安装你的全套 AI 技术栈
- [awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) 一份精选的优质 Claude 技能、资源与工具清单，用于自定义 Claude AI 工作流
- [skillsmp](https://skillsmp.com) skill 集合
- [baoyu-skills](https://github.com/JimLiu/baoyu-skills) 宝玉分享的 Claude Code 技能集，提升日常工作效率
- [agentskills](https://github.com/agentskills/agentskills) 智能体技能的规范与文档
- [antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) 可安装的 GitHub 代码库，内置 1600 余款智能体技能，适配 Claude Code、Cursor、Codex CLI、Gemini CLI、Antigravity 等多款工具
- [skills-hub](https://github.com/qufei1993/skills-hub) 一款跨平台桌面应用，可在统一位置管理智能体技能，并将其同步至多款AI编程工具的全局技能目录 —— “一次安装，随处同步”。
- [anthropics skills](https://github.com/anthropics/skills)

### 研究与专业工作

- [scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) 将任何 AI 代理转变为 AI 科学家
- [last30days-skill](https://github.com/mvanhorn/last30days-skill) 一款 AI 智能体技能，可检索 Reddit、X、YouTube、黑客新闻、预测市场平台及全网任意主题信息，并整合输出有理有据的综合摘要
- [academic-research-skills](https://github.com/Imbad0202/academic-research-skills) 适用于 Claude Code 的学术研究技能流程：调研 → 撰写 → 审阅 → 修改 → 定稿
- [chinese-copyright-application-skill](https://github.com/na57/chinese-copyright-application-skill) 用于生成中国软件著作权申请材料的完整工具包
- [claude-scientific-skills](https://github.com/K-Dense-AI/claude-scientific-skills) 一套可直接使用的智能体技能集，适用于研究、科学、工程、分析、金融及写作领域
- [pm-skills](https://github.com/phuryn/pm-skills) 产品经理技能市场：100+ 智能体技能、指令与插件
- [notebooklm-skill](https://github.com/PleasePrompto/notebooklm-skill) 自动上传 PDF、Youtube 链接到 NotebookLM，很适合 NotebookLM 内容的自动化处理
- [financial-services](https://github.com/anthropics/financial-services) 提供金融服务主流工作流的参考智能体、技能工具与数据连接器，涵盖投资银行、股票研究、私募股权以及财富管理领域

### 角色与行为

- [colleague-skill](https://github.com/titanwings/colleague-skill) 冰冷的离别化为温暖的 Skill，欢迎加入数字生命1.0
- [nuwa-skill](https://github.com/alchaincyf/nuwa-skill) 你想蒸馏的下一个员工，何必是同事。蒸馏任何人的思维方式——心智模型、决策启发式、表达DNA
- [agency-agents](https://github.com/msitarzewski/agency-agents) 触手可及的完整 AI 智能体团队—— 从前端技术高手到 Reddit 社区运营专家，从创意灵感生成器到现实校验员。每个智能体都是独具个性、流程规范、成果可靠的专属专家
- [agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) 211 个即插即用的 AI 专家角色 — 支持 Hermes Agent/Claude Code/Cursor/Copilot 等 16 种工具

### 办公与知识管理

- [Kami](https://github.com/tw93/Kami) 为 AI 智能体提供文档与落地页模板、排版规则，支持生成 PDF、PNG 和可编辑 PowerPoint
- [knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) 这是一个开源插件仓库，插件主要面向知识工作者，供其在 Claude Cowork 中使用
- [wewrite](https://github.com/oaker-io/wewrite) 公众号文章全流程 AI Skill for Claude Code — 热点抓取 → 选题 → 写作 → SEO → 视觉AI → 排版 → 微信草稿箱
- [claude-for-legal](https://github.com/anthropics/claude-for-legal) 一套用于合规工作流的插件套件
- [obsidian-skills](https://github.com/kepano/obsidian-skills) 适用于 Obsidian 的智能代理技能插件
- [Obsidian Copilot](https://github.com/logancyang/obsidian-copilot) 将 OpenCode、Claude Code 与 Codex 接入 Obsidian 知识库的智能体插件

## 产品

### 通用对话

- [deepseek](https://chat.deepseek.com) 深度求索出品
- [gemini](https://gemini.google.com) Google 出品
- [doubao](https://www.doubao.com) 字节出品
- [qianwen](https://www.qianwen.com) 阿里出品
- [kimi](https://www.kimi.com)
- [minimaxi](https://agent.minimaxi.com) MiniMax 出品
- [chatgpt](https://chatgpt.com) OpenAI 出品
- [z](https://chat.z.ai) 智谱出品
- [NextChat](https://github.com/ChatGPTNextWeb/NextChat) 轻量快速的 AI 助手
- [airi](https://github.com/moeru-ai/airi) 复刻 Neuro-sama，让 AI waifu / 虚拟角色也能来到我们的世界
- [chatbox](https://github.com/chatboxai/chatbox) 强大的 AI 客户端
- [open-webui](https://github.com/open-webui/open-webui) 可扩展、功能丰富且易于使用的自托管人工智能平台，支持完全离线运行
- [AQBot](https://github.com/AQBot-Desktop/AQBot) 轻量级高性能跨平台AI对话 + AI网关桌面客户端
- [cherry-studio](https://github.com/CherryHQ/cherry-studio) 拥有智能聊天、自主 Agent 和 300+ 助手的 AI 生产力工作室

### 图片

- [sprite-gen](https://github.com/aldegad/sprite-gen) 放进一张画，出来的是游戏可直接使用的精灵
- [jaaz](https://github.com/11cafe/jaaz) 内容创作多模态智能体
- [HivisionIDPhotos](https://github.com/Zeyi-Lin/HivisionIDPhotos) 一个轻量级的AI证件照制作算法
- [LogoCreator](https://github.com/Nutlope/logocreator) 基于 Together AI 的 FLUX 模型生成和编辑 Logo 的开源工具
- [MeiGen-AI-Design-MCP](https://github.com/jau123/MeiGen-AI-Design-MCP) 支持 GPT Image 2、Seedance 以及 ComfyUI，内置 1400 + 精心撰写的提示词库、定制钩子与多任务编排系统
- [infinite-canvas](https://github.com/basketikun/infinite-canvas) 面向 AI 创作的开源无限画布工作台，集成 AI 生图、参考图编辑、视频生成、Agent 智能助手、画布编排、对话创作、提示词库与素材管理等能力，支持可视化创作流程与多 Agent 协同工作
- [remove-ai-watermarks](https://github.com/wiltodelta/remove-ai-watermarks) 用于去除图像中谷歌 Gemini 可见水印，以及 SynthID、C2PA、EXIF 隐形 AI 水印的命令行工具与程序库
- [Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI) 开源 AI 视频平台替代方案 —— 免费 AI 图像与视频生成工作室(无内容审查限制)
- [gpt\_image\_playground](https://github.com/CookSleep/gpt_image_playground) 基于 OpenAI gpt-image-2 API 的图片生成与编辑 Web UI，支持参考图、遮罩编辑、多服务商接入与本地历史管理
- [RedInk](https://github.com/HisMax/RedInk) 基于🍌Nano Banana Pro🍌 的一站式小红书图文生成器 《一句话一张图片生成小红书图文》
- [raphael](https://raphael.app/zh) 全球首个无限制免费 AI 图片生成器
- [upscayl](https://github.com/upscayl/upscayl) 开源的 AI 图像放大器
- [Topaz Labs](https://www.topazlabs.com/) AI 图像与视频增强工具套件，支持降噪、锐化、超分辨率放大与视频补帧，提供桌面应用和云端处理
- [geminiwatermarkcleaner](https://geminiwatermarkcleaner.com) 去掉 Gemini 水印
- [ComfyUI](https://github.com/Comfy-Org/ComfyUI) 功能最强、模块化程度最高的扩散模型图形界面、应用程序接口与后端服务，搭载节点流程图可视化操作面板
- [InvokeAI](https://github.com/invoke-ai/InvokeAI) 面向 Stable Diffusion 等模型的专业视觉生成引擎，提供本地 Web UI、统一画布和节点工作流

### 音视频

- [meetily](https://github.com/Zackriya-Solutions/meetily) 隐私优先型 AI 会议助手
- [ai-fusion-video](https://github.com/Stonewuu/ai-fusion-video) 基于 Agent 的全流程AI短剧/漫剧/视频创作平台
- [velorn](https://github.com/VelornLabs/velorn) 开源 AI 视频工作站，围绕真实时间线编辑、生成式工作流、本地 ComfyUI 与 MCP 智能体控制构建
- [sentrysearch](https://github.com/ssrajadh/sentrysearch) 使用 Gemini Embedding 2 或 Qwen3-VL 对视频进行语义检索
- [waoowaoo](https://github.com/waoowaooAI/waoowaoo) 首家工业级全流程 AI 影视生产平台
- [clipsketch-ai](https://github.com/RanFeng/clipsketch-ai) 将视频瞬间转化为手绘故事
- [VoiceStudio](https://github.com/debpalash/VoiceStudio) 本地运行的开源 AI 语音工作站，支持语音克隆、音色设计、视频配音、语音转写与有声书制作
- [Pixelle-Video](https://github.com/AIDC-AI/Pixelle-Video) AI 全自动短视频引擎
- [auto-subs](https://github.com/tmoroney/auto-subs) 在本地设备上一键生成 AI 字幕。支持独立运行，也可联动达芬奇剪辑软件（DaVinci Resolve）使用
- [voice-input-dist](https://github.com/yetone/voice-input-dist) 新的开源方式(Prompt)
- [BibiGPT-v1](https://github.com/JimmyLv/BibiGPT-v1) 音视频内容 AI 一键总结
- [QwenVoice](https://github.com/PowerBeef/QwenVoice) 适用于苹果芯片（Apple Silicon）的原生 macOS 应用，支持通义千问3语音合成（Qwen3‑TTS），提供自定义音色、音色设计与音色克隆功能，**100% 离线运行**。
- [fogsight](https://github.com/fogsightai/fogsight) 一款由大语言模型驱动的人工智能代理及动画引擎
- [小云雀](https://xyq.jianying.com)
- [liblib](https://www.liblib.tv)
- [updream](https://www.updream.cn)
- [tapnow](https://app.tapnow.ai)
- [flova.ai](https://www.flova.ai/zh-CN/)
- [topview](https://www.topview.ai) 只需告知你的智能体，即可生成任意视频
- [anishort.ai](https://anishort.ai) 一站式 AI 短剧智能协作平台
- [pixmax](https://www.pixmax.cn)
- [ViMax](https://github.com/HKUDS/ViMax) 代理式视频生成（导演、编剧、制片人和视频生成器，四位一体）
- [VideoCaptioner](https://github.com/WEIFENG2333/VideoCaptioner) 基于 LLM 的智能字幕助手
- [pyvideotrans](https://github.com/jianchang512/pyvideotrans) 一款强大的开源视频翻译 / 语音转录 / AI配音 / 字幕翻译工具
- [OpenMontage](https://github.com/calesthio/OpenMontage) 智能自主式视频制作系统
- [NarratoAI](https://github.com/linyqh/NarratoAI) 利用AI大模型，一键解说并剪辑视频
- [MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) 利用AI大模型，一键生成高清短视频
- [video-subtitle-extractor](https://github.com/YaoFANGUK/video-subtitle-extractor) 视频硬字幕提取，生成srt文件
- [video-subtitle-remover](https://github.com/YaoFANGUK/video-subtitle-remover) 基于AI的图片/视频硬字幕去除、文本水印去除，无损分辨率生成去字幕、去水印后的图片/视频文件
- [autoclip](https://github.com/zhouxiaoka/autoclip) 一款智能高光提取与剪辑的二创工具
- [hyperframes](https://github.com/heygen-com/hyperframes) 编写 HTML，渲染视频，专为智能体构建
- [dramaclaw](https://github.com/dramaclaw/dramaclaw) 通用 AIGC 视频引擎
- [voicebox](https://github.com/jamiepine/voicebox) 开源语音合成工作室

### 知识库与搜索

- [VidBee](https://github.com/nexmoe/VidBee) VidBee 旨在将零散的音视频媒体转化为井井有条、可搜索的知识库
- [open-notebook](https://github.com/lfnovo/open-notebook) 一款开源版 Notebook LM 实现，拥有更高灵活性与更多功能
- [llm\_wiki](https://github.com/nashsu/llm_wiki) 将各类文档整理为结构化、相互关联的知识库
- [morphic](https://github.com/miurla/morphic) 一款搭载生成式界面的人工智能搜索引擎。
- [blinko](https://github.com/blinkospace/blinko) 一款开源、可自行托管的个人 AI 笔记工具
- [karakeep](https://github.com/karakeep-app/karakeep) 一款可自建部署的全能收藏应用（支持链接、笔记与图片），具备AI 自动标签与全文检索功能
- [anything-llm](https://github.com/Mintplex-Labs/anything-llm) 一站式的 AI 桌面应用
- [open-knowledge](https://github.com/inkeep/open-knowledge) 美观、原生适配 AI 的 Markdown 编辑器与大模型知识库
- [Vane](https://github.com/ItzCrazyKns/Vane) 人工智能驱动的问答引擎

### 办公与个人助理

- [wardrobe](https://github.com/tandpfun/wardrobe) 你的衣物，由 gpt-image 提取并整理归档
- [LobsterAI](https://github.com/netease-youdao/LobsterAI) 全场景办公助手 Agent
- [screenpipe](https://github.com/screenpipe/screenpipe) 能记住你所见、所言、所听的人工智能
- [presenton](https://github.com/presenton/presenton) 开源 AI 演示文稿生成器
- [WeClone](https://github.com/xming521/WeClone) 一站式从聊天记录打造AI 分身的解决方案
- [OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) 专为 AI 智能体量身打造的办公套件，可实现对 Word、Excel、PowerPoint 文件的读取、编辑与自动化操作
- [career-ops](https://github.com/santifer/career-ops) 基于 Claude Code 构建的 AI 求职系统。提供14种技能模式、任务面板、PDF 生成及批量处理功能。
- [banana-slides](https://github.com/Anionex/banana-slides) 一个基于nano banana pro🍌的原生AI PPT生成应用
- [ai-goofish-monitor](https://github.com/Usagi-org/ai-goofish-monitor) 基于 Playwright 和AI实现的闲鱼多任务实时/定时监控与智能分析系统，配备了功能完善的后台管理UI。帮助用户从闲鱼海量商品中，找到心仪产品
- [valuecell](https://github.com/ValueCell-ai/valuecell) ValueCell 是一个由社区驱动、面向金融应用的多智能体平台
- [MoneyPrinterV2](https://github.com/FujiwaraChoki/MoneyPrinterV2) 自动化网上赚钱的流程
- [LandPPT](https://github.com/sligter/LandPPT) 一个基于LLM的演示文稿生成平台，能够自动将文档内容转换为专业的PPT演示文稿。平台支持多种AI模型，提供丰富的模板和样式选择，让用户能够创建高质量的演示文稿
- [careercompass](https://github.com/arsh342/careercompass) 新一代人工智能驱动的职业平台，重塑企业与求职者的连接方式。
- [TrendRadar](https://github.com/sansan0/TrendRadar) AI 舆情监控助手与热点筛选工具
- [Crucix](https://github.com/calesthio/Crucix) 你的个人智能代理。通过多种数据源观察世界，并在信息发生变化时及时通知你。
- [writehuman](https://writehuman.ai) 去除 AI 味
- [chatexcel](https://www.chatexcel.com)
- [moxt](https://moxt.ai) 为 Agent 原生而造的工作空间——AI 同事全天候运转，边做边学，与你协同
- [text-well](https://www.text-well.com/zh/app) 免费在线 AI 工具，用于修改润色文章
- [belindoc](https://belindoc.com/zh) 一键完成高质量文档翻译
- [WPS 灵犀](https://lingxi.wps.cn) AI 办公
- [蚂蚁阿福](https://chat.antafu.com)
- [Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) 智能交易助手
- [ppt-master](https://github.com/hugohe3/ppt-master) 人工智能可从任意文档原生生成可编辑的 PPTX 文件—— 采用真实 PowerPoint 图形与原生动画，而非图片形式
- [ai-job-search](https://github.com/MadsLorentzen/ai-job-search) 基于 Claude Code 搭建的 AI 求职申请框架

### 智能体

- [odysseus](https://github.com/odysseus-dev/odysseus) 自托管 AI 工作空间
- [centaur](https://github.com/paradigmxyz/centaur) 面向团队共享的自托管安全智能体平台，可通过 Slack 或 API 在沙箱中运行真实任务
- [deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) DeepSeek 开源的 Agent Harness，采用插件化架构并提供 Web UI
- [Maka](https://github.com/apache/maka) 本地优先的 AI Agent 工作空间，提供桌面端、TUI/CLI、工具沙箱与可恢复的执行记录
- [deepseek-harness-desktop](https://github.com/anywhere-labs/deepseek-harness-desktop) DeepSeek Harness 桌面端封装，自动管理本地服务并集成窗口、托盘和桌面插件能力
- [mindshub](https://github.com/mindsdb/mindshub) 一站式统一工作平台，各类开源智能代理在此为你处理各项工作
- [CowAgent](https://github.com/zhayujie/CowAgent) 开源超级 AI 助手与智能体调度框架
- [opensquilla](https://github.com/opensquilla/opensquilla) 高效令牌 AI 智能体，同等算力成本下拥有更高智能密度
- [lobehub](https://github.com/lobehub/lobehub) LobeHub 是你的智能体总调度平台，通过招募、排班管理以及全 AI 团队数据报表，全天候统筹管理所有智能体，实现 7×24 小时不间断运转
- [OpenBot](https://github.com/CopilotKit/OpenBot) 面向开发者的开源桌面智能体客户端，支持 AI 代理与编程工作流编排
- [metabot](https://github.com/xvirobotics/metabot) 构建受监督的、自我进化的 Agent\*\* 组织的基础设施\*\*
- [Aden Hive](https://github.com/aden-hive/hive) 生产级多智能体运行时，提供状态管理、故障恢复、可观测性与人工监督
- [multica](https://github.com/multica-ai/multica) 分配任务、跟踪进度、积累技能——在一个地方管理你的人类 + Agent 团队
- [hermes-agent](https://github.com/NousResearch/hermes-agent) 与你一同成长的智能体
  - [hermes-workspace](https://github.com/outsourc-e/hermes-workspace) Hermes Agent 专属原生网页工作区，集成聊天、终端、记忆库、技能集与调试检查工具
  - [hermes-desktop](https://github.com/fathah/hermes-desktop) Hermes 智能体桌面端配套助手
  - [hermes-webui](https://github.com/nesquena/hermes-webui) 在网页或手机上使用 Hermes 智能体的最佳方式
- [Rakazo](https://github.com/elie222/rakazo) 可自托管的开源 AI 智能体协作平台，支持持久记忆、定时任务与浏览器和桌面操作，可自选模型及沙箱，提供网页、桌面和移动客户端
- [ClawX](https://github.com/ValueCell-ai/ClawX) OpenClaw AI 智能体的桌面客户端
- [paperclip](https://github.com/paperclipai/paperclip) 面向无人化企业的开源编排方案
- [nanoclaw](https://github.com/qwibitai/nanoclaw) 一款轻量级的 OpenClaw 替代方案，以容器运行保障安全
- [piclaw](https://github.com/rcarmo/piclaw) 打造属于自己的 OpenClaw
- [openclaw](https://github.com/openclaw/openclaw) 个人 AI 助手
- [openhanako](https://github.com/liliMozi/openhanako) 开源 AI 助手应用，聚焦高质量人机协作体验
- [openfang](https://github.com/RightNow-AI/openfang) 个人 AI 助手
- [picoclaw](https://github.com/sipeed/picoclaw) 个人 AI 助手
- [edict](https://github.com/cft0808/edict) 三省六部制・OpenClaw 多智能体协同编排系统
- [zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) 快速、轻量、完全自治的 AI 助手基础设施 —— 随处部署，任意替换
- [openhuman](https://github.com/tinyhumansai/openhuman) 你的专属超级人工智能
- [moltis](https://github.com/moltis-org/moltis) 一款值得信赖的 Rust 原生核心工具,内置语音、记忆体、MCP 工具及多通道访问能力
- [扣子空间](https://www.coze.cn)
- [Manus](https://manus.im)
- [天工](https://www.tiangong.cn)
- [nanobot](https://github.com/HKUDS/nanobot) 轻量级、开源 AI 代理，适用于你的工具、聊天和工作流
- [magentic-ui](https://github.com/microsoft/magentic-ui) 一款实验性智能体，可同时在浏览器与本地文件系统中运行
- [ml-intern](https://github.com/huggingface/ml-intern) 一款开源机器学习助手，可阅读论文、训练模型并交付上线机器学习模型
- [autoresearch](https://github.com/karpathy/autoresearch) AI 智能体在单张 GPU 上自动运行 NanoChat 模型训练与研究
- [UI-TARS-desktop](https://github.com/bytedance/UI-TARS-desktop) 开源多模态 AI 智能体技术栈：打通前沿 AI 模型与智能体基础设施
- [wechat-bot](https://github.com/wangrongding/wechat-bot) 多平台 IM AI 代理，支持 Telegram、WhatsApp、飞书和微信
- [AionUi](https://github.com/iOfficeAI/AionUi) Cowork 平台

### 智能体扩展

- [awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin) DeepSeek Harness 插件精选列表，收录可通过 dsh plugin add 安装的社区插件
- [dsh-market](https://github.com/dsh-market/dsh-market) DeepSeek Harness 插件市场项目，用于集中发现和分发 DSH 生态插件
- [gbrain](https://github.com/garrytan/gbrain) 加里的专属 OpenClaw/Hermes 智能体核心（大脑）
- [NemoClaw](https://github.com/NVIDIA/NemoClaw) 用于安全安装 OpenClaw 的 NVIDIA 插件
- [nexu](https://github.com/nexu-io/nexu) 让你的 OpenClaw 🦞 Agent 直接运行在微信、飞书、Slack、Discord 等 IM 中
- [lossless-claw](https://github.com/Martian-Engineering/lossless-claw) 无损爪 — 适用于 OpenClaw 的 LCM（无损上下文管理）插件

### 原型与设计

- [Edit-Banana](https://github.com/BIT-DataLab/Edit-Banana) 款用于将统计格式转换为可编辑格式的框架
- [open-pencil](https://github.com/open-pencil/open-pencil) 开源 AI 原生设计编辑器，可打开 `.fig` / `.pen` 文件，并提供 CLI、MCP 与可编程设计工具链
- [MotionSites AI](https://motionsites.ai/) 面向 AI 建站的落地页与页面区块提示词库，可直接复制用于生成设计
- [stitch](https://stitch.withgoogle.com) AI 驱动的无代码 UI 设计工具​
- [calicat](https://www.calicat.cn) 生成原型设计、需求文档
- [ardot](https://d.qq.com) AI 设计
- [next-ai-draw-io](https://github.com/DayuanJiang/next-ai-draw-io) 基于 Next.js 与 draw\.io 的 AI 图表工具，可通过自然语言创建、修改和增强流程图、架构图等图表
- [drawflare](https://drawflare.com/zh) 把“网页”变成“设计稿”
- [lazyweb](https://www.lazyweb.com) 让你的智能体化身设计研究员
- [napkin](https://www.napkin.ai) 将文字转化为视觉呈现
- [blueprint](https://www.blueprint.io) 硬件原型设计

### 三维内容

- [meshy](https://www.meshy.ai) 创建3D模型
- [Tripo Studio](https://studio.tripo3d.ai) AI 3D 工作区，可从图片快速生成 3D 模型
- [3dlogolab](https://www.3dlogolab.io) 将 2D Logo 转换为 3D 动画
- [modly](https://github.com/lightningpixel/modly) 一款借助本地 AI、通过图片生成 3D 模型

## 研究与学习工具

- [OpenMAIC](https://github.com/THU-MAIC/OpenMAIC) 开放式多智能体互动课堂 —— 一键即可获得沉浸式多智能体学习体验
- [PRAXIST](https://github.com/sapientinc/PRAXIST) 面向可量化研究问题的自治研究系统，编排并行智能体、评测与持续证据迭代
- [AutoResearchClaw](https://github.com/aiming-lab/AutoResearchClaw) 从创意到论文，全程自主研究
- [DeepTutor](https://github.com/HKUDS/DeepTutor) 个人学习助手

## 硬件与机器人

- [ElatoAI](https://github.com/akdeb/ElatoAI) 基于 Arduino ESP32 平台，搭载 100 余种模型的实时语音 AI，支持安全 WebSocket 与边缘计算功能，适用于智能玩具、陪伴机器人及各类智能设备
- [xiaozhi-esp32](https://github.com/78/xiaozhi-esp32) 基于 ESP32 与 MCP 的开源语音聊天机器人固件，支持唤醒词、ASR/LLM/TTS 流水线和多终端控制
- [microduck](https://github.com/pollen-robotics/microduck) 微型双足鸭子机器人的控制系统，使用强化学习策略驱动 15 个舵机
- [openpilot](https://github.com/commaai/openpilot) 一套机器人操作系统。目前，它可为三百多款适配车辆升级驾驶辅助系统

## 学习资源

- [claw0](https://github.com/shareAI-lab/claw0) 从0到1学习 OpenClaw：从零开始构建爪型AI智能体的教程章节
- [Awesome-Blender-Seedance-Workflow-Usecases](https://github.com/cheercheung/Awesome-Blender-Seedance-Workflow-Usecases) 精选适配 AI 影视创作的 Blender 与 Seedance 工作流：涵盖预可视化、相机控制、Blender MCP、参考视频以及智能体驱动实操案例
- [ai-agent-book](https://github.com/bojieli/ai-agent-book)《深入理解 AI Agent：设计原理与工程实践》（李博杰 著）
- [ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) 从原理到上线，一套学完整个 AI 工程
- [awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) 100 多个可直接运行的 AI Agent 与 RAG 应用——克隆、定制、部署即可使用

### 部署实践

- [club-3090](https://github.com/noonghunna/club-3090) 面向 RTX 3090 显卡、CUDA 架构显卡的大模型部署社区方案。兼容 vLLM、llama.cpp、ik\_llama 多推理引擎，适配各类模型。现已适配单卡、双卡部署的通义千问 3.6-27B、通义千问 3.6-35B、杰玛 4-26B、杰玛 4-31B 模型配置。
