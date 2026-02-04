import Image from "next/image";
import { SocialLink, SocialLinkProps } from "@/components/SocialLinks";
import { SkillBadge, SkillBadgeProps } from "@/components/SkillBadge";
import { ProjectCard, ProjectProps } from "@/components/ProjectCard";

interface SkillCategory {
  title: string;
  items: SkillBadgeProps[];
}

const socials: SocialLinkProps[] = [
  { name: "GitHub", url: "https://github.com/TXG0Fk3", iconPath: "/icons/github.svg", hoverColor: "#ffffff" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/leoverton-b-xavier-565111307/", iconPath: "/icons/linkedin.svg", hoverColor: "#0077b5" },
  { name: "Discord", url: "https://discord.com/users/txg0fk3", iconPath: "/icons/discord.svg", hoverColor: "#5662F6" },
  { name: "Youtube", url: "https://www.youtube.com/@txg0fk3", iconPath: "/icons/youtube.svg", hoverColor: "#FF0033" },
  { name: "Email", url: "mailto:leovertonx12@outlook.com", iconPath: "/icons/mail.svg", hoverColor: "#ef4444" }
];

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    items: [
      { name: "C", iconPath: "/icons/c.svg", color: "#394AAB" },
      { name: "C++", iconPath: "/icons/cplusplus.svg", color: "#00599C" },
      { name: "C#", iconPath: "/icons/csharp.svg", color: "#7F5CFF" },
      { name: "Rust", iconPath: "/icons/rust.svg", color: "#E43717" },
      { name: "Python", iconPath: "/icons/python.svg", color: "#FFD040" },
      { name: "TypeScript", iconPath: "/icons/typescript.svg", color: "#007ACC" },
    ]
  },
  {
    title: "Frameworks & Web",
    items: [
      { name: "Next.js", iconPath: "/icons/nextjs.svg", color: "#FFFFFF" },
      { name: "Tailwind", iconPath: "/icons/tailwindcss.svg", color: "#38BDF8" },
      { name: "HTML", iconPath: "/icons/html5.svg", color: "#E14E1D" },
      { name: "CSS", iconPath: "/icons/css.svg", color: "#0277BD" },
    ]
  },
  {
    title: "Database & Backend",
    items: [
      { name: "PostgreSQL", iconPath: "/icons/postgresql.svg", color: "#FFFFFF" },
      { name: "SQLite", iconPath: "/icons/sqlite.svg", color: "#007AB5" },
      { name: "MySQL", iconPath: "/icons/mysql.svg", color: "#FFFFFF" },
      { name: "Bun", iconPath: "/icons/bun.svg", color: "#fbf0df" },
    ]
  },
  {
    title: "Dev Environment",
    items: [
      { name: "Nix", iconPath: "/icons/nix.svg", color: "#7EB8E2" },
      { name: "NeoVim", iconPath: "/icons/neovim.svg", color: "#59953B" },
      { name: "ArchLinux", iconPath: "/icons/archlinux.svg", color: "#1793D1" },
      { name: "Linux", iconPath: "/icons/linux.svg", color: "#ECEFF1" },
      { name: "Windows", iconPath: "/icons/windows.svg", color: "#0D89DB" },
      { name: "Git", iconPath: "/icons/git.svg", color: "#F03C2E" },
      { name: "Docker", iconPath: "/icons/docker.svg", color: "#2396ED" },
    ]
  }
];

const projects: ProjectProps[] = [
  {
    title: "YT Downloader",
    description: "A program that allows you to download videos, music and playlists from YouTube.",
    tags: ["C#", "WinUI 3", "MVVM", "YoutubeExplode"],
    githubUrl: "https://github.com/TXG0Fk3/YT-Downloader"
  },
  {
    title: "Yukari",
    description: "A modern, extensible comic and manga reader for Windows. It features a plugin-based architecture for dynamic source integration and a fast, local SQLite-backed library.",
    tags: ["C#", "WinUI 3", "MVVM", "SQLite"],
    githubUrl: "https://github.com/Yukari-App/Yukari"
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 font-sans bg-grid">
      <div className="fixed top-0 -left-4 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 -right-4 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <header className="sticky top-0 z-50 w-full border-b border-zinc-800/50 bg-zinc-950/70 backdrop-blur-md">
        <div className="max-w-4xl mx-auto flex justify-between items-center py-2 px-8">
          <h1 className="text-xl font-mono font-bold tracking-tighter">
            <span className="text-blue-500">_</span>TXG0Fk3
          </h1>
          <nav className="flex gap-6 text-sm text-zinc-400 font-medium">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          </nav>
        </div>
      </header>
      
      <div className="max-w-4xl mx-auto px-8 pb-16">
        <section id="about" className="scroll-mt-12 max-w-4xl mx-auto py-10 flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="text-4xl sm:text-6xl font-bold mb-4">
              Software Developer <br /> 
              <span className="text-zinc-500 text-3xl sm:text-5xl">& .NET Enthusiast.</span>
            </h2>
            <p className="text-zinc-400 max-w-lg leading-relaxed">
              I am a Software Developer passionate about building functional and well-structured applications. My main focus is the .NET ecosystem, where I develop desktop solutions using C# and WinUI 3...
            </p>

            <div className="flex gap-4 mt-8">
              {socials.map((social) => (
                <SocialLink key={social.name} {...social} />
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-blue-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-zinc-800 bg-zinc-900 shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.15)] group-hover:border-blue-500/50 transition-all duration-500">
              <Image 
                src="/pfp.jpg"
                alt="PFP"
                fill
                className="object-cover transition-all duration-500"
                priority
              />
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-12 max-w-4xl mx-auto py-10">
          <h3 className="text-sm font-mono text-blue-500 mb-8 uppercase tracking-widest">
            Tech Stack
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h4 className="text-zinc-400 font-medium mb-3 text-sm">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <SkillBadge key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-12 max-w-4xl mx-auto py-10">
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
      </div>
    </main>
  );
}