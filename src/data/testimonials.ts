export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  colour: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: 'Smartick Solutions transformed how we run our operations. The custom system they built replaced three separate tools we were cobbling together — and the time saving has been extraordinary. They were professional, transparent, and delivered exactly what they promised.',
    name: 'James Mitchell',
    role: 'CEO',
    company: 'TechStart Ltd',
    initials: 'JM',
    colour: 'bg-navy',
  },
  {
    quote: 'The integration work they delivered saved us around eight hours a week in manual data entry. It just works — our Xero and Salesforce are always in sync. Genuinely life-changing for the finance team.',
    name: 'Sarah Chen',
    role: 'Operations Manager',
    company: 'RetailPro UK',
    initials: 'SC',
    colour: 'bg-scarlet',
  },
  {
    quote: "Professional from day one. They were upfront about the scope, delivered exactly on time, and the app has had zero issues since launch. We'll be using Smartick Solutions for all our future development.",
    name: 'David Okafor',
    role: 'Founder',
    company: 'FinTrack Solutions',
    initials: 'DO',
    colour: 'bg-navy-mid',
  },
];
