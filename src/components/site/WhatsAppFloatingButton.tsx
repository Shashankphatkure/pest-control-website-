import { MessageCircle } from "lucide-react";
import { whatsappHref, defaultWhatsappMessage } from "@/lib/site-config";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={whatsappHref(defaultWhatsappMessage)}
      className="fixed bottom-24 right-5 z-40 hidden size-14 items-center justify-center rounded-full bg-[#1c5a3a] text-white shadow-[0_8px_24px_rgba(25,59,42,0.35)] transition-transform duration-200 hover:scale-105 lg:bottom-8 lg:flex"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="size-6" aria-hidden />
    </a>
  );
}
