module.exports = {
  title: 'JonsonXu Blog',
  description: '由VuePress、语雀、GitHub、Netflix共同驱动',
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `./public/favicon.ico` }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Github', link: 'https://github.com/xjonson/yuque' },
    ],
    // sidebar: [
    //   '/',
    //   '/page-a',
    //   ['/page-b', 'Explicit link text']
    // ]
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    ['vuepress-plugin-yuque', {
      repoUrl: 'https://www.yuque.com/jonson/blog',
      html: 'true',
      home: {
        actionText: 'Getting Started →',
        actionLink: '/intro/',
        heroImage: 'https://ws1.sinaimg.cn/large/006djfE8ly1g0ty3jlp9wj30ig0igq3o.jpg',
        features: [
          { title: 'VuePress', details: 'VuePress 提供了站点框架。及 Markdown 引擎解析文章。' },
          { title: '语雀', details: '「语雀」为站点提供markdown格式文本编写部署工具' },
          { title: 'GitHub&Netflix', details: 'GitHub 提供了项目源码托管。Netflix 配合语雀 Web Hooks 及 Github 提供了文章发布后自动部署到站点的功能。' },
        ],
        footer: `Copyright © JonsonXu`,
      }
    }]
  ]
}