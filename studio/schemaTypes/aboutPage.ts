import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    // 1. Header Banner
    defineField({
      name: 'headerTitle',
      title: 'Header Title',
      type: 'string',
    }),
    defineField({
      name: 'headerTagline',
      title: 'Header Tagline',
      type: 'string',
    }),
    defineField({
      name: 'headerSubtitle',
      title: 'Header Subtitle',
      type: 'text',
    }),

    // 2. Philosophy Narrative
    defineField({
      name: 'philosophyImageMain',
      title: 'Philosophy Main Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'philosophyImageSmall',
      title: 'Philosophy Small Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'philosophyTagline',
      title: 'Philosophy Tagline',
      type: 'string',
    }),
    defineField({
      name: 'philosophyTitle',
      title: 'Philosophy Title',
      type: 'string',
    }),
    defineField({
      name: 'philosophyText',
      title: 'Philosophy Text',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'metrics',
      title: 'Quick Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'number', type: 'string', title: 'Number/Stat' },
            { name: 'text', type: 'string', title: 'Text/Description' },
          ]
        }
      ]
    }),

    // 3. Core Pillars
    defineField({
      name: 'pillarsTagline',
      title: 'Pillars Tagline',
      type: 'string',
    }),
    defineField({
      name: 'pillarsTitle',
      title: 'Pillars Title',
      type: 'string',
    }),
    defineField({
      name: 'pillars',
      title: 'Core Pillars',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'desc', type: 'text', title: 'Description' },
          ]
        }
      ]
    }),
  ],
})
