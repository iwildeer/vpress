---
title: Runtime API 示例
---

# Runtime API 示例

VitePress 提供了一批运行时 API，可以直接在 Markdown 里搞数据驱动页面。本页用一个本地计数器演示 `<script setup>` 的用法。顺带辟个谣：前端没死，只是暂时转行写文档了。

## 计数器组件

::: warning 注意（叠甲环节）
不要在 Markdown 里直接写带 `@click` 等指令的多行原生 HTML——markdown-it 无法把它识别为完整的 HTML 块，Vue 编译会直接判你一个 `Invalid end tag`，当场红温。交互逻辑请抽成 Vue 组件再引入，已老实，求放过。
:::

下面的按钮就是一个独立的 Vue 组件（源码位于 `.vitepress/components/Counter.vue`）：

<script setup>
import Counter from './.vitepress/components/Counter.vue'
import { useData } from 'vitepress'

const { page, frontmatter } = useData()
</script>

<Counter />

使用说明三连：

- 每点一次，赛博功德 +1，电子木鱼直呼内行
- 点满 50 次，自动解锁疯狂星期四——真没有，但欢迎 V 我 50
- 计数不落盘，刷新就归零，像极了成年人的快乐：短暂但免费

## 使用 VitePress 数据

`useData` 相当于给组件开了天眼：站点配置、页面元信息、frontmatter 全都拿得到：

```vue
<script setup>
import { useData } from 'vitepress'

// 开天眼：站点信息、页面信息、frontmatter 一把梭
const { site, page, frontmatter } = useData()
</script>

<template>
  <p>当前页面路径：{{ page.filePath }}</p>
  <p>站点标题：{{ site.title }}</p>
</template>
```

### 天眼实测（本页真实数据，非表演）

本页自己就在用它——下面两行不是写死的，是 `<script setup>` 里现场取的：

- 当前文件路径：{{ page.filePath }}
- frontmatter 里的 `title`：**{{ frontmatter.title }}**

数据驱动页面，主打一个尊嘟假嘟自己验。frontmatter 想写啥写啥，比周报好填多了。

### 主题模式也能盘：useDark

```vue
<script setup>
import { useDark } from 'vitepress/theme'

const isDark = useDark()
</script>

<template>
  <p>现在是{{ isDark ? '深夜浓人' : '白天淡人' }}模式</p>
</template>
```

白天淡人、深夜浓人，右上角主题按钮一键切换，情绪价值直接拉满。

## 说明

- Markdown 中可以直接写 `<script setup>`，组件放在 `.vitepress/components/` 下引入即可；CV 大法好，但要 CV 对路径
- 纯展示性的原生 HTML 可以直接写在 Markdown 里；含 Vue 指令（`@click`、`:href` 等）的必须走组件——别问，问就是上面那个报错教做人了
- 详见 [在 Markdown 中使用 Vue](https://vitepress.dev/zh/guide/using-vue)

写完这页，头发还在，组件已通——含金量还在上升。
