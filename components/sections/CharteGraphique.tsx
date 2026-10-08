const colors = [
  { name: "Primaire", hex: "#7034F4", label: "Purple Primary" },
  { name: "Foncé", hex: "#16229C", label: "Purple Dark" },
  { name: "Gris", hex: "#E2E8F0", label: "Gray Light" },
  { name: "Clair", hex: "#E7E8FD", label: "Purple Light" },
  { name: "Moyen", hex: "#BFB0FC", label: "Purple Mid" },
  { name: "Noir", hex: "#1A202C", label: "Black" },
  { name: "Blanc", hex: "#FFFFFD", label: "White", border: true },
];

export default function CharteGraphique() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#7034F4] font-semibold tracking-widest text-sm uppercase mb-3">
            Charte graphique
          </p>
          <h2 className="text-4xl font-extrabold text-[#16229C]">
            Identité visuelle
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Couleurs */}
          <div>
            <h3 className="font-bold text-[#16229C] text-xl mb-6">Palette de couleurs</h3>
            <div className="grid grid-cols-3 gap-4">
              {colors.map((c, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div
                    className={`w-full aspect-square rounded-2xl ${c.border ? "border border-gray-200" : ""}`}
                    style={{ backgroundColor: c.hex }}
                  />
                  <div className="text-center">
                    <p className="font-semibold text-[#16229C] text-sm">{c.name}</p>
                    <p className="text-gray-400 text-xs font-mono">{c.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Typographie */}
          <div>
            <h3 className="font-bold text-[#16229C] text-xl mb-6">Typographie</h3>
            <div className="section-placeholder rounded-2xl p-6 flex flex-col gap-6">
              <div>
                <p className="text-xs text-[#BFB0FC] font-semibold uppercase tracking-wider mb-2">Police principale</p>
                <p className="text-4xl font-extrabold text-[#16229C]">Montserrat</p>
                <p className="text-gray-400 text-sm mt-1">AaBbCcDd 0123456789</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-extrabold text-[#16229C]">Titre H1 — 48px ExtraBold</p>
                <p className="text-xl font-bold text-[#16229C]">Titre H2 — 32px Bold</p>
                <p className="text-base font-semibold text-[#7034F4]">Sous-titre — 16px SemiBold</p>
                <p className="text-sm text-gray-500">Corps de texte — 14px Regular</p>
              </div>
            </div>

            {/* Logo placeholder */}
            <h3 className="font-bold text-[#16229C] text-xl mt-8 mb-4">Logo</h3>
            <div className="section-placeholder rounded-2xl p-8 flex items-center justify-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-2xl bg-[#7034F4] flex items-center justify-center text-white font-bold text-xl">BL</div>
                <p className="text-xs text-[#BFB0FC]">Icône</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-[#7034F4] flex items-center justify-center text-white font-bold text-sm">BL</div>
                  <span className="text-2xl font-extrabold text-[#16229C]">BailLyon</span>
                </div>
                <p className="text-xs text-[#BFB0FC]">Logo complet</p>
              </div>
            </div>
            <p className="text-xs text-center text-[#BFB0FC] mt-2">Remplacer par le logo officiel</p>
          </div>
        </div>

        {/* Composants UI */}
        <div className="mt-12">
          <h3 className="font-bold text-[#16229C] text-xl mb-6">Composants UI</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#E7E8FD] rounded-2xl p-4 flex flex-col gap-3">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Boutons</p>
              <button className="bg-[#7034F4] text-white font-semibold px-4 py-2 rounded-xl text-sm">Primaire</button>
              <button className="border-2 border-[#7034F4] text-[#7034F4] font-semibold px-4 py-2 rounded-xl text-sm">Secondaire</button>
            </div>
            <div className="bg-[#E7E8FD] rounded-2xl p-4 flex flex-col gap-3">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Badges</p>
              <span className="inline-block bg-[#E7E8FD] text-[#7034F4] text-xs font-semibold px-3 py-1 rounded-full w-fit">Vérifié ✓</span>
              <span className="inline-block bg-[#16229C] text-white text-xs font-semibold px-3 py-1 rounded-full w-fit">Disponible</span>
            </div>
            <div className="bg-[#E7E8FD] rounded-2xl p-4 flex flex-col gap-3">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Cartes</p>
              <div className="bg-white rounded-xl p-3 shadow-sm border border-purple-50">
                <div className="w-full h-12 section-placeholder rounded-lg mb-2" />
                <p className="font-semibold text-[#16229C] text-xs">Carte logement</p>
                <p className="text-gray-400 text-xs">Prix / nuit</p>
              </div>
            </div>
            <div className="bg-[#E7E8FD] rounded-2xl p-4 flex flex-col gap-3">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Champs</p>
              <input
                className="border border-purple-200 rounded-xl px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-[#7034F4]"
                placeholder="Ex : Lyon 1er"
                readOnly
              />
              <input
                className="border border-[#7034F4] rounded-xl px-3 py-2 text-sm w-full focus:outline-none ring-2 ring-[#7034F4]/20"
                placeholder="Actif"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
