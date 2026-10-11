import { ChevronRight } from "lucide-react";
import { epics, type Priority, type UserStory } from "./backlogData";

const PRIORITIES: Priority[] = ["Must have", "Should have", "Could have", "Won't have"];

const PRIORITY_STYLE: Record<Priority, string> = {
  "Must have": "bg-[#16229C] text-white",
  "Should have": "bg-[#7034F4] text-white",
  "Could have": "bg-[#E7E8FD] text-[#16229C]",
  "Won't have": "bg-white text-gray-500 border border-dashed border-gray-300",
};

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

// « En tant que <rôle>, je souhaite <besoin> afin de <bénéfice>. »
function splitStory(description: string) {
  const match = description.match(/^En tant qu(?:e |')(.+?), je souhaite (.+)$/);
  if (!match) return { role: "", want: description, benefit: "" };
  const [, role, rest] = match;
  const cut = rest.lastIndexOf(" afin d");
  if (cut === -1) return { role, want: rest, benefit: "" };
  return {
    role,
    want: rest.slice(0, cut).replace(/,$/, ""),
    benefit: rest.slice(cut + 1),
  };
}

function PriorityBadge({ priority }: { priority: Priority }) {
  return (
    <span className={`text-[11px] font-semibold rounded-md px-2 py-0.5 whitespace-nowrap ${PRIORITY_STYLE[priority]}`}>
      {priority}
    </span>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400 mb-1.5">{title}</p>
      <ul className="list-disc pl-4 flex flex-col gap-1 text-xs text-gray-600 leading-snug marker:text-gray-300">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Story({ story }: { story: UserStory }) {
  const { role, want, benefit } = splitStory(story.description);
  return (
    <details className="group border-t border-[#E7E8FD] first:border-t-0">
      <summary className="flex items-start gap-3 px-5 py-3 cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-[#F5F3FF] transition-colors">
        <ChevronRight className="w-4 h-4 mt-0.5 shrink-0 text-[#BFB0FC] transition-transform group-open:rotate-90" />
        <span className="font-mono text-xs font-semibold text-[#7034F4] mt-0.5 shrink-0">{story.id}</span>
        <span className="flex-1 min-w-0">
          <span className="block text-[11px] font-semibold uppercase tracking-wide text-gray-400">{role}</span>
          <span className="block text-sm font-semibold text-[#16229C] leading-snug">{capitalize(want)}</span>
        </span>
        <PriorityBadge priority={story.priority} />
      </summary>
      <div className="pl-12 pr-5 pb-4 flex flex-col gap-3">
        {benefit && <p className="text-xs text-gray-600 leading-snug">{capitalize(benefit)}</p>}
        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
          <DetailList title="Critères d'acceptation" items={story.criteria} />
          <DetailList title="Exclusions" items={story.exclusions} />
        </div>
      </div>
    </details>
  );
}

export default function Backlog() {
  const stories = epics.flatMap((epic) => epic.stories);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 bg-white rounded-2xl border border-purple-50 px-5 py-4">
        <p className="text-sm text-gray-500">
          <span className="text-2xl font-extrabold text-[#16229C]">{epics.length}</span> EPICs
        </p>
        <p className="text-sm text-gray-500">
          <span className="text-2xl font-extrabold text-[#16229C]">{stories.length}</span> user stories
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:ml-auto">
          {PRIORITIES.map((priority) => (
            <span key={priority} className="flex items-center gap-1.5 text-sm font-bold text-[#16229C]">
              {stories.filter((story) => story.priority === priority).length}
              <PriorityBadge priority={priority} />
            </span>
          ))}
        </div>
      </div>

      {epics.map((epic) => (
        <div key={epic.id} className="bg-white rounded-2xl border border-purple-50 overflow-hidden">
          <div className="flex items-baseline gap-3 px-5 py-3 bg-[#F5F3FF] border-b border-[#E7E8FD]">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#7034F4]">{epic.id}</span>
            <h4 className="font-bold text-[#16229C]">{epic.name}</h4>
            <span className="ml-auto text-xs text-gray-400">
              {epic.stories.length} {epic.stories.length > 1 ? "user stories" : "user story"}
            </span>
          </div>
          {epic.stories.map((story) => (
            <Story key={story.id} story={story} />
          ))}
        </div>
      ))}

      <p className="text-xs text-gray-400">
        Cliquer sur une user story pour afficher ses critères d&apos;acceptation et ses exclusions.
      </p>
    </div>
  );
}
