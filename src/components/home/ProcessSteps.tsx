import { PhoneCall, Search, SprayCan, ShieldCheck } from "lucide-react";
import { ProcessStepsSection } from "@/components/shared/ProcessStepsSection";

const steps = [
  { number: "01", icon: PhoneCall, title: "Contact Us", description: "Tell us what pest problem you're experiencing." },
  { number: "02", icon: Search, title: "Inspection", description: "We understand the problem and recommend the right treatment." },
  { number: "03", icon: SprayCan, title: "Treatment", description: "Our technician performs the treatment safely and professionally." },
  { number: "04", icon: ShieldCheck, title: "Protect", description: "Follow-up guidance helps reduce the chances of the problem returning." },
];

export function ProcessSteps() {
  return (
    <ProcessStepsSection
      id="how-it-works"
      title="A simple, four-step process"
      description="No confusion about what happens next. Here's exactly how we work."
      steps={steps}
    />
  );
}
