# Nginx

## 相关资料

- [官网](https://nginx.org)
- 最新稳定版本: [1.30.0]()，时间截止于: 2026.05.09

## 配置

### 单页面最佳配置

```md
http {
  charset utf-8;
  include mime.types;
  default_type application/octet-stream;

  # 关闭版本号显示
  server_tokens off;

  # --- Gzip 配置 ---
  gzip_static on;
  gzip off;
  gzip_vary on;

  # --- Brotli 配置 ---
  brotli_static on;
  brotli off;
  brotli_vary on;

  server {
    listen 80 default_server;
    server_name localhost;

    root /opt/app;
    index index.html;

    location / {
      try_files $uri $uri/ /index.html;
    }

    # html 不缓存
    location ~* \.(html|htm)$ {
      add_header Cache-Control "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0";
      expires -1;
    }

    # 静态资源强缓存
    location ~* \.(?:css|js|jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm|htc|ttf|otf|woff|woff2)$ {
      expires 1y;
      add_header Cache-Control "public, immutable";
      access_log off;
    }

    # 禁止访问隐藏文件
    location ~ /\. {
      deny all;
    }
  }
}
```
