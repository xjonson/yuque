module.exports = {
  title: 'JonsonXu Blog',
  description: ' ',
  themeConfig: {
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Guide', link: '/guide/' },
    //   { text: 'External', link: 'https://google.com' },
    // ],
    // sidebar: [
    //   '/',
    //   '/page-a',
    //   ['/page-b', 'Explicit link text']
    // ]
  },
  plugins: [
    ['vuepress-plugin-yuque', {
      repoUrl: 'https://www.yuque.com/jonson/blog',
      html: 'true',
      home: {
        actionText: 'Getting Started →',
        actionLink: '/intro/',
        // heroImage: 'https://github.com/xjonson/images/blob/master/x-logo.jpg',
        features: [
          // { title: '循序渐进', details: '本教程的难度依次递进，为阅读者呈现舒适的学习曲线' },
          // { title: '值得信赖', details: '由 antd 团队亲自打造，从技术栈、生态、研发流程等来为你提供系统化的学习体验' },
          // { title: '最佳实践', details: '通过结合实际开发过程中的案例，来描述不同场景下的最佳实践' },
        ],
        footer: `Copyright © JonsonXu`,
      }
    }]
  ]
}