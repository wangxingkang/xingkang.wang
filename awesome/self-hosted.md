# 自托管

按使用场景收录可自行运行的个人与团队应用。数据库、网络服务及部署平台见[运维](/awesome/ops.md)，AI 应用见 [AI](/awesome/ai.md)。

**按需查找**

| 想找什么             | 直接前往                                              |
| ---------------- | ------------------------------------------------- |
| 个人云、文件预览与同步      | [个人云](#个人云) · [文件与同步](#文件与同步)                     |
| 沟通、笔记、项目与 Git 协作 | [协作](#协作)                                         |
| 设计创作、音乐、视频与相册    | [设计与创作](#设计与创作) · [媒体与相册](#媒体与相册)                 |
| 内部工具、内容发布与网站服务   | [网站服务](#网站服务)                                     |
| 监控、统计与企业业务       | [监控与统计](#监控与统计) · [业务系统](#业务系统)                   |
| 生活管理、归档与家庭设备     | [生活管理](#生活管理) · [下载与归档](#下载与归档) · [办公与设备](#办公与设备) |

## 个人云

- [Glance](https://github.com/glanceapp/glance) 轻量可自托管的个人仪表盘，聚合 RSS、新闻、天气、视频更新与服务状态，支持 YAML 配置、自定义布局和主题
- [Hister](https://github.com/asciimoo/hister) 自托管个人搜索引擎，为浏览网页和本地文件建立全文索引，支持终端与 MCP 查询
- [CasaOS](https://github.com/IceWhaleTech/CasaOS) 一套简洁易用、设计雅致的开源个人云系统

## 文件与同步

- [kkFileView](https://github.com/kekingcn/kkFileView) 可自托管的在线文件预览服务，支持 Office、PDF、图片、音视频、压缩包与 CAD 等格式，提供 REST API 便于业务系统集成
- [alist](https://github.com/AlistGo/alist) 一个支持多存储的文件列表/WebDAV程序，使用 Gin 和 Solidjs
- [OpenList](https://github.com/OpenListTeam/OpenList) 开源的网盘管理神器
- [syncthing](https://github.com/syncthing/syncthing) 开源持续文件同步工具
- [ezshare](https://github.com/mifi/ezshare) 可在局域网内轻松共享文件、文件夹与剪贴板 —— 功能类似谷歌云盘，但无需联网
- [FileCodeBox](https://github.com/vastsa/FileCodeBox) 文件快递柜-匿名口令分享文本，文件，像拿快递一样取文件
- [croc](https://github.com/schollz/croc) 可以轻松且安全地将文件从一台计算机传输到另一台计算机上
- [filestash](https://github.com/mickael-kerjean/filestash) 文件管理平台 / 通用数据访问层（不依赖 FUSE）

## 协作

### 沟通与社区

- [WechatOnCloud](https://github.com/Gloridust/WechatOnCloud) 在自己的 NAS / 服务器上运行「服务端微信」，多端浏览器共享同一个微信会话
- [mattermost](https://github.com/mattermost/mattermost) Mattermost 是一个开源平台，在整个软件开发生命周期中提供安全协作
- [discourse](https://github.com/discourse/discourse) 论坛系统

### 笔记与文档

- [codimd](https://github.com/hackmdio/codimd) 全平台实时协作 Markdown 笔记工具
- [joplin](https://github.com/laurent22/joplin) 一款注重隐私的笔记应用，支持多端同步

### 项目与日程

- [plane](https://github.com/makeplane/plane) 现代化项目管理平台，可用于管理任务、迭代周期、文档和问题分类处理
- [cal.diy](https://github.com/calcom/cal.diy) 让所有人都能触手可及的日程规划基础设施

### Git 服务

- [walgit](https://github.com/tobi/walgit) 基于 S3 或 GCS 对象存储的无状态 Git 服务，支持 Smart HTTP、Git LFS、Web UI 与 API
- [gitea](https://github.com/go-gitea/gitea) 代码托管
- [soft-serve](https://github.com/charmbracelet/soft-serve) 功能强大、可自建部署的命令行 Git 服务器
- [gogs](https://github.com/gogs/gogs) 轻松搭建专属 Git 服务

## 设计与创作

- [Doory](https://github.com/shaongitbd/doory) 可自托管的浏览器设计编辑器与 Canva 替代工具，用于制作海报、社媒图片和幻灯片，支持模板、图层、动画、实时协作及图片、PDF、视频与 GIF 导出，并提供 MCP 接口

## 媒体与相册

- [songloft](https://github.com/songloft-org/songloft) 面向个人用户的自托管音乐服务器
- [stremio-web](https://github.com/Stremio/stremio-web) Stremio 官方 Web UI，一站式视频娱乐媒体中心，支持插件、同步、投屏和 PWA 安装
- [melody](https://github.com/foamzou/melody) 个人音乐云盘
- [PeerTube](https://github.com/Chocobozzz/PeerTube) 采用 ActivityPub 联邦协议、可在浏览器内直接通过 P2P 点对点 传输的视频流媒体平台
- [immich](https://github.com/immich-app/immich) 高性能自托管照片与视频管理解决方案
- [photoprism](https://github.com/photoprism/photoprism) 面向去中心化网络的人工智能照片应用
- [frigate](https://github.com/blakeblackshear/frigate) 支持 IP 摄像头实时本地目标检测的网络视频录像机（NVR）

## 网站服务

### 内部工具与低代码

- [Appsmith](https://github.com/appsmithorg/appsmith) 开源低代码应用平台，用于构建管理后台、内部工具与数据看板，可连接数据库和 API，支持云托管及 Docker、Kubernetes 自托管
- [Budibase](https://github.com/Budibase/budibase) 开源业务运营平台，整合内部应用、自动化工作流与 AI 智能体，可连接数据库、模型和业务系统，支持云托管及 Docker、Kubernetes 自托管
- [Windmill](https://github.com/windmill-labs/windmill) 可自托管的开发者平台，将 Python、TypeScript、Go、Bash 等脚本转为 API、后台任务、工作流与内部应用，支持自动生成界面和低代码应用构建

### 短链接

- [chhoto-url](https://github.com/SinTan1729/chhoto-url) 短链接工具
- [YOURLS](https://github.com/YOURLS/YOURLS) 短链接工具(PHP)
- [shlink](https://github.com/shlinkio/shlink) 短链接工具(PHP)
- [dub](https://github.com/dubinc/dub) 短链接生成、转化追踪以及联盟营销项目管理
- [kutt](https://github.com/thedevs-network/kutt) 短链接工具

### 内容发布

- [postiz-app](https://github.com/gitroomhq/postiz-app) 自托管的社媒内容排期与发布平台，支持多平台分发和自动化工作流
- [Ghost](https://github.com/TryGhost/Ghost) 为现代出版、会员体系、订阅服务与新闻通讯提供**自主技术**。
- [tinacms](http://github.com/tinacms/tinacms) 一款完全开源的无头 CMS，支持 Markdown 与可视化编辑。
- [emdash](https://github.com/emdash-cms/emdash) EmDash 是一款基于 Astro 构建的全栈 TypeScript 内容管理系统，堪称 WordPress 的理念继任者。

### 评论

- [waline](https://github.com/walinejs/waline) 💬 简洁安全的评论系统

### API 与集成

- [WAHA](https://github.com/devlikeapro/waha) 可自托管的 WhatsApp HTTP API，支持 Docker 部署、消息收发、Webhook 与会话管理
- [evolution-api](https://github.com/EvolutionAPI/evolution-api) Evolution API 是一款开源的 WhatsApp 集成 API

### 表单与票据

- [heyform](https://github.com/heyform/heyform) 开源表单生成器
- [invoify](https://github.com/al1abb/invoify) 一款基于 Next.js、TypeScript 和 Shadcn 开发的发票生成器应用

## 监控与统计

- [changedetection.io](https://github.com/dgtlmoon/changedetection.io) 一款出色且易用的工具，支持网站变动检测、网页监控与变更提醒。可用于追踪内容更新、商品降价、补货通知以及网站篡改监测，基础功能完全免费，也可选择我们的云端订阅服务

## 业务系统

- [Ever Gauzy](https://github.com/ever-co/ever-gauzy) 可自托管的企业管理平台，集成 ERP、CRM、人力资源、招聘与项目管理，支持员工工时追踪、财务与发票管理

### 客服

- [Ydisks Xianyu Helper](https://github.com/Christ9038/Ydisks-Xianyu-Helper) 基于 Go 与 React 的可自托管闲鱼多账号管理系统，整合消息与订单管理、卡密库存、自动发货、关键词及 AI 回复和异常通知，支持 Docker 部署与桌面安装包
- [xianyu-auto-reply](https://github.com/zhinianboke/xianyu-auto-reply) 闲鱼自动回复管理系统是一个基于 Python + FastAPI 开发的自动化客服系统，专为闲鱼平台设计

## 生活管理

- [Actual Budget](https://github.com/actualbudget/actual) 本地优先的开源个人财务与预算管理应用，采用信封预算法，支持跨设备同步、Docker 自托管及 Windows、macOS、Linux 本地应用
- [openGym](https://github.com/arvids-unavailable/openGym) 自托管的健身与体重追踪应用，支持周计划、训练记录、PWA 与 Docker 部署

## 下载与归档

- [kage](https://github.com/tamnd/kage) 完整复刻任意网站以供离线浏览，并移除其中所有 JavaScript 代码

## 办公与设备

- [tuya-local](https://github.com/make-all/tuya-local) Home Assistant 的涂鸦设备本地集成，通过局域网直接控制兼容设备，支持 HACS 安装、图形化配置及云端辅助获取设备连接信息
- [Reactive Resume](https://github.com/reactive-resume/reactive-resume) 可自托管的开源简历与求职信编辑器，支持模板定制、多格式导出、公开链接分享与求职申请管理
- [cups-web](https://github.com/hanxi/cups-web) 把家用 USB 打印机变成随时可访问的网络打印服务
