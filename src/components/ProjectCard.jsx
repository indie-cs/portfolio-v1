import { ArrowUpRight } from "lucide-react";
import Tag from "./Tag";

const statusStyles = {
  Live: "bg-sage/15 text-sage",
  "In progress": "bg-amber-300/15 text-amber-200",
  "Coming soon": "bg-soft/10 text-soft",
  Archive: "bg-soft/10 text-soft",
};

export default function ProjectCard({ project }) {
  const { title, description, role, status, tags, image, demo, code } = project;

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-panel transition hover: -translate-y-1 hover:border-sage/40">
      {image ? (
        <img
          src={image}
          alt={`Screenshot of ${title}`}
          className="h-44 w-full object-cover"
        />
      ) : (
        <div className="grid h-44 place-items-center bg-linear-to-br from-[#1d2b2a] via-[#14201f] to-[#223344] text-xs text-muted">
          {status === "Coming soon" ? "Under construction" : "[SCREENSHOT]"}
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-ink">{title} </h3>
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs ${statusStyles[status]}`}
          >
            {status}
          </span>
        </div>
        <p className="text-sm text-soft">{description}</p>
        <p className="text-xs text-muted">{role}</p>

        <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
            ))}
        </div>

        <div className="mt-auto flex gap-5 pt-2 text-sm font-medium">
            {demo && (
                <a href={demo} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-1.5 text-sage hover:underline">
                    Live Demo
                    <ArrowUpRight size={14}/>
                </a>
            )}
            {code && (
                <a href={code} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center text-soft hover:text-sage">Code</a>
            )}
        </div>
      </div>
    </article>
  );
}
