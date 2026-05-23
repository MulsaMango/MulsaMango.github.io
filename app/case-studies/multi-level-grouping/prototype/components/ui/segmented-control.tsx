import { cn } from "./utils";

interface SegmentedControlProps {
  options: Array<{
    value: string;
    label: string;
    hidden?: boolean;
  }>;
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}

export function SegmentedControl({ options, value, onValueChange, className }: SegmentedControlProps) {
  return (
    <div className={cn("inline-flex items-center bg-gray-100 rounded-lg p-1", className)}>
      {options.map((option, index) => (
        <button
          key={option.value}
          onClick={() => onValueChange(option.value)}
          disabled={option.hidden}
          className={cn(
            "px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200",
            "focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-500",
            option.hidden
              ? "invisible pointer-events-none"
              : value === option.value
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}