export default function Maquette() {
  return (
    <section className="py-24 bg-[#F7F5FF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#7034F4] font-semibold tracking-widest text-sm uppercase mb-3">
            Maquette
          </p>
          <h2 className="text-4xl font-extrabold text-[#16229C]">
            Design de l'application
          </h2>
          <p className="text-gray-500 mt-3">Aperçu des écrans principaux de BailLyon</p>
        </div>

        {/* Main placeholder */}
        <div className="section-placeholder rounded-3xl w-full aspect-video flex flex-col items-center justify-center text-[#9B87FF] text-center p-8">
          <div className="text-5xl mb-4">📱</div>
          <p className="font-bold text-xl text-[#7034F4]">Maquette Figma</p>
          <p className="text-sm mt-2 opacity-70 max-w-md">
            Intégrer ici l'iframe Figma ou les captures d'écran des écrans principaux<br />
            (accueil, recherche, annonce, messagerie, profil)
          </p>
        </div>

        {/* Screen previews grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {["Accueil", "Recherche", "Annonce détaillée", "Messagerie"].map((screen, i) => (
            <div key={i} className="section-placeholder rounded-2xl aspect-[9/16] flex flex-col items-center justify-center text-[#9B87FF] text-center p-4">
              <p className="font-semibold text-sm">{screen}</p>
              <p className="text-xs mt-1 opacity-60">Écran {i + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
