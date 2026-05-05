export interface SocialLinkProps {
  name: string;
  url: string;
  iconPath: string;
}

export function SocialLink({ name, url, iconPath }: SocialLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={name}
      className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900/50 border border-zinc-800 transition-all duration-300 hover:border-zinc-400 hover:bg-zinc-800/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:scale-110"
    >
      <div
        className="w-5 h-5 bg-zinc-500 transition-colors duration-300 group-hover:bg-zinc-100"
        style={{
          maskImage: `url(${iconPath})`,
          WebkitMaskImage: `url(${iconPath})`,
          maskRepeat: "no-repeat",
          maskPosition: "center",
          maskSize: "contain",
        }}
      />
      <span className="sr-only">{name}</span>
    </a>
  );
}
