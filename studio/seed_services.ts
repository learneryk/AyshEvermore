import {getCliClient} from 'sanity/cli'
import { servicesData } from './services_data_temp'

const client = getCliClient()

async function seed() {
  try {
    // We map servicesData directly into the Sanity schema format
    const categoriesWithKeys = servicesData.map((cat, i) => ({
      ...cat,
      _key: `cat_${i}`,
      // we remove the direct image import and leave it blank for them to upload in CMS, or we can just leave it out 
      image: undefined,
      deliverables: cat.deliverables,
      subServices: cat.subServices.map((sub, j) => ({
        ...sub,
        _key: `sub_${j}`,
      }))
    }))

    await client.createOrReplace({
      _id: 'servicesPage',
      _type: 'servicesPage',
      headerTitle: 'Bespoke Experiences',
      headerTagline: 'Tailored to your story',
      headerSubtitle: 'From grand traditional matrimonial stages to quiet midnight candle-lit dates, explore our diverse planning services.',
      categories: categoriesWithKeys
    })
    
    console.log('✅ Seeded Services Page')
  } catch (error) {
    console.error('Error seeding data:', error)
  }
}

seed()
