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
      className="group relative block p-6 rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:scale-102"
    >
      <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="flex justify-between items-start">
          <h4 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
            {title}
          </h4>
          
          <div className="text-zinc-500 group-hover:text-blue-400 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </div>

        <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
          {description}
        </p>
        
        <div className="mt-6 flex gap-2 flex-wrap">
          {tags.map(tag => (
            <span 
              key={tag} 
              className="text-[10px] font-mono uppercase tracking-widest bg-zinc-900 text-zinc-500 px-2 py-1 rounded border border-zinc-800 group-hover:border-blue-500/20 group-hover:text-zinc-300 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}