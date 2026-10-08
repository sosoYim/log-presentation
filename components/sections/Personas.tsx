const personas = [
  {
    name: "Alice",
    role: "Étudiante demandeuse",
    tag: "Je cherche un logement",
    emoji: "👩‍🎓",
    tagStyle: "bg-[#E7E8FD] text-[#7034F4]",
    borderColor: "border-t-[#7034F4]",
    quote: "L'hôtel, c'est trop cher. Un bail d'un an, c'est trop long. Comment trouver une chambre juste pour mon stage de 2 mois à Lyon ?",
  },
  {
    name: "Lucas",
    role: "Étudiant annonceur",
    tag: "Je propose mon logement",
    emoji: "👨‍💻",
    tagStyle: "bg-[#16229C] text-white",
    borderColor: "border-t-[#16229C]",
    quote: "Je pars en échange à l'étranger pendant 3 mois. Mon loyer continue de tourner... et ma chambre va rester vide tout ce temps ?",
  },
];

export default function Personas() {
  return (
    <section className="py-24 bg-[#E7E8FD]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#7034F4] font-semibold tracking-widest text-sm uppercase mb-3">
            Nos utilisateurs
          </p>
          <h2 className="text-4xl font-extrabold text-[#16229C]">
            Deux profils, une même plateforme
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            BailLyon s'adresse aux étudiants lyonnais, qu'ils cherchent un logement ou souhaitent sous-louer le leur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {personas.map((p, i) => (
            <div key={i} className={`bg-white rounded-3xl border-t-4 ${p.borderColor} shadow-sm p-8`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 section-placeholder rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                  {p.emoji}
                </div>
                <div>
                  <h3 className="font-extrabold text-[#16229C] text-2xl">{p.name}</h3>
                  <p className="text-gray-400 text-sm">{p.role}</p>
                  <span className={`inline-block mt-1.5 text-xs font-semibold px-3 py-1 rounded-full ${p.tagStyle}`}>
                    {p.tag}
                  </span>
                </div>
              </div>

              <blockquote className="bg-[#E7E8FD] rounded-2xl px-6 py-5 border-l-4 border-[#7034F4]">
                <p className="text-[#16229C] font-semibold text-base leading-relaxed italic">
                  « {p.quote} »
                </p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
