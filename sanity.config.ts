import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'


export default defineConfig({
  name: 'default',
  title: 'next-sea-reach',

  projectId: 'xdlik3hi',
  dataset: 'production',
  apiVersion: '2024-01-30',
  basePath: '/admin',

  plugins: [structureTool()],

})