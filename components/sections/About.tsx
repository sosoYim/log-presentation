import Image from "next/image";

const values = [
  {
    icon: "/images/landing/features/shield-check.svg",
    title: "Confiance",
    desc: "Des profils étudiants vérifiés pour des échanges transparents et sécurisés entre pairs.",
  },
  {
    icon: "/images/landing/features/michelin-star.svg",
    title: "Simplicité",
    desc: "Recherche, messagerie et réservation centralisées sur une seule plateforme, en quelques clics.",
  },
  {
    icon: "/images/landing/features/nav-pointer-02.svg",
    title: "Mobilité",
    desc: "Un logement adapté à vos dates — stage, semestre, échange ou quelques mois à Lyon.",
  },
];

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h3 className="text-2xl font-extrabold text-[#16229C] mb-1 inline-block relative">
            L'idée en une phrase
            <span className="block h-1 w-12 bg-[#7034F4] rounded-full mt-2" />
          </h3>
          <p className="text-gray-500 mt-4 text-base leading-relaxed max-w-2xl">
            Un étudiant lyonnais peut proposer son logement pendant son absence, et un autre
            étudiant de passage peut le trouver, le réserver et s'installer — le tout entre
            pairs, en toute confiance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-white border border-purple-100 rounded-2xl p-7 shadow-sm hover:shadow-md hover:border-[#7034F4]/40 transition-all"
            >
              <div className="w-12 h-12 bg-[#E7E8FD] rounded-xl flex items-center justify-center mb-4">
                <Image src={v.icon} alt={v.title} width={24} height={24} />
              </div>
              <h4 className="text-xl font-extrabold text-[#16229C] mb-2">{v.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
