export default function DEV() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#7034F4] font-semibold tracking-widest text-sm uppercase mb-3">
            Développement
          </p>
          <h2 className="text-4xl font-extrabold text-[#16229C]">
            Architecture technique
          </h2>
          <p className="text-gray-500 mt-3">Modèle de données et spécifications API</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Modèle de données */}
          <div className="bg-[#E7E8FD] rounded-3xl overflow-hidden shadow-sm border border-purple-50">
            <div className="bg-[#16229C] px-6 py-4">
              <h3 className="font-bold text-white text-lg">Modèle de données (UML)</h3>
              <p className="text-white/60 text-sm">Entités et relations</p>
            </div>
            <div className="section-placeholder m-4 rounded-2xl aspect-square flex flex-col items-center justify-center text-[#BFB0FC] text-center p-6">
              <div className="text-4xl mb-3">🗄️</div>
              <p className="font-semibold text-lg">Diagramme UML</p>
              <p className="text-sm mt-1 opacity-70">
                Insérer ici le schéma UML<br />
                Utilisateurs, Annonces,<br />
                Demandes, Réservations<br />
                (image à remplacer)
              </p>
            </div>
          </div>

          {/* API */}
          <div className="bg-[#E7E8FD] rounded-3xl overflow-hidden shadow-sm border border-purple-50">
            <div className="bg-[#7034F4] px-6 py-4">
              <h3 className="font-bold text-white text-lg">Spécification API</h3>
              <p className="text-white/60 text-sm">OpenAPI / REST endpoints</p>
            </div>
            <div className="p-4 flex flex-col gap-3">
              {/* Endpoint examples */}
              {[
                { method: "POST", path: "/users", desc: "Création de compte" },
                { method: "POST", path: "/auth/connexion", desc: "Lien de connexion email" },
                { method: "GET", path: "/annonces", desc: "Recherche de logements" },
                { method: "POST", path: "/annonces", desc: "Publier une annonce" },
                { method: "POST", path: "/demandes", desc: "Envoyer une demande" },
                { method: "PATCH", path: "/demandes/{id}", desc: "Accepter / Refuser" },
                { method: "GET", path: "/messages/{id}", desc: "Conversation" },
              ].map((e, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-4 py-2.5 border border-purple-50">
                  <span className={`text-xs font-bold px-2 py-1 rounded-md w-14 text-center ${
                    e.method === "GET" ? "bg-emerald-100 text-emerald-700" :
                    e.method === "POST" ? "bg-blue-100 text-blue-700" :
                    "bg-orange-100 text-orange-700"
                  }`}>
                    {e.method}
                  </span>
                  <code className="text-xs font-mono text-[#7034F4] flex-1">{e.path}</code>
                  <span className="text-xs text-gray-400">{e.desc}</span>
                </div>
              ))}
              <div className="section-placeholder rounded-xl py-4 flex items-center justify-center text-center text-[#BFB0FC]">
                <p className="text-xs">Remplacer par la spec OpenAPI complète (YAML/image)</p>
              </div>
            </div>
          </div>

          {/* Architecture */}
          <div className="md:col-span-2 bg-[#E7E8FD] rounded-3xl overflow-hidden shadow-sm border border-purple-50">
            <div className="bg-[#16229C] px-6 py-4">
              <h3 className="font-bold text-white text-lg">Architecture & Stack technique</h3>
              <p className="text-white/60 text-sm">Choix technologiques</p>
            </div>
            <div className="section-placeholder m-4 rounded-2xl min-h-48 flex flex-col items-center justify-center text-[#BFB0FC] text-center p-8">
              <div className="text-4xl mb-3">⚙️</div>
              <p className="font-semibold text-lg">Schéma d'architecture</p>
              <p className="text-sm mt-1 opacity-70">
                Insérer ici le diagramme d'architecture (image à remplacer)<br />
                Frontend · Backend · Base de données · Auth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
