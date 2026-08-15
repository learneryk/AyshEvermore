const fs = require('fs');
let data = fs.readFileSync('../src/data/services.ts', 'utf8');

// strip all imports
data = data.replace(/import.*?['"].*?['"];?/g, '');
data = data.replace(/proposalHero|weddingGold|birthdayLuxury|corporateGala|surpriseGarden/g, 'undefined');

const script = `
import {getCliClient} from 'sanity/cli'
const client = getCliClient()

${data}

async function seed() {
  try {
    // 1. Seed global Services Page settings
    await client.createOrReplace({
      _id: 'servicesPage',
      _type: 'servicesPage',
      headerTitle: 'Bespoke Experiences',
      headerTagline: 'Tailored to your story',
      headerSubtitle: 'From grand traditional matrimonial stages to quiet midnight candle-lit dates, explore our diverse planning services.',
      deliverablesTitle: 'We Take Care Of Everything',
      selectExperienceBtn: 'Select Experience'
    })
    
    // 2. Seed individual Service Categories
    for (const [i, cat] of servicesData.entries()) {
      await client.createOrReplace({
        _id: 'serviceCategory_' + cat.slug,
        _type: 'serviceCategory',
        name: cat.name,
        slug: cat.slug,
        tagline: cat.tagline,
        description: cat.description,
        image: undefined,
        icon: cat.icon,
        deliverables: cat.deliverables,
        subServices: cat.subServices.map((sub, j) => ({
          ...sub,
          _key: 'sub_' + j,
        }))
      })
    }
    
    console.log('✅ Seeded Services Page and Categories')
  } catch (error) {
    console.error('Error seeding data:', error)
  }
}
seed()
`;
fs.writeFileSync('seed_services_inline.ts', script);
