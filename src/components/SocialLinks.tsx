export interface SocialLinkProps {
  name: string;
  url: string;
  iconPath: string;
  hoverColor: string;
}

export function SocialLink({ name, url, iconPath, hoverColor }: SocialLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900/50 border border-zinc-800 transition-all duration-300 hover:scale-110 hover:border-(--hover-color) hover:shadow-[0_0_10px_var(--hover-color)]/20"
      style={{ '--hover-color': hoverColor } as React.CSSProperties}
    >
      <div 
        className="w-5 h-5 bg-zinc-500 transition-colors duration-300 group-hover:bg-(--hover-color)"
        style={{
          maskImage: `url(${iconPath})`,
          WebkitMaskImage: `url(${iconPath})`,
          maskRepeat: 'no-repeat',
          maskSize: 'contain',
        }}
      />
      <span className="sr-only">{name}</span>
    </a>
  );
}