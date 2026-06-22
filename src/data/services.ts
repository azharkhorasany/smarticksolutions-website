export interface Service {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  includes: string[];
  process: string[];
  gradient: string;
  seoTitle: string;
  seoDescription: string;
}

export const services: Service[] = [
  {
    id: 'bespoke',
    slug: 'bespoke-software-development',
    title: 'Bespoke Software Development',
    tagline: "Software built for your business, not someone else's.",
    description: `Off-the-shelf software is built for the average business — which means it fits no business perfectly. Bespoke software is built around your processes, your workflows, and your specific requirements.

We build everything from internal business tools and customer-facing web applications to complex multi-user enterprise systems. Every project starts with a thorough discovery phase to ensure we understand your problem before we write a single line of code.`,
    includes: [
      'Web applications & customer portals',
      'Internal business tools & admin systems',
      'Process automation & workflow engines',
      'Data management & reporting platforms',
      'REST APIs & microservices',
      'Legacy system modernisation',
    ],
    process: ['Discovery & requirements', 'Architecture & design', 'Iterative development', 'Testing & QA', 'Deployment & go-live', 'Ongoing support'],
    gradient: 'from-navy to-navy-dark',
    seoTitle: 'Bespoke Software Development UK | Smartick Solutions',
    seoDescription: 'Custom software built around your business processes — web applications, internal tools, and enterprise systems. Fixed-price projects, UK-based team.',
  },
  {
    id: 'architecture',
    slug: 'software-architecture-consultation',
    title: 'Software Architecture Consultation',
    tagline: 'The right decisions before the first line of code.',
    description: `Architecture decisions made early in a project shape everything that follows. Choosing the wrong tech stack, overlooking scalability requirements, or coupling systems too tightly can cost ten times more to fix later than to get right upfront.

We provide independent, experienced eyes on your technology decisions — whether you're starting a new system from scratch, scaling an existing platform, or dealing with the consequences of past architectural choices.`,
    includes: [
      'System design & architecture planning',
      'Technology stack evaluation & selection',
      'Scalability & performance assessment',
      'Code & architecture reviews',
      'Cloud architecture & migration planning',
      'Technical documentation & ADRs',
    ],
    process: ['Initial assessment', 'Codebase / requirements review', 'Risk identification', 'Recommendations report', 'Roadmap planning', 'Optional implementation oversight'],
    gradient: 'from-navy-mid to-navy-dark',
    seoTitle: 'Software Architecture Consultation UK | Smartick Solutions',
    seoDescription: 'Independent architecture reviews, tech stack evaluations, and system design for UK businesses. Avoid costly early mistakes with expert guidance.',
  },
  {
    id: 'integration',
    slug: 'api-integration-services',
    title: 'Integration Services',
    tagline: 'Connect your tools. Eliminate the manual work.',
    description: `Most businesses run on a mix of software tools that don't talk to each other — leading to duplicate data entry, errors, delays, and frustrated staff. Integrations solve this by making your systems communicate automatically.

We design and build integrations between your internal systems and the third-party tools your business relies on — handling authentication, data mapping, error recovery, and monitoring so the integration is reliable, not just functional.`,
    includes: [
      'Third-party API integrations',
      'Payment gateway integration (Stripe, GoCardless)',
      'CRM connectors (Salesforce, HubSpot, Pipedrive)',
      'Accounting system sync (Xero, QuickBooks, Sage)',
      'E-commerce platform integrations',
      'Legacy & bespoke system bridges',
    ],
    process: ['System mapping & analysis', 'Data model alignment', 'Integration design', 'Build & testing', 'Monitoring setup', 'Documentation & ongoing support'],
    gradient: 'from-emerald-600 to-teal-800',
    seoTitle: 'API Integration Services UK | Smartick Solutions',
    seoDescription: 'Connect Xero, Salesforce, Stripe, and your other tools so they share data automatically. Eliminate manual data entry with reliable API integrations.',
  },
  {
    id: 'mobile',
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    tagline: 'Apps your users will actually use.',
    description: `A mobile app is only valuable if people use it. We design and build iOS and Android applications with a relentless focus on user experience — because an app that doesn't get used is a wasted investment.

We build cross-platform apps using React Native and .NET MAUI, giving you a single codebase that runs natively on both platforms.`,
    includes: [
      'iOS & Android app development',
      'Cross-platform (React Native / .NET MAUI)',
      'UI/UX design',
      'App Store & Google Play submission',
      'Push notifications & background sync',
      'Ongoing support & app updates',
    ],
    process: ['Discovery & UX planning', 'Wireframing & design', 'Sprint-based development', 'Device & OS testing', 'Store submission', 'Post-launch support'],
    gradient: 'from-scarlet to-red-800',
    seoTitle: 'Mobile App Development UK — iOS & Android | Smartick Solutions',
    seoDescription: 'Cross-platform iOS and Android apps built with React Native and .NET MAUI. Designed for real-world use, delivered on time and on budget.',
  },
  {
    id: 'websites',
    slug: 'website-development',
    title: 'Website Development',
    tagline: 'Websites that work as hard as you do.',
    description: `A website is often the first impression a potential client has of your business. We build fast, modern, responsive websites that represent your brand professionally — and are built to rank well in search engines from day one.

From a clean corporate site to a fully-featured e-commerce platform, we deliver websites that look great and actually perform: fast load times, accessibility compliance, and full SEO foundations built in.`,
    includes: [
      'Corporate & marketing websites',
      'E-commerce stores (Shopify, custom)',
      'Landing pages & campaign sites',
      'Headless CMS integration',
      'On-page & technical SEO',
      'Performance & Core Web Vitals optimisation',
    ],
    process: ['Discovery & sitemap', 'Design & brand alignment', 'Development', 'Content integration', 'SEO & performance audit', 'Launch & training'],
    gradient: 'from-blue-600 to-indigo-800',
    seoTitle: 'Website Development UK — Fast, Modern Sites | Smartick Solutions',
    seoDescription: 'Professional websites built for performance and SEO from day one. Corporate sites, e-commerce, and landing pages for UK businesses.',
  },
];
