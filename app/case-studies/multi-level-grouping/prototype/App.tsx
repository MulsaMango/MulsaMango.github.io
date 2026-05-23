import { useState, useRef, useMemo } from 'react';
import { RotateCcw } from 'lucide-react';
import { DataTableToolbar } from './components/DataTableToolbar';
import { DataTable, type DataTableRef } from './components/DataTable';
import { generateMockData, type RecordSize } from './data/mockData';
import { Switch } from './components/ui/switch';
import { Label } from './components/ui/label';
import { SegmentedControl } from './components/ui/segmented-control';

type GroupControl = 'open' | 'collapseRecords' | 'close';
type GroupingLevel = '1' | '2' | '3';

const DEFAULTS = {
  groupControl: 'open' as GroupControl,
  groupingLevel: '1' as GroupingLevel,
  recordSize: 'small' as RecordSize,
  zebraRows: false,
  groupLabels: false,
};

export default function App() {
  const [selectedCount, setSelectedCount] = useState(0);
  const [groupControl, setGroupControl] = useState<GroupControl>(DEFAULTS.groupControl);
  const [groupingLevel, setGroupingLevel] = useState<GroupingLevel>(DEFAULTS.groupingLevel);
  const [recordSize, setRecordSize] = useState<RecordSize>(DEFAULTS.recordSize);
  const [zebraRows, setZebraRows] = useState(DEFAULTS.zebraRows);
  const [groupLabels, setGroupLabels] = useState(DEFAULTS.groupLabels);
  const dataTableRef = useRef<DataTableRef>(null);

  const currentData = useMemo(
    () => generateMockData(recordSize, groupControl, groupingLevel),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [recordSize]
  );

  const applyExpandState = (control: GroupControl, level: GroupingLevel) => {
    if (control === 'open') {
      dataTableRef.current?.expandAll();
    } else if (control === 'collapseRecords') {
      if (level === '2') {
        dataTableRef.current?.setGroupingLevel2();
      } else {
        dataTableRef.current?.collapseThirdLevel();
      }
    } else {
      dataTableRef.current?.collapseAll();
    }
  };

  const handleReset = () => {
    const sameSize = recordSize === DEFAULTS.recordSize;
    setGroupControl(DEFAULTS.groupControl);
    setGroupingLevel(DEFAULTS.groupingLevel);
    setRecordSize(DEFAULTS.recordSize);
    setZebraRows(DEFAULTS.zebraRows);
    setGroupLabels(DEFAULTS.groupLabels);
    if (sameSize) {
      applyExpandState(DEFAULTS.groupControl, DEFAULTS.groupingLevel);
    }
  };

  const handleSelectionChange = (count: number) => setSelectedCount(count);

  const handleClearSelection = () => {
    dataTableRef.current?.clearSelections();
    setSelectedCount(0);
  };

  const handleGroupControlChange = (value: string) => {
    const newControl = value as GroupControl;
    setGroupControl(newControl);
    applyExpandState(newControl, groupingLevel);
  };

  const handleGroupingLevelChange = (value: string) => {
    const newLevel = value as GroupingLevel;
    setGroupingLevel(newLevel);

    if (newLevel === '1' && groupControl === 'collapseRecords') {
      setGroupControl('close');
      applyExpandState('close', newLevel);
    }
    // Otherwise preserve existing expand state — visibleLevels alone controls what's rendered
  };

  const handleRecordSizeChange = (value: string) => {
    setRecordSize(value as RecordSize);
  };

  const groupControlOptions = [
    { value: 'open', label: 'Open' },
    { value: 'collapseRecords', label: 'Groups Only', hidden: groupingLevel === '1' },
    { value: 'close', label: groupingLevel === '1' ? 'Close' : 'Close All' },
  ];

  const effectiveGroupControl =
    groupingLevel === '1' && groupControl === 'collapseRecords' ? 'close' : groupControl;

  const groupingLevelOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
  ];

  const recordSizeOptions = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center gap-4 mb-4">
          {/* Reset */}
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>

          <div className="flex items-center gap-4">
            {/* Grouping depth */}
            <div className="flex items-center space-x-2">
              <Label className="text-sm text-gray-600">Groups:</Label>
              <SegmentedControl
                options={groupingLevelOptions}
                value={groupingLevel}
                onValueChange={handleGroupingLevelChange}
              />
            </div>

            {/* Open / collapse / close */}
            <div className="flex items-center space-x-2">
              <Label className="text-sm text-gray-600">View:</Label>
              {/* Reserve the wider "Close All" width on the last button so the
                  control doesn't reflow when its label flips Close <-> Close All
                  as the Groups count changes. */}
              <SegmentedControl
                className="[&>button:last-child]:min-w-[5.25rem]"
                options={groupControlOptions}
                value={effectiveGroupControl}
                onValueChange={handleGroupControlChange}
              />
            </div>

            {/* Record size */}
            <div className="flex items-center space-x-2">
              <Label className="text-sm text-gray-600">Record Quantity:</Label>
              <SegmentedControl
                options={recordSizeOptions}
                value={recordSize}
                onValueChange={handleRecordSizeChange}
              />
            </div>

            {/* Zebra rows toggle */}
            <div className="flex items-center space-x-2 bg-white rounded-lg border border-[#bfbeb9] px-3 py-2 shadow-sm">
              <Label htmlFor="zebra-toggle" className="text-sm">Zebra rows</Label>
              <Switch
                id="zebra-toggle"
                checked={zebraRows}
                onCheckedChange={setZebraRows}
              />
            </div>

            {/* Group labels toggle */}
            <div className="flex items-center space-x-2 bg-white rounded-lg border border-[#bfbeb9] px-3 py-2 shadow-sm">
              <Label htmlFor="group-labels-toggle" className="text-sm">Group labels</Label>
              <Switch
                id="group-labels-toggle"
                checked={groupLabels}
                onCheckedChange={setGroupLabels}
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-[#bfbeb9] shadow-sm overflow-hidden">
          <div className="p-4">
            <DataTableToolbar
              title={currentData.title}
              totalCount={currentData.totalCount}
              groupCount={parseInt(groupingLevel)}
              selectedCount={0}
              onClearSelection={handleClearSelection}
            />
            <DataTable
              key={recordSize}
              ref={dataTableRef}
              data={currentData}
              visibleLevels={parseInt(groupingLevel) as 1 | 2 | 3}
              zebraRows={zebraRows}
              groupLabels={groupLabels}
              onSelectionChange={handleSelectionChange}
              onClearSelection={handleClearSelection}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
