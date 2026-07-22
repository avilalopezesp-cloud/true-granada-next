import Image from 'next/image';

export default function WhatIsTrue() {
  return (
    <section className="bg-paper py-[100px]" id="about">
      <div className="mx-auto max-w-[1160px] px-7">
        <div className="grid grid-cols-2 items-center gap-20 max-[860px]:grid-cols-1">
          <div className="reveal">
            <p className="mb-[18px] text-[11px] font-semibold uppercase tracking-[.22em] text-gold2">What is TRUE</p>
            <h2 className="mb-6 font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] text-ink">
              No somos una empresa<br />de tours.<br />
              Somos <em className="font-light italic text-gold2">locales.</em>
            </h2>
            <p className="mb-8 border-l-4 border-gold pl-4 font-serif text-xl font-bold leading-[1.4] text-ink sm:text-2xl">
              No vendemos paquetes de actividades.
            </p>
            <div className="flex flex-col gap-5">
              <p className="text-[15px] leading-[1.7] text-ink2">
                <strong className="font-bold text-ink">Equipo del Albaicín</strong> — nacimos aquí y ayudamos a viajeros a vivir Granada de la forma que más les gusta.
              </p>
              <p className="text-[15px] leading-[1.7] text-ink2">
                <strong className="font-bold text-ink">Te escuchamos primero</strong> — cada persona busca algo diferente, por eso preguntamos antes de recomendar.
              </p>
              <p className="text-[15px] leading-[1.7] text-ink2">
                <strong className="font-bold text-ink">Conexión real</strong> — las actividades son solo la herramienta. Lo que ofrecemos es la Granada que la mayoría no llega a conocer.
              </p>
            </div>
          </div>
          <div className="reveal-group grid grid-cols-2 gap-3">
            <div className="reveal aspect-[3/4] overflow-hidden rounded-[10px]">
              <Image src="/images/team-1.jpg" alt="Equipo TRUE Granada" width={2048} height={928} className="h-full w-full object-cover" />
            </div>
            <div className="reveal mt-8 aspect-[3/4] overflow-hidden rounded-[10px] max-[860px]:mt-0">
              <Image src="/images/team-2.jpg" alt="Equipo TRUE Granada" width={1050} height={1400} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
