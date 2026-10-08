import { Search, UserCheck, MessageSquare, CalendarCheck, Shield, FileText } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Recherche par dates",
    description: "Filtrez les logements selon vos dates d'arrivée et de départ pour ne voir que les annonces disponibles à votre période.",
    color: "bg-[#E7E8FD] text-[#6B4EFF]",
  },
  {
    icon: UserCheck,
    title: "Profils étudiants vérifiés",
    description: "Chaque profil est vérifié avec des justificatifs. Échangez avec des étudiants sérieux et faites confiance à la plateforme.",
    color: "bg-[#E7E8FD] text-[#6B4EFF]",
  },
  {
    icon: FileText,
    title: "Annonces détaillées",
    description: "Photos, équipements, localisation, disponibilités — toutes les informations dont vous avez besoin au même endroit.",
    color: "bg-[#E7E8FD] text-[#6B4EFF]",
  },
  {
    icon: MessageSquare,
    title: "Messagerie intégrée",
    description: "Posez vos questions et organisez votre arrivée directement sur la plateforme, sans quitter l'application.",
    color: "bg-[#E7E8FD] text-[#6B4EFF]",
  },
  {
    icon: CalendarCheck,
    title: "Gestion des réservations",
    description: "Envoyez une demande, suivez son statut en temps réel et confirmez votre réservation en toute simplicité.",
    color: "bg-[#E7E8FD] text-[#6B4EFF]",
  },
  {
    icon: Shield,
    title: "Sous-location encadrée",
    description: "Justificatifs et accord du propriétaire intégrés dans le processus pour sécuriser chaque sous-location.",
    color: "bg-[#E7E8FD] text-[#6B4EFF]",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#6B4EFF] font-semibold tracking-widest text-sm uppercase mb-3">
            Fonctionnalités clés
          </p>
          <h2 className="text-4xl font-extrabold text-[#2D1B8E]">
            Tout ce dont vous avez besoin,<br />au même endroit
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-purple-50"
              >
                <div className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center mb-4`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-bold text-[#2D1B8E] text-lg mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
