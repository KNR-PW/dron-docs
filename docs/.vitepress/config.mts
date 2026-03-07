import { defineConfig } from 'vitepress'
import { generateSidebar } from "./sidebar"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "KNR-Dron: Dokumentacja",
  description: "Pełna dokumentacja projektu KNR-drone",
  base: "/dron-docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    search: {
      provider: "local"
    },

    sidebar: generateSidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KNR-PW/dron-docs' }
    ]
  }
})

