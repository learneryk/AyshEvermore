import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'serviceCategory',
  title: 'Service Category',
  type: 'document',
  fields: [
    defineField({ 
      name: 'name', 
      type: 'string', 
      title: 'Category Name (e.g. Love & Relationships)' 
    }),
    defineField({ 
      name: 'slug', 
      type: 'string', 
      title: 'URL Slug (e.g. love-relationships)' 
    }),
    defineField({ 
      name: 'tagline', 
      type: 'string', 
      title: 'Tagline' 
    }),
    defineField({ 
      name: 'description', 
      type: 'text', 
      title: 'Description' 
    }),
    defineField({ 
      name: 'image', 
      type: 'image', 
      title: 'Cover Image', 
      options: { hotspot: true } 
    }),
    defineField({ 
      name: 'icon', 
      type: 'string', 
      title: 'Icon Name (Heart, Sparkles, Ring, Award, Gift)', 
      options: { list: ['Heart', 'Sparkles', 'Ring', 'Award', 'Gift'] } 
    }),
    defineField({ 
      name: 'deliverables', 
      type: 'array', 
      title: 'Deliverables (Checklist)', 
      of: [{type: 'string'}] 
    }),
    defineField({
      name: 'subServices',
      title: 'Sub Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'tagline', type: 'string', title: 'Tagline' },
            { name: 'description', type: 'text', title: 'Description' }
          ]
        }
      ]
    })
  ]
})
