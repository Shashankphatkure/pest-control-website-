import { Bug, Rat, BedDouble, Droplets, TreeDeciduous, type LucideIcon } from "lucide-react";
import type { PestKey } from "@/lib/site-config";

export const pestIconMap: Record<PestKey, LucideIcon> = {
  cockroach: Bug,
  termite: TreeDeciduous,
  "bed-bugs": BedDouble,
  rodent: Rat,
  mosquito: Droplets,
  ant: Bug,
  fly: Bug,
  other: Bug,
};
