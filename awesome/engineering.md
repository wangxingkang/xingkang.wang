# 工程化

## 开发环境

- [devenv](https://github.com/cachix/devenv) 基于 Nix 的快速、声明式、可复现开发环境工具，内置语言、服务、任务、进程和密钥集成

### 运行时版本管理

- [fnm](https://github.com/Schniz/fnm) 快速安装与切换 Node.js 版本的跨平台工具
- [nvm](https://github.com/nvm-sh/nvm) 经典的 Node.js 版本管理器，支持安装和切换多个 Node 版本
- [n](https://github.com/tj/n) 简洁高效的 Node.js 版本管理工具，支持跨版本切换与自动安装

### 多语言工具管理

- [mise](https://github.com/jdx/mise) 统一管理多语言开发工具版本、环境变量与项目任务

### 部署工具

- [pinme](https://github.com/glitternetwork/pinme) 一条命令即可部署前端项目，兼容 Claude Code 技能集

### 本地服务

- [nodemon](https://github.com/remy/nodemon) 监控 Node.js 应用的所有变更并自动重启服务端 —— 非常适合开发环境使用
- [portless](https://github.com/vercel-labs/portless) 用稳定、带名称的本地 URL 替代端口号。适用于人类用户与智能代理

## Git

- [gitbutler](https://github.com/gitbutlerapp/gitbutler) GitButler 版本控制客户端
- [gitui](https://github.com/gitui-org/gitui) Git 终端界面
- [prek](https://github.com/j178/prek) 基于 Rust 开发的高性能 Git 钩子管理工具
- [lefthook](https://github.com/evilmartians/lefthook) Git 钩子管理器
- [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) Git 钩子管理器
- [husky](https://github.com/typicode/husky) Git 钩子管理器
- [weekly-git-summary](https://github.com/yinzhenyu-su/weekly-git-summary) 根据 Git 提交记录生成周报
- [tuicr](https://github.com/agavra/tuicr) 带 Vim 键位的代码评审 TUI，可向 GitHub、GitLab、Bitbucket 或剪贴板导出评审意见
- [hunk](https://github.com/modem-dev/hunk) 面向智能编程体的**先评审型终端差异查看器**
- [artifact-fs](https://github.com/cloudflare/artifact-fs) 一款文件系统驱动程序，旨在以最快速度挂载大型 Git 代码仓库，它会按需实时加载文件内容，而非阻塞等待完整初始克隆
- [lazygit](https://github.com/jesseduffield/lazygit) 用于 Git 命令的简易终端界面
- [git-lfs](https://github.com/git-lfs/git-lfs) 用于对大型文件进行版本管理的 Git 扩展工具
- [git-split-diffs](https://github.com/banga/git-split-diffs) 在终端中展示带语法高亮的左右分栏对比差异
- [difit](https://github.com/yoshiko-pg/difit) 使用 GitHub 风格查看器查看和审查本地 git 差异的 CLI 工具

## 依赖与仓库管理

- [package-manager-detector](https://github.com/antfu-collective/package-manager-detector) 包管理器检测器
- [pnpm-workspace-utils](https://github.com/antfu/pnpm-workspace-utils) 管理 pnpm catalogs 的工具集，包含 catalog ESLint 规则和保留注释的 pnpm-workspace.yaml 读写工具
- [pnpm-patch-i](https://github.com/antfu/pnpm-patch-i) 更友好的交互式 pnpm patch 包装器，可在本地 node\_modules 中编辑并自动提交补丁
- [taze](https://github.com/antfu-collective/taze) 使用智能变更检测并批量更新依赖版本的命令行工具
- [@microsoft/rush](https://github.com/microsoft/rushstack/tree/main/apps/rush) 高效、专业的单体仓库管理方案
- [giget](https://github.com/unjs/giget) 从 GitHub、GitLab、Bitbucket 等托管源下载项目模板或仓库的 Node.js CLI 与库
- [patch-package](https://github.com/ds300/patch-package) 立即修复损坏的 Node 模块

## 代码质量

- [oxlint](https://github.com/oxc-project/oxc/tree/HEAD/npm/oxlint)
- [oxfmt](https://github.com/oxc-project/oxc/tree/HEAD/npm/oxfmt)
- [@sxzz/eslint-config](https://github.com/sxzz/eslint-config) 支持 JavaScript、TypeScript、Vue、Astro 与 Prettier 的 ESLint 配置预设
- [steiger](https://github.com/feature-sliced/steiger) 通用文件结构与项目架构检查工具
- [publint](https://github.com/publint/publint) NPM 包校验工具
- [@biomejs/biome](https://github.com/biomejs/biome/tree/HEAD/packages/@biomejs/biome) 快速的格式化工具
- [knip](https://github.com/webpro-nl/knip) ✂️ 查找 JavaScript 和 TypeScript 项目中未使用的文件、依赖与导出代码。上线前先清理干净！
- [fallow](https://github.com/fallow-rs/fallow) 面向 TypeScript 和 JavaScript 的代码库智能分析工具
- [cloc](https://github.com/AlDanial/cloc) cloc 可以统计多种编程语言源代码中的空行、注释行与实际代码行
- [jscpd](https://github.com/kucherenko/jscpd) 源代码复制粘贴检测工具，支持 223 种文件格式
- [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2) 基于配置、高效灵活的命令行工具，借助 markdownlint 库对 Markdown/CommonMark 文件进行代码检查
- [cspell](https://github.com/streetsidesoftware/cspell) 企业级拼写检查工具，支持多语言词典与代码/文档场景下的错字自动检测

## 调试

- [nnd](https://github.com/al13n321/nnd) 一款适用于 Linux 的调试器
- [page-spy-web](https://github.com/HuolalaTech/page-spy-web) PageSpy 是一款用来调试 Web / ReactNative / 小程序 / 鸿蒙 APP 等平台项目的工具

## 构建目标与兼容

- [browserslist](https://github.com/browserslist/browserslist) 在 Autoprefixer、Stylelint、babel-preset-env 等各类前端工具间共享目标浏览器配置
- [caniuse-lite](https://github.com/browserslist/caniuse-lite) 精简版 caniuse 数据库，仅保留核心内容

## Vite

### 官方资源

- [官网](https://cn.vite.dev)
- [vite](https://github.com/vitejs/vite) vite 仓库

### 官方插件

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/tree/HEAD/packages/plugin-react)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react-swc)
- [@vitejs/plugin-vue](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue) 提供 Vue 3 单文件组件支持
- [@vitejs/plugin-vue-jsx](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx) 提供 Vue 3 JSX 支持
- [@vitejs/plugin-rsc](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-rsc) Vite 通过该插件支持 React [Server Components (RSC)](https://react.dev/reference/rsc/server-components)
- [@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy) 为打包后的文件提供传统浏览器兼容性支持
- [@vitejs/plugin-basic-ssl](http://github.com/vitejs/vite-plugin-basic-ssl) 基于自动生成的自签名证书实现基础的 HTTPS 配置

### 语言与框架集成

- [vite-plugin-top-level-await](https://github.com/Menci/vite-plugin-top-level-await) 将代码改造为支持在普通浏览器中，基于 Vite 实现顶层 `await` 特性
- [electron-vite](https://github.com/alex8088/electron-vite) 新一代 Electron 开发构建工具，支持源代码保护
- [deno-vite-plugin](https://github.com/denoland/deno-vite-plugin) 用于在 Vite 中支持 Deno 模块解析的 Vite 插件
- [vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr) 一款用于将 SVG 转换为 React 组件的 Vite 插件
- [vite-plugin-wasm](https://github.com/Menci/vite-plugin-wasm) 为 Vite 新增 WebAssembly ESM 集成能力
- [@tailwindcss/vite](https://github.com/tailwindlabs/tailwindcss/tree/HEAD/packages/@tailwindcss-vite)
- [vite-plugin-electron](https://github.com/electron-vite/vite-plugin-electron) Electron + Vite
- [vite-plugin-electron-renderer](https://github.com/electron-vite/vite-plugin-electron-renderer) 为渲染进程提供 Node.js API 垫片
- [@module-federation/vite](https://github.com/module-federation/vite) 模块联邦
- [vite-plugin-pwa](https://github.com/vite-pwa/vite-plugin-pwa) 面向 Vite 的零配置 PWA 解决方案
- [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import) 为 Vite、Webpack 和 Rollup 实现 API 的按需自动导入
- [vite-plugin-svelte](https://github.com/sveltejs/vite-plugin-svelte) Svelte 插件
- [vinext](https://github.com/cloudflare/vinext) 复刻 Next.js API 接口的 Vite 插件，可部署至任意平台

### 调试与检查

- [vite-plugin-istanbul](https://github.com/iFaxity/vite-plugin-istanbul) 一款用于为 nyc/istanbul 代码覆盖率工具进行代码插桩的 Vite 插件
- [vite-plugin-inspect](https://github.com/antfu-collective/vite-plugin-inspect) 可视化插件与源码转换产物，便于诊断 Vite/Rollup 构建过程
- [code-inspector-plugin](https://github.com/zh-lx/code-inspector) 点击页面 dom 来打开 IDE 并将光标自动定位到源代码位置
- [vite-plugin-checker](https://github.com/fi3ework/vite-plugin-checker) 一款提供 TypeScript、ESLint、vue-tsc、Stylelint 等代码检查能力的 Vite 插件
- [vite-plugin-devtools-json](https://github.com/ChromeDevTools/vite-plugin-devtools-json) 在开发服务器中实时生成 `com.chrome.devtools.json` 文件

### 浏览器扩展开发

- [@crxjs/vite-plugin](https://github.com/crxjs/chrome-extension-tools/tree/main/packages/vite-plugin) 现代化 Chrome 扩展开发
- [vite-plugin-web-extension](https://github.com/aklinker1/vite-plugin-web-extension) 用于开发 Chrome / 网页扩展程序的 Vite 插件
- [vite-plugin-monkey](https://github.com/lisonge/vite-plugin-monkey)

### 资源与构建优化

- [vite-plugin-bundle-obfuscator](https://github.com/z0ffy/vite-plugin-bundle-obfuscator) JavaScript 混淆器插件为 Vite 提供可自定义配置项与多线程支持
- [vite-plugin-mkcert](https://github.com/liuweiGL/vite-plugin-mkcert) 为 Vite 的 HTTPS 开发服务提供证书
- [vite-plugin-compression2](https://github.com/nonzzz/vite-plugin-compression) Vite 插件，用于压缩打包文件
- [rollup-plugin-gzip](https://github.com/kryops/rollup-plugin-gzip) 使用 Gzip 压缩你的 Rollup / Vite 打包文件
- [rollup-plugin-critical](https://github.com/nystudio107/rollup-plugin-critical) 用于生成关键 CSS 的 Vite.js 与 Rollup 插件
- [vite-plugin-static-copy](https://github.com/sapphi-red/vite-plugin-static-copy) 支持开发服务器的 rollup-plugin-copy 插件
- [vite-plugin-image-optimizer](https://github.com/FatehAK/vite-plugin-image-optimizer) 借助 Sharp.js 和 SVGO 优化你的图片资源
- [unplugin-info](https://github.com/yjl9903/unplugin-info) 将构建信息导出为虚拟模块
- [vite-plugin-html](https://github.com/vbenjs/vite-plugin-html) 一款用于处理 HTML 的 Vite 插件，该插件基于 lodash 模板开发
- [@plugin-web-update-notification/vite](https://github.com/GreatAuk/plugin-web-update-notification) 一款轻量级工具库，可检测网页内容更新并通知用户刷新页面

## Rolldown

### 官方资源

- [官网](https://rolldown.rs)
- [rolldown](https://github.com/rolldown/rolldown) rolldown 仓库

### 插件

- [rolldown-plugin-dts](https://github.com/sxzz/rolldown-plugin-dts) 一款用于生成并打包 d.ts 文件的 Rolldown 插件
- [rolldown-plugin-wasm](https://github.com/sxzz/rolldown-plugin-wasm) 适用于 WASM 的 Rolldown 插件

## Rspack

- [官网](https://rspack.rs/zh/)
- [rspack](https://github.com/web-infra-dev/rspack) rspack 仓库

### 官方插件

- [rsbuild-plugin-image-compress](https://github.com/rstackjs/rsbuild-plugin-image-compress) 一款用于压缩图片的 Rsbuild 插件

### 插件

- [@module-federation/rsbuild-plugin](https://github.com/module-federation/core/tree/HEAD/packages/rsbuild-plugin) 模块联邦

## Webpack

- [官网](https://webpack.js.org)
- [webpack](https://github.com/webpack/webpack) webpack 仓库

### 插件

- [webpackbar](https://github.com/unjs/webpackbar) 适用于 Webpack 3、4、5 的优雅进度条与性能分析器
- [compression-webpack-plugin](https://github.com/webpack/compression-webpack-plugin) 对资源进行压缩处理，以便通过 **Content-Encoding** 响应头提供服务

## Babel

### 插件

- [babel-plugin-react-compiler](https://github.com/facebook/react/tree/HEAD/compiler/packages/babel-plugin-react-compiler) 适用于 React Compiler 的 Babel 插件

## 构建插件

- [unplugin-vue](https://github.com/unplugin/unplugin-vue) ✨ 将 Vue 3 单文件组件（SFC）转换为 JavaScript 代码

## 打包

- [tsdown](https://tsdown.dev/zh-CN/) 优雅的库打包工具, 由 Rolldown 强力驱动
- [rslib](https://rslib.rs/zh/) 基于 Rsbuild 的库开发工具
- [tsup](https://github.com/egoist/tsup) 打包你的 TypeScript 库的最简、最快方案
- [father](https://github.com/umijs/father) NPM 包开发工具
- [unbuild](https://github.com/unjs/unbuild)
- [parcel](https://github.com/parcel-bundler/parcel) 零配置高性能应用打包与构建工具，支持现代前端项目（JS/TS、React、Vue 等）从开发到生产的一体化流程
- [Trunk](https://github.com/trunk-rs/trunk) Rust WASM Web 应用的构建与打包工具，内置开发服务器与热重载

## 性能优化

- [beasties](https://github.com/danielroe/beasties) 一个用于内联应用关键 CSS，并懒加载其余样式的库。
- [fontaine](https://github.com/unjs/fontaine) 基于字体度量指标的自动字体回退
- [lighthouse](https://github.com/GoogleChrome/lighthouse) 针对网页的自动化审核、性能指标检测与最佳实践校验
- [size-limit](https://github.com/ai/size-limit) 计算运行你的 JS 应用或库的真实性能开销，以保持良好性能
- [critical](https://github.com/addyosmani/critical) 在 HTML 页面中提取并内联关键路径 CSS

## 构建与持续集成

- [dagger](https://github.com/dagger/dagger) 自动化引擎，用于构建、测试和交付任意代码库

## GitHub Actions

- [sxzz/workflows](https://github.com/sxzz/workflows) 面向 TypeScript 项目的可复用 GitHub Actions 工作流与自定义 Action 集合
- [act](https://github.com/nektos/act) 在本地通过 Docker 运行 GitHub Actions 工作流
- [actions/upload-artifact](https://github.com/actions/upload-artifact) 从工作流程运行中上传操作产物
- [actions/setup-node](https://github.com/actions/setup-node) 使用特定版本的 Node 设置您的 GitHub Actions 工作流程
- [actions/setup-python](https://github.com/actions/setup-python) 使用特定版本的 Python 设置您的 GitHub Actions 工作流程
- [actions/checkout](https://github.com/actions/checkout) 检出代码仓库
- [create-pull-request](https://github.com/peter-evans/create-pull-request) 提交工作流中的变更，并创建或更新拉取请求
- [repository-dispatch](https://github.com/peter-evans/repository-dispatch) 向当前或远程仓库触发 `repository_dispatch` 事件
- [create-or-update-comment](https://github.com/peter-evans/create-or-update-comment) 创建或更新 Issue、Pull Request 评论
- [tauri-action](https://github.com/tauri-apps/tauri-action) 构建 Tauri 多平台原生应用，并可发布构建产物至 GitHub Release
- [pnpm/action-setup](https://github.com/pnpm/action-setup) 安装 pnpm 包管理器
- [appleboy/scp-action](https://github.com/appleboy/scp-action) 通过 SSH 复制文件和制品
- [FTP-Deploy-Action](https://github.com/SamKirkland/FTP-Deploy-Action) 用 GitHub Actions 将项目同步部署到 FTP/FTPS 服务器
- [peakoss/anti-slop](https://github.com/peakoss/anti-slop) 检测并自动关闭低质量及 AI 灌水式合并请求（PR）
- [toolkit](https://github.com/actions/toolkit) 用于开发 GitHub Actions 的 GitHub 工具套件
- [actions-runner-controller](https://github.com/actions/actions-runner-controller) 用于 GitHub Actions 自托管运行器的 Kubernetes 控制器

## 版本发布与变更日志

- [App Store Connect CLI](https://github.com/rorkai/App-Store-Connect-CLI) 自动化 TestFlight、构建、签名与 App Store 上架流程
- [goreleaser](https://github.com/goreleaser/goreleaser) 发布工程，化繁为简
- [changelogen](https://github.com/unjs/changelogen) 依托约定式提交规范，生成精美的更新变更日志
- [git-cliff](https://github.com/orhun/git-cliff) 一款高度可自定义的**更新日志生成器**，遵循**约定式提交（Conventional Commit）** 规范
- [release-it](https://github.com/release-it/release-it) 自动化版本控制和软件包发布
- [semantic-release](https://github.com/semantic-release/semantic-release) 全自动化版本管理与包发布
- [changesets](https://github.com/changesets/changesets) 🦋 专注于单仓项目的版本控制与变更日志管理方案
- [bumpp](https://github.com/antfu-collective/bumpp) 交互式命令行工具，可更新版本号及更多功能

## 文档与图示

- [madge](https://github.com/pahen/madge) 根据你的 CommonJS、AMD 或 ES6 模块依赖关系生成关系图
- [codeflow](https://github.com/braedonsaunders/codeflow) 粘贴任意 GitHub 链接 → 生成交互式架构图谱
- [quarkdown](https://github.com/iamgio/quarkdown) 赋能增强版 Markdown：从灵感构思到论文、演示文稿、网站、书籍以及知识库创作全流程通用
- [sponsorkit](https://github.com/antfu-collective/sponsorkit) 自动化 GitHub Sponsorship 徽章与赞助页配置工具
- [d2](https://github.com/terrastruct/d2) 种现代化的图表脚本语言，可将文本转换为图表
- [doctoc](https://github.com/thlorenz/doctoc) 为本地 Git 仓库中的 Markdown 文件生成目录
- [markit](https://github.com/Michaelliv/markit) 万物皆可转 Markdown
- [automd](https://github.com/unjs/automd) 自动化 Markdown 维护工具
- [archilang](https://github.com/4kk11/archilang) 语义化平面图

## 接口文档与调试

- [hoppscotch](https://github.com/hoppscotch/hoppscotch) Postman、Insomnia 的开源替代方案
- [scalar](https://github.com/scalar/scalar) 开源 API 平台

## 多语言与内容本地化

- [i18next-scanner](https://github.com/i18next/i18next-scanner) 扫描代码，提取翻译键与对应内容，并将其合并至国际化（i18n）资源文件中
- [locize-cli](https://github.com/locize/locize-cli) Locize 命令行工具，用于导入 / 导出语言区域、添加 / 编辑 / 删除、同步翻译片段
- [lingo](https://github.com/lingodotdev/lingo.dev) 开源、基于人工智能的国际化开发工具包，借助大语言模型实现即时本地化

## 应用开发框架

- [phoenix](https://github.com/phoenixframework/phoenix) 从原型开发到生产上线，全程安心无忧

## 模板与示例

- [template](https://github.com/unjs/template) UnJS 项目起步模板，预置 TypeScript、pnpm 与构建测试配置

## 合约开发

- [hardhat](https://github.com/NomicFoundation/hardhat) Hardhat 是一个用于**编译、部署、测试和调试以太坊应用**的开发环境
