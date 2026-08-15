import {getCliClient} from 'sanity/cli'

const client = getCliClient()

async function seed() {
  try {
    await client.createOrReplace({
      _id: 'siteSettings',
      _type: 'siteSettings',
      companyDescription: 'Creating unforgettable experiences from the feelings that matter most. From intimate surprises to complete weddings, we turn your moments into memories that stay forever.',
      footerTaglineTop: 'Some Feelings Deserve',
      footerTaglineBottom: 'More Than Words.',
      servicesList: [
        'Wedding Day Management',
        'Proposal Planning',
        'Surprise Date Setups',
        'Birthday & Milestone Celebrations',
        'Corporate Events',
        'Décor & Styling',
        'Photography & Videography',
        'Catering Services',
        'Entertainment & Activities',
        'Home Décor',
        'Custom Experiences'
      ],
      address: 'TVM, Manacaud,\nKerala, India',
      phone: '+91 62826 03885',
      email: 'ayshevermore@gmail.com',
      instagramHandle: '@aysh.evermore',
      instagramLink: 'https://instagram.com/aysh.evermore'
    })
    
    console.log('✅ Seeded Site Settings')
  } catch (error) {
    console.error('Error seeding data:', error)
  }
}

seed()
