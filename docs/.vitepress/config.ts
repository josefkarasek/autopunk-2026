import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs

export default defineConfig({
  title: 'Autopunk 2026',
  description: 'Off-road itinerář: Ázerbájdžán',
  base: '/autopunk-2026/',
  themeConfig: {
    nav: [
      { text: 'Itinerář', link: '/' }
    ]
  }
})
