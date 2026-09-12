# 运维

收录数据库、部署、网络、终端和可观测性等基础设施与运维工具。面向个人或团队业务的应用见[自托管](/awesome/self-hosted.md)。

## 部署

- [coolify](https://github.com/coollabsio/coolify) 一款开源、可自托管的 PaaS 平台，可作为 Vercel、Heroku 和 Netlify 的替代方案，让你轻松在自己的服务器上部署静态站点、数据库、全栈应用以及 280+ 个一键式服务
- [dokploy](https://github.com/dokploy/dokploy) Vercel、Netlify 和 Heroku 的开源替代方案
- [1Panel](https://github.com/1Panel-dev/1Panel) VPS 服务器管理面板
- [sst](https://github.com/anomalyco/sst) 依托自有基础设施搭建全栈应用

## 虚拟化与容器

### 虚拟机与沙箱

- [firecracker](https://github.com/firecracker-microvm/firecracker) 面向无服务器计算的安全高速微虚拟机
- [muvm](https://github.com/AsahiLinux/muvm) 基于 libkrun 在 microVM 中运行本机程序，支持图形应用、GPU 加速和跨架构运行
- [mxc](https://github.com/microsoft/mxc) 沙箱执行容器
- [clone](https://github.com/unixshells/clone) 用于多租户开发环境与无服务器架构的轻量级虚拟机监控器

### 容器与编排

- [colima](https://github.com/abiosoft/colima) 可在 macOS（以及 Linux）系统上极简部署使用的容器运行时
- [rootlesskit](https://github.com/rootless-containers/rootlesskit) 基于用户命名空间的 Linux 原生伪根工具
- [talos](https://github.com/siderolabs/talos) 一款专为 Kubernetes 打造的现代 Linux 发行版
- [dpanel](https://github.com/donknap/dpanel) 轻量化 docker 可视化管理面板
- [watchtower](https://github.com/nicholas-fedor/watchtower) 自动实现 Docker 容器镜像更新
- [oras](https://github.com/oras-project/oras) OCI 容器镜像仓库客户端——用于管理制品、镜像、软件包等内容
- [karmada](https://github.com/karmada-io/karmada) 开放、多云、多集群 Kubernetes 编排
- [containerd](https://github.com/containerd/containerd) 一个开源且可靠的容器运行时

## 数据库与搜索

### 关系与分析数据库

- [turso](https://github.com/tursodatabase/turso) Turso 是一款进程内 SQL 数据库，兼容 SQLite
- [DuckDB](https://github.com/duckdb/duckdb) 高性能嵌入式分析型 SQL 数据库
- [ClickHouse](https://github.com/ClickHouse/ClickHouse) 实时分析数据库管理系统
- [rqlite](https://github.com/rqlite/rqlite) 基于 SQLite 打造的轻量容错型数据库
- [dolt](https://github.com/dolthub/dolt) Dolt 是一款 SQL 数据库，你可以像操作 Git 仓库一样对它执行复刻、克隆、创建分支、合并、推送与拉取操作

### 缓存

- [redis](https://github.com/redis/redis) 最快、功能最丰富的缓存、数据结构服务器以及文档和向量查询引擎

### 接口与同步

- [postgrest](https://github.com/PostgREST/postgrest) 适用于所有 Postgres 数据库的 REST 接口

### 向量数据库

- [zvec](https://github.com/alibaba/zvec) 轻量、极速、进程内矢量数据库
- [qdrant](https://github.com/qdrant/qdrant)
- [chroma](https://github.com/chroma-core/chroma)
- [lancedb](https://github.com/lancedb/lancedb)
- [weaviate](https://github.com/weaviate/weaviate)
- [milvus](https://github.com/milvus-io/milvus)

### 搜索引擎

- [OramaCore](https://github.com/oramasearch/oramacore) 集成全文搜索、向量数据库、LLM 接口与智能体运行时的 AI 搜索引擎
- [meilisearch](https://github.com/meilisearch/meilisearch) 一款极速搜索引擎 API，为你的网站和应用带来基于人工智能的混合搜索能力
- [elasticsearch](https://github.com/elastic/elasticsearch) 免费且开源、分布式、RESTful 搜索引擎
  - [kibana](https://github.com/elastic/kibana) 用于查询、分析、可视化和管理 Elasticsearch 中存储数据的开源界面

### 数据库客户端

- [dbx](https://github.com/t8y2/dbx) 轻量级跨平台数据库客户端、数据库管理工具
- [dbeaver](https://github.com/dbeaver/dbeaver) 免费通用型数据库工具与 SQL 客户端
- [VeloxDB](https://github.com/veloxbase/veloxdb) 支持 PostgreSQL、MySQL、SQLite、DuckDB、MongoDB 与 Redis 的跨平台本地数据库客户端
- [whodb](https://github.com/clidey/whodb) 数据访问与运营智能一体化平台

## 存储与文件服务

- [ZeroFS](https://github.com/Barre/ZeroFS) 将 S3 作为你的主存储
- [rustfs](https://github.com/rustfs/rustfs) 高性能分布式对象存储系统
- [seaweedfs](https://github.com/seaweedfs/seaweedfs) 分布式存储系统
- [minio](https://github.com/minio/minio) 对象存储系统

## 备份

- [databasus](https://github.com/databasus/databasus) 数据库备份系统
- [rsync](https://github.com/RsyncProject/rsync) 实现快速增量文件传输

## 消息队列

- [nats](https://github.com/nats-io/nats-server) 云原生和边缘原生的消息传递系统

## 服务治理

- [nacos](https://github.com/alibaba/nacos) 一款易用的动态服务发现、配置管理与服务治理平台，专为构建 AI 云原生应用而设计
- [istio](https://github.com/istio/istio) 连接、保护、管控与观测服务

## 制品仓库

- [verdaccio](https://www.verdaccio.org) 简单易用，轻量级的npm私服解决方案

## 网络

### 诊断与测试

- [trippy](https://github.com/fujiapple852/trippy) 网络诊断工具
- [mangofetch](https://github.com/julesklord/mangofetch) tui/cli 工具，用于抓取网络上的所有资源
- [NetSonar](https://github.com/sn4k3/NetSonar) 网络 ping 测试及其他实用工具
- [port-killer](https://github.com/productdevbook/port-killer) 端口管理工具
- [ipcheck](https://github.com/stormzhang/ipcheck) 网络环境诊断工具，一键检测 IP/DNS/代理/风控/时区，确保 AI 工具流畅运行
- [sonar](https://github.com/raskrebs/sonar) 用于查看和管理本地端口监听服务的命令行工具

### 组网与 VPN

- [EasyTier](https://github.com/EasyTier/EasyTier) 一款简洁、去中心化的网状 VPN，内置 WireGuard 协议支持
- [tailcat](https://github.com/tailscale/tailcat) 基于 Tailscale 数据平面的点对点加密网络工具，无需控制面或账号
- [netbird](https://github.com/netbirdio/netbird) 依托 WireGuard® 搭建安全的叠加网络，接入各类设备，支持单点登录、多因素认证以及精细化访问控制
- [tailscale](https://github.com/tailscale/tailscale) 使用 WireGuard 和双重认证（2FA）最简单、最安全的方式
- [headscale](https://github.com/juanfont/headscale) 一款开源、可自建部署的 Tailscale 控制服务器实现版本

### 域名与 DNS

- [numa](https://github.com/razvandimescu/numa) 用 Rust 编写的轻量便携 DNS 解析器 支持 .numa 本地域名、广告拦截、开发者自定义域名覆盖
- [hosts](https://github.com/ineo6/hosts) GitHub最新hosts。解决GitHub图片无法显示，加速GitHub网页浏览
- [SwitchHosts](https://github.com/oldj/SwitchHosts) 一个管理 hosts 文件的应用
- [FreeDomain](https://github.com/DigitalPlatDev/FreeDomain) DigitalPlat 免费域名：面向所有人的免费域名服务
- [gasmask](https://github.com/2ndalpha/gasmask) MacOS 的 hosts 文件管理器
- [pi-hole](https://github.com/pi-hole/pi-hole) 互联网广告的 “黑洞” 拦截器
- [AdGuardHome](https://github.com/AdguardTeam/AdGuardHome) 面向全家设备的开源 DNS 广告与跟踪拦截服务，支持自托管和网络级过滤
- [dnsmasq](https://github.com/imp/dnsmasq) 上游 dnsmasq 仓库镜像，提供轻量级 DNS、DHCP、路由器通告和网络启动服务
- [DnsServer](https://github.com/TechnitiumSoftware/DnsServer)

### 代理与隧道

- [rathole](https://github.com/rathole-org/rathole) 一款基于 Rust 编写、用于内网穿透的轻量级高性能反向代理工具，可作为 frp 和 ngrok 的替代方案
- [clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev)
- [clash-party](https://github.com/mihomo-party-org/clash-party) 科学上网
- [MySelf](https://github.com/jnlaoshu/MySelf) 汇集 Egern、Stash、Surge、Loon、Quantumult X、Shadowrocket 等代理客户端的自用配置与脚本，仅供参考
- [wloc](https://github.com/Yu9191/wloc) 修改 Apple 网络定位（gs-loc）返回坐标 · 支持 Surge / Quantumult X / Loon / Stash · 快捷指令一键设置/恢复定位
- [frpc-desktop](https://github.com/luckjiawei/frpc-desktop) frp跨平台桌面客户端，可视化配置，轻松实现内网穿透！ 支持所有frp版本
- [3x-ui](https://github.com/MHSanaei/3x-ui) 支持多协议和多用户的 Xray 管理面板，具备到期天数、流量及 IP 限制功能（支持 Vmess、Vless、Trojan、Shadowsocks、Wireguard、Hysteria、隧道、混合模式、HTTP、TUN 模式）
- [Sub-Store](https://github.com/sub-store-org/Sub-Store) 面向多种代理客户端的订阅管理、格式转换与聚合服务
- [untun](https://github.com/unjs/untun) 借助 Cloudflare 快速隧道，将本地 HTTP/HTTPS 服务暴露至公网
- [pangolin](https://github.com/fosrl/pangolin) 支持身份识别的 VPN 与代理服务，可随时随地远程访问各类资源

### Web 服务器

- [ngx\_brotli](https://github.com/google/ngx_brotli) 用于 Brotli 压缩的 NGINX 模块

## 证书

- [acme.sh](https://github.com/acmesh-official/acme.sh) 纯 Unix Shell 编写的 ACME 客户端，用于自动签发、续期和安装 SSL / TLS 证书
- [certbot](https://github.com/certbot/certbot) EFF 出品的 ACME 客户端，用于从 Let's Encrypt 获取证书并自动为服务器启用 HTTPS
- [certimate](https://github.com/certimate-go/certimate) 完全开源免费的自托管 SSL 证书 ACME 工具，申请、部署、续期、监控全流程自动化可视化，支持各大主流云厂商
- [certd](https://github.com/certd/certd) 开源SSL证书管理工具

## 监控与可观测性

### 网络

- [sniffnet](https://github.com/GyulyVGC/sniffnet) 轻松监控你的网络流量
- [rustnet](https://github.com/domcyrus/rustnet) 面向终端的进程级网络监控工具：实时呈现 TCP、UDP、QUIC 连接，自带深度包检测，默认沙箱隔离运行

### 指标与链路

- [prometheus](https://github.com/prometheus/prometheus) 开源系统监控
- [netdata](https://github.com/netdata/netdata) 实时基础设施监控平台
- [grafana](https://github.com/grafana/grafana) 开放、可组合的可观测性与数据可视化平台
- [pinpoint](https://github.com/pinpoint-apm/pinpoint) APM（应用性能管理）工具，适用于大规模分布式系统
- [signoz](https://github.com/SigNoz/signoz) 基于 OpenTelemetry 的开源可观测性平台，在单一应用内集成日志、链路追踪与指标监控能力
- [otel-desktop-viewer](https://github.com/CtrlSpice/otel-desktop-viewer) 本地探索 OpenTelemetry traces、metrics 和 logs 的桌面查看器，内置 Collector、DuckDB 与 Svelte Web UI

### 网站与服务

- [umami](https://github.com/umami-software/umami) Umami 是一个现代、注重隐私的分析平台，是 Google Analytics、Mixpanel 和 Amplitude 的开源替代方案
- [ponghub](https://github.com/WCY-dt/ponghub) 一个开源的服务监控平台，通过 GitHub Actions 去监控服务是否正常在线
- [gatus](https://github.com/TwiN/gatus) 面向开发者的自动化状态监控页面，支持告警与事件管理

### 进程与日志

- [glances](https://github.com/nicolargo/glances) 一款系统监控工具，可替代 top、htop
- [witr](https://github.com/pranshuparmar/witr) 这个进程到底为什么在跑
- [logdy-core](https://github.com/logdyhq/logdy-core) 带 Web 界面的实时日志查看器，浏览器网页版实时日志尾随
- [gonzo](https://github.com/control-theory/gonzo) 基于 Go 语言开发的 TUI 日志分析工具

## 终端

### 浏览器与远程访问

- [terminal-browser](https://github.com/zenbu-labs/terminal-browser) 在终端内运行的 Chromium 浏览器，支持 SSH 代理与供智能体交互的 CLI
- [wetty](https://github.com/butlerx/wetty) 基于 HTTP/HTTPS 在浏览器中运行的终端
- [@novnc/novnc](https://github.com/novnc/noVNC) VNC 客户端 Web 应用程序
- [webssh2](https://github.com/billchurch/webssh2) 基于 ssh2、socket.io、xterm.js 与 Express 搭建的网页版 SSH 客户端

### 终端模拟器与客户端

- [ish](https://github.com/ish-app/ish) iOS 上的 Linux Shell
- [wezterm](https://github.com/wezterm/wezterm)
- [alacritty](https://github.com/alacritty/alacritty)
- [rio](https://github.com/raphamorim/rio) 一款硬件 GPU 加速的终端模拟器，可在桌面端与浏览器中运行
- [ratty](https://github.com/orhun/ratty) 一款GPU 硬件渲染、支持内嵌 3D 图形的终端模拟器
- [meatshell](https://github.com/jeff141/meatshell) 一个轻量级、低内存占用的 SSH / 终端客户端
- [kitty](https://github.com/kovidgoyal/kitty)
- [ghostty](https://github.com/ghostty-org/ghostty) Ghostty 是一款快速、功能丰富、跨平台的终端模拟器，采用平台原生 UI 与 GPU 加速
- [terax-ai](https://github.com/crynta/terax-ai) 轻量版（仅 7MB）AI 终端模拟器（ADE），基于 Rust、Tauri 与 React 构建

### 会话与 Shell 增强

- [ohmyzsh](https://github.com/ohmyzsh/ohmyzsh)
- [zsh](https://github.com/zsh-users/zsh)
  - [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions) Zsh 的 Fish 风格自动建议
  - [zsh-completions](https://github.com/zsh-users/zsh-completions)
  - [fast-syntax-highlighting](https://github.com/zdharma-continuum/fast-syntax-highlighting)
- [zellij](https://github.com/zellij-org/zellij) 自带完备工具集的终端工作区
- [rmux](https://github.com/Helvesec/rmux) 一款通用型 Rust 多路复用工具，附带类型安全 SDK；可通过代码驱动任意命令行 / 终端界面应用，原生支持 Linux、macOS 与 Windows 系统
- [starship](https://github.com/starship/starship) 一款极简、极速、可高度自定义的跨 Shell 命令行提示符工具
- [atuin](https://github.com/atuinsh/atuin) 让你的终端 Shell 焕发奇效
- [zoxide](https://github.com/ajeetdsouza/zoxide) 更智能的切换目录命令，兼容主流终端

### 文件与数据处理

- [yazi](https://github.com/sxyazi/yazi) 采用 Rust 编写、基于异步 IO、速度极快的终端文件管理器
- [bat](https://github.com/sharkdp/bat) 一款功能更强大的 cat (1) 命令行工具
- [fd](https://github.com/sharkdp/fd) 一款简洁、快速、易用的 `find` 命令替代工具
- [eza](https://github.com/eza-community/eza) 现代化的 `ls` 替代品，支持彩色输出、图标、Git 状态、扩展属性和树形目录显示
- [lsd](https://github.com/lsd-rs/lsd) 用 Rust 重写并增强的 `ls` 命令，支持彩色输出、图标、树形视图和更多格式化选项
- [hexyl](https://github.com/sharkdp/hexyl) 命令行十六进制查看器
- [jaq](https://github.com/01mf02/jaq) 一款复刻 jq 的工具，主打精准、高速与简洁
- [leaf](https://github.com/RivoLink/leaf) 终端 Markdown 预览工具，拥有类图形界面交互体验
- [superfile](https://github.com/yorukot/superfile) 一款界面精致、设计前卫的终端文件管理器

### 录制与实用工具

- [t-rec-rs](https://github.com/sassman/t-rec-rs) 一款用 Rust 编写、速度极快的终端录制工具，可生成适用于网页的 GIF 动画
- [weathr](https://github.com/Veirt/weathr) 一款**带ASCII动画**的终端天气应用
- [asciinema](https://github.com/asciinema/asciinema) 终端会话录制器、推流器与播放器 📹
- [freeze](https://github.com/charmbracelet/freeze) 生成代码与终端输出的图像
- [vhs](https://github.com/charmbracelet/vhs) 命令行版本地视频录制工具
- [gum](https://github.com/charmbracelet/gum) 打造精致 Shell 脚本的工具
- [glow](https://github.com/charmbracelet/glow) 在命令行中精美渲染 Markdown 文档

## 资源

- [free-for-dev](https://github.com/ripienaar/free-for-dev) 一份包含免费套餐的SaaS、PaaS、IaaS服务清单，面向运维与基础设施开发人员
