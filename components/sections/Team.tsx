const team = [
  { name: "Dylan", role: "Product Owner", emoji: "🎯", desc: "Stratégie produit, priorisation et vision utilisateur" },
  { name: "Hamza", role: "Développeur", emoji: "⚙️", desc: "Développement fullstack · côté demandeur" },
  { name: "Sohyung", role: "Développeuse", emoji: "💻", desc: "Développement fullstack · côté annonceur" },
  { name: "Paulina", role: "Designer", emoji: "🎨", desc: "Identité visuelle, maquettes et charte graphique" },
];

export default function Team() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#7034F4] font-semibold tracking-widest text-sm uppercase mb-3">
            L'équipe
          </p>
          <h2 className="text-4xl font-extrabold text-[#16229C]">
            Derrière BailLyon
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div key={i} className="bg-[#F7F5FF] rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
              {/* Avatar placeholder */}
              <div className="w-20 h-20 mx-auto mb-4 section-placeholder rounded-full flex items-center justify-center text-3xl">
                {member.emoji}
              </div>
              <h3 className="font-bold text-[#16229C] text-lg">{member.name}</h3>
              <p className="text-[#7034F4] text-sm font-semibold mb-2">{member.role}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
