import { ProjectCard } from "@/components/ProjectCard";

const projects = [
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