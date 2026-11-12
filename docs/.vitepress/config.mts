import { defineConfig } from 'vitepress'

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'vpress',
  description: '一个 VitePress 模板演示站点：性能遥遥领先，整活含量超标',
  lastUpdated: true,

  // 文档里会引用 http://localhost:5173 这类本地开发地址，
  // 部署环境下它们必然不存在，跳过对 localhost 链接的死链校验
  ignoreDeadLinks: 'localhostLinks',

  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],

  themeConfig: {
    // https://vitepress.dev/zh/reference/default-theme-config
    siteTitle: 'vpress',
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '新手村', link: '/getting-started' },
      { text: '示例', link: '/markdown-examples' },
      { text: '梗典', link: '/memes' }
    ],

    sidebar: [
      {
        text: '新手村',
        items: [
          { text: '新手村简介', link: '/getting-started' },
          { text: 'Markdown 秘籍', link: '/markdown-examples' },
          { text: '组件梭哈现场', link: '/api-examples' }
        ]
      },
      {
        text: '梗文化',
        items: [{ text: '赛博梗典', link: '/memes' }]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索' },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '清空关键词',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    },

    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最后更新于' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    footer: {
      message: '基于 MIT 许可发布，白嫖请随意，用得开心记得常回来',
      copyright: 'Copyright © 2026 vpress'
    }
  }
})
