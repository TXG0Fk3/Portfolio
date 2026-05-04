export interface SkillBadgeProps {
  name: string;
  iconPath: string;
}

export function SkillBadge({ name, iconPath }: SkillBadgeProps) {
  return (
    <div className="group flex items-center bg-zinc-900/50 border border-zinc-800 px-2 py-2 rounded-full cursor-default transition-all duration-300 whitespace-nowrap hover:border-zinc-400 hover:bg-zinc-800/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:scale-108">
      <div
        className="w-5 h-5 shrink-0 transition-opacity duration-300 bg-zinc-500 group-hover:bg-zinc-100"
        style={{
          maskImage: `url(${iconPath})`,
          WebkitMaskImage: `url(${iconPath})`,
          maskRepeat: "no-repeat",
          maskSize: "contain",
          WebkitMaskSize: "contain",
        }}
      />

      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium text-zinc-100 group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 ease-in-out">
        {name}
      </span>
    </div>
  );
}
