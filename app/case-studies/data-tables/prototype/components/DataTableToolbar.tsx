import { Plus, Filter, ArrowUpDown, ListTree, Columns, Palette, Settings } from 'lucide-react';
import { Button } from './ui/button';
import { BulkActionsBar } from './BulkActionsBar';

interface DataTableToolbarProps {
  title: string;
  totalCount: number;
  groupCount: number;
  selectedCount?: number;
  onClearSelection?: () => void;
}

export function DataTableToolbar({ title, totalCount, groupCount, selectedCount = 0, onClearSelection }: DataTableToolbarProps) {
  const showBulkActions = selectedCount >= 1;

  const handlePrimaryBulkAction = () => {
    console.log('Primary bulk action clicked');
    // Implement primary bulk action logic here
  };

  const handleAdditionalBulkAction = () => {
    console.log('Additional bulk action clicked');
    // Implement additional bulk action logic here
  };
  return (
    <div className="w-full bg-white border-b border-[#bfbeb9]">
      {/* Title Section */}
      <div className="flex items-center gap-1 px-0 py-2">
        <span className="text-[13px] font-semibold text-[#383836]">{title}</span>
        <span className="text-[13px] font-normal text-[#383836]">({totalCount})</span>
      </div>

      {/* Toolbar Section - Fixed Height Container */}
      <div className="relative pb-3 pt-2 min-h-[40px]">
        {/* Regular Toolbar - Hidden when bulk actions are shown */}
        <div className={`flex items-center justify-between transition-opacity duration-200 ${showBulkActions ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="flex items-center gap-2">
            {/* New Button */}
            <Button
              variant="outline"
              size="sm"
              className="bg-white border-[#bfbeb9] rounded-[4px] px-1 py-[4px] h-auto text-[13px] font-semibold text-[#383836] hover:bg-gray-50"
            >
              <Plus className="w-5 h-5 mr-0.5" />
              New
            </Button>

            {/* Filter Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="px-1 py-[4px] h-auto text-[13px] font-semibold text-[#383836] hover:bg-gray-100"
            >
              <Filter className="w-5 h-5 mr-0.5" />
              Filter
            </Button>

            {/* Sort Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="px-1 py-[4px] h-auto text-[13px] font-semibold text-[#383836] hover:bg-gray-100"
            >
              <ArrowUpDown className="w-5 h-5 mr-0.5" />
              Sort
            </Button>

            {/* Group Button (Active) */}
            <Button
              variant="secondary"
              size="sm"
              className="bg-[#f7f7f4] px-1 py-[4px] h-auto text-[13px] font-semibold text-[#383836] hover:bg-[#e8e7e3]"
            >
              <ListTree className="w-5 h-5 mr-0.5" />
              Group
              <span className="inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-[#d0cfc9] text-[11px] font-medium text-[#383836]">{groupCount}</span>
            </Button>

            {/* Columns Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="px-1 py-[4px] h-auto text-[13px] font-semibold text-[#383836] hover:bg-gray-100"
            >
              <Columns className="w-5 h-5 mr-0.5" />
              Columns
            </Button>

            {/* Colors Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="px-1 py-[4px] h-auto text-[13px] font-semibold text-[#383836] hover:bg-gray-100"
            >
              <Palette className="w-5 h-5 mr-0.5" />
              Colors
            </Button>
          </div>

          {/* Settings */}
          <Button
            variant="ghost"
            size="sm"
            className="px-[4px] py-[4px] h-auto hover:bg-gray-100"
          >
            <Settings className="w-5 h-5" />
          </Button>
        </div>

        {/* Bulk Actions Bar - Positioned absolutely to overlay regular toolbar */}
        {showBulkActions && (
          <div className="absolute inset-0 pt-2 pb-3 flex items-center justify-between transition-opacity duration-200">
            <BulkActionsBar 
              selectedCount={selectedCount}
              onClearSelection={onClearSelection!}
              onPrimaryAction={handlePrimaryBulkAction}
              onAdditionalAction={handleAdditionalBulkAction}
            />
            
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="px-1 py-[4px] h-auto text-[13px] font-semibold text-[#383836] hover:bg-gray-100"
              >
                <Filter className="w-5 h-5 mr-0.5" />
                Filter
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="px-1 py-[4px] h-auto text-[13px] font-semibold text-[#383836] hover:bg-gray-100"
              >
                <Columns className="w-5 h-5 mr-0.5" />
                Columns
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}