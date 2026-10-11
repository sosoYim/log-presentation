import Image from "next/image";
import { ChevronRight } from "lucide-react";
import {
  maquetteSections,
  type MaquetteSection,
  type Screen,
} from "@/components/maquetteData";

const SCROLL_AREA =
  "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

function PhoneFrame({ screen, title }: { screen: Screen; title: string }) {
  return (
    <div className="w-[196px] h-[400px] rounded-[28px] border-[5px] border-[#1A202C] bg-white overflow-hidden shadow-sm">
      <a
        href={screen.src}
        target="_blank"
        rel="noopener noreferrer"
        className={`block h-full ${SCROLL_AREA}`}
        aria-label={`${title}, version mobile : ouvrir l'image entière`}
      >
        <Image
          src={screen.src}
          alt={`${title}, version mobile`}
          width={screen.width}
          height={screen.height}
          sizes="196px"
          className="w-full h-auto"
        />
      </a>
    </div>
  );
}

// Largeur affichée du cadre : dans une grille de 3 colonnes par défaut, presque pleine largeur quand il est seul.
const GRID_SIZES = "(min-width: 1280px) 400px, (min-width: 640px) 50vw, 100vw";
const WIDE_SIZES = "(min-width: 1280px) 920px, (min-width: 768px) 70vw, 100vw";

function BrowserFrame({
  screen,
  title,
  sizes = GRID_SIZES,
}: {
  screen: Screen;
  title: string;
  sizes?: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm">
      <div className="h-7 bg-gray-100 border-b border-gray-200 flex items-center gap-1.5 px-3">
        <span className="w-2 h-2 rounded-full bg-gray-300" />
        <span className="w-2 h-2 rounded-full bg-gray-300" />
        <span className="w-2 h-2 rounded-full bg-gray-300" />
      </div>
      <a
        href={screen.src}
        target="_blank"
        rel="noopener noreferrer"
        className={`block aspect-[16/10] ${SCROLL_AREA}`}
        aria-label={`${title}, version desktop : ouvrir l'image entière`}
      >
        <Image
          src={screen.src}
          alt={`${title}, version desktop`}
          width={screen.width}
          height={screen.height}
          sizes={sizes}
          className="w-full h-auto"
        />
      </a>
    </div>
  );
}

function RowLabel({ children }: { children: string }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-widest text-[#7034F4] mb-3">
      {children}
    </p>
  );
}

function FlowSection({
  section,
  index,
}: {
  section: MaquetteSection;
  index: number;
}) {
  const mobileSteps = section.steps.filter((step) => step.mobile);
  const desktopSteps = section.steps.filter((step) => step.desktop);
  const single = section.steps.length === 1 ? section.steps[0] : null;

  return (
    <div
      id={section.id}
      className="scroll-mt-36 bg-[#E7E8FD] rounded-3xl overflow-hidden shadow-sm border border-purple-50"
    >
      <div
        className={`px-6 py-4 ${index % 2 === 0 ? "bg-[#16229C]" : "bg-[#7034F4]"}`}
      >
        <h3 className="font-bold text-white text-lg">{section.label}</h3>
        <p className="text-white/70 text-sm">{section.description}</p>
      </div>

      {single ? (
        <div className="p-4">
          <div className="bg-white rounded-2xl p-5 flex flex-col md:flex-row gap-8 items-start">
            {single.mobile && (
              <div className="shrink-0">
                <RowLabel>Mobile</RowLabel>
                <PhoneFrame screen={single.mobile} title={single.title} />
              </div>
            )}
            {single.desktop && (
              <div className="flex-1 min-w-0 w-full">
                <RowLabel>Desktop</RowLabel>
                <BrowserFrame
                  screen={single.desktop}
                  title={single.title}
                  sizes={WIDE_SIZES}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="p-4 flex flex-col gap-4">
          <div className="bg-white rounded-2xl p-5">
            <RowLabel>Mobile</RowLabel>
            <div className="overflow-x-auto pb-2">
              <div className="flex items-start gap-2 w-max">
                {mobileSteps.map((step, i) => (
                  <div key={step.title} className="flex items-start gap-2">
                    {i > 0 && (
                      <ChevronRight
                        className="w-5 h-5 mt-[190px] shrink-0 text-[#BFB0FC]"
                        aria-hidden
                      />
                    )}
                    <figure className="w-[196px]">
                      <PhoneFrame screen={step.mobile!} title={step.title} />
                      <figcaption className="text-sm font-semibold text-[#16229C] text-center mt-3 leading-snug">
                        {step.title}
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {desktopSteps.length > 0 && (
            <div className="bg-white rounded-2xl p-5">
              <RowLabel>Desktop</RowLabel>
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {desktopSteps.map((step) => (
                  <figure key={step.title}>
                    <BrowserFrame screen={step.desktop!} title={step.title} />
                    <figcaption className="text-sm font-semibold text-[#16229C] mt-3 leading-snug">
                      {step.title}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Maquette() {
  const screenCount = maquetteSections.reduce(
    (total, section) =>
      total +
      section.steps.reduce(
        (count, step) => count + (step.desktop ? 1 : 0) + (step.mobile ? 1 : 0),
        0,
      ),
    0,
  );

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-[#7034F4] font-semibold tracking-widest text-sm uppercase mb-3">
            Maquette
          </p>
          <h2 className="text-4xl font-extrabold text-[#16229C]">
            Design de l&apos;application
          </h2>
          <p className="text-gray-500 mt-3">
            {screenCount} écrans, desktop et mobile, organisés en{" "}
            {maquetteSections.length} parcours
          </p>
        </div>
      </div>

      <nav
        aria-label="Parcours des maquettes"
        className="sticky top-16 z-40 bg-white/90 backdrop-blur border-y border-purple-100"
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {maquetteSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="shrink-0 text-sm font-semibold text-[#16229C] bg-[#E7E8FD] rounded-full px-4 py-1.5 hover:bg-[#16229C] hover:text-white transition-colors"
            >
              {section.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 mt-10 flex flex-col gap-8">
        <p className="text-sm text-gray-500 text-center">
          Faire défiler à l&apos;intérieur d&apos;un cadre pour parcourir
          l&apos;écran, ou cliquer pour ouvrir l&apos;image entière.
        </p>
        {maquetteSections.map((section, index) => (
          <FlowSection key={section.id} section={section} index={index} />
        ))}
      </div>
    </section>
  );
}
