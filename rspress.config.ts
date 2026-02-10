import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  base: '/',
  root: path.join(__dirname, 'docs'),
  title: '阿康酱',
  description: '阿康酱',
  lang: 'zh',
  icon: '/rspress-icon.png',
  logo: '/rspress-icon.png',
  logoHref: '/',
  logoText: '阿康酱',
  route: {
    cleanUrls: true,
  },
  llms: true,
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/wangxingkang/xingkang.wang',
      },
    ],
    editLink: {
      docRepoBaseUrl:
        'https://github.com/wangxingkang/xingkang.wang/tree/main/docs',
    },
    enableContentAnimation: true,
    enableScrollToTop: true,
  },
});
