export default function PO() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#7034F4] font-semibold tracking-widest text-sm uppercase mb-3">
            Product Owner
          </p>
          <h2 className="text-4xl font-extrabold text-[#16229C]">
            Vision produit
          </h2>
          <p className="text-gray-500 mt-3">Stratégie, priorisation et roadmap — par Dylan</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Lean Canvas */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-purple-50">
            <div className="bg-[#16229C] px-6 py-4">
              <h3 className="font-bold text-white text-lg">Lean Canvas</h3>
              <p className="text-white/60 text-sm">Vision et modèle économique</p>
            </div>
            <div className="section-placeholder m-4 rounded-2xl aspect-[4/3] flex flex-col items-center justify-center text-[#BFB0FC] text-center p-6">
              <div className="text-4xl mb-3">📊</div>
              <p className="font-semibold text-lg">Lean Canvas</p>
              <p className="text-sm mt-1 opacity-70">
                Insérer ici le Lean Canvas complet<br />
                (image ou tableau à remplacer)
              </p>
            </div>
          </div>

          {/* Roadmap */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-purple-50">
            <div className="bg-[#7034F4] px-6 py-4">
              <h3 className="font-bold text-white text-lg">Roadmap</h3>
              <p className="text-white/60 text-sm">Scénario minimal → cible</p>
            </div>
            <div className="section-placeholder m-4 rounded-2xl aspect-[4/3] flex flex-col items-center justify-center text-[#BFB0FC] text-center p-6">
              <div className="text-4xl mb-3">🗺️</div>
              <p className="font-semibold text-lg">Roadmap produit</p>
              <p className="text-sm mt-1 opacity-70">
                Insérer ici la roadmap des EPICs<br />
                MUST / SHOULD / COULD<br />
                (image à remplacer)
              </p>
            </div>
          </div>

          {/* EPICs */}
          <div className="md:col-span-2 bg-white rounded-3xl overflow-hidden shadow-sm border border-purple-50">
            <div className="bg-[#16229C] px-6 py-4">
              <h3 className="font-bold text-white text-lg">EPICs & Backlog</h3>
              <p className="text-white/60 text-sm">Spécifications fonctionnelles détaillées</p>
            </div>
            <div className="section-placeholder m-4 rounded-2xl min-h-64 flex flex-col items-center justify-center text-[#BFB0FC] text-center p-8">
              <div className="text-4xl mb-3">📋</div>
              <p className="font-semibold text-lg">Tableau des EPICs</p>
              <p className="text-sm mt-1 opacity-70 max-w-md">
                Insérer ici le tableau des EPICs avec priorités,<br />
                critères d'acceptation et statut<br />
                (image ou tableau à remplacer)
              </p>
            </div>
          </div>

          {/* Value Proposition Canvas */}
          <div className="md:col-span-2 bg-white rounded-3xl overflow-hidden shadow-sm border border-purple-50">
            <div className="bg-[#BFB0FC] px-6 py-4">
              <h3 className="font-bold text-white text-lg">Value Proposition Canvas</h3>
              <p className="text-white/80 text-sm">Demandeur & Annonceur</p>
            </div>
            <div className="section-placeholder m-4 rounded-2xl min-h-48 flex flex-col items-center justify-center text-[#BFB0FC] text-center p-8">
              <div className="text-4xl mb-3">🎯</div>
              <p className="font-semibold text-lg">Value Proposition Canvas</p>
              <p className="text-sm mt-1 opacity-70">
                Insérer ici le canvas (image à remplacer)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
