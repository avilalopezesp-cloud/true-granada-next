'use client';

import { useState } from 'react';
import WhatsAppIcon from './icons/WhatsAppIcon';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+]?[\d\s()-]{6,}$/;

const WA_MESSAGE = 'Hola, equipo de TRUE Granada 👋\n\nEstoy explorando vuestras experiencias y me gustaría recibir ayuda para encontrar la aventura perfecta para mí.\n\n¿Podéis recomendarme alguna?';

// Same premium card recipe as the Adventure Planner's result card — warm
// cream-to-cream2 gradient, subtle grain texture, thin gold border — so the
// contact page feels like a continuation of that experience, not a
// standalone corporate contact form.
export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [justSent, setJustSent] = useState(false);

  const isValidEmail = EMAIL_RE.test(email);
  const showEmailError = email.length > 0 && !isValidEmail;
  const showPhoneError = phone.length > 0 && !PHONE_RE.test(phone);

  function handleSend() {
    if (!isValidEmail) return;
    const subject = 'Quiero encontrar mi experiencia perfecta en Granada';
    const body = `Hola,\n\nMe gustaría que me ayudarais a encontrar mi experiencia perfecta en Granada.\n\nMi email: ${email}${phone ? `\nMi teléfono: ${phone}` : ''}${date ? `\nFecha aproximada del viaje: ${date}` : ''}\n\n¡Gracias!`;
    window.location.href = `mailto:info@betrue.es?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setJustSent(true);
  }

  return (
    <div className="mx-auto max-w-[520px] rounded-[14px] bg-cream2 p-1">
      <div className="overflow-hidden rounded-[14px] border border-black/10 bg-[linear-gradient(165deg,var(--color-cream)_0%,var(--color-cream2)_100%)]">
        <div className="relative p-5 sm:p-7">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
          />
          <div className="relative z-10">
            <a
              href={`https://wa.me/34689507099?text=${encodeURIComponent(WA_MESSAGE)}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2.5 rounded bg-gold px-7 py-[15px] text-[14px] font-bold uppercase tracking-[.03em] text-ink transition-all hover:-translate-y-0.5 hover:bg-gold2 hover:text-white"
            >
              <WhatsAppIcon size={16} />
              Escríbenos por WhatsApp
            </a>

            <div className="mt-5 rounded-[10px] border border-gold/25 bg-paper p-4 text-center shadow-[0_1px_3px_rgba(30,26,20,.06)] sm:p-5">
              <p className="mb-1 text-[13.5px] font-semibold text-ink">¿Prefieres otra forma de contacto?</p>
              <p className="mb-3.5 text-[12px] leading-[1.5] text-ink3">Déjanos tus datos y te ayudamos en cuanto podamos.</p>
              <div className="flex flex-col gap-2.5">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setJustSent(false); }}
                    placeholder="Tu email"
                    aria-invalid={showEmailError}
                    className={`w-full border-b bg-transparent px-1 py-2 text-center text-[13.5px] text-ink placeholder:text-ink3/60 focus:outline-none ${
                      showEmailError ? 'border-[#9A3B2E]' : 'border-black/15 focus:border-gold2'
                    }`}
                  />
                  {showEmailError && <p className="mt-1 text-[11px] text-[#9A3B2E]">Introduce un email con formato válido</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value); setJustSent(false); }}
                    placeholder="Tu teléfono (opcional)"
                    aria-invalid={showPhoneError}
                    className={`w-full border-b bg-transparent px-1 py-2 text-center text-[13.5px] text-ink placeholder:text-ink3/60 focus:outline-none ${
                      showPhoneError ? 'border-[#9A3B2E]' : 'border-black/15 focus:border-gold2'
                    }`}
                  />
                  {showPhoneError && <p className="mt-1 text-[11px] text-[#9A3B2E]">Introduce un teléfono con formato válido</p>}
                </div>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => { setDate(e.target.value); setJustSent(false); }}
                  className="w-full border-b border-black/15 bg-transparent px-1 py-2 text-center text-[13.5px] text-ink3 focus:border-gold2 focus:outline-none [color-scheme:light]"
                />
                <button
                  type="button"
                  onClick={handleSend}
                  disabled={!isValidEmail}
                  className="mt-1 rounded border border-gold2 px-4 py-2.5 text-[12.5px] font-semibold uppercase tracking-[.03em] text-gold2 transition-colors hover:bg-gold2 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-gold2"
                >
                  Enviar mensaje
                </button>
                {justSent && (
                  <p className="text-[11.5px] leading-[1.5] text-ink3">
                    Hemos abierto tu correo con todo listo para enviar. Si no se ha abierto nada, escríbenos directamente a{' '}
                    <a href="mailto:info@betrue.es" className="underline hover:text-gold2">info@betrue.es</a>.
                  </p>
                )}
              </div>
            </div>

            <div className="mt-5 flex flex-col items-center gap-1.5 text-center text-[13px] text-ink3">
              <a href="mailto:info@betrue.es" className="transition-colors hover:text-gold2">info@betrue.es</a>
              <a href="tel:+34689507099" className="transition-colors hover:text-gold2">+34 689 50 70 99</a>
              <span>Plaza Larga, Albaicín, Granada</span>
              <a href="https://instagram.com/betrue.esp" target="_blank" rel="noreferrer" className="transition-colors hover:text-gold2">
                @betrue.esp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
