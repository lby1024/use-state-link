import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/use-state-link',				 
  publicPath: '/use-state-link/', 
  themeConfig: {
    name: 'use-state-link',
    prefersColor: { default: 'dark', switch: false },
    logo: false
  },
});
