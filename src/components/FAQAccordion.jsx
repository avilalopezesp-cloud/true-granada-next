'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: '¿Qué es TRUE?',
    a: 'TRUE es una forma diferente de descubrir Granada. Conectamos personas con actividades, lugares y experiencias para que cada una pueda vivir la ciudad a su manera.',
  },
  {
    q: '¿Qué tipo de experiencias puedo hacer?',
    a: 'Desde e-bikes y rutas por Granada hasta barranquismo, vías ferratas, naturaleza, gastronomía, cultura y otras experiencias. Estamos creando una red de actividades para que puedas elegir según lo que te apetezca vivir.',
  },
  {
    q: '¿Tengo que saber qué quiero hacer?',
    a: 'No. Ese es precisamente el punto. Cuéntanos cuánto tiempo tienes, qué te gusta y qué tipo de experiencia buscas. Nosotros te ayudamos a encontrar opciones y crear un plan.',
  },
  {
    q: '¿Puedo crear mi propia aventura?',
    a: 'Sí. Puedes combinar diferentes actividades, lugares y formas de disfrutar Granada. Algunas experiencias pueden ser completamente personalizadas.',
  },
  {
    q: '¿TRUE vende tours?',
    a: 'No queremos ser simplemente un catálogo de tours. Queremos ayudarte a encontrar tu propia forma de vivir Granada. Algunas experiencias serán rutas ya preparadas y otras se construirán contigo.',
  },
  {
    q: '¿Puedo hacer una experiencia si viajo solo?',
    a: 'Sí. Puedes venir solo, en pareja, con amigos o en grupo. Buscamos opciones que tengan sentido para cada tipo de viajero.',
  },
  {
    q: '¿Y si no encuentro lo que estoy buscando?',
    a: 'Escríbenos. Quizás conozcamos una actividad, un lugar o una experiencia que todavía no aparece en la web.',
  },
  {
    q: '¿Las actividades son para todos los niveles?',
    a: 'Depende de cada experiencia. Antes de reservar te explicaremos el nivel, requisitos y todo lo que necesitas saber.',
  },
  {
    q: '¿Cómo funciona una reserva?',
    a: 'Primero nos cuentas qué quieres hacer. Después te recomendamos una experiencia o diseñamos una propuesta contigo. Una vez que todo esté claro, confirmamos la reserva.',
  },
  {
    q: '¿Puedo cambiar mi experiencia?',
    a: 'Claro. Si todavía no está confirmada, podemos ajustar la propuesta para encontrar algo que encaje mejor contigo.',
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mx-auto max-w-[760px]">
      {FAQS.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q} className="border-b border-black/10">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-5 py-5 text-left"
            >
              <span className="font-serif text-[17px] font-bold text-ink sm:text-[19px]">{item.q}</span>
              <span
                className={`relative flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold2 transition-transform duration-300 ${
                  open ? 'rotate-45' : ''
                }`}
              >
                <span className="absolute h-[1.5px] w-3 bg-current" />
                <span className="absolute h-3 w-[1.5px] bg-current" />
              </span>
            </button>
            <div className="grid transition-[grid-template-rows] duration-300 ease-in-out" style={{ gridTemplateRows: open ? '1fr' : '0fr' }}>
              <div className="overflow-hidden">
                <p className="max-w-[640px] pb-5 text-[15px] leading-[1.75] text-ink2">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
