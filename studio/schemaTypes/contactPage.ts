import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
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
      name: 'contactCards',
      title: 'Contact Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Card Label (e.g., Phone Contact)' },
            { name: 'value', type: 'string', title: 'Card Value (e.g., +91 12345 67890)' },
            { name: 'link', type: 'string', title: 'Action Link (e.g., tel:+911234567890)' },
            { name: 'actionLabel', type: 'string', title: 'Action Label (e.g., Call Atelier)' },
            { name: 'icon', type: 'string', title: 'Icon (Phone, MessageCircle, Mail, Instagram)', options: { list: ['Phone', 'MessageCircle', 'Mail', 'Instagram'] } }
          ]
        }
      ]
    }),
    defineField({
      name: 'formTitle',
      title: 'Form Section Title',
      type: 'string',
    }),
    defineField({
      name: 'officeTitle',
      title: 'Office Section Title',
      type: 'string',
    }),
    defineField({
      name: 'addressTitle',
      title: 'Address Title',
      type: 'string',
    }),
    defineField({
      name: 'addressDetails',
      title: 'Address Details',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'hoursTitle',
      title: 'Business Hours Title',
      type: 'string',
    }),
    defineField({
      name: 'hoursDetails',
      title: 'Business Hours Details',
      type: 'array',
      of: [{type: 'block'}],
    })
  ],
})
