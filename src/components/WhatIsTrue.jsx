import Image from 'next/image';

export default function WhatIsTrue() {
  return (
    <section className="bg-paper py-[100px]" id="about">
      <div className="mx-auto max-w-[1160px] px-7">
        <div className="grid grid-cols-2 items-center gap-20 max-[860px]:grid-cols-1">
          <div className="reveal">
            <p className="mb-[18px] text-[11px] font-semibold uppercase tracking-[.22em] text-gold2">What is TRUE</p>
            <h2 className="mb-6 font-serif text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] text-ink">
              No somos una empresa<br />de tours.<br />
              Somos <em className="font-light italic text-gold2">locales.</em>
            </h2>
            <div className="text-base font-light leading-[1.8] text-ink2">
              <p className="mb-3.5">No vendemos paquetes de actividades. No tenemos un catálogo que rellenar.</p>
              <p className="mb-3.5">Somos un equipo nacido en el Albaicín que ayuda a viajeros a vivir Granada de la forma que más les gusta. Cada persona busca algo diferente — por eso primero te escuchamos. Después te recomendamos.</p>
              <p className="mb-3.5">Las actividades son simplemente nuestra herramienta. Lo que vendemos es la conexión con una Granada que la mayoría no llega a conocer.</p>
            </div>
          </div>
          <div className="reveal-group grid grid-cols-2 gap-3 max-[860px]:hidden">
            <div className="reveal aspect-[3/4] overflow-hidden rounded-[10px]">
              <Image src="/images/team-1.jpg" alt="Equipo TRUE Granada" width={2048} height={928} className="h-full w-full object-cover" />
            </div>
            <div className="reveal mt-8 aspect-[3/4] overflow-hidden rounded-[10px]">
              <Image src="/images/team-2.jpg" alt="Equipo TRUE Granada" width={1050} height={1400} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
