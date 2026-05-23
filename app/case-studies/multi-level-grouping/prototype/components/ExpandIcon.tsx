import svgPaths from "../imports/svg-jmt0rv1rzt";

interface ExpandIconProps {
  isExpanded?: boolean;
  className?: string;
}

export function ExpandIcon({ isExpanded = false, className = "w-5 h-5" }: ExpandIconProps) {
  return (
    <div className={`relative shrink-0 ${className}`}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 20 20">
        <g>
          <path 
            d={isExpanded ? svgPaths.p365703c0 : svgPaths.pfbc6480} 
            fill="var(--fill-0, #383836)" 
          />
        </g>
      </svg>
    </div>
  );
}