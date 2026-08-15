export default {
  name: 'galleryCategory',
  title: 'Gallery Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category Name',
      type: 'string',
      description: 'e.g., Proposals, Weddings, Corporate',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'title',
              title: 'Image Title',
              type: 'string',
              description: 'Title shown on hover and in the lightbox.',
              validation: (Rule: any) => Rule.required(),
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'images.0.image',
    },
  },
}
