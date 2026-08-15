import {getCliClient} from 'sanity/cli'

const client = getCliClient()

async function seed() {
  try {
    console.log('Seeding Gallery Page Content...')
    await client.createOrReplace({
      _id: 'galleryPage',
      _type: 'galleryPage',
      headerTitle: 'Atelier Gallery',
      headerTagline: 'Memories materialized',
      headerSubtitle: 'Browse high-resolution photographs of our real events, styled and styled to perfection.',
    })

    console.log('Seeding Gallery Categories...')
    const categories = [
      {
        _id: 'galleryCategory-proposals',
        _type: 'galleryCategory',
        name: 'Proposals',
        slug: { current: 'proposals', _type: 'slug' },
      },
      {
        _id: 'galleryCategory-weddings',
        _type: 'galleryCategory',
        name: 'Weddings',
        slug: { current: 'weddings', _type: 'slug' },
      },
      {
        _id: 'galleryCategory-celebrations',
        _type: 'galleryCategory',
        name: 'Celebrations',
        slug: { current: 'celebrations', _type: 'slug' },
      },
      {
        _id: 'galleryCategory-corporate',
        _type: 'galleryCategory',
        name: 'Corporate',
        slug: { current: 'corporate', _type: 'slug' },
      },
      {
        _id: 'galleryCategory-surprises',
        _type: 'galleryCategory',
        name: 'Surprises',
        slug: { current: 'surprises', _type: 'slug' },
      }
    ]

    for (const cat of categories) {
      await client.createOrReplace(cat)
      console.log(`✅ Created category: ${cat.name}`)
    }
    
    console.log('✅ Done seeding Gallery.')
  } catch (error) {
    console.error('Error seeding data:', error)
  }
}

seed()
