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
    quote:
      "Smartick Solutions transformed how we run our operations. The custom system they built replaced three separate tools we were cobbling together — and the time saving has been extraordinary. They were professional, transparent, and delivered exactly what they promised. We will continue to work with them for the automation of our other processes.",
    name: "Amjad Khan",
    role: "CEO",
    company: "A2Z Learning Centre Ltd",
    initials: "AK",
    colour: "bg-navy",
  },
  {
    quote:
      "The integration work Smartick Solutions delivered, saved us around ten hours a week in manual data entry. It just works — our Bank transactions and receipts generation are always in sync. Genuinely life-changing for the finance team.",
    name: "Amir Khan",
    role: "Chief Financial Officer",
    company: "ReceiptsAuto",
    initials: "AK",
    colour: "bg-scarlet",
  },
  {
    quote:
      "Professional from day one. They were upfront about the scope, delivered exactly on time, and the app has had zero issues since launch. We'll be using Smartick Solutions for all our future development.",
    name: "Shaziya Younas",
    role: "Co Founder",
    company: "ParentConnect",
    initials: "SY",
    colour: "bg-navy-mid",
  },
  {
    quote:
      "What a great company Smartick Solutions is. They are right upto the mark with the development of our flagship website which allows customers to shop for products. Fully integrated payment system, wallet, inventory management, stock management, order management and delivery management. Can't ask for more.",
    name: "Noureen Murtaza",
    role: "Co Founder",
    company: "ShopingRite",
    initials: "NM",
    colour: "bg-navy-mid",
  },
];
