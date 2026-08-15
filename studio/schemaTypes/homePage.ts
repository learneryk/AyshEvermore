import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    // 1. Hero Section
    defineField({
      name: 'heroTagline',
      title: 'Hero Tagline (Above Title)',
      type: 'string',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'heroImageSmall',
      title: 'Hero Small Overlapping Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'heroImageTag',
      title: 'Hero Image Floating Tag Text',
      type: 'string',
    }),
    defineField({
      name: 'heroButton1Text',
      title: 'Primary Button Text',
      type: 'string',
    }),
    defineField({
      name: 'heroButton2Text',
      title: 'Secondary Button Text',
      type: 'string',
    }),
    
    // 2. Our Story Section
    defineField({
      name: 'storyTagline',
      title: 'Our Story Tagline',
      type: 'string',
    }),
    defineField({
      name: 'storyDescription',
      title: 'Our Story Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'storyQuote',
      title: 'Our Story Quote',
      type: 'string',
    }),
    defineField({
      name: 'storyImageMain',
      title: 'Story Main Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'storyImageSmall',
      title: 'Story Small Floating Image',
      type: 'image',
      options: { hotspot: true },
    }),

    // 3. Core Values Section
    defineField({
      name: 'coreValues',
      title: 'Core Values',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
          ]
        }
      ]
    }),

    // 4. Services Preview
    defineField({
      name: 'servicesTitle',
      title: 'Services Section Title',
      type: 'string',
    }),
    defineField({
      name: 'servicesTagline',
      title: 'Services Section Tagline',
      type: 'string',
    }),
    defineField({
      name: 'servicesDescription',
      title: 'Services Section Description',
      type: 'text',
    }),

    // 5. How We Work
    defineField({
      name: 'processTitle',
      title: 'Process Title',
      type: 'string',
    }),
    defineField({
      name: 'processTagline',
      title: 'Process Tagline',
      type: 'string',
    }),
    defineField({
      name: 'processSubtitle',
      title: 'Process Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'processSteps',
      title: 'Process Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'stepNumber', type: 'string', title: 'Step Number' },
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
          ]
        }
      ]
    }),

    // 6. Why Choose Us
    defineField({
      name: 'whyTitle',
      title: 'Why Choose Us Title',
      type: 'string',
    }),
    defineField({
      name: 'whyTagline',
      title: 'Why Choose Us Tagline',
      type: 'string',
    }),
    defineField({
      name: 'whyReasons',
      title: 'Why Choose Us Reasons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
          ]
        }
      ]
    }),
    defineField({
      name: 'whyStatNumber',
      title: 'Stat Number',
      type: 'string',
    }),
    defineField({
      name: 'whyStatText',
      title: 'Stat Text',
      type: 'string',
    }),
    defineField({
      name: 'whyImage',
      title: 'Why Choose Us Main Image',
      type: 'image',
      options: { hotspot: true },
    }),

    // 7. Atelier Journal
    defineField({
      name: 'journalTitle',
      title: 'Journal Title',
      type: 'string',
    }),
    defineField({
      name: 'journalTagline',
      title: 'Journal Tagline',
      type: 'string',
    }),
    defineField({
      name: 'journalSubtitle',
      title: 'Journal Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'journalImages',
      title: 'Journal Images (4 recommended)',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),

    // 8. Contact Section
    defineField({
      name: 'contactTitle',
      title: 'Contact Title',
      type: 'string',
    }),
    defineField({
      name: 'contactTagline',
      title: 'Contact Tagline',
      type: 'string',
    }),
    defineField({
      name: 'contactDescription',
      title: 'Contact Description',
      type: 'text',
    }),
  ],
})
