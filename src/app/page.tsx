import { SkillBadge, SkillBadgeProps } from "@/components/SkillBadge";

const skills: SkillBadgeProps[] = [
  { name: "C", iconPath: "/icons/c.svg", color: "#394AAB" },
  { name: "C++", iconPath: "/icons/cplusplus.svg", color: "#00599C" },
  { name: "C# / .NET", iconPath: "/icons/csharp.svg", color: "#7F5CFF" },
  { name: "Rust", iconPath: "/icons/rust.svg", color: "#E43717" },
  { name: "Python", iconPath: "/icons/python.svg", color: "#FFD040" },
  { name: "TypeScript", iconPath: "/icons/typescript.svg", color: "#007ACC" },

  { name: "HTML", iconPath: "/icons/html5.svg", color: "#E14E1D" },
  { name: "CSS", iconPath: "/icons/css.svg", color: "#0277BD" },
  { name: "Next.js", iconPath: "/icons/nextjs.svg", color: "#FFFFFF" },
  { name: "Bun", iconPath: "/icons/bun.svg", color: "#fbf0df" },
  { name: "Tailwind", iconPath: "/icons/tailwindcss.svg", color: "#38BDF8" },

  { name: "MySQL", iconPath: "/icons/mysql.svg", color: "#FFFFFF" },
  { name: "PostgreSQL", iconPath: "/icons/postgresql.svg", color: "#FFFFFF" },
  { name: "SQLite", iconPath: "/icons/sqlite.svg", color: "#007AB5" },

  { name: "Docker", iconPath: "/icons/docker.svg", color: "#2396ED" },
  { name: "Git", iconPath: "/icons/git.svg", color: "#F03C2E" },
  { name: "Nix", iconPath: "/icons/nix.svg", color: "#7EB8E2" },
  { name: "NeoVim", iconPath: "/icons/neovim.svg", color: "#59953B" },
  { name: "Visual Studio", iconPath: "/icons/visualstudio.svg", color: "#B857F6" },
  { name: "VS Code", iconPath: "/icons/vscode.svg", color: "#3C99D4" },
  { name: "Linux", iconPath: "/icons/linux.svg", color: "#ECEFF1" },
  { name: "ArchLinux", iconPath: "/icons/archlinux.svg", color: "#1793D1" },
  { name: "Windows", iconPath: "/icons/windows.svg", color: "#0D89DB" },

  { name: "Bash", iconPath: "/icons/bash.svg", color: "#FFFFFF" },
  { name: "PowerShell", iconPath: "/icons/powershell.svg", color: "#4478D2" }
];

  {
    title: "YT Downloader",
    description: "A program that allows you to download videos, music and playlists from YouTube.",
    tags: ["C#", "WinUI 3", "MVVM", "YoutubeExplode"],
  },
  {
    title: "Yukari",
    description: "A modern, extensible comic and manga reader for Windows. It features a plugin-based architecture for dynamic source integration and a fast, local SQLite-backed library.",
    tags: ["C#", "WinUI 3", "MVVM", "SqLite"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 font-sans p-8">
      
      <header className="max-w-4xl mx-auto flex justify-between items-center py-10">
        <h1 className="text-xl font-mono font-bold tracking-tighter">
          <span className="text-blue-500">_</span>TXG0Fk3
        </h1>
        <nav className="flex gap-6 text-sm text-zinc-400 font-medium">
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
        </nav>
      </header>

      <section className="max-w-4xl mx-auto py-20">
        <h2 className="text-4xl sm:text-6xl font-bold mb-4">
          Software Developer <br /> 
          <span className="text-zinc-500 text-3xl sm:text-5xl">& .NET Enthusiast.</span>
        </h2>
        <p className="text-zinc-400 max-w-lg leading-relaxed">
          I am a Software Developer passionate about building functional and well-structured applications. My main focus is the .NET ecosystem, where I develop desktop solutions using C# and WinUI 3. I strive to apply architectural patterns like MVVM to create code that is organized and easy to maintain.
        </p>
      </section>

      <section id="skills" className="max-w-4xl mx-auto py-10">
        <h3 className="text-sm font-mono text-blue-500 mb-8 uppercase tracking-widest">
          Tech Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <SkillBadge key={skill.name} {...skill}/>
          ))}
        </div>
      </section>

      <section id="projects" className="max-w-4xl mx-auto py-10">
        <h3 className="text-sm font-mono text-blue-500 mb-8 uppercase tracking-widest">
          Main Projects
        </h3>
        <div className="flex flex-col gap-2">
          {projects.map((project) => (
            <ProjectCard 
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </section>

    </main>
  );
}