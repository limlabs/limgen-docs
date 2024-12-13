import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'LIMGEN',
    customCss: [
      './src/styles/global.css',
    ],
    social: {
      github: 'https://github.com/limlabs/limgen',
    },
    logo: {
      light: './src/assets/light-logo.svg',
      dark: './src/assets/dark-logo.svg',
    },
    sidebar: [
      {
        label: 'Getting Started',
        autogenerate: { directory: 'getting_started' },
      },
      {
        label: 'Components',
        autogenerate: { directory: 'components' },
      },
      {
        label: 'Frameworks',
        autogenerate: { directory: 'frameworks' }
      },
      {
        label: 'Project Types',
        autogenerate: { directory: 'project_types' },
      },
    ],
  }),
  tailwind({
    // Disable the default base styles:
    applyBaseStyles: false,
  }),],
});