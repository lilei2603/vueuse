// @ts-expect-error missing type
import base from '@vue/theme/config'
import { currentVersion, versions } from '../../meta/versions'
import { addonCategoryNames, categoryNames, coreCategoryNames, metadata } from '../../packages/metadata/metadata'
import highlight from './plugins/highlight'

const themeConfig = async () => {
  const config = await base()
  config.markdown.highlight = await highlight()
  return config
}

const Guide = [
  { text: '快速开始', link: '/guide/' },
  { text: '最佳实践', link: '/guide/best-practice' },
  { text: '配置', link: '/guide/config' },
  { text: '组件', link: '/guide/components' },
  { text: '贡献', link: '/contributing' },
  { text: '指导', link: '/guidelines' },
]

const CoreCategories = coreCategoryNames.map(c => ({
  text: c,
  activeMatch: '___', // never active
  link: `/functions#category=${c}`,
}))

const AddonCategories = [
  ...addonCategoryNames
    .map(c => ({
      text: c.slice(1),
      activeMatch: '___', // never active
      link: `/functions#category=${encodeURIComponent(c)}`,
    })),
]

const Links = [
  { text: '附加组件', link: '/add-ons' },
  { text: '生态系统', link: '/ecosystem' },
  { text: '导出容量', link: '/export-size' },
  { text: '最近更新', link: '/recent-updated' },
]

const DefaultSideBar = [
  { text: '指导', items: Guide },
  { text: '核心功能', items: CoreCategories },
  { text: '附加组件', items: AddonCategories },
  { text: '链接', items: Links },
]

const FunctionsSideBar = getFunctionsSideBar()

/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  extends: themeConfig,

  title: 'VueUse',
  description: '实用的Vue组合式函数集合',
  lang: 'zh-CN',

  themeConfig: {
    logo: '/favicon.svg',
    repo: 'vueuse/vueuse',
    docsDir: 'packages',

    editLinks: true,
    editLinkText: 'Edit this page',
    lastUpdated: 'Last Updated',

    algolia: {
      apiKey: 'a99ef8de1b2b27949975ce96642149c6',
      indexName: 'vueuse',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vueuse/vueuse' },
      { icon: 'twitter', link: 'https://twitter.com/vueuse' },
    ],

    nav: [
      {
        text: '指导',
        items: [
          { text: '指导', items: Guide },
          { text: '链接', items: Links },
        ],
      },
      {
        text: '函数',
        items: [
          {
            text: '',
            items: [
              { text: '所有函数', link: '/functions#' },
              { text: '最近更新', link: '/functions#sort=updated' },
            ],
          },
          { text: '核心功能', items: CoreCategories },
          { text: '附加组件', items: AddonCategories },
        ],
      },
      {
        text: '附加组件',
        link: '/add-ons',
      },
      {
        text: '演示',
        link: 'https://play.vueuse.org',
      },
      {
        text: currentVersion,
        items: [
          {
            items: [
              { text: '发行说明', link: 'https://github.com/vueuse/vueuse/releases' },
            ],
          },
          {
            text: 'Versions',
            items: versions.map(i => i.version === currentVersion
              ? {
                  text: `${i.version} (Current)`,
                  activeMatch: '/', // always active
                  link: '/',
                }
              : {
                  text: i.version,
                  link: i.link,
                },
            ),
          },
        ],

      },
    ],
    sidebar: {
      '/guide/': DefaultSideBar,
      '/contributing': DefaultSideBar,
      '/add-ons': DefaultSideBar,
      '/ecosystem': DefaultSideBar,
      '/guidelines': DefaultSideBar,
      '/export-size': DefaultSideBar,
      '/recent-updated': DefaultSideBar,

      '/functions': FunctionsSideBar,
      '/core/': FunctionsSideBar,
      '/shared/': FunctionsSideBar,
      '/router/': FunctionsSideBar,
      '/electron/': FunctionsSideBar,
      '/rxjs/': FunctionsSideBar,
      '/integrations/': FunctionsSideBar,
      '/firebase/': FunctionsSideBar,
    },
  },
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/favicon-32x32.png', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'author', content: 'Anthony Fu' }],
    ['meta', { property: 'og:title', content: 'VueUse' }],
    ['meta', { property: 'og:image', content: 'https://vueuse.org/og.png' }],
    ['meta', { property: 'og:description', content: 'Collection of essential Vue Composition Utilities' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@antfu7' }],
    ['meta', { name: 'twitter:image', content: 'https://vueuse.org/og.png' }],

    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Code&display=swap' }],
  ],
}

function getFunctionsSideBar() {
  const links = []

  for (const name of categoryNames) {
    if (name.startsWith('_'))
      continue

    const functions = metadata.functions.filter(i => i.category === name && !i.internal)

    links.push({
      text: name,
      items: functions.map(i => ({
        text: i.name,
        link: i.external || `/${i.package}/${i.name}/`,
      })),
      link: name.startsWith('@')
        ? functions[0].external || `/${functions[0].package}/README`
        : undefined,
    })
  }

  return links
}

export default config
