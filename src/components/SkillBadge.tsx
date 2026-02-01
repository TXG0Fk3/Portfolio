export interface SkillBadgeProps {
  name: string;
  iconPath: string;
  color?: string;
}

export function SkillBadge({ name, iconPath, color = "group-hover:bg-blue-500" }: SkillBadgeProps) {
  return (
    <div className="group flex items-center bg-zinc-900/50 border border-zinc-800 px-2 py-2 rounded-full cursor-default hover:border-blue-500/50 transition-all duration-300 whitespace-nowrap">
      
       <div className="w-5 h-5 shrink-0 duration-300"
        style={{
          backgroundColor: color,
          maskImage: `url(${iconPath})`,
          WebkitMaskImage: `url(${iconPath})`,
          maskRepeat: 'no-repeat',
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
        }}
      />

      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium text-zinc-300 group-hover:max-w-xs group-hover:ml-2 transition-all duration-800 ease-in-out">
        {name}
      </span>
    </div>
  );
}