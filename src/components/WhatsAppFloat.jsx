import WhatsAppIcon from './icons/WhatsAppIcon';

const MESSAGE = 'Hola, equipo de TRUE Granada 👋\n\nEstoy explorando vuestras experiencias y me gustaría recibir ayuda para encontrar la aventura perfecta para mí.\n\n¿Podéis recomendarme alguna?';

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/34689507099?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      aria-label="Habla con un experto local por WhatsApp"
      className="group fixed bottom-5 right-5 z-[200] flex h-8 w-8 items-center justify-center rounded-full border border-gold/50 bg-ink text-gold shadow-[0_4px_14px_rgba(0,0,0,.35)] transition-all hover:scale-105 hover:border-gold"
    >
      <WhatsAppIcon size={14} />
      <span className="pointer-events-none absolute right-[calc(100%+10px)] top-1/2 -translate-y-1/2 whitespace-nowrap rounded border border-gold/30 bg-ink px-3 py-1.5 text-[11.5px] font-medium text-cream opacity-0 shadow-[0_4px_14px_rgba(0,0,0,.3)] transition-all duration-200 group-hover:opacity-100">
        Habla con un experto local
      </span>
    </a>
  );
}
