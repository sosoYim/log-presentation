import Backlog from "@/components/Backlog";
import LeanCanvas from "@/components/LeanCanvas";
import Roadmap from "@/components/Roadmap";

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
          <p className="text-gray-500 mt-3">Stratégie, priorisation et roadmap</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Lean Canvas */}
          <div className="md:col-span-2 bg-[#E7E8FD] rounded-3xl overflow-hidden shadow-sm border border-purple-50">
            <div className="bg-[#16229C] px-6 py-4">
              <h3 className="font-bold text-white text-lg">Lean Canvas</h3>
              <p className="text-white/60 text-sm">Vision et modèle économique</p>
            </div>
            <div className="p-4">
              <LeanCanvas />
            </div>
          </div>

          {/* Roadmap */}
          <div className="md:col-span-2 bg-white rounded-3xl overflow-hidden shadow-sm border border-purple-50">
            <div className="bg-[#7034F4] px-6 py-4">
              <h3 className="font-bold text-white text-lg">Roadmap</h3>
              <p className="text-white/60 text-sm">EPICs par sprint, du 09/09 au 11/11</p>
            </div>
            <div className="p-5">
              <Roadmap />
            </div>
          </div>

          {/* EPICs */}
          <div className="md:col-span-2 bg-[#E7E8FD] rounded-3xl overflow-hidden shadow-sm border border-purple-50">
            <div className="bg-[#16229C] px-6 py-4">
              <h3 className="font-bold text-white text-lg">EPICs & Backlog</h3>
              <p className="text-white/60 text-sm">Spécifications fonctionnelles détaillées</p>
            </div>
            <div className="p-4">
              <Backlog />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
