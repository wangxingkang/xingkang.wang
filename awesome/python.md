# Python

收录 Python 开发库、框架与学习资源。可直接使用的 AI 应用见 [AI](/awesome/ai.md)，部署服务和系统工具见[运维](/awesome/ops.md)。

## 官方资源

- [官网](https://www.python.org)

## AI 开发

### 智能体框架

- [agno](https://github.com/agno-agi/agno)
- [langgraph](https://github.com/langchain-ai/langgraph)
- [langchain](https://github.com/langchain-ai/langchain)
- [crewAI](https://github.com/crewAIInc/crewAI) 多智能体协作框架
- [autogen](https://github.com/microsoft/autogen)
- [pydantic-ai](https://github.com/pydantic/pydantic-ai)
- [semantic-kernel](https://github.com/microsoft/semantic-kernel)
- [MiroFish](https://github.com/666ghj/MiroFish) 简洁通用的群体智能引擎，预测万物
- [TradingAgents](https://github.com/TauricResearch/TradingAgents) 多智能体大模型金融交易框架
- [OpenHarness](https://github.com/HKUDS/OpenHarness) 开源智能体管理框架
- [forge](https://github.com/antoinezambelli/forge) 一款用于私有化部署大模型工具调用与多步骤智能体工作流的 Python 开发框架
- [deepagents](https://github.com/langchain-ai/deepagents) 基于 LangChain 和 LangGraph 构建的智能体管控框架。配备规划工具、文件系统后端，并支持创建子智能体，功能完备，可处理各类复杂的智能体任务
- [agentscope](https://github.com/agentscope-ai/agentscope) 构建并运行你能看见、理解且信任的智能体。

### 训练与评测

- [peft](https://github.com/huggingface/peft) 最先进的参数高效微调
- [LlamaFactory](https://github.com/hiyouga/LlamaFactory) 面向 100+ LLM 与 VLM 的统一高效微调框架，提供零代码 CLI 与 Web UI
- [datasets](https://github.com/huggingface/datasets) 最大的即用型 AI 模型数据集中心，配备快速、易用、高效的数据处理工具
- [pytorch](https://github.com/pytorch/pytorch) 深度学习框架
- [DeepSpec](https://github.com/deepseek-ai/DeepSpec) 一套用于训练与评估推测解码算法的全栈代码库
- [OpenMythos](https://github.com/kyegomez/OpenMythos) 依托现有公开研究文献，从基础原理出发，对克劳德神话架构进行理论重构
- [rotorquant](https://github.com/scrya-com/rotorquant) 采用分块对角旋转实现键值缓存压缩，性能优于极速量化：困惑度 6.91，优于 7.07；解码速度提升 28%，预填充速度提升 5.3 倍，参数量缩减至原有的 1/44，可直接无缝接入 llama.cpp 使用
- [unsloth](https://github.com/unslothai/unsloth) Unsloth Studio 是一款网页界面工具，可在本地训练并运行 Gemma 4、通义千问 3.6、DeepSeek、开源版 GPT 等开源模型
- [NeMo](https://github.com/NVIDIA-NeMo/NeMo) 一款可扩展的生成式 AI 框架，专为从事大语言模型、多模态及语音 AI（自动语音识别与文本转语音）研究与开发的研究人员和开发者打造。
- [inspect\_ai](https://github.com/UKGovernmentBEIS/inspect_ai) 一款面向大语言模型评估的框架

### 图像与视觉

- [diffusers](https://github.com/huggingface/diffusers) PyTorch 中最先进的扩散模型库，支持图像、视频和音频生成
- [supervision](https://github.com/roboflow/supervision) 我们帮你编写可复用的计算机视觉工具
- [rf-detr](https://github.com/roboflow/rf-detr) 实时目标检测与分割模型架构
- [dust3r](https://github.com/naver/dust3r) 简易几何三维视觉框架
- [lingbot-map](https://github.com/Robbyant/lingbot-map) 用于从流式数据重建场景的前馈三维基础模型

### 检索与嵌入

- [RAG-Anything](https://github.com/HKUDS/RAG-Anything) 一体化 RAG 框架
- [PixelRAG](https://github.com/StarTrail-org/PixelRAG) PixelRAG 将网页、PDF、图片等文档渲染为截图，并直接基于图像完成检索
- [LightRAG](https://github.com/HKUDS/LightRAG) 简单快速的检索增强生成
- [llama\_index](https://github.com/run-llama/llama_index) 主流文档智能体与光学字符识别平台
- [FlagEmbedding](https://github.com/FlagOpen/FlagEmbedding) 检索与检索增强型大语言模型（RAG-LLM）

### 模型 SDK

- [litellm](https://github.com/BerriAI/litellm) Python SDK、代理服务器（AI 网关），以 OpenAI（或原生）格式调用 100+ 个 LLM API，支持成本追踪、护栏、负载均衡和日志记录
- [llama-cpp-python](https://github.com/abetlen/llama-cpp-python) lama.cpp 的 Python 绑定库
- [ollama-python](https://github.com/ollama/ollama-python) Ollama Python 库
- [aisuite](https://github.com/andrewyng/aisuite) 为多款生成式 AI 服务商提供简洁统一的调用界面

### 语音

- [VoxCPM](https://github.com/OpenBMB/VoxCPM) 基于连续表征的多语言语音合成、创意音色设计与高保真声音克隆
- [FunASR](https://github.com/modelscope/FunASR) 工业级语音识别
- [whisper](https://github.com/openai/whisper) 依托大规模弱监督学习实现高鲁棒性语音识别
- [mlx-audio](https://github.com/Blaizzy/mlx-audio) 基于 Apple MLX 的高效音频处理库，支持文本转语音与语音生成工作流，在 Apple Silicon 上表现突出
- [fish-speech](https://github.com/fishaudio/fish-speech) 当前最优开源语音合成（TTS）
- [pocket-tts](https://github.com/kyutai-labs/pocket-tts) 可在普通 CPU（乃至便携设备）流畅运行的语音合成工具
- [kokoro](https://github.com/hexgrad/kokoro) 适用于 Kokoro-82M 的推理库

### 记忆

- [mem0](https://github.com/mem0ai/mem0) 面向 AI 智能体的通用内存层
- [mempalace](https://github.com/milla-jovovich/mempalace) 这是目前评测中得分最高的 AI 记忆系统，并且完全免费
- [hindsight](https://github.com/vectorize-io/hindsight) 具备学习能力的智能体记忆系统

### 推理与部署

- [vllm](https://github.com/vllm-project/vllm) 一款高吞吐、内存高效的大语言模型（LLM）推理与服务引擎
- [sglang](https://github.com/sgl-project/sglang) 一款面向大语言模型与多模态模型的高性能部署服务框架

## 网络与 Web

- [scrapy](https://github.com/scrapy/scrapy) 一个快速、高级的 Python 网络爬取与抓取框架
- [MediaCrawler](https://github.com/NanmiCoder/MediaCrawler) 自媒体平台爬虫
- [tornado](https://github.com/tornadoweb/tornado) 网页框架与异步网络库
- [fastapi](https://github.com/fastapi/fastapi) FastAPI 框架
- [CloakBrowser](https://github.com/CloakHQ/CloakBrowser) 可通过所有机器人检测测试的隐身版 Chromium

## 数据处理

- [json\_repair](https://github.com/mangiucugna/json_repair) 可修复来自大语言模型、接口、日志与用户输入的格式错误 JSON
- [honker](https://github.com/russellromney/honker) SQLite 扩展与绑定，兼容 Postgres 的 NOTIFY/LISTEN 机制，支持持久队列、数据流、发布订阅及任务调度器
- [yfinance](https://github.com/ranaroussi/yfinance) 通过雅虎财经 API 下载市场行情数据
- [pydantic-resolve](https://github.com/allmonday/pydantic-resolve) 一款通用数据组合工具，可生成 JSON RPC、GraphQL，甚至 MCP
- [python-pinyin](https://github.com/mozillazg/python-pinyin) 汉字转拼音

## 文档解析与生成

- [markitdown](https://github.com/microsoft/markitdown) 用于将文件及办公文档转换为 Markdown 格式的 Python 工具
- [pdf-craft](https://github.com/oomol-lab/pdf-craft) 将 PDF 文件转换为多种其他格式, 本项目将专注处理扫描版书籍 PDF 文件
- [PyMuPDF](https://github.com/pymupdf/PyMuPDF) 对 PDF 及其他格式文档进行数据提取、分析、格式转换与编辑处理
- [xhtml2pdf](https://github.com/xhtml2pdf/xhtml2pdf) 一款借助 ReportLab 将 HTML 转换为 PDF 的程序库
- [MinerU](https://github.com/opendatalab/MinerU) 将 PDF、Office 文档等复杂文件转换为适配大模型的 Markdown/JSON 格式，服务于智能体工作流
- [marker](https://github.com/datalab-to/marker) **高精度快速将 PDF 转换为 Markdown 和 JSON 格式**
- [docling](https://github.com/docling-project/docling) 让您的文档为生成式 AI 做好准备

## 图形与媒体

- [magika](https://github.com/google/magika) 由AI驱动，快速精准的文件内容类型检测
- [CorridorKey](https://github.com/nikopueringer/CorridorKey) 绿幕抠图
- [rembg](https://github.com/danielgatis/rembg) Rembg 是一款用于去除图片背景的工具。
- [nobg](https://github.com/feyninc/nobg) 开源背景移除与图像抠图库，原生集成 Hugging Face Hub
- [3b1b/manim](https://github.com/3b1b/manim) 用于制作解释性数学视频的动画引擎
- [3b1b/videos](https://github.com/3b1b/videos) 用于 3blue1brown 视频中的人工生成场景的代码
- [PySceneDetect](https://github.com/Breakthrough/PySceneDetect) 基于 Python 与 OpenCV 的场景切分 / 转场检测程序及工具库
- [pyecharts](https://github.com/pyecharts/pyecharts) Python Echarts 绘图库

## 学习资源

- [TheAlgorithms](https://github.com/TheAlgorithms/Python) 所有算法均使用 Python 实现
