import {getCliClient} from 'sanity/cli'

const client = getCliClient()

async function seed() {
  try {
    await client.createOrReplace({
      _id: 'homePage',
      _type: 'homePage',
      heroTagline: 'Some Feelings Deserve More Than Words',
      heroTitle: 'Aysh Evermore',
      heroSubtitle: "Every celebration begins with a feeling.\nWhether it's a surprise that brings tears, a wedding filled with unforgettable moments, or a milestone worth celebrating, we transform your vision into an experience you'll cherish forever.\nBecause some feelings deserve more than words.",
      heroImageTag: 'Bespoke Surprises',
      heroButton1Text: 'Plan Your Celebration',
      heroButton2Text: 'Explore Our Services',
      
      storyTagline: 'Every celebration begins with a feeling.',
      storyDescription: [
        {
          _type: 'block',
          children: [{_type: 'span', text: "At Aysh Evermore, we turn those feelings into beautifully crafted experiences. Whether it's an intimate proposal, a dream wedding, a joyful birthday, or a once-in-a-lifetime celebration, every detail is designed with purpose, elegance, and heart."}]
        },
        {
          _type: 'block',
          children: [{_type: 'span', text: "We believe the most meaningful moments aren't measured by how grand they are, but by how deeply they're remembered. That's why we don't simply plan events. We create moments you'll carry with you forever."}]
        }
      ],
      storyQuote: "The most precious moments in life are the ones shared with the people we love.",

      coreValues: [
        { _key: '1', title: "Meaningful Experiences", description: "Every event is designed around your story, capturing the exact emotions you wish to convey." },
        { _key: '2', title: "Stress-Free Planning", description: "From initial concept to flawless execution, we handle everything so you can be fully present." },
        { _key: '3', title: "Memories That Last", description: "We create moments you and your guests will cherish long after the last candle is put out." }
      ],

      servicesTitle: 'Bespoke Experiences',
      servicesTagline: 'What we plan for you',
      servicesDescription: 'Explore our curated event styles. We specialize in tailoring custom layouts for every life landmark.',

      processTitle: 'How We Work',
      processTagline: 'Seamless Planning, Step by Step',
      processSubtitle: 'Our structured luxury process guarantees that your vision is realized flawlessly, keeping you stress-free.',
      processSteps: [
        { _key: '1', stepNumber: "01", title: "Listen & Conceive", description: "We take the time to understand your story, emotions, and specific goals to establish a unique theme." },
        { _key: '2', stepNumber: "02", title: "Luxury Design Blueprint", description: "Our visual designers create layouts, color palettes, and sample boards to showcase the layout." },
        { _key: '3', stepNumber: "03", title: "Premium Curation", description: "We source custom materials, coordinate with top tier photographers, caterers, and verify logistics." },
        { _key: '4', stepNumber: "04", title: "Flawless Orchestration", description: "Our planners manage the structural execution on-site, ensuring every moment goes exactly as planned." }
      ],

      whyTitle: 'Why Aysh Evermore?',
      whyTagline: 'Because special moments deserve more than ordinary planning.',
      whyReasons: [
        { _key: '1', title: "We Listen First", description: "We take the time to understand your story, your vision and what truly matters to you." },
        { _key: '2', title: "Personalized Designs", description: "Every detail is thoughtfully curated to reflect your style, preferences and personality." },
        { _key: '3', title: "Stress-Free Planning", description: "We handle the details so you can be present, relaxed and fully enjoy every moment." },
        { _key: '4', title: "Memories That Last", description: "We craft moments that turn into timeless memories you and your loved ones will cherish forever." }
      ],
      whyStatNumber: '100%',
      whyStatText: 'Stress-Free Coordination Guarantee',

      journalTitle: 'Atelier Journal',
      journalTagline: 'Instagram Visual Story',
      journalSubtitle: 'Follow our visual board on Instagram @aysh.evermore to discover our latest setups, aesthetics, and moments.',

      contactTitle: "Let's Plan",
      contactTagline: "Let's create your moment.",
      contactDescription: "Every celebration starts with a feeling, a dream, a person, a moment worth remembering. Reach out to us, and let's begin crafting yours.",
    })
    console.log('✅ Updated Home Page data')

  } catch (error) {
    console.error('Error seeding data:', error)
  }
}

seed()
