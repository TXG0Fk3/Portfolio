export interface SkillBadgeProps {
  name: string;
  iconPath: string;
  color?: string;
}

export function SkillBadge({ name, iconPath, color = "#3b82f6" }: SkillBadgeProps) {
  return (
    <div 
      className="group flex items-center bg-zinc-900/50 border border-zinc-800 px-2 py-2 rounded-full cursor-default transition-all duration-300 whitespace-nowrap hover:border-(--skill-color) hover:shadow-[0_0_12px_var(--skill-color)]/20"
      style={{ '--skill-color': color } as React.CSSProperties}
    >
      <div 
        className="w-5 h-5 shrink-0 transition-colors duration-400"
        style={{
          backgroundColor: color,
          maskImage: `url(${iconPath})`,
          WebkitMaskImage: `url(${iconPath})`,
          maskRepeat: 'no-repeat',
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
        }}
      />

      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium text-zinc-300 group-hover:max-w-xs group-hover:ml-2 transition-all duration-600 ease-in-out">
        {name}
      </span>
    </div>
  );
}