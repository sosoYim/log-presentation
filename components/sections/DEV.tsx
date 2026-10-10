import DataModelDiagram from "@/components/DataModelDiagram";

const stores = [
  {
    name: "Cloud Firestore",
    color: "bg-[#16229C]",
    desc: "Profils, annonces, favoris et demandes de réservation. Les favoris sont une sous-collection de l'utilisateur.",
    paths: ["users", "users/{uid}/favorites", "listings", "bookingRequests"],
  },
  {
    name: "Firebase Realtime Database",
    color: "bg-[#7034F4]",
    desc: "Messagerie en temps réel. Les messages sont imbriqués sous leur conversation, qui reprend l'identifiant de la demande de réservation.",
    paths: ["conversations", "conversations/{id}/messages"],
  },
];

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
          <div className="md:col-span-2 bg-[#E7E8FD] rounded-3xl overflow-hidden shadow-sm border border-purple-50">
            <div className="bg-[#16229C] px-6 py-4">
              <h3 className="font-bold text-white text-lg">Modèle de données (ERD)</h3>
              <p className="text-white/60 text-sm">Entités et relations</p>
            </div>
            <div className="bg-white m-4 rounded-2xl p-4">
              <DataModelDiagram />
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-xs text-gray-500">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-[#16229C]" />
                  Cloud Firestore
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-[#7034F4]" />
                  Realtime Database
                </span>
                <span>
                  <code className="font-mono">role</code> : guest | host
                </span>
                <span>
                  <code className="font-mono">listings.status</code> : published | draft | inactive
                </span>
                <span>
                  <code className="font-mono">bookingRequests.status</code> : pending | accepted | rejected
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                Bases NoSQL : les clés étrangères (FK) ne sont pas imposées par la base, mais par le code et les règles de sécurité.
              </p>
            </div>
          </div>

          {/* Répartition par base de données */}
          <div className="bg-[#E7E8FD] rounded-3xl overflow-hidden shadow-sm border border-purple-50">
            <div className="bg-[#16229C] px-6 py-4">
              <h3 className="font-bold text-white text-lg">Répartition par base de données</h3>
              <p className="text-white/60 text-sm">Où vit chaque donnée</p>
            </div>
            <div className="p-4 flex flex-col gap-3">
              {stores.map((s) => (
                <div key={s.name} className="bg-white rounded-xl px-4 py-3 border border-purple-50">
                  <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-sm ${s.color}`} />
                    <h4 className="font-bold text-sm text-[#16229C]">{s.name}</h4>
                  </div>
                  <p className="text-xs text-gray-500 mt-1.5">{s.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {s.paths.map((path) => (
                      <code key={path} className="text-xs font-mono text-[#7034F4] bg-[#E7E8FD] rounded-md px-2 py-0.5">
                        {path}
                      </code>
                    ))}
                  </div>
                </div>
              ))}
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
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="/api-docs.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#7034F4] text-white text-sm font-semibold rounded-xl px-4 py-2.5 hover:bg-[#16229C] transition-colors"
                >
                  Ouvrir la spécification OpenAPI
                </a>
                <a
                  href="/openapi.yaml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#7034F4] underline underline-offset-4 hover:text-[#16229C]"
                >
                  Fichier YAML
                </a>
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
