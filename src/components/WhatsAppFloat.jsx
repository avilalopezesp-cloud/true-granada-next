import WhatsAppIcon from './icons/WhatsAppIcon';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/34689507099"
      target="_blank"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-[200] flex h-[54px] w-[54px] items-center justify-center rounded-full bg-wa text-white shadow-[0_4px_20px_rgba(37,211,102,.35)] transition-all hover:scale-110 hover:shadow-[0_6px_28px_rgba(37,211,102,.5)]"
    >
      <span className="wa-pulse absolute inset-0 -z-10 animate-[waPulse_2.8s_ease-out_infinite] rounded-full bg-wa" />
      <WhatsAppIcon size={24} />
    </a>
  );
}
