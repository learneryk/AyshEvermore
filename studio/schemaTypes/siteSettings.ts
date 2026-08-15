import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Global Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'companyDescription',
      title: 'Company Description (Footer)',
      type: 'text',
    }),
    defineField({
      name: 'footerTaglineTop',
      title: 'Footer Tagline Top (e.g. Some Feelings Deserve)',
      type: 'string',
    }),
    defineField({
      name: 'footerTaglineBottom',
      title: 'Footer Tagline Bottom (e.g. More Than Words.)',
      type: 'string',
    }),
    defineField({
      name: 'servicesList',
      title: 'Our Services List',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'address',
      title: 'Physical Address',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
      name: 'instagramHandle',
      title: 'Instagram Handle',
      type: 'string',
    }),
    defineField({
      name: 'instagramLink',
      title: 'Instagram Profile URL',
      type: 'string',
    })
  ]
})
