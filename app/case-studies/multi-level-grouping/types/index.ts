export interface DataRow {
  id: string;
  date: string;
  weight: number;
  status: 'Pending' | 'Critical' | 'Success';
  isHazardous: boolean;
  origin: string;
  description: string;
}

export interface RefrigerationGroup {
  id: string;
  isHazardous: boolean;
  count: number;
  isExpanded: boolean;
  rows: DataRow[];
}

export interface ContactGroup {
  id: string;
  name: string;
  count: number;
  isExpanded: boolean;
  refrigerationGroups: RefrigerationGroup[];
}

export interface TransportModeGroup {
  id: string;
  mode: string;
  count: number;
  isExpanded: boolean;
  contacts: ContactGroup[];
}

export interface TableData {
  title: string;
  totalCount: number;
  groups: TransportModeGroup[];
}