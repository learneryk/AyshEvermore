import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
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
    defineField({
      name: 'deliverablesTitle',
      title: 'Deliverables Title (e.g. We Take Care Of Everything)',
      type: 'string',
    }),
    defineField({
      name: 'keyExperiencesTitle',
      title: 'Key Experiences Title (e.g. Key Experience Highlights)',
      type: 'string',
    }),
    defineField({
      name: 'selectExperienceBtn',
      title: 'Select Experience Button Label',
      type: 'string',
    })
  ]
})
