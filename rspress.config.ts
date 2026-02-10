import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  base: '/',
  root: path.join(__dirname, 'docs'),
  title: '阿康的个人站',
  description: '阿康的个人站',
  lang: 'zh',
  icon: '/rspress-icon.png',
  logoHref: 'https://xingkang.wang',
  logoText: '阿康的个人站',
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
