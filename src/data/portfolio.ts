export interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  tags: string[];
  gradient: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  challenge: string;
  solution: string;
  outcome: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'ReceiptsAuto Management System',
    category: 'Bespoke Software',
    description: 'Custom receipts management platform for an out-of-school learning centre — replacing spreadsheets with a fully automated receipts generation system for Universal Credit.',
    tags: ['ASP.NET Core', 'React', 'Azure', 'SQL Server'],
    gradient: 'from-navy to-navy-dark',
    slug: 'receiptsauto',
    seoTitle: 'ReceiptsAuto — Automated Receipts System | Smartick Solutions',
    seoDescription: 'Bespoke receipts management platform built for an out-of-school learning centre, automating Universal Credit receipt generation with ASP.NET Core and React.',
    challenge: 'An out-of-school learning centre was managing Universal Credit receipts entirely through spreadsheets — a time-consuming, error-prone process that grew harder to maintain as the centre expanded.',
    solution: 'We designed and built a bespoke web application that automates the entire receipt generation workflow. The system stores student and payment records in SQL Server, generates correctly formatted receipts on demand, and handles edge cases that the previous spreadsheet process handled inconsistently.',
    outcome: 'Receipt generation time reduced from hours per week to minutes. The centre now has an auditable record of all receipts with no manual formatting required.',
  },
  {
    title: 'FieldOps Management System',
    category: 'Bespoke Software',
    description: 'Custom job management platform for a field services company — replacing spreadsheets with a fully automated scheduling, dispatch, and reporting system.',
    tags: ['ASP.NET Core', 'React', 'Azure', 'SQL Server'],
    gradient: 'from-navy to-navy-dark',
    slug: 'fieldops',
    seoTitle: 'FieldOps — Field Services Job Management | Smartick Solutions',
    seoDescription: 'Bespoke job management system for a UK field services company, replacing spreadsheets with automated scheduling, dispatch, and real-time reporting.',
    challenge: 'A field services company was coordinating engineers, jobs, and scheduling across multiple spreadsheets — leading to double-bookings, lost jobs, and no reliable reporting on team performance or job completion.',
    solution: 'We built a purpose-designed job management platform covering the full workflow: job intake, engineer assignment, scheduling, on-site updates, and management reporting. The system is accessible from desktop and mobile, allowing field engineers to update job status in real time.',
    outcome: 'Scheduling errors eliminated. Management gained real-time visibility into job status and engineer workloads. Time spent on administrative coordination reduced significantly.',
  },
  {
    title: 'ParentConnect Mobile App',
    category: 'Mobile App Development',
    description: "Cross-platform iOS and Android app enabling parents to manage school pickups, notifications, and schedules in real time, integrated with the school's existing system.",
    tags: ['.NET MAUI', 'SignalR', 'Push Notifications'],
    gradient: 'from-scarlet to-red-800',
    slug: 'parentconnect',
    seoTitle: 'ParentConnect — School Pickup Mobile App | Smartick Solutions',
    seoDescription: 'Cross-platform iOS and Android mobile app for school pickup management, built with .NET MAUI and SignalR for real-time parent-school communication.',
    challenge: 'A school needed a way for parents to manage pickup schedules and receive real-time notifications — integrated with their existing management system — without maintaining separate iOS and Android codebases.',
    solution: 'We built a cross-platform mobile app using .NET MAUI that runs natively on both iOS and Android. The app integrates with the school\'s existing backend via a secure API, uses SignalR for real-time notifications, and supports OTP-based authentication for parents.',
    outcome: 'Parents can view and manage pickup schedules in real time. Staff receive instant notifications on schedule changes. Both iOS and Android covered from a single codebase.',
  },
  {
    title: 'ShopPro E-Commerce Platform',
    category: 'Website Development',
    description: 'End-to-end e-commerce solution with custom inventory management, payments, and a real-time analytics dashboard for a retail brand.',
    tags: ['WordPress', 'PHP', 'MySQL'],
    gradient: 'from-blue-600 to-indigo-800',
    slug: 'shoppro',
    seoTitle: 'ShopPro — E-Commerce Platform for Retail | Smartick Solutions',
    seoDescription: 'End-to-end e-commerce website with custom inventory management, Stripe payments, and a real-time analytics dashboard built for a UK retail brand.',
    challenge: 'A retail brand needed an e-commerce platform that went beyond standard off-the-shelf functionality — including custom inventory rules, flexible pricing logic, and a reporting dashboard that gave the team instant visibility into sales performance.',
    solution: 'We built a custom WordPress-based e-commerce platform with bespoke plugins handling the inventory management and pricing logic that standard WooCommerce extensions could not support. A custom analytics dashboard surfaces the key metrics the team needed without requiring separate reporting tools.',
    outcome: 'The brand launched with a fully operational online store meeting all their custom requirements. The analytics dashboard reduced time spent on manual reporting and gave the team the visibility they needed to make faster decisions.',
  },
];
