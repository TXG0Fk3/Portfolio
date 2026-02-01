import Link from "next/link";

export interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
}

export function ProjectCard({ title, description, tags, githubUrl }: ProjectProps) {
  return (
    <Link 
      href={githubUrl} 
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-blue-500/30 hover:bg-zinc-900 transition-all duration-300 cursor-pointer"
    >
      <div className="flex justify-between items-start">
        <h4 className="text-lg font-bold group-hover:text-blue-400 transition-colors">
          {title}
        </h4>
        <span className="text-zinc-600 group-hover:text-blue-400 transition-colors text-sm">
          github ↗
        </span>
      </div>

      <p className="text-zinc-400 text-sm mt-2">{description}</p>
      
      <div className="mt-4 flex gap-2 flex-wrap">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] bg-zinc-800 px-2 py-1 rounded border border-zinc-700 hover:bg-zinc-600 transition-colors">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}