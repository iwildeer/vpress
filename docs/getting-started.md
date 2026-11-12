# 快速开始

> 三分钟热度？够了。VitePress 的目标就一个：用最少的配置，把 Markdown 水灵灵地变成高性能静态站点——省下来的时间还给你摸鱼，哦不，思考人生。

## 安装

前置要求：[Node.js](https://nodejs.org/) 18 及以上、包管理器 [pnpm](https://pnpm.io/zh/)。版本低了先升级——别硬控自己，硬控是梗，不是开发策略。

```bash
# 启用 corepack（已启用可跳过）——给 pnpm 上个编制，版本全听 package.json 指挥
corepack enable

# 安装依赖——node_modules 搬家现场，包的
pnpm install

# 启动开发服务器——5173 号车间开工
pnpm dev
```

### 关于「只准用 pnpm」这件事

`package.json` 里 `packageManager` 字段已经把名分定死，`preinstall` 钩子里的 `only-allow pnpm` 就是门禁大爷：npm、yarn 敢越界装依赖，直接送客，不留情面。

听劝，用 pnpm——这不是门第之见，是锁版本的工程洁癖。而且 pnpm 用硬链接省硬盘，`node_modules` 不再一式百份，硬盘看了都感动。依赖装得整整齐齐，同事 clone 下来一键起飞，这才叫闭环。

开发服务器默认跑在 <http://localhost:5173>，改 Markdown 保存即热更——你一保存它就交货，这默契堪比多年老搭子，主打一个双向奔赴。

## 构建与预览

```bash
# 构建产物到 docs/.vitepress/dist
pnpm build

# 本地预览构建产物
pnpm preview
```

构建出来是纯静态文件，往任意静态托管平台一扔就能跑：白嫖 CDN 级性能，前端圈降本增效天花板。上线前记得先 `preview` 云验收一遍，别把开盲盒的机会留给甲方。

## 目录结构

```text
.
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts        # 站点配置——顶层设计，黑话浓度最高处
│   │   ├── components/       # 全局组件——整活零件库
│   │   └── theme/            # 自定义主题——整活主战场，手搓组件往这放
│   ├── index.md              # 首页——门面担当，负责第一眼心动
│   ├── getting-started.md    # 就是本页，你正在看的这篇
│   ├── markdown-examples.md  # Markdown 扩展武功秘籍
│   ├── api-examples.md       # Vue 组件梭哈现场
│   ├── memes.md              # 赛博梗典——梗浓度全站最高
│   └── snippets/             # 被文档导入的代码素材库
└── package.json              # 名分与门禁所在地
```

## 听劝避坑指南

- **装依赖报错？** 先 `corepack enable` 再重装；还不行就删掉 `node_modules` 重来。重启能解决 90% 的问题，剩下 10% 再重启一次——赛博玄学，但确实灵。
- **5173 端口被占？** 不用管，Vite 自动换下一个端口，天塌了有它顶着。
- **改动没生效？** 先确认文件保存了——Ctrl/Cmd + S 是本世代最强快捷键，没有之一。
- **「在我机器上是好的」？** 赛博玄学保留节目。提问题时请贴完整报错，别让队友 CPU 干烧。

## 收工清单

- [x] `corepack enable`，给 pnpm 上编制
- [x] `pnpm install`，搬家完成
- [x] `pnpm dev`，5173 车间开工
- [ ] 改一页 Markdown，亲测秒级热更（就现在，去改）
- [ ] `pnpm build` 一把梭，收获静态产物，原地起飞

（同样是真渲染的任务列表，勾完一个少一个，功德 +1）

## 下一步

- 阅读 [Markdown 示例](/markdown-examples)：扩展语法一次盘明白
- 阅读 [Runtime API 示例](/api-examples)：在页面里梭哈 Vue 组件
- 逛逛 [赛博梗典](/memes)：本站梗含量检测报告与黑话词典
- 参考 [官方文档](https://vitepress.dev/zh/)：遇事不决查官方，比重启好用

别光码住收藏——收藏从未停止，学习从未开始。今天就上手，眼会手也要会。
