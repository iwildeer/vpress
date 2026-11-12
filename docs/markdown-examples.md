# Markdown 扩展示例

VitePress 在原生 Markdown 之上点了一整套扩展技能树，本页挨个演示——示例文案本身就是梗，干货与活梗一锅炖，科技与狠活全都有。

## 语法高亮

VitePress 使用 [Shiki](https://github.com/shikijs/shiki) 做代码高亮，还支持行高亮——被高亮的这行就是本页 C 位，聚光灯已就位：

```ts{4}
export default {
  data() {
    return {
      msg: '这行被高亮的代码，C 位出道'
    }
  }
}
```

### 行高亮进阶：`[!code]` 注释流

不想数行号？在代码里直接加注释标记，指哪打哪：

```ts
export default {
  highlight: '这行直接点亮，显眼包行为', // [!code highlight]
  warning: '红温预警：这行是黄色警告', // [!code warning]
  danger: '删库跑路级警报：这行是红色危险', // [!code danger]
  focus: '这行被聚光，其余行全部虚化', // [!code focus]
}
```

想显行号也有排面——语言标注后面挂个 `:line-numbers`，整整齐齐，强迫症狂喜：

```ts:line-numbers
const answer = 42 // 一眼丁真，鉴定为标准答案
```

### 差异对比（复盘神器）

```diff
- 去年：手搓一个静态站，从入门到放弃
+ 今年：VitePress 一键起飞，轻舟已过万重山
```

## 代码块中的 Vue 组件

```vue
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>
```

## 自定义容器

::: info
这是一条信息。听君一席话，如听一席话——但语法是真的好用，信息就该住 info 里。
:::

::: tip
摸鱼小技巧：保存即热更是秒级的，改一个字就能看到效果，非常适合营造「我在认真干活」的氛围感。
:::

::: warning
前方红温预警：在 Markdown 里直接写带 `@click` 的原生 HTML 会报错，叠甲方案见 [Runtime API 示例](/api-examples)。
:::

::: danger
删库跑路高发路段：`rm -rf` 之前请深呼吸三次，并确认备份真的能恢复。跑路一时爽，重构火葬场。
:::

::: details 偷感很重的折叠内容
点都点了，就水灵灵地告诉你：这是一段折叠的内容。长文档的救命稻草，专治「这页也太长了吧」。
:::

## 表格

刚入职被黑话创到了？自带人话翻译：

| 互联网黑话 | 人话翻译 | 典型语境         |
| ---------- | -------- | ---------------- |
| 赋能       | 帮忙     | 大厂周报文学     |
| 抓手       | 办法     | 大厂周报文学     |
| 闭环       | 做完收尾 | 年终述职现场     |
| 颗粒度     | 细节     | 「对齐一下」现场 |
| 沉淀       | 存下来   | 「复盘一下」现场 |

表格排版整整齐齐，列多列少都能对齐颗粒度。

## 代码分组

::: code-group

```bash [pnpm]
pnpm dev
```

```bash [npm]
npm run dev
```

```bash [yarn]
yarn dev
```

:::

pnpm 是当前版本答案，遥遥领先；另外两位参赛选手已进入考古区，仅供怀旧。

## Emoji 速通

冒号包住 shortcode，表情直接上桌：

:tada: 站点上线 :100: 干货含量超标 :rocket: 一键起飞 :coffee: 摸鱼搭子认证 :cat:

全量 shortcode 见 [markdown-it-emoji](https://github.com/markdown-it/markdown-it-emoji)，表情包自由，就这么水灵灵地实现了。

## 素材库直连：Import Code Snippets

代码块不想 CV 一遍？`<<< @/snippets/文件名` 直接从仓库导入真实文件——文件一改，文档跟着变，这才是真·双向奔赴。下面这段就是从 `snippets/zhenxiang.ts` 现场导入的：

<<< @/snippets/zhenxiang.ts

## 更多

完整语法列表见 [VitePress Markdown 扩展文档](https://vitepress.dev/zh/guide/using-vue)。学废了就翻下一篇，没学废就再看一遍——学东西嘛，不寒碜。
