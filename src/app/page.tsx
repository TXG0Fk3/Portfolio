import Image from "next/image";
import { SocialLink, SocialLinkProps } from "@/components/SocialLinks";
import { SkillBadge, SkillBadgeProps } from "@/components/SkillBadge";
import { ProjectCard, ProjectProps } from "@/components/ProjectCard";
import { Divider } from "@/components/Divider";

interface SkillCategory {
  title: string;
  items: SkillBadgeProps[];
}

const socials: SocialLinkProps[] = [
  {
    name: "GitHub",
    url: "https://github.com/TXG0Fk3",
    iconPath: "/icons/github.svg",
  },
  {
    name: "Forgejo",
    url: "https://fgj.txgfk.xyz/TXG0Fk3",
    iconPath: "/icons/forgejo.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/leoverton-b-xavier-565111307/",
    iconPath: "/icons/linkedin.svg",
  },
  {
    name: "Discord",
    url: "https://discord.com/users/txg0fk3",
    iconPath: "/icons/discord.svg",
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/@txg0fk3",
    iconPath: "/icons/youtube.svg",
  },
  {
    name: "Email",
    url: "mailto:leovertonx12@outlook.com",
    iconPath: "/icons/mail.svg",
  },
];

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    items: [
      { name: "C", iconPath: "/icons/c.svg" },
      { name: "C++", iconPath: "/icons/cplusplus.svg" },
      { name: "C#", iconPath: "/icons/csharp.svg" },
      { name: "Rust", iconPath: "/icons/rust.svg" },
      { name: "Python", iconPath: "/icons/python.svg" },
      {
        name: "TypeScript",
        iconPath: "/icons/typescript.svg",
      },
    ],
  },
  {
    title: "Frameworks & Web",
    items: [
      { name: "Next.js", iconPath: "/icons/nextjs.svg" },
      {
        name: "Tailwind",
        iconPath: "/icons/tailwindcss.svg",
      },
      { name: "HTML", iconPath: "/icons/html5.svg" },
      { name: "CSS", iconPath: "/icons/css.svg" },
    ],
  },
  {
    title: "Database & Backend",
    items: [
      {
        name: "PostgreSQL",
        iconPath: "/icons/postgresql.svg",
      },
      { name: "SQLite", iconPath: "/icons/sqlite.svg" },
      { name: "MySQL", iconPath: "/icons/mysql.svg" },
      { name: "Bun", iconPath: "/icons/bun.svg" },
    ],
  },
  {
    title: "Dev Environment",
    items: [
      { name: "Nix", iconPath: "/icons/nix.svg" },
      { name: "NeoVim", iconPath: "/icons/neovim.svg" },
      { name: "ArchLinux", iconPath: "/icons/archlinux.svg" },
      { name: "Linux", iconPath: "/icons/linux.svg" },
      { name: "Windows", iconPath: "/icons/windows.svg" },
      { name: "Git", iconPath: "/icons/git.svg" },
      { name: "Docker", iconPath: "/icons/docker.svg" },
    ],
  },
];

const projects: ProjectProps[] = [
  {
    title: "YT Downloader",
    description:
      "A program that allows you to download videos, music and playlists from YouTube.",
    tags: ["C#", "WinUI 3", "MVVM", "YoutubeExplode"],
    githubUrl: "https://github.com/TXG0Fk3/YT-Downloader",
    status: "active",
  },
  {
    title: "Yukari",
    description:
      "A modern, extensible comic and manga reader for Windows. It features a plugin-based architecture for dynamic source integration and a fast, local SQLite-backed library.",
    tags: ["C#", "WinUI 3", "MVVM", "SQLite"],
    githubUrl: "https://github.com/Yukari-App/Yukari",
    status: "wip",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 font-sans bg-grid">
      {/* Background blobs */}
      <div className="fixed top-0 -left-4 w-96 h-96 bg-white/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed bottom-0 -right-4 w-96 h-96 bg-white/4 rounded-full blur-[140px] pointer-events-none" />

      <header className="sticky top-0 z-40 w-full border-b border-zinc-800/50 bg-zinc-950/70 backdrop-blur-md">
        <div className="max-w-4xl mx-auto flex justify-between items-center py-2 px-8">
          <h1 className="text-xl font-mono font-bold tracking-tighter select-none">
            <span className="inline-block animate-pulse">_</span>
            TXG0Fk3
          </h1>
          <nav className="flex gap-6 text-sm text-zinc-400 font-medium">
            <a href="#about" className="hover:text-zinc-100 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-zinc-100 transition-colors">
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-zinc-100 transition-colors"
            >
              Projects
            </a>
          </nav>
        </div>
      </header>

      <div className="max-w-240 mx-auto p-8 pb-0">
        {/* ── About ─────────────────────────────────────────────── */}
        <section
          id="about"
          className="scroll-mt-12 py-10 flex flex-col-reverse md:flex-row items-center gap-10 animate-[fadeInUp_0.6s_ease_forwards]"
        >
          <div className="flex-1">
            <h2 className="text-4xl sm:text-6xl font-bold mb-4 tracking-tight">
              Software Developer <br />
              <span className="text-zinc-500 text-3xl sm:text-5xl">
                & .NET Enthusiast.
              </span>
            </h2>
            <p className="text-zinc-400 max-w-lg leading-relaxed">
              I am a Software Developer passionate about building functional and
              well-structured applications. My main focus is the .NET ecosystem,
              where I develop desktop solutions using C# and WinUI 3...
            </p>

            <div className="flex gap-3 mt-8">
              {socials.map((social) => (
                <SocialLink key={social.name} {...social} />
              ))}
            </div>
          </div>

          <div className="relative group shrink-0">
            {/* Glow ring */}
            <div className="absolute -inset-1 bg-white rounded-full blur-xl opacity-10 group-hover:opacity-25 transition duration-1000" />

            {/* Profile image */}
            <div className="relative w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border border-zinc-800 bg-zinc-900 shadow-[0_0_24px_rgba(255,255,255,0.08)] group-hover:border-white/30 transition-all duration-500">
              <Image
                src="/PFP.png"
                alt="Profile Picture"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Available badge */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-zinc-900 border border-zinc-700/80 rounded-full px-3 py-1.5 backdrop-blur-sm whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-[10px] font-mono text-zinc-400 leading-none">
                available
              </span>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── Skills ────────────────────────────────────────────── */}
        <section
          id="skills"
          className="scroll-mt-12 py-12 animate-[fadeInUp_0.6s_ease_0.15s_forwards]"
        >
          <h3 className="text-sm font-mono text-zinc-100 mb-8 uppercase tracking-[0.125em]">
            Tech Stack
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h4 className="text-zinc-400 font-mono text-xs uppercase tracking-widest mb-3">
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

        <Divider />

        {/* ── Projects ──────────────────────────────────────────── */}
        <section
          id="projects"
          className="scroll-mt-12 py-12 animate-[fadeInUp_0.6s_ease_0.3s_forwards]"
        >
          <h3 className="text-sm font-mono text-zinc-100 mb-8 uppercase tracking-[0.125em]">
            Main Projects
          </h3>
          <div className="flex flex-col gap-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <Divider />

        {/* ── Footer ────────────────────────────────────────────── */}
        <footer>
          <div className="max-w-240 mx-auto px-8 py-5 flex justify-center">
            <span className="text-xs font-mono text-zinc-700 select-none">
              TXG0Fk3 - {new Date().getFullYear()}
            </span>
          </div>
        </footer>
      </div>
    </main>
  );
}
