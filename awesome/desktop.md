# 桌面开发与应用

[应用开发](#应用开发)收录桌面框架、插件与打包工具；[应用与工具](#应用与工具)按用途收录可直接使用的软件。终端与数据库客户端见[运维](/awesome/ops.md)，代码编辑器见 [IDE](/awesome/ide.md)。

## 应用开发

### 系统集成

- [libimobiledevice](https://github.com/libimobiledevice/libimobiledevice) 一款用于与 iOS 设备通信的跨平台协议库
- [Sparkle](https://github.com/sparkle-project/Sparkle) MacOS 的软件更新框架

### Electron

#### 官方资源

- [官网](https://www.electronjs.org/zh/)
- [electron](https://github.com/electron/electron) electron 仓库

#### 项目模板

- [electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate)
- [electron-react-app](https://github.com/guasam/electron-react-app)
- [electron-shadcn](https://github.com/LuanRoger/electron-shadcn) Electron Forge 结合 shadcn-ui（基于 Vite + TypeScript）
- [vite-electron-builder](https://github.com/cawa-93/vite-electron-builder)
- [electron-vite-monorepo](https://github.com/buqiyuan/electron-vite-monorepo) 基于 pnpm、Vue、Vite 构建的 Electron Turborepo 单体仓库脚手架
- [fast-vite-electron](https://github.com/ArcherGu/fast-vite-electron) 基于 Vite + Electron 搭配 Rolldown，速度超快
- [reactronite](https://github.com/flaviodelgrosso/reactronite) 一款功能完备、现代化的 Electron 开发模板，用于开发跨平台桌面应用程序

#### 调试与监控

- [electron-unhandled](https://github.com/sindresorhus/electron-unhandled) 捕获 Electron 应用中未处理的错误与 Promise 拒绝异常
- [@electron/devtron](https://github.com/electron/devtron) 一款 Electron 开发者工具扩展
- [electron-devtools-installer](https://github.com/MarshallOfSound/electron-devtools-installer) 一种将 Chrome 开发者工具扩展集成到 Electron 中的简便方法
- [electron-debug](https://github.com/sindresorhus/electron-debug) 为你的 Electron 应用增添实用的调试功能
- [electron-log](https://github.com/megahertz/electron-log) 适用于 Electron / Node.js/ NW\.js 应用的简易日志模块
- [@sentry/electron](https://github.com/getsentry/sentry-electron) 面向 Electron 应用的 Sentry 错误监控 SDK
- [electronmon](https://github.com/catdad/electronmon) 借助简易工具运行、监听并重启 Electron 应用
- [debugtron](https://github.com/pd4d10/debugtron) 对线上环境中的 Electron 应用进行调试
- [@electron/fiddle-core](https://github.com/electron/fiddle-core)  可在任意环境、任意版本的 Electron 中运行调试代码片段

#### 构建与发布

- [@electron/get](https://github.com/electron/get) 下载 Electron 发行版制品
- [update-electron-app](https://github.com/electron/update-electron-app) 自动更新
- [@electron/rebuild](https://github.com/electron/rebuild) 用于根据当前已安装的 Electron 版本，重新编译原生 Node.js 模块的软件包
- [electron-updater](https://github.com/electron-userland/electron-builder/tree/master/packages/electron-updater) 自动更新
- [@electron/osx-sign](https://github.com/electron/osx-sign) 为 macOS 平台的 Electron 应用进行代码签名
- [@electron/notarize](https://github.com/electron/notarize) 为你的 macOS 版 Electron 应用进行公证
- [@electron/fuses](https://github.com/electron/fuses) 切换 Electron 安全熔断配置，自定义已打包的 Electron 应用程序
- [electron-squirrel-startup](https://github.com/mongodb-js/electron-squirrel-startup) 适用于 Electron 应用的 Squirrel.Windows 默认事件处理器
- [electron-icon-builder](https://github.com/safu9/electron-icon-builder) 一款图标生成工具，用于生成 Electron 打包所需的全部图标文件
- [electron-builder](https://github.com/electron-userland/electron-builder) 一套一站式解决方案，可打包并构建出可直接分发的 Electron 应用，且开箱即支持自动更新功能
- [forge](https://github.com/electron/forge) 一套用于打包与发布 Electron 应用的完整工具
- [@electron/packager](https://github.com/electron/packager) 通过 JavaScript 代码或命令行工具，自定义并打包 Electron 应用

#### 界面与窗口

- [custom-electron-titlebar](https://github.com/AlexTorresDev/custom-electron-titlebar) 借鉴 VS Code 风格的自定义 Electron 标题栏
- [@electron-uikit/core](https://github.com/alex8088/electron-uikit/tree/main/packages/core) Electron UI 工具包核心。提供用于主进程与渲染进程间通信的 UI 工具包 API
- [@electron-uikit/contextmenu](https://github.com/alex8088/electron-uikit/tree/main/packages/contextmenu) 右键菜单
- [electron-context-menu](https://github.com/sindresorhus/electron-context-menu) 右键菜单
- [@electron-uikit/notification](https://github.com/alex8088/electron-uikit/tree/main/packages/notification) 通知组件
- [@electron-uikit/toast](https://github.com/alex8088/electron-uikit/tree/main/packages/toast) 轻提示组件
- [@electron-uikit/titlebar](https://github.com/alex8088/electron-uikit/tree/main/packages/titlebar) 适用于 Electron 应用的标题栏网页组件
- [electron-liquid-glass](https://github.com/Meridius-Labs/electron-liquid-glass) 适用于 Apple 液态玻璃效果的 Electron 绑定接口
- [electron-localshortcut](https://github.com/parro-it/electron-localshortcut) 无需借助菜单，直接为浏览器窗口实例添加本地键盘快捷键
- [menubar](https://github.com/max-mapper/menubar) 用 Electron 快速开发**菜单栏桌面应用**的高阶方案
- [electron-window-state](https://github.com/mawie81/electron-window-state) 用于保存和恢复 Electron 应用窗口大小与位置的库

#### 运行时与系统集成

- [@electron/remote](https://github.com/electron/remote) 在 Electron 中，将主进程的 JavaScript 对象桥接到渲染进程
- [electron-serve](https://github.com/sindresorhus/electron-serve) Electron 应用的静态文件服务
- [doubleshot](https://github.com/Doubleshotjs/doubleshot) 拆分式 Node 后端与 Electron 主进程
- [@electron-toolkit/preload](https://github.com/alex8088/electron-toolkit/tree/HEAD/packages/preload)
- [@electron-toolkit/utils](https://github.com/alex8088/electron-toolkit/tree/HEAD/packages/utils)
- [@ghostery/adblocker-electron](https://github.com/ghostery/adblocker/tree/master/packages/adblocker-electron) 广告拦截器
  - [@ghostery/adblocker-electron-preload](https://github.com/ghostery/adblocker/tree/HEAD/packages/adblocker-electron-preload)
- [electron-is](https://github.com/delvedor/electron-is) 一款面向 Electron 的判断工具库

#### 数据与配置

- [electron-store](https://github.com/sindresorhus/electron-store) 为你的 Electron 应用或模块提供简易数据持久化方案
- [electron-settings](https://github.com/nathanbuchar/electron-settings) 一款适用于 Electron 的轻量持久化用户配置框架

### Tauri

> [awesome-tauri](https://github.com/tauri-apps/awesome-tauri)

- [官网](https://tauri.app/zh-cn/)
- [tauri](https://github.com/tauri-apps/tauri) tauri 仓库

#### WebView 与插件

- [wry](https://github.com/tauri-apps/wry) 基于 Rust 的跨平台 WebView 库
- [tauri-plugin-device-info](https://github.com/edisdev/tauri-plugin-device-info) 读取电池、网络、存储、显示与设备信息的跨平台 Tauri 插件

#### 项目模板

- [create-tauri-react](https://github.com/MrLightful/create-tauri-react) 基于 Vite、React、TypeScript 与 Tailwind CSS 的 Tauri 应用模板

### Electrobun

- [官网](https://blackboard.sh/electrobun/docs/)
- [electrobun](https://github.com/blackboardsh/electrobun) electrobun 仓库

### 打包与构建

- [Pake](https://github.com/tw93/Pake) 一条命令即可将任意网页转为桌面应用
- [PakePlus](https://github.com/Sjj1024/PakePlus) 打包网页/Vue/React项目为桌面/手机应用

### 跨平台框架

- [zero-native](https://github.com/vercel-labs/zero-native) 使用 Zig 与网页 UI 开发桌面及移动端应用
- [wails](https://github.com/wailsapp/wails) 使用 Go 构建精美应用程序

### 扩展开发

- [raycast](https://github.com/raycast/extensions) 扩展 Raycast 所需的一切

## 应用与工具

### 截屏与录制

- [macshot](https://github.com/sw33tLie/macshot) 功能齐全的原生 macOS 截屏录屏工具：支持标注批注、自动脱敏隐私信息、GIF 录制、OCR 图文识别 + 翻译、长滚屏截取、图片美化等诸多功能
- [Snapzy](https://github.com/duongductrong/Snapzy) 一款开源原生 macOS 截图与录屏应用，可平替 CleanShot X。
- [ScreenToGif](https://github.com/NickeManarin/ScreenToGif) 🎬 ScreenToGif 可让你录制屏幕上选定区域的内容，进行编辑后保存为 GIF 或视频格式。
- [Cap](https://github.com/CapSoftware/Cap) 开源版 Loom 替代工具，可录制精美且支持分享的屏幕视频
- [openscreen](https://github.com/siddharthvaddem/openscreen) 免费创建精美演示视频。开源、无订阅、无水印，且可免费用于商业用途，是 Screen Studio 的替代方案
- [Recordly](https://github.com/webadderall/Recordly) 这是一款免费开源的 Screen Studio 替代软件，可为你的屏幕录制添加自动缩放、鼠标动画等功能。它基于 OpenScreen 进行了深度修改。
- [eSearch](https://github.com/xushengfeng/eSearch) 截屏 离线OCR 搜索翻译 以图搜图 贴图 录屏 万向滚动截屏 屏幕翻译

### 系统管理

- [Homebrew](https://github.com/Homebrew/brew) MacOS 包管理器
- [KeepingYouAwake](https://github.com/newmarcel/KeepingYouAwake) 防止你的 Mac 进入休眠状态
- [vorssaint-utils](https://github.com/vorssaintapp/vorssaint-utils) macOS 菜单栏工具包
- [Mole](https://github.com/tw93/Mole) 从终端清理、卸载、分析、优化和监控您的 Mac
- [WailBrew](https://github.com/wickenico/WailBrew) 基于 Go、Wails 和 React 开发的极简风格 Homebrew 图形界面工具。
- [Thaw](https://github.com/stonerl/Thaw) MacOS 26 菜单栏管理器
- [OpenLogi](https://github.com/AprilNEA/OpenLogi) 原生、本地优先的 Logitech Options+ 替代品
- [apkeep](https://github.com/EFForg/apkeep) 一款用于从多种来源下载 APK 文件的命令行工具
- [omarchy](https://github.com/basecamp/omarchy) 美观、现代、理念鲜明的 Linux 系统

### 办公自动化

- [hammerspoon](https://github.com/Hammerspoon/hammerspoon) 极其强大的 MacOS 桌面自动化工具，使用 Lua 语言驱动
- [TaskTick](https://github.com/lifedever/TaskTick) 一款原生 macOS 定时任务管理应用
- [Google Workspace Cli](https://github.com/googleworkspace/cli) Google Workspace 命令行工具 —— 一款可操作云盘、邮箱、日历、表格、文档、聊天、管理后台等多款服务的命令行程序。基于谷歌发现服务动态构建，内置 AI 智能代理能力
- [AiToEarn](https://github.com/yikart/AiToEarn) 全平台一键分发
- [dingtalk-workspace-cli](https://github.com/DingTalk-Real-AI/dingtalk-workspace-cli) 钉钉工作台是钉钉官方开源的跨平台命令行工具。它将钉钉全套产品能力整合至统一套件，同时适配人工操作与 AI 智能体使用场景
- [@larksuite/cli](https://github.com/larksuite/cli) 飞书官方 CLI 工具

### 输入与窗口

- [alt-tab-macos](https://github.com/lwouis/alt-tab-macos) MacOS 上的 Windows 风格 Alt-Tab 切换
- [Karabiner-Elements](https://github.com/pqrs-org/Karabiner-Elements) MacOS 键盘自定义工具
  - [GokuRakuJoudo](https://github.com/yqrashawn/GokuRakuJoudo) 轻松配置 Karabiner
- [KeyCastr](https://github.com/keycastr/keycastr) 按键可视化工具
- [Thor](https://github.com/gbammc/Thor) 使用快捷键切换应用
- [Deck](https://github.com/yuzeguitarist/Deck) MacOS 剪贴板管理的开源桌面应用
- [espanso](https://github.com/espanso/espanso) 跨平台文本快捷扩展工具
- [daktilo](https://github.com/orhun/daktilo) 把你的键盘变成一台复古打字机
- [Wox](https://github.com/Wox-launcher/Wox) 跨平台启动器
- [SuperCmd](https://github.com/SuperCmdLabs/SuperCmd) 强大的 macOS 启动器

### 开发辅助

- [GitUp](https://github.com/git-up/GitUp) Git 操作终端
- [gitify](https://github.com/gitify-app/gitify) 菜单栏显示 Git 通知
- [massCode](https://github.com/massCodeIO/massCode) 一款面向开发者的免费开源代码片段管理器

### 媒体播放

- [iina](https://github.com/iina/iina) 适用于 macOS 的现代视频播放器
- [mpv](https://github.com/mpv-player/mpv) 命令行媒体播放器
- [zyfun](https://github.com/Hiram-Wong/zyfun) 跨平台桌面端视频资源播放器,免费高颜值
- [pear-desktop](https://github.com/pear-devs/pear-desktop) 音乐播放器扩展插件
- [DTV](https://github.com/chen-zeong/DTV) 抖音、b站、斗鱼、虎牙跨平台轻量化桌面客户端

### 远程控制

- [rustdesk](https://github.com/rustdesk/rustdesk) 一款可自建托管的开源远程桌面应用
- [scrcpy](https://github.com/Genymobile/scrcpy) 显示并控制你的安卓设备
- [deskreen](https://github.com/pavlobu/deskreen) 将任意带有网页浏览器的设备变成电脑的副屏

### 游戏

- [arnis](https://github.com/louis-e/arnis) 在《我的世界》中高度精细地生成现实世界中的任意地点

### 文件传输

- [localsend](https://github.com/localsend/localsend) 一款**开源、跨平台**的 AirDrop 替代工具
- [Lynavo Drive](https://github.com/Lynavo/lynavo-drive) 手机到桌面的局域网增量媒体同步工具，支持 iOS、Android、macOS 与 Windows
- [motrix-next](https://github.com/AnInsomniacy/motrix-next) 一款功能完备的下载管理器
- [decimen-optical-transfer](https://github.com/bashalarmistalt/decimen-optical-transfer) 仅凭一块屏幕和一枚摄像头，即可在两台设备之间传输文件

### 媒体处理

- [ntsc-rs](https://github.com/ntsc-rs/ntsc-rs) 免费开源的 VHS 复古录像带特效，提供独立程序以及插件版本（支持 After Effects、Premiere 和 OpenFX）
- [gyroflow](https://github.com/gyroflow/gyroflow) 利用陀螺仪数据实现视频防抖
- [imagekit](https://github.com/hzbd/imagekit) 批量图片处理的命令行工具
- [pastel](https://github.com/sharkdp/pastel) 一款用于生成、分析、转换和处理颜色的命令行工具
- [HandBrake](https://github.com/HandBrake/HandBrake) 开源视频转码器
- [subtitleedit](https://github.com/SubtitleEdit/subtitleedit) 字幕编辑器
- [caesium-image-compressor](https://github.com/Lymphatus/caesium-image-compressor) Caesium 是一款图片压缩软件，可帮助你存储、发送和分享数码照片，支持 JPG、PNG、WebP 及 TIFF 格式。它能在保留图像整体质量的前提下，快速减小文件大小（如需，也可同时降低分辨率）。
- [PhotoGIMP](https://github.com/Diolinux/PhotoGIMP) 适配 Photoshop 用户的 GIMP 3 及以上版本补丁
- [Lap](https://github.com/julyx10/lap) 本地优先的跨平台照片管理器，支持离线浏览与本地 AI 搜索
- [palmier-pro](https://github.com/palmier-io/palmier-pro) 专为 AI 打造的 macOS 视频编辑器
- [lossless-cut](https://github.com/mifi/lossless-cut) 无损音视频剪辑界的万能工具
- [mediago](https://github.com/caorushizi/mediago) 跨平台视频提取工具: 支持流媒体下载、视频下载、m3u8 下载及 B站视频下载
- [yt-dlp](https://github.com/yt-dlp/yt-dlp) 功能齐全的命令行音视频下载工具
- [RapidRAW](https://github.com/CyberTimon/RapidRAW) 一款美观、非破坏性且由 GPU 加速的 RAW 图像编辑器，专为高性能而打造
- [wx\_channels\_download](https://github.com/ltaoo/wx_channels_download) 微信视频号下载器

### 文档与阅读

- [readest](https://github.com/readest/readest) 电子书阅读器
- [solomd](https://github.com/zhitongblog/solomd) 一款 Markdown 编辑器——也是连接你 LLM 的桥梁。本地优先、MIT 开源、体积仅约 15 MB
- [reflect-open](https://github.com/team-reflect/reflect-open) 开源的 Reflect 重写版：一个本地优先、对 AI Agent 友好的 Markdown 笔记应用
- [tolaria](https://github.com/refactoringhq/tolaria) 用于管理 Markdown 知识库的桌面应用程序
- [Umi-OCR](https://github.com/hiroi-sora/Umi-OCR) 开源、免费的离线OCR软件

### 移动设备

- [LiveContainer](https://github.com/LiveContainer/LiveContainer) 在 iOS 设备中运行其他 iOS 应用的启动器，支持多版本应用与独立数据容器
