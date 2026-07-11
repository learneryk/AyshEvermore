export interface Testimonial {
  id: number;
  name: string;
  role: string;
  event: string;
  quote: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Aparna & Siddharth",
    role: "Bride & Groom",
    event: "Bespoke Wedding Day",
    quote: "Aysh Evermore turned our dream wedding into an absolute masterpiece. From the gorgeous floral mandap to the seamless management of over 500 guests, every detail was handled with precision and grace. We actually got to enjoy our own wedding!",
    rating: 5
  },
  {
    id: 2,
    name: "Rohan Mathew",
    role: "Client",
    event: "Midnight Proposal Setup",
    quote: "I wanted to plan a surprise proposal that felt magical, and they delivered exactly that. The candlelit path and the neon 'Marry Me?' setup in the garden took my fiancée's breath away. The team worked with absolute stealth. Incredible!",
    rating: 5
  },
  {
    id: 3,
    name: "Anjali Krishna",
    role: "Marketing Director",
    event: "Product Launch Gala",
    quote: "Professionalism at its finest. The product launch sequence they designed left our board members and guests in awe. The lighting cues and custom branding setup were perfect. Aysh Evermore is our go-to corporate event partner now.",
    rating: 5
  },
  {
    id: 4,
    name: "Meera & Varun",
    role: "Parents",
    event: "Baby Shower Experience",
    quote: "We were looking for a pastel-themed baby shower that felt elegant yet warm. The floral decor, the custom diaper cakes, and the mocktail station were curated beautifully. Our friends are still talking about how beautiful it was.",
    rating: 5
  },
  {
    id: 5,
    name: "Devika Sen",
    role: "Daughter",
    event: "50th Anniversary Surprise",
    quote: "The 'Memory Lane' gallery they created for my parent's 50th wedding anniversary was emotional and beautiful. Sourcing old letters and displaying them with candlelight was a detail only a true artist could think of.",
    rating: 5
  }
];
