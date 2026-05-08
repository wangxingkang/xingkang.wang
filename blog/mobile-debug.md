# 移动端调试

## VConsole

### 使用 npm

1. 安装依赖


```sh [npm]
npm install vconsole
```

```sh [yarn]
yarn add vconsole
```

```sh [pnpm]
pnpm add vconsole
```

```sh [bun]
bun add vconsole
```

```sh [deno]
deno add npm:vconsole
```

2. 引入

在需要调试的页面引入 VConsole

```js
import VConsole from 'vconsole';

new VConsole();
```

### 使用 CDN

```html
<script src="https://unpkg.com/vconsole@latest/dist/vconsole.min.js"></script>
<script>
  new window.VConsole();
</script>
```

## Chrome Inspect

请查看 [使用 chrome devTools 调试手机页面，看这篇就够了](https://juejin.cn/post/7478495592185643018)
