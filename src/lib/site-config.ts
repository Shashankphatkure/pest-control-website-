/**
 * Central business data. Everything marked TODO is a placeholder —
 * replace with the real business's facts before launch. Nothing here
 * should be invented in copy elsewhere; pull from this file instead.
 */

export const business = {
  name: "Sentinel Pest Control", // TODO: replace with real company name
  legalName: "Sentinel Pest Control Pvt. Ltd.", // TODO
  tagline: "Professional pest control without the hassle.",
  city: "Mumbai", // TODO: primary city
  region: "Mumbai Metropolitan Region", // TODO
  phone: "+91 90000 00000", // TODO: real phone number
  phoneHref: "tel:+919000000000", // TODO
  whatsapp: "+91 90000 00000", // TODO: real WhatsApp number
  whatsappNumber: "919000000000", // TODO: WhatsApp number, digits only, with country code
  email: "hello@sentinelpest.example", // TODO
  address: "TODO: Street address, Locality, Mumbai, Maharashtra – 400001", // TODO
  hours: "Mon–Sat, 9:00 AM – 7:00 PM", // TODO
  mapEmbedUrl: "", // TODO: Google Maps embed URL
  googleRating: null as number | null, // TODO: e.g. 4.9 — leave null until verified
  googleReviewCount: null as number | null, // TODO: e.g. 210 — leave null until verified
  googleReviewsUrl: "", // TODO: link to Google Business reviews
  social: {
    instagram: "", // TODO
    facebook: "", // TODO
  },
};

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${business.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappMessage =
  "Hi, I'd like a quote for pest control. I'm located in ";

export type PestKey =
  | "cockroach"
  | "termite"
  | "bed-bugs"
  | "rodent"
  | "mosquito"
  | "ant"
  | "fly"
  | "other";

export interface ServiceSummary {
  key: PestKey;
  name: string;
  slug: string | null; // null = no dedicated page yet, links to /services
  problem: string;
  solution: string;
}

export const services: ServiceSummary[] = [
  {
    key: "cockroach",
    name: "Cockroach Control",
    slug: "cockroach-control",
    problem: "Cockroaches in kitchens, drains and behind appliances.",
    solution: "Gel baiting and residual treatment that targets nests, not just what you can see.",
  },
  {
    key: "termite",
    name: "Termite Control",
    slug: "termite-control",
    problem: "Hidden colonies damaging furniture, doors and structural wood.",
    solution: "Soil and wood treatment that cuts off colonies at the source.",
  },
  {
    key: "bed-bugs",
    name: "Bed Bug Control",
    slug: "bed-bug-control",
    problem: "Bites, sleepless nights and bugs hiding in mattress seams.",
    solution: "Targeted treatment of mattresses, furniture and cracks where bed bugs breed.",
  },
  {
    key: "rodent",
    name: "Rat & Rodent Control",
    slug: "rodent-control",
    problem: "Rats and mice contaminating food and gnawing through wiring.",
    solution: "Baiting, trapping and entry-point sealing to stop rodents returning.",
  },
  {
    key: "mosquito",
    name: "Mosquito Control",
    slug: "mosquito-control",
    problem: "Mosquitoes breeding around your home or premises.",
    solution: "Fogging and larval source treatment to cut breeding sites and adult numbers.",
  },
  {
    key: "ant",
    name: "Ant Control",
    slug: null,
    problem: "Ant trails across kitchens and food storage areas.",
    solution: "Bait-based treatment that eliminates the colony, not just visible trails.",
  },
  {
    key: "fly",
    name: "Fly Control",
    slug: null,
    problem: "Flies around waste areas, kitchens and food-handling zones.",
    solution: "Source reduction and targeted treatment to bring fly activity down.",
  },
];

export const serviceAreas: string[] = [
  // TODO: confirm real serviceable areas
  "Mumbai",
  "Thane",
  "Navi Mumbai",
  "Andheri",
  "Bandra",
  "Borivali",
  "Dadar",
  "Ghatkopar",
  "Vashi",
];

export interface PricingItem {
  name: string;
  startingPrice: string | null; // TODO: fill with real starting price, e.g. "₹1,499"
}

export const pricing: PricingItem[] = [
  { name: "General Pest Control", startingPrice: null },
  { name: "Termite Treatment", startingPrice: null },
  { name: "Bed Bug Treatment", startingPrice: null },
  { name: "Annual Maintenance Contract", startingPrice: null },
];

export interface Review {
  name: string;
  locality: string;
  rating: number;
  text: string;
}

// TODO: replace with real, permissioned customer reviews. Empty until verified.
export const reviews: Review[] = [];

export const faqs: { question: string; answer: string }[] = [
  {
    question: "How long does pest treatment take?",
    answer:
      "Most residential treatments take between 45 minutes and 2 hours, depending on the size of the property and the type of treatment. Our technician will confirm the expected duration before starting.",
  },
  {
    question: "Do I need to leave my home during treatment?",
    answer:
      "For most general pest treatments, you don't need to leave. For certain treatments, we'll let you know in advance if it's better for you to step out for a short period.",
  },
  {
    question: "Is the treatment safe for children and pets?",
    answer:
      "We follow responsible treatment procedures and use products as per label guidance. We'll advise you on any precautions to take — such as keeping children and pets away from treated areas until they've dried — as part of the visit.",
  },
  {
    question: "How long before I can use the treated room?",
    answer:
      "This depends on the treatment type. Our technician will give you specific guidance for your treatment before leaving.",
  },
  {
    question: "How often should pest control be done?",
    answer:
      "It depends on the pest and your property. Some situations are resolved with a single treatment and follow-up, others benefit from a periodic maintenance plan. We'll recommend what's appropriate after inspection.",
  },
  {
    question: "What happens after treatment?",
    answer:
      "We provide follow-up guidance so you know what to expect in the days after treatment, and what to do if you notice continued activity.",
  },
  {
    question: "Do you offer commercial pest control?",
    answer:
      "Yes — for restaurants, hotels, offices, warehouses, factories, clinics, schools, housing societies and other food businesses. Get in touch to discuss your premises.",
  },
  {
    question: "Do you provide follow-up visits?",
    answer:
      "Where appropriate for the treatment type, yes. Your technician will confirm what's included as part of your service.",
  },
  {
    question: "How much does pest control cost?",
    answer:
      "Pricing depends on property size, treatment type and infestation level. Share a few details with us and we'll get back to you with a personalised quote.",
  },
];

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/about" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Areas We Serve", href: "/areas" },
  { label: "Reviews", href: "/#reviews" },
];

export const footerServiceLinks = services
  .filter((s) => s.slug)
  .map((s) => ({ label: s.name, href: `/services/${s.slug}` }));

export const footerCompanyLinks = [
  { label: "About", href: "/about" },
  { label: "Why Us", href: "/about#why-us" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Areas We Serve", href: "/areas" },
  { label: "FAQ", href: "/faq" },
];
