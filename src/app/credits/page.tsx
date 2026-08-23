import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { business } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Photo Credits",
  description: "Attribution for stock photography used on this site pending real company photography.",
};

const credits = [
  {
    file: "Cockroach photo",
    title: "German cockroach (Blattella germanica) probably",
    author: "gailhampshire",
    license: "CC BY 2.0",
    url: "https://commons.wikimedia.org/wiki/File:German_cockroach_(Blattella_germanica)_probably_(43118262090).jpg",
  },
  {
    file: "Termite photo",
    title: "Reticulitermes flavipes K8085-6",
    author: "USDA Agricultural Research Service",
    license: "Public domain",
    url: "https://commons.wikimedia.org/wiki/File:Reticulitermes_flavipes_K8085-6.jpg",
  },
  {
    file: "Bed bug photo",
    title: "Cimex lectularius (bed bug)",
    author: "Gilles San Martin",
    license: "CC BY-SA 2.0",
    url: "https://commons.wikimedia.org/wiki/File:Cimex_lectularius_(bed_bug)_(5975917188).jpg",
  },
  {
    file: "Rodent photo",
    title: "House mouse (Mus musculus) 2766",
    author: "Ahunt",
    license: "CC0",
    url: "https://commons.wikimedia.org/wiki/File:House_mouse_(Mus_musculus)_2766.jpg",
  },
  {
    file: "Mosquito photo",
    title: "Aedes mosquito biting human in Sanjay Van",
    author: "Yash raina",
    license: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Aedes_mosquito_biting_human_in_Sanjay_Van.jpg",
  },
  {
    file: "Ant photo",
    title: "Ant close up, Brazil",
    author: "Rodrigo Menezes",
    license: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:Ant_close_up,_Brazil.jpg",
  },
  {
    file: "Fly photo",
    title: "Flesh Fly, Los Angeles",
    author: "Junkyardsparkle",
    license: "CC0",
    url: "https://commons.wikimedia.org/wiki/File:Flesh_Fly_Los_Angeles_2015-08-06_5.jpg",
  },
  {
    file: "Technician / treatment photo",
    title: "Pestering pests, Entomology sprays down threats",
    author: "Senior Airman Austin Harvill / U.S. Air Force",
    license: "Public domain",
    url: "https://commons.wikimedia.org/wiki/File:Pestering_pests,_Entomology_sprays_down_threats_150323-F-XD389-010.jpg",
  },
  {
    file: "Residential building photo",
    title: "A skyscraper in Mumbai from railway station",
    author: "Nicolas Vigier",
    license: "CC0",
    url: "https://commons.wikimedia.org/wiki/File:A_skyscraper_in_Mumbai_from_railway_station.jpg",
  },
  {
    file: "Commercial kitchen photo",
    title: "A busy market kitchen worker preparing fresh vegetables",
    author: "PattayaPatrol",
    license: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:DSCF0807_A_busy_market_kitchen_worker_carefully_preparing_fresh_vegetables_at_a_stainless-steel_counter_lined_with_squeeze_bottles_and_ingredients.jpg",
  },
];

export default function CreditsPage() {
  return (
    <Section tone="cream" className="pt-14 pb-20 sm:pt-16">
      <SectionHeading
        eyebrow="Legal"
        title="Photo Credits"
        description={`Real ${business.name} photography hasn't been shot yet, so this site uses openly licensed stock photos as placeholders. Attribution below, as required by their licenses — replace these with real company photography and remove this page when that's ready.`}
      />
      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-[var(--color-ink)]/15 text-left font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--color-charcoal)]/50">
              <th className="py-3 pr-4 font-medium">Used for</th>
              <th className="py-3 pr-4 font-medium">Title</th>
              <th className="py-3 pr-4 font-medium">Author</th>
              <th className="py-3 pr-4 font-medium">License</th>
            </tr>
          </thead>
          <tbody>
            {credits.map((c) => (
              <tr key={c.url} className="border-b border-[var(--color-ink)]/8">
                <td className="py-3 pr-4 text-[var(--color-charcoal)]/80">{c.file}</td>
                <td className="py-3 pr-4">
                  <a href={c.url} className="text-[var(--color-signal-deep)] underline underline-offset-2">
                    {c.title}
                  </a>
                </td>
                <td className="py-3 pr-4 text-[var(--color-charcoal)]/70">{c.author}</td>
                <td className="py-3 pr-4 text-[var(--color-charcoal)]/70">{c.license}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6 max-w-2xl text-xs leading-relaxed text-[var(--color-charcoal)]/50">
        All images sourced from Wikimedia Commons. CC BY and CC BY-SA licenses require attribution — this page
        provides it. No changes were made to the original photos beyond standard web resizing.
      </p>
    </Section>
  );
}
