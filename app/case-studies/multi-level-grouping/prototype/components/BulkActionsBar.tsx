import svgPaths from "../imports/svg-jl3xkvloo3";
import { Button } from './ui/button';

interface BulkActionsBarProps {
  selectedCount: number;
  onClearSelection: () => void;
  onPrimaryAction?: () => void;
  onAdditionalAction?: () => void;
}

export function BulkActionsBar({ 
  selectedCount, 
  onClearSelection, 
  onPrimaryAction, 
  onAdditionalAction 
}: BulkActionsBarProps) {
  return (
    <div className="bg-[#f6f8ff] border border-[#371ee1] rounded p-1 flex items-center gap-2 shadow-[0px_1px_1px_0px_rgba(27,27,26,0.06)] relative">
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-1px_1px_0px_inset_rgba(27,27,26,0.12)]" />
      
      <div className="flex items-center gap-4">
        {/* Selection Count and Clear Button */}
        <div className="flex items-center rounded p-1">
          <div className="flex items-center gap-0.5 px-1 py-0">
            <span className="text-[13px] font-semibold text-[#383836]">
              <span className="font-semibold">{selectedCount}</span>
              {` selected`}
            </span>
          </div>
          <button 
            onClick={onClearSelection}
            className="w-5 h-5 flex items-center justify-center"
          >
            <svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 20 20">
              <g>
                <path d={svgPaths.p3e6eb800} fill="var(--fill-0, #383836)" />
              </g>
            </svg>
          </button>
        </div>

        {/* Primary Bulk Action Button */}
        <Button
          onClick={onPrimaryAction}
          className="bg-[#371ee1] text-[#f6f8ff] border border-[#371ee1] rounded px-1 py-[4px] text-[13px] font-semibold hover:bg-[#2d17c4] shadow-[0px_0px_2px_0px_inset_#f7f7f4,0px_-1px_1px_1px_inset_#efeeeb] shadow-[0px_1px_1px_0px_rgba(27,27,26,0.06)]"
        >
          Delete
        </Button>
      </div>

      {/* Additional Bulk Action Button */}
      <Button
        onClick={onAdditionalAction}
        variant="outline"
        className="bg-[#ffffff] text-[#383836] border border-[#bfbeb9] rounded px-1 py-[4px] text-[13px] font-semibold hover:bg-gray-50 shadow-[0px_0px_2px_0px_inset_#f7f7f4,0px_-1px_1px_1px_inset_#efeeeb] shadow-[0px_1px_1px_0px_rgba(27,27,26,0.06)]"
      >
        Export
      </Button>
    </div>
  );
}