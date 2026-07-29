import WhatsAppIcon from './icons/WhatsAppIcon';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/34689507099"
      target="_blank"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-[200] flex h-[44px] w-[44px] items-center justify-center rounded-full bg-wa text-white shadow-[0_4px_16px_rgba(37,211,102,.3)] transition-all hover:scale-110 hover:shadow-[0_6px_22px_rgba(37,211,102,.45)]"
    >
      <span className="wa-pulse absolute inset-0 -z-10 animate-[waPulse_2.8s_ease-out_infinite] rounded-full bg-wa" />
      <WhatsAppIcon size={19} />
    </a>
  );
}
