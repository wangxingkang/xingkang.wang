# Rust

收录 Rust 开发库与生态工具。成品软件可按用途查找[AI 编程工具](/awesome/vibe-coding.md)、[编辑器](/awesome/ide.md)、[终端工具](/awesome/ops.md#终端)和[桌面应用](/awesome/desktop.md#应用与工具)。

## 官方资源

- [官网](https://rust-lang.org/zh-CN/)
- [cargo](https://github.com/rust-lang/cargo) 包管理器

## 学习

- [RustTraining](https://github.com/microsoft/RustTraining) 面向**初级、进阶、专家**三个等级的 Rust 培训资料

## AI 开发

- [rig](https://github.com/0xPlaygrounds/rig) 用 Rust 构建模块化、可扩展 LLM 应用的开发库，支持智能体工作流、多模型提供商和向量存储集成
- [rust-genai](https://github.com/jeremychone/rust-genai) Rust 多提供商生成式 AI 客户端库，统一接入 OpenAI、Anthropic、Gemini、Ollama、DeepSeek、xAI 等模型服务
- [async-openai](https://github.com/64bit/async-openai) 非官方 Rust 异步 OpenAI SDK，支持流式响应、WASM、Azure OpenAI 和 OpenAI 兼容服务
- [candle](https://github.com/huggingface/candle) 极简的 Rust 机器学习框架

## Web 与网络

- [servo](https://github.com/servo/servo) 浏览器引擎
- [Leptos](https://github.com/leptos-rs/leptos) 基于细粒度响应式的全栈同构 Rust Web 框架
- [yew](https://github.com/yewstack/yew) 构建稳定高效网页应用的框架
- [dioxus](https://github.com/DioxusLabs/dioxus) 面向网页、桌面端与移动端的全栈应用框架
- [pingora](https://github.com/cloudflare/pingora) 一款用于构建高性能、稳定可靠且易于迭代扩展的网络服务的开发库
- [tailscale-rs](https://github.com/tailscale/tailscale-rs) Tailscale 的实验性 Rust 实现，提供 Rust API 及多语言绑定

## GUI 与终端界面

- [gpui-kit](https://github.com/longbridge/gpui-kit) Rust GUI 组件，用于构建出色的跨平台桌面应用程序，采用 GPUI 技术实现
- [floem](https://github.com/lapce/floem) 一款基于 Rust 原生开发、具备细粒度响应式特性的 UI 库
- [xilem](https://github.com/linebender/xilem) 一款实验性的 Rust 原生 UI 框架
- [ratatui](https://github.com/ratatui/ratatui) 一个用于打造终端用户界面（TUI）的 Rust 工具箱
- [rust\_minifb](https://github.com/emoon/rust_minifb) 适用于 Rust 语言的跨平台窗口与帧缓冲区库

## 图形与游戏

- [wgpu](https://github.com/gfx-rs/wgpu) 跨平台、安全的纯 Rust 图形 API，基于 WebGPU 标准并支持 Vulkan、Metal、D3D12、OpenGL 等后端
- [rapier](https://github.com/dimforge/rapier) 主打高性能的 2D 与 3D 物理引擎
- [bevy](https://github.com/bevyengine/bevy) 一款用 Rust 语言构建、简洁易用的数据驱动型游戏引擎
- [Fyrox](https://github.com/FyroxEngine/Fyrox) 用 Rust 编写的 3D 和 2D 游戏引擎

## 数据库与数据访问

数据库与搜索引擎见[运维 / 数据库与搜索](/awesome/ops.md#数据库与搜索)。

- [SQLx](https://github.com/transact-rs/sqlx) 支持编译期查询校验的异步 Rust SQL 工具包，兼容 PostgreSQL、MySQL 与 SQLite
- [turbovec](https://github.com/RyanCodrai/turbovec) 基于 TurboQuant 的 Rust 向量索引库，提供 Python 绑定

## 数据结构与文本处理

- [nalgebra](https://github.com/dimforge/nalgebra) 线性代数库
- [rust-phf](https://github.com/rust-phf/rust-phf) Rust 编译期静态映射表
- [jieba-rs](https://github.com/messense/jieba-rs) 中文分词
- [fancy-regex](https://github.com/fancy-regex/fancy-regex) 一款支持环视、反向引用等高级特性的 Rust 正则表达式库，提供兼容 Oniguruma 语法的模式

## 文件与文档

- [fff.nvim](https://github.com/dmtrKovalenko/fff.nvim) 面向 AI 智能体、Neovim、Rust、C 及 NodeJS 的**速度最快、精度最高**的文件检索工具包
- [calamine](https://github.com/tafia/calamine) 电子表格读取库
- [anydoc](https://github.com/firecrawl/anydoc) 将 Word、PowerPoint、Excel、OpenDocument、RTF、EPUB、CSV 和 PDF 转换为干净的 Markdown，基于 Rust 构建，提供 Node.js 和 Python 绑定
- [pdf-inspector](https://github.com/firecrawl/pdf-inspector) 快速 Rust PDF 分类与文本抽取库，可识别扫描件/文本型 PDF、生成 Markdown，并提供 Python、Node.js 与 WASM 绑定
- [liteparse](https://github.com/run-llama/liteparse) Rust 文档解析库与命令行工具，提供 Node.js、Python 和 WASM 绑定
- [RaTeX](https://github.com/erweixin/RaTeX) LaTeX 数学公式渲染器

## 系统与嵌入式

- [boxlite](https://github.com/boxlite-ai/boxlite) 可嵌入的微型虚拟机运行时，提供 Rust、Python、Node.js、Go 与 C SDK
- [enigo](https://github.com/enigo-rs/enigo) 跨平台输入模拟
- [device-driver](https://github.com/diondokter/device-driver) Rust 设备驱动开发工具集，基于 DSL 与生成流程快速构建高性能驱动与 CLI
- [tock](https://github.com/tock/tock) 面向微控制器的安全嵌入式操作系统

## 语言运行时与互操作

- [spacewasm](https://github.com/nasa/spacewasm) SpaceWasm 是一个 Wasm 1.0 规范的实现，旨在航天器上解释执行 Wasm 二进制代码
- [rune](https://github.com/rune-rs/rune) 可嵌入 Rust 的动态编程语言
- [rustler](https://github.com/rusterlium/rustler) 用于创建 Erlang NIF 函数的安全 Rust 桥接层

## 身份认证与权限

- [sa-token-rust](https://github.com/sa-tokens/sa-token-rust) 开源、免费、轻量级 Rust 权限认证框架

## 构建与测试

通用的版本管理、Git 与发布工具见[工程化](/awesome/engineering.md)。

- [wasm-pack](https://github.com/wasm-bindgen/wasm-pack) rust -> wasm
- [cross](https://github.com/cross-rs/cross) **无需配置**即可实现 Rust 库的**交叉编译**与**交叉测试**。
- [afl.rs](https://github.com/rust-fuzz/afl.rs) 使用 American Fuzzy Lop 对 Rust 代码进行模糊测试
- [unrs-resolver](https://github.com/unrs/unrs-resolver) 支持 PNP 的 webpack 增强解析库 Rust 移植版
