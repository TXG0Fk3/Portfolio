interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
}

export function ProjectCard({ title, description, tags }: ProjectProps) {
  return (
    <div className="group p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-blue-500/50 transition-all">
      <h4 className="text-lg font-bold">{title}</h4>
      <p className="text-zinc-400 text-sm mt-2">{description}</p>
      <div className="mt-4 flex gap-2">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] bg-zinc-800 px-2 py-1 rounded border border-zinc-700">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}