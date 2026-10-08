const demandeurSteps = [
  { step: "01", title: "Définissez vos dates", desc: "Indiquez vos dates d'arrivée et de départ à Lyon." },
  { step: "02", title: "Consultez les annonces", desc: "Parcourez les logements disponibles avec photos et équipements." },
  { step: "03", title: "Contactez & Réservez", desc: "Envoyez une demande et organisez votre arrivée via la messagerie." },
];

const annonceurSteps = [
  { step: "01", title: "Publiez votre logement", desc: "Ajoutez photos, disponibilités et informations en quelques minutes." },
  { step: "02", title: "Recevez des demandes", desc: "Consultez les profils vérifiés et échangez avec les candidats sérieux." },
  { step: "03", title: "Confirmez & Partez serein", desc: "Acceptez la demande, organisez la remise des clés et partez l'esprit tranquille." },
];

function StepList({ steps }: { steps: typeof demandeurSteps }) {
  return (
    <div className="flex flex-col gap-6">
      {steps.map((s, i) => (
        <div key={i} className="flex gap-5 items-start">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#6B4EFF] text-white font-bold flex items-center justify-center text-sm">
            {s.step}
          </div>
          <div>
            <h4 className="font-bold text-[#2D1B8E] text-base mb-1">{s.title}</h4>
            <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#F7F5FF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#6B4EFF] font-semibold tracking-widest text-sm uppercase mb-3">
            Comment ça marche
          </p>
          <h2 className="text-4xl font-extrabold text-[#2D1B8E]">
            Simple, rapide, humain
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Demandeur */}
          <div className="bg-[#F7F5FF] rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-[#6B4EFF] text-white flex items-center justify-center text-lg">🔍</div>
              <div>
                <p className="text-xs text-[#6B4EFF] font-semibold uppercase tracking-wider">Je cherche</p>
                <h3 className="font-bold text-[#2D1B8E] text-lg">Étudiant demandeur</h3>
              </div>
            </div>
            <StepList steps={demandeurSteps} />
          </div>

          {/* Annonceur */}
          <div className="bg-[#2D1B8E] rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center text-lg">🏠</div>
              <div>
                <p className="text-xs text-[#9B87FF] font-semibold uppercase tracking-wider">Je propose</p>
                <h3 className="font-bold text-white text-lg">Étudiant annonceur</h3>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              {annonceurSteps.map((s, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/15 text-white font-bold flex items-center justify-center text-sm border border-white/20">
                    {s.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base mb-1">{s.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
