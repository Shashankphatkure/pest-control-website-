import type { PestKey } from "@/lib/site-config";

export const pestImageMap: Record<PestKey, { src: string; alt: string }> = {
  cockroach: { src: "/images/pests/cockroach.jpg", alt: "Close-up of a cockroach" },
  termite: { src: "/images/pests/termite.jpg", alt: "Close-up of subterranean termites" },
  "bed-bugs": { src: "/images/pests/bed-bugs.jpg", alt: "Close-up of a bed bug" },
  rodent: { src: "/images/pests/rodent.jpg", alt: "Close-up of a house mouse" },
  mosquito: { src: "/images/pests/mosquito.jpg", alt: "Close-up of a mosquito biting skin" },
  ant: { src: "/images/pests/ant.jpg", alt: "Close-up of an ant" },
  fly: { src: "/images/pests/fly.jpg", alt: "Close-up of a fly" },
  other: { src: "/images/pests/cockroach.jpg", alt: "Close-up of a common household pest" },
};
