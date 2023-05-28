import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Tabtastic Docs',
  description: 'Documentation for Tabtastic, a platform for organising debating competitions',
  lang: 'en-GB',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/wordmark-light.png',
      dark: '/wordmark-dark.png',
      alt: 'Tabtastic Docs',
    },

    siteTitle: false,

    nav: [
      {
        text: 'Guides',
        items: [],
      },
      {
        text: 'Features',
        items: [
          { text: "Zoom Integration", link: "/features/zoom-integration" },
        ],
      },
    ],

    sidebar: {
      '/features/': [
        {
          text: 'Features',
          items: [
            { text: "Zoom Integration", link: "/features/zoom-integration" },
          ],
        },
      ],

      '/guides/': [
        {
          text: 'Guides',
          items: [],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Tabtastic/docs' },
      { icon: 'discord', link: 'https://discord.gg/6UEYkQW' },
      { icon: 'facebook', link: 'https://facebook.com/TabtasticApp' },
    ],

    footer: {
      message: 'Released under the GPL-3.0 License.',
      copyright: 'Copyright © 2023-present Sébastien Dunne Fulmer',
    },

    editLink: {
      pattern: 'https://github.com/Tabtastic/docs/edit/main/:path',
      text: 'Edit this page on GitHub',
    },

    search: {
      provider: 'local',
    },
  },
})
