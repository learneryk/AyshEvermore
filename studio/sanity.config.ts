import {defineConfig} from 'sanity'
import {structureTool, DefaultDocumentNodeResolver} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

import React from 'react'

const PreviewIFrame = () => React.createElement('iframe', {
  src: 'https://ayshevermore.pages.dev',
  style: { width: '100%', height: '100%', border: 'none' }
})

const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  // Pages that correspond to visual pages on the website
  const previewPages = ['homePage', 'aboutPage', 'servicesPage', 'galleryPage', 'contactPage']
  
  if (previewPages.includes(schemaType)) {
    return S.document().views([
      S.view.form(),
      S.view.component(PreviewIFrame).title('Live Preview')
    ])
  }
  
  return S.document().views([S.view.form()])
}

export default defineConfig({
  name: 'default',
  title: 'AysheverMore',

  projectId: 'ipnzqgln',
  dataset: 'production',

  plugins: [structureTool({ defaultDocumentNode }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
