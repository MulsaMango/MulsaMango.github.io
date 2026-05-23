import type { TableData, DataRow, ContactGroup, TransportModeGroup } from '../types';

export type RecordSize = 'small' | 'medium' | 'large';

const ROW_RANGE: Record<RecordSize, [number, number]> = {
  small:  [1, 4],
  medium: [2, 9],
  large:  [6, 18],
};

function rowCountForGroup(seed: number, min: number, max: number): number {
  let h = (Math.imul(seed ^ (seed >>> 15), 0x9e3779b9 | 0)) | 0;
  h = (h ^ (h >>> 13)) | 0;
  return min + (((h % (max - min + 1)) + (max - min + 1)) % (max - min + 1));
}

const nonHazardousDescriptions = [
  'Electronics', 'Textiles', 'Books', 'Furniture', 'Tools', 'Machinery', 'Clothing',
  'Equipment', 'Documents', 'Automotive parts', 'Sports equipment', 'Construction materials',
  'Hardware', 'Packaging materials', 'Raw materials', 'Art supplies', 'Office supplies',
  'Safety gear', 'Navigation equipment', 'Fishing equipment', 'Marine supplies', 'Bulk materials',
  'Steel beams', 'Timber', 'Minerals', 'Boat parts', 'Survey equipment', 'Household goods',
  'Garden supplies', 'Pet supplies', 'Cleaning supplies', 'Personal care items',
  'Tech components', 'Research materials', 'Prototype parts', 'Legal documents', 'Spare parts',
];

const hazardousDescriptions = [
  'Flammable liquids', 'Compressed gases', 'Explosive materials', 'Radioactive isotopes',
  'Corrosive chemicals', 'Toxic substances', 'Oxidising agents', 'Infectious substances',
  'Industrial solvents', 'Lithium batteries', 'Peroxides', 'Aerosols',
  'Ammunition', 'Pesticides', 'Acid compounds', 'Bleaching agents',
  'Paint chemicals', 'Adhesive compounds', 'Fuel additives', 'Laboratory reagents',
  'Cryogenic fluids', 'Liquid nitrogen', 'Liquid oxygen', 'Mercury compounds',
  'Asbestos materials', 'PCB waste', 'Medical waste', 'Chemical samples',
];

const origins = [
  'Shanghai', 'Rotterdam', 'Singapore', 'Hamburg', 'Los Angeles', 'Dubai',
  'Hong Kong', 'Antwerp', 'Busan', 'New York', 'Tokyo', 'Barcelona',
  'Sydney', 'Mumbai', 'Cape Town', 'Oslo', 'Vancouver', 'Felixstowe',
  'Piraeus', 'Jakarta', 'Manila', 'Colombo', 'Jeddah', 'Karachi',
];

const sampleDates = [
  '05-May-26', '02-Feb-25', '09-Sep-25', '12-Dec-25', '15-Mar-26', '18-Jun-26',
  '22-Aug-25', '30-Nov-25', '28-Oct-25', '14-Apr-26', '07-Jul-25', '11-Jan-26',
  '26-Sep-25', '03-Oct-25', '17-Dec-25', '23-Mar-26', '10-Apr-26', '08-Aug-25',
  '21-Jul-25', '05-Dec-25', '30-Jan-26', '19-Oct-25', '27-Aug-25', '25-Jun-25',
  '17-Nov-25', '28-Dec-25', '03-Sep-25', '13-Jan-26', '15-Aug-25', '16-Jun-25',
];

const statuses: ('Pending' | 'Critical' | 'Success')[] = ['Pending', 'Critical', 'Success'];

// Nonlinear hash so status doesn't repeat with period 3 across rows
function statusForRow(seed: number, i: number): 'Pending' | 'Critical' | 'Success' {
  let h = (seed + i * 2) | 0;
  h = (Math.imul(h ^ (h >>> 14), 0x9e3779b9 | 0)) | 0;
  h = (Math.imul(h ^ (h >>> 13), 0x6c62272e | 0)) | 0;
  h = (h ^ (h >>> 16)) | 0;
  return statuses[((h % 3) + 3) % 3];
}

function generateRows(
  prefix: string,
  needsRefrigeration: boolean,
  count: number,
  weightMin: number,
  weightMax: number,
  seed: number
): DataRow[] {
  const descriptions = needsRefrigeration ? hazardousDescriptions : nonHazardousDescriptions;
  return Array.from({ length: count }, (_, i) => {
    const s = seed + i * 7;
    const rawWeight = weightMin + ((s * 31 + i * 17) % Math.max(1, Math.round((weightMax - weightMin) * 100))) / 100;
    return {
      id: `${prefix}-${i}`,
      date: sampleDates[(s * 3 + i * 5) % sampleDates.length],
      weight: Math.round(rawWeight * 100) / 100,
      status: statusForRow(seed, i),
      isHazardous: needsRefrigeration,
      origin: origins[(s * 4 + i * 7) % origins.length],
      description: descriptions[(s * 2 + i * 11) % descriptions.length],
    };
  });
}

interface ExpandState {
  groupExpanded: boolean;
  contactExpanded: boolean;
  refrigExpanded: boolean;
}

function resolveExpandState(
  expandState: 'open' | 'collapseRecords' | 'close',
  level: '1' | '2' | '3'
): ExpandState {
  if (expandState === 'close') {
    return { groupExpanded: false, contactExpanded: false, refrigExpanded: false };
  }
  if (expandState === 'open') {
    return { groupExpanded: true, contactExpanded: true, refrigExpanded: true };
  }
  // collapseRecords
  return {
    groupExpanded: true,
    contactExpanded: level === '3',
    refrigExpanded: false,
  };
}

const transportConfigs = [
  { id: 'sea', mode: 'Sea', wMin: 5, wMax: 25 },
  { id: 'air', mode: 'Air', wMin: 0.5, wMax: 10 },
  { id: 'land', mode: 'Land', wMin: 4, wMax: 30 },
  { id: 'rail', mode: 'Rail', wMin: 15, wMax: 50 },
  { id: 'truck', mode: 'Truck', wMin: 6, wMax: 28 },
  { id: 'pipeline', mode: 'Pipeline', wMin: 45, wMax: 90 },
];

const contactConfigs = [
  { id: 'anita', name: 'Anita Bath' },
  { id: 'seymour', name: 'Seymour Butz' },
  { id: 'troy', name: 'Troy McClure' },
];

export function generateMockData(
  size: RecordSize = 'small',
  expandState: 'open' | 'collapseRecords' | 'close' = 'open',
  level: '1' | '2' | '3' = '3'
): TableData {
  const [rMin, rMax] = ROW_RANGE[size];
  const { groupExpanded, contactExpanded, refrigExpanded } = resolveExpandState(expandState, level);

  let totalCount = 0;

  const groups: TransportModeGroup[] = transportConfigs.map((mode, modeIdx) => {
    const contacts: ContactGroup[] = contactConfigs.map((contact, contactIdx) => {
      const noFridgeSeed = modeIdx * 100 + contactIdx * 10 + 1;
      const fridgeSeed = modeIdx * 100 + contactIdx * 10 + 6;

      const noFridgeCount = rowCountForGroup(noFridgeSeed, rMin, rMax);
      const fridgeCount = rowCountForGroup(fridgeSeed, rMin, rMax);

      const noFridgeRows = generateRows(
        `${mode.id}-${contact.id}-nf`, false, noFridgeCount, mode.wMin, mode.wMax, noFridgeSeed
      );
      const fridgeRows = generateRows(
        `${mode.id}-${contact.id}-f`, true, fridgeCount, mode.wMin, mode.wMax, fridgeSeed
      );

      const contactCount = noFridgeRows.length + fridgeRows.length;
      totalCount += contactCount;

      return {
        id: `${mode.id}-${contact.id}`,
        name: contact.name,
        count: contactCount,
        isExpanded: contactExpanded,
        refrigerationGroups: [
          {
            id: `${mode.id}-${contact.id}-nh`,
            isHazardous: false,
            count: noFridgeRows.length,
            isExpanded: refrigExpanded,
            rows: noFridgeRows,
          },
          {
            id: `${mode.id}-${contact.id}-h`,
            isHazardous: true,
            count: fridgeRows.length,
            isExpanded: refrigExpanded,
            rows: fridgeRows,
          },
        ],
      };
    });

    const groupCount = contacts.reduce((sum, c) => sum + c.count, 0);

    return {
      id: mode.id,
      mode: mode.mode,
      count: groupCount,
      isExpanded: groupExpanded,
      contacts,
    };
  });

  return {
    title: 'Multiple level grouping simulator prototype',
    totalCount,
    groups,
  };
}

export const mockTableData = generateMockData('small', 'open', '3');
