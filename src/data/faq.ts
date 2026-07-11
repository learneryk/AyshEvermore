export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Where are you based, and do you travel for events?",
    answer: "We are based in TVM, Manacaud, Kerala, and execute events across all of South India. For our surprise and romantic experiences, we offer Destination Surprise Planning and can coordinate and execute setups globally, including flights, hotels, and custom decorations."
  },
  {
    id: 2,
    question: "How far in advance should we book Aysh Evermore?",
    answer: "For grand events like weddings and corporate annual days, we recommend booking 3 to 6 months in advance. For intimate surprises, romantic dates, and proposal planning, a lead time of 2 to 3 weeks is ideal to ensure customized design procurement and reservation of premier locations."
  },
  {
    id: 3,
    question: "Can we hire you for just decoration or styling rather than full planning?",
    answer: "Absolutely! We customize our packages to your requirements. We offer styling and decoration services separately, as well as comprehensive end-to-end planning where we manage guest invitations, catering, cake design, rentals, audio-visual setups, and photographers."
  },
  {
    id: 4,
    question: "Do you collaborate with other photographers, caterers, or decorators?",
    answer: "Yes, we coordinate seamlessly with vendors you've already hired. Alternatively, we have curated a premier network of top-tier partners (photographers, chefs, cake designers, violinists) that we trust to deliver to our luxury standards."
  },
  {
    id: 5,
    question: "How do we start the planning process with you?",
    answer: "You can reach out to us via our online inquiry form, call us directly, or send us a WhatsApp message. We will set up an initial consultation (virtual or in-person) to listen to your story, understand your vision, and draft a bespoke visual concept for your celebration."
  },
  {
    id: 6,
    question: "What is your payment and booking confirmation structure?",
    answer: "To secure your date in our planning calendar, we require an initial advance booking deposit of 50%. The remaining balance is structured and finalized based on the milestones of the project, with the final payment due 1 week before the event date."
  }
];
