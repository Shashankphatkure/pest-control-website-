export interface ServiceDetail {
  slug: string;
  name: string;
  shortName: string;
  metaDescription: string;
  intro: string;
  signs: string[];
  whyProblem: string;
  faqs: { question: string; answer: string }[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  "cockroach-control": {
    slug: "cockroach-control",
    name: "Cockroach Control",
    shortName: "Cockroaches",
    metaDescription: "Professional cockroach treatment for homes and businesses — gel baiting and residual treatment that targets nests, not just what you can see.",
    intro: "Professional cockroach treatment for homes and businesses.",
    signs: [
      "Live or dead roaches, especially near kitchens and drains",
      "Dark droppings resembling ground coffee or pepper",
      "A persistent musty odour in cupboards or behind appliances",
      "Egg cases (small brown capsules) in hidden corners",
    ],
    whyProblem:
      "Cockroaches breed quickly and hide deep in cracks, drains and behind appliances, which is why surface spraying alone rarely solves an infestation. They're also drawn to food-prep areas, making them a genuine hygiene concern for kitchens.",
    faqs: [
      {
        question: "Will I see roaches for a few days after treatment?",
        answer: "It's common to see increased activity briefly after treatment as roaches are drawn out of hiding. This typically settles within a few days.",
      },
      {
        question: "Do I need to empty my kitchen cabinets?",
        answer: "Our technician will let you know what preparation is needed based on the treatment method used for your home.",
      },
    ],
  },
  "termite-control": {
    slug: "termite-control",
    name: "Termite Control",
    shortName: "Termites",
    metaDescription: "Soil and wood treatment that cuts off termite colonies at the source — for homes and businesses facing structural or furniture damage.",
    intro: "Professional termite treatment for homes and businesses.",
    signs: [
      "Mud tubes along walls, skirting or foundations",
      "Hollow-sounding or damaged wood in doors, frames or furniture",
      "Discarded wings near windowsills or light fixtures",
      "Sagging paint or tiny holes in wooden surfaces",
    ],
    whyProblem:
      "Termite colonies operate out of sight, often below flooring or inside walls, which means visible damage usually indicates activity that's been ongoing for some time. Early inspection helps limit the extent of structural damage.",
    faqs: [
      {
        question: "How is termite treatment different from general pest control?",
        answer: "Termite treatment targets the colony and the paths termites use to reach your property, which usually involves soil or localised wood treatment rather than surface spraying.",
      },
      {
        question: "Can termite damage be reversed?",
        answer: "Treatment stops active infestation, but structurally damaged wood may need separate repair. Your technician can advise on the extent of the damage seen during inspection.",
      },
    ],
  },
  "bed-bug-control": {
    slug: "bed-bug-control",
    name: "Bed Bug Control",
    shortName: "Bed Bugs",
    metaDescription: "Targeted treatment of mattresses, furniture and cracks where bed bugs breed — for homes, hotels and hostels.",
    intro: "Professional bed bug treatment for homes and businesses.",
    signs: [
      "Small itchy bite marks, often in a line, after waking up",
      "Tiny rust-coloured spots on mattress seams or bedding",
      "A sweet, musty odour around the sleeping area",
      "Visible bugs in mattress seams, headboards or furniture joints",
    ],
    whyProblem:
      "Bed bugs hide in seams, cracks and furniture joints during the day, which makes them easy to miss and easy to spread through luggage or secondhand furniture. Treating just the mattress usually isn't enough — nearby furniture and cracks need attention too.",
    faqs: [
      {
        question: "Do I need to throw away my mattress?",
        answer: "Not usually. Most mattresses can be treated and protected rather than replaced — your technician will advise if replacement is needed in severe cases.",
      },
      {
        question: "How many visits does bed bug treatment take?",
        answer: "This depends on the extent of the infestation. Our technician will confirm the recommended number of visits after inspection.",
      },
    ],
  },
  "rodent-control": {
    slug: "rodent-control",
    name: "Rat & Rodent Control",
    shortName: "Rodents",
    metaDescription: "Baiting, trapping and entry-point sealing to stop rats and mice returning — for homes, warehouses and food businesses.",
    intro: "Professional rodent control for homes and businesses.",
    signs: [
      "Droppings near food storage, skirting or under sinks",
      "Gnaw marks on wiring, packaging or wood",
      "Scratching sounds inside walls or ceilings, especially at night",
      "Grease marks along walls where rodents travel",
    ],
    whyProblem:
      "Rodents contaminate food, damage wiring and packaging, and reproduce quickly if entry points aren't addressed. Effective control usually needs a combination of baiting or trapping and sealing the routes rodents use to get in.",
    faqs: [
      {
        question: "Is rodent baiting safe with pets or kids at home?",
        answer: "We use tamper-resistant bait placements and will advise on safe positioning for your household during the visit.",
      },
      {
        question: "How do you stop rodents from coming back?",
        answer: "Beyond baiting or trapping, we identify and advise on sealing likely entry points, which is key to preventing re-infestation.",
      },
    ],
  },
  "mosquito-control": {
    slug: "mosquito-control",
    name: "Mosquito Control",
    shortName: "Mosquitoes",
    metaDescription: "Fogging and larval source treatment to cut breeding sites and adult mosquito numbers around your home or premises.",
    intro: "Professional mosquito control for homes and businesses.",
    signs: [
      "Frequent mosquito bites in the evening or early morning",
      "Standing water in plant trays, drains or containers on the property",
      "Visible mosquito activity around doorways and windows",
    ],
    whyProblem:
      "Mosquitoes breed in even small amounts of standing water, so lasting control needs both treatment of breeding sites and reduction of adult mosquitoes — spraying alone tends to give only short-term relief.",
    faqs: [
      {
        question: "How long does mosquito treatment last?",
        answer: "This varies with weather, water sources nearby and property layout. Your technician can advise on a suitable treatment interval for your property.",
      },
      {
        question: "Do I need to remove standing water myself?",
        answer: "Where possible, yes — reducing standing water around your property significantly improves how long treatment lasts.",
      },
    ],
  },
};
