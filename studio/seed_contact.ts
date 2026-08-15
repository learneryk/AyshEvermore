import {getCliClient} from 'sanity/cli'

const client = getCliClient()

async function seed() {
  try {
    await client.createOrReplace({
      _id: 'contactPage',
      _type: 'contactPage',
      headerTitle: 'Connect With Us',
      headerTagline: "Let's create your moment",
      headerSubtitle: 'Whether you are planning a stealth proposal, a fairytale wedding, or an employee gala, we are ready to bring your vision to life.',
      contactCards: [
        {
          _key: 'c1',
          icon: 'Phone',
          label: 'Phone Contact',
          value: '+91 62826 03885',
          link: 'tel:+916282603885',
          actionLabel: 'Call Atelier'
        },
        {
          _key: 'c2',
          icon: 'MessageCircle',
          label: 'WhatsApp Chat',
          value: '+91 62826 03885',
          link: 'https://wa.me/916282603885?text=Hi%20Aysh%20Evermore%2C%20I%20would%20like%20to%20inquire%20about%20planning%20an%20event.',
          actionLabel: 'Message Chat'
        },
        {
          _key: 'c3',
          icon: 'Mail',
          label: 'Email Inquiries',
          value: 'ayshevermore@gmail.com',
          link: 'mailto:ayshevermore@gmail.com',
          actionLabel: 'Write Email'
        },
        {
          _key: 'c4',
          icon: 'Instagram',
          label: 'Instagram Visuals',
          value: '@aysh.evermore',
          link: 'https://instagram.com/aysh.evermore',
          actionLabel: 'Follow Feed'
        }
      ],
      formTitle: 'Experience Request Form',
      officeTitle: 'The Office',
      addressTitle: 'Atelier Address',
      addressDetails: [
        {
          _key: 'a1',
          _type: 'block',
          children: [{_key: 's1', _type: 'span', text: 'TVM, Manacaud,\nThiruvananthapuram, Kerala,\nIndia - 695009'}]
        }
      ],
      hoursTitle: 'Business Hours',
      hoursDetails: [
        {
          _key: 'h1',
          _type: 'block',
          children: [{_key: 's2', _type: 'span', text: 'Monday – Saturday\n09:00 AM – 07:00 PM IST'}]
        }
      ]
    })
    
    console.log('✅ Seeded Contact Page')
  } catch (error) {
    console.error('Error seeding data:', error)
  }
}

seed()
