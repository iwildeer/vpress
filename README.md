# Vpress Demo

> 一个 VitePress 模板演示站点:性能遥遥领先,整活含量超标。干货与活梗一锅炖,主打一个松弛感建站。

基于 [VitePress](https://vitepress.dev/zh/) 的中文演示文档站——Markdown 十级学者直接开写,工程化的脏活累活 VitePress 全包。本仓库既是站点源码,也是一份「能跑的文档模板」:看完就能抄走,原地起自己的站。

## 特性一览

- 📝 **写作专注模式**——你负责输出,它负责兜底
- ⚡ **性能遥遥领先**——Vite 按需编译,首屏快如闪电
- 🛠️ **想怎么捏就怎么捏**——Vue 组件直接梭哈进 Markdown
- 🔍 **本地搜索白嫖到底**——不用后端、不用账号、不用充值
- 🌙 **深浅色双修**——i 人 e 人都给足情绪价值
- 🐟 **电子榨菜级文档**——每页短小精悍,通勤路上刷两页

## 环境要求

- [Node.js](https://nodejs.org/) 18 及以上
- [pnpm](https://pnpm.io/zh/)——本项目是 pnpm 门禁户,别的包管理器进不来

## 快速开始

```bash
# 启用 corepack(已启用可跳过),给 pnpm 上个编制
corepack enable

# 安装依赖——node_modules 搬家现场
pnpm install

# 启动开发服务器,默认 http://localhost:5173
pnpm dev
```

> [!WARNING]
> `package.json` 里 `preinstall` 钩子挂着 `only-allow pnpm`:npm、yarn 敢越界装依赖,门禁大爷直接送客。听劝,用 pnpm。

## 常用脚本

| 命令            | 作用                                     |
| --------------- | ---------------------------------------- |
| `pnpm dev`      | 启动开发服务器,保存即热更               |
| `pnpm build`    | 构建产物到 `docs/.vitepress/dist`        |
| `pnpm preview`  | 本地预览构建产物,上线前先云验收一遍     |

## 目录结构

```text
.
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts        # 站点配置——顶层设计,黑话浓度最高处
│   │   ├── components/       # 全局组件——整活零件库
│   │   └── theme/            # 自定义主题——整活主战场
│   ├── index.md              # 首页——门面担当
│   ├── getting-started.md    # 快速开始
│   ├── markdown-examples.md  # Markdown 扩展武功秘籍
│   ├── api-examples.md       # Vue 组件梭哈现场
│   ├── memes.md              # 赛博梗典——梗浓度全站最高
│   └── snippets/             # 被文档导入的代码素材库
└── package.json              # 名分与门禁所在地
```

## 部署

构建产物是纯静态文件,往任意静态托管平台一扔就能跑(Netlify、Vercel、GitHub Pages 等)。上线前记得先 `pnpm preview` 验收一遍,别把开盲盒的机会留给甲方。

## 相关链接

- [VitePress 官方文档](https://vitepress.dev/zh/)——遇事不决查官方
- [Vue.js 文档](https://cn.vuejs.org/)——写组件前的理论储备
- 站内入口:[快速开始](docs/getting-started.md) · [Markdown 示例](docs/markdown-examples.md) · [赛博梗典](docs/memes.md)

## 许可

[MIT](https://opensource.org/licenses/MIT)——白嫖请随意,用得开心记得常回来。

Copyright © 2026 Vpress Demo
