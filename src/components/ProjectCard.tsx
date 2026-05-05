export interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  status?: "active" | "archived" | "wip";
}

export function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  status,
}: ProjectProps) {
  const statusLabel: Record<NonNullable<ProjectProps["status"]>, string> = {
    active: "active",
    archived: "archived",
    wip: "in progress",
  };

  const statusColor: Record<NonNullable<ProjectProps["status"]>, string> = {
    active: "bg-emerald-400",
    archived: "bg-zinc-600",
    wip: "bg-amber-400",
  };

  return (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block p-6 rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-zinc-400 hover:shadow-[0_0_24px_rgba(255,255,255,0.15)] hover:scale-102"
    >
      <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.10),transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="flex justify-between items-start gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <h4 className="text-xl font-semibold group-hover:text-zinc-100 transition-colors truncate">
              {title}
            </h4>
            {status && (
              <span className="flex items-center gap-1.5 shrink-0 text-[10px] font-mono text-zinc-500 border border-zinc-800 rounded-full px-2 py-0.5">
                <span
                  className={`w-1 h-1 rounded-full ${statusColor[status]} shrink-0`}
                />
                {statusLabel[status]}
              </span>
            )}
          </div>

          <div className="text-zinc-600 group-hover:text-zinc-100 transition-colors">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        </div>

        <p className="text-zinc-500 group-hover:text-zinc-400 text-sm mt-3 leading-relaxed">
          {description}
        </p>

        <div className="mt-5 flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono uppercase tracking-widest bg-zinc-900 text-zinc-500 px-2 py-1 rounded border border-zinc-800 group-hover:text-zinc-300 group-hover:border-zinc-600 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
