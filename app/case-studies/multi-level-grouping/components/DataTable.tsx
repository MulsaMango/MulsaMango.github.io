import { useState, useImperativeHandle, forwardRef } from 'react';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';
import { StatusBadge } from './StatusBadge';
import { ExpandIcon } from './ExpandIcon';
import type { TableData, TransportModeGroup, ContactGroup, RefrigerationGroup, DataRow } from '../types';

interface DataTableProps {
  data: TableData;
  visibleLevels?: 1 | 2 | 3;
  zebraRows?: boolean;
  groupLabels?: boolean;
  selectedCount?: number;
  onSelectionChange?: (count: number) => void;
  onClearSelection?: () => void;
}

export interface DataTableRef {
  clearSelections: () => void;
  selectAll: () => void;
  getTotalRowCount: () => number;
  getSelectedCount: () => number;
  expandAll: () => void;
  collapseAll: () => void;
  collapseThirdLevel: () => void;
  setGroupingLevel1: () => void;
  setGroupingLevel2: () => void;
  setGroupingLevel3: () => void;
}

export const DataTable = forwardRef<DataTableRef, DataTableProps>(
  ({ data: initialData, visibleLevels = 3, zebraRows = true, groupLabels = true, onSelectionChange, onClearSelection }, ref) => {
  const [data, setData] = useState<TableData>(initialData);
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [selectedGroups, setSelectedGroups] = useState<Set<string>>(new Set());
  const [selectedContacts, setSelectedContacts] = useState<Set<string>>(new Set());
  const [selectedRefrigerationGroups, setSelectedRefrigerationGroups] = useState<Set<string>>(new Set());

  const toggleGroup = (groupId: string) => {
    setData(prev => ({
      ...prev,
      groups: prev.groups.map(group =>
        group.id === groupId
          ? { ...group, isExpanded: !group.isExpanded }
          : group
      )
    }));
  };

  const toggleContact = (groupId: string, contactId: string) => {
    setData(prev => ({
      ...prev,
      groups: prev.groups.map(group =>
        group.id === groupId
          ? {
              ...group,
              contacts: group.contacts.map(contact =>
                contact.id === contactId
                  ? { ...contact, isExpanded: !contact.isExpanded }
                  : contact
              )
            }
          : group
      )
    }));
  };

  const toggleRefrigerationGroup = (groupId: string, contactId: string, refrigerationId: string) => {
    setData(prev => ({
      ...prev,
      groups: prev.groups.map(group =>
        group.id === groupId
          ? {
              ...group,
              contacts: group.contacts.map(contact =>
                contact.id === contactId
                  ? {
                      ...contact,
                      refrigerationGroups: contact.refrigerationGroups.map(refGroup =>
                        refGroup.id === refrigerationId
                          ? { ...refGroup, isExpanded: !refGroup.isExpanded }
                          : refGroup
                      )
                    }
                  : contact
              )
            }
          : group
      )
    }));
  };

  const expandAll = () => {
    setData(prev => ({
      ...prev,
      groups: prev.groups.map(group => ({
        ...group,
        isExpanded: true,
        contacts: group.contacts.map(contact => ({
          ...contact,
          isExpanded: true,
          refrigerationGroups: contact.refrigerationGroups.map(refGroup => ({
            ...refGroup,
            isExpanded: true
          }))
        }))
      }))
    }));
  };

  const collapseAll = () => {
    setData(prev => ({
      ...prev,
      groups: prev.groups.map(group => ({
        ...group,
        isExpanded: false,
        contacts: group.contacts.map(contact => ({
          ...contact,
          isExpanded: false,
          refrigerationGroups: contact.refrigerationGroups.map(refGroup => ({
            ...refGroup,
            isExpanded: false
          }))
        }))
      }))
    }));
  };

  const collapseThirdLevel = () => {
    setData(prev => ({
      ...prev,
      groups: prev.groups.map(group => ({
        ...group,
        isExpanded: true,
        contacts: group.contacts.map(contact => ({
          ...contact,
          isExpanded: true,
          refrigerationGroups: contact.refrigerationGroups.map(refGroup => ({
            ...refGroup,
            isExpanded: false
          }))
        }))
      }))
    }));
  };

  const setGroupingLevel1 = () => {
    setData(prev => ({
      ...prev,
      groups: prev.groups.map(group => ({
        ...group,
        isExpanded: false,
        contacts: group.contacts.map(contact => ({
          ...contact,
          isExpanded: false,
          refrigerationGroups: contact.refrigerationGroups.map(refGroup => ({
            ...refGroup,
            isExpanded: false
          }))
        }))
      }))
    }));
  };

  const setGroupingLevel2 = () => {
    setData(prev => ({
      ...prev,
      groups: prev.groups.map(group => ({
        ...group,
        isExpanded: true,
        contacts: group.contacts.map(contact => ({
          ...contact,
          isExpanded: false,
          refrigerationGroups: contact.refrigerationGroups.map(refGroup => ({
            ...refGroup,
            isExpanded: false
          }))
        }))
      }))
    }));
  };

  const setGroupingLevel3 = () => {
    setData(prev => ({
      ...prev,
      groups: prev.groups.map(group => ({
        ...group,
        isExpanded: true,
        contacts: group.contacts.map(contact => ({
          ...contact,
          isExpanded: true,
          refrigerationGroups: contact.refrigerationGroups.map(refGroup => ({
            ...refGroup,
            isExpanded: true
          }))
        }))
      }))
    }));
  };

  const getAllRecordsInGroup = (group: TransportModeGroup): DataRow[] =>
    group.contacts.flatMap(c => c.refrigerationGroups.flatMap(r => r.rows));

  const getAllRecordsInContact = (contact: ContactGroup): DataRow[] =>
    contact.refrigerationGroups.flatMap(r => r.rows);

  const updateGroupAndContactSelections = (newSelectedRows: Set<string>) => {
    const newSelectedGroups = new Set<string>();
    const newSelectedContacts = new Set<string>();
    const newSelectedRefrigerationGroups = new Set<string>();

    data.groups.forEach(group => {
      const groupRowIds = getRowsInGroup(group.id);
      const allGroupRowsSelected = groupRowIds.length > 0 && groupRowIds.every(id => newSelectedRows.has(id));
      
      if (allGroupRowsSelected) {
        newSelectedGroups.add(group.id);
      }

      group.contacts.forEach(contact => {
        const contactRowIds = getRowsInContact(contact.id);
        const allContactRowsSelected = contactRowIds.length > 0 && contactRowIds.every(id => newSelectedRows.has(id));
        
        if (allContactRowsSelected) {
          newSelectedContacts.add(contact.id);
        }

        contact.refrigerationGroups.forEach(refGroup => {
          const refGroupRowIds = getRowsInRefrigerationGroup(refGroup.id);
          const allRefGroupRowsSelected = refGroupRowIds.length > 0 && refGroupRowIds.every(id => newSelectedRows.has(id));
          
          if (allRefGroupRowsSelected) {
            newSelectedRefrigerationGroups.add(refGroup.id);
          }
        });
      });
    });

    setSelectedGroups(newSelectedGroups);
    setSelectedContacts(newSelectedContacts);
    setSelectedRefrigerationGroups(newSelectedRefrigerationGroups);
  };

  const toggleRowSelection = (rowId: string) => {
    setSelectedRows(prev => {
      const newSet = new Set(prev);
      if (newSet.has(rowId)) {
        newSet.delete(rowId);
      } else {
        newSet.add(rowId);
      }
      updateGroupAndContactSelections(newSet);
      onSelectionChange?.(newSet.size);
      return newSet;
    });
  };

  const toggleGroupSelection = (groupId: string) => {
    const groupRowIds = getRowsInGroup(groupId);
    const isGroupSelected = selectedGroups.has(groupId);
    
    setSelectedRows(prev => {
      const newSet = new Set(prev);
      
      if (isGroupSelected) {
        // Deselect all rows in this group
        groupRowIds.forEach(rowId => newSet.delete(rowId));
      } else {
        // Select all rows in this group
        groupRowIds.forEach(rowId => newSet.add(rowId));
      }
      
      updateGroupAndContactSelections(newSet);
      onSelectionChange?.(newSet.size);
      return newSet;
    });
  };

  const toggleContactSelection = (contactId: string) => {
    const contactRowIds = getRowsInContact(contactId);
    const isContactSelected = selectedContacts.has(contactId);
    
    setSelectedRows(prev => {
      const newSet = new Set(prev);
      
      if (isContactSelected) {
        // Deselect all rows in this contact
        contactRowIds.forEach(rowId => newSet.delete(rowId));
      } else {
        // Select all rows in this contact
        contactRowIds.forEach(rowId => newSet.add(rowId));
      }
      
      updateGroupAndContactSelections(newSet);
      onSelectionChange?.(newSet.size);
      return newSet;
    });
  };

  const toggleRefrigerationGroupSelection = (refrigerationId: string) => {
    const refGroupRowIds = getRowsInRefrigerationGroup(refrigerationId);
    const isRefGroupSelected = selectedRefrigerationGroups.has(refrigerationId);
    
    setSelectedRows(prev => {
      const newSet = new Set(prev);
      
      if (isRefGroupSelected) {
        // Deselect all rows in this refrigeration group
        refGroupRowIds.forEach(rowId => newSet.delete(rowId));
      } else {
        // Select all rows in this refrigeration group
        refGroupRowIds.forEach(rowId => newSet.add(rowId));
      }
      
      updateGroupAndContactSelections(newSet);
      onSelectionChange?.(newSet.size);
      return newSet;
    });
  };

  const getAllRowIds = (): string[] => {
    const rowIds: string[] = [];
    data.groups.forEach(group => {
      group.contacts.forEach(contact => {
        contact.refrigerationGroups.forEach(refGroup => {
          refGroup.rows.forEach(row => {
            rowIds.push(row.id);
          });
        });
      });
    });
    return rowIds;
  };

  const getTotalRowCount = (): number => {
    return getAllRowIds().length;
  };

  const getAllGroupIds = (): string[] => {
    return data.groups.map(group => group.id);
  };

  const getAllContactIds = (): string[] => {
    const contactIds: string[] = [];
    data.groups.forEach(group => {
      group.contacts.forEach(contact => {
        contactIds.push(contact.id);
      });
    });
    return contactIds;
  };

  const getAllRefrigerationGroupIds = (): string[] => {
    const refGroupIds: string[] = [];
    data.groups.forEach(group => {
      group.contacts.forEach(contact => {
        contact.refrigerationGroups.forEach(refGroup => {
          refGroupIds.push(refGroup.id);
        });
      });
    });
    return refGroupIds;
  };

  const getRowsInGroup = (groupId: string): string[] => {
    const group = data.groups.find(g => g.id === groupId);
    if (!group) return [];
    
    const rowIds: string[] = [];
    group.contacts.forEach(contact => {
      contact.refrigerationGroups.forEach(refGroup => {
        refGroup.rows.forEach(row => {
          rowIds.push(row.id);
        });
      });
    });
    return rowIds;
  };

  const getRowsInContact = (contactId: string): string[] => {
    let contactRows: string[] = [];
    data.groups.forEach(group => {
      const contact = group.contacts.find(c => c.id === contactId);
      if (contact) {
        contact.refrigerationGroups.forEach(refGroup => {
          refGroup.rows.forEach(row => {
            contactRows.push(row.id);
          });
        });
      }
    });
    return contactRows;
  };

  const getRowsInRefrigerationGroup = (refrigerationId: string): string[] => {
    let refGroupRows: string[] = [];
    data.groups.forEach(group => {
      group.contacts.forEach(contact => {
        const refGroup = contact.refrigerationGroups.find(r => r.id === refrigerationId);
        if (refGroup) {
          refGroupRows = refGroup.rows.map(row => row.id);
        }
      });
    });
    return refGroupRows;
  };

  const selectAll = () => {
    const allRowIds = getAllRowIds();
    const allGroupIds = getAllGroupIds();
    const allContactIds = getAllContactIds();
    const allRefrigerationGroupIds = getAllRefrigerationGroupIds();
    
    setSelectedRows(new Set(allRowIds));
    setSelectedGroups(new Set(allGroupIds));
    setSelectedContacts(new Set(allContactIds));
    setSelectedRefrigerationGroups(new Set(allRefrigerationGroupIds));
    onSelectionChange?.(allRowIds.length);
  };

  const clearSelections = () => {
    setSelectedRows(new Set());
    setSelectedGroups(new Set());
    setSelectedContacts(new Set());
    setSelectedRefrigerationGroups(new Set());
    onSelectionChange?.(0);
  };

  useImperativeHandle(ref, () => ({
    clearSelections,
    selectAll,
    getTotalRowCount,
    getSelectedCount: () => selectedRows.size,
    expandAll,
    collapseAll,
    collapseThirdLevel,
    setGroupingLevel1,
    setGroupingLevel2,
    setGroupingLevel3,
  }));

  const renderTableHeader = () => {
    const totalRows = getTotalRowCount();
    const selectedCount = selectedRows.size;
    const isAllSelected = totalRows > 0 && selectedCount === totalRows;
    const isIndeterminate = selectedCount > 0 && selectedCount < totalRows;

    const handleHeaderCheckboxChange = () => {
      if (isAllSelected) {
        clearSelections();
      } else {
        selectAll();
      }
    };

    return (
      <div className="flex w-full h-8 bg-[#f5f5f5] border-b border-[#bfbeb9]">
        {/* Checkbox Column */}
        <div className="w-36 flex items-center justify-start p-2 border-r border-[#bfbeb9]">
          <Checkbox 
            checked={isAllSelected ? true : isIndeterminate ? 'indeterminate' : false}
            onCheckedChange={handleHeaderCheckboxChange}
          />
        </div>
      
      {/* Date Column */}
      <div className="flex-1 flex items-center justify-start px-2 py-0 border-r border-[#bfbeb9]">
        <span className="text-[13px] font-semibold text-[#383836]">Date</span>
      </div>
      
      {/* Weight Column */}
      <div className="w-[155px] flex items-center justify-start px-2 py-0 border-r border-[#bfbeb9]">
        <span className="text-[13px] font-semibold text-[#383836]">Weight (KG)</span>
      </div>
      
      {/* Status Column */}
      <div className="flex-1 flex items-center justify-start px-2 py-0 border-r border-[#bfbeb9]">
        <span className="text-[13px] font-semibold text-[#383836]">Status</span>
      </div>

      {/* Origin Column */}
      <div className="flex-1 flex items-center justify-start px-2 py-0 border-r border-[#bfbeb9]">
        <span className="text-[13px] font-semibold text-[#383836]">Origin</span>
      </div>

      {/* Description Column */}
      <div className="flex-1 flex items-center justify-start px-2 py-0">
        <span className="text-[13px] font-semibold text-[#383836]">Description</span>
      </div>
    </div>
    );
  };

  const renderGroupRow = (group: TransportModeGroup, groupIndex: number) => {
    // Only add top border if this is not the first group
    const borderClass = groupIndex === 0 ? "" : "border-t border-[#e8e7e3]";
    
    const groupRowIds = getRowsInGroup(group.id);
    const selectedRowsInGroup = groupRowIds.filter(id => selectedRows.has(id)).length;
    const isGroupFullySelected = groupRowIds.length > 0 && selectedRowsInGroup === groupRowIds.length;
    const isGroupPartiallySelected = selectedRowsInGroup > 0 && selectedRowsInGroup < groupRowIds.length;
    
    return (
      <div 
        key={group.id} 
        className={`w-full bg-white ${borderClass} hover:bg-[#ecf1ff] cursor-pointer`}
        onClick={() => toggleGroup(group.id)}
      >
        <div className="flex items-center px-2 h-10">
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                className="p-1 h-auto hover:bg-transparent"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleGroup(group.id);
                }}
              >
                <ExpandIcon isExpanded={group.isExpanded} />
              </Button>
              <Checkbox 
                checked={isGroupFullySelected ? true : isGroupPartiallySelected ? 'indeterminate' : false}
                onCheckedChange={() => toggleGroupSelection(group.id)}
                onClick={(e) => e.stopPropagation()} 
              />
            </div>
            <div className="flex items-baseline gap-1">
              {groupLabels && <span className="text-[12px] font-normal text-[#7a7975]">Transport mode:</span>}
              <span className="text-[14px] font-bold text-[#383836]">{group.mode}</span>
              <span className="text-[14px] font-normal text-[#383836]">({group.count})</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderContactRow = (group: TransportModeGroup, contact: ContactGroup, contactIndex: number) => {
    const contactRowIds = getRowsInContact(contact.id);
    const selectedRowsInContact = contactRowIds.filter(id => selectedRows.has(id)).length;
    const isContactFullySelected = contactRowIds.length > 0 && selectedRowsInContact === contactRowIds.length;
    const isContactPartiallySelected = selectedRowsInContact > 0 && selectedRowsInContact < contactRowIds.length;
    
    return (
      <div 
        key={contact.id} 
        className="w-full bg-white hover:bg-[#ecf1ff] cursor-pointer"
        onClick={() => toggleContact(group.id, contact.id)}
      >
        <div className="flex items-center pl-8 pr-2 h-10">
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                className="p-1 h-auto hover:bg-transparent"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleContact(group.id, contact.id);
                }}
              >
                <ExpandIcon isExpanded={contact.isExpanded} />
              </Button>
              <Checkbox 
                checked={isContactFullySelected ? true : isContactPartiallySelected ? 'indeterminate' : false}
                onCheckedChange={() => toggleContactSelection(contact.id)}
                onClick={(e) => e.stopPropagation()} 
              />
            </div>
            <div className="flex items-baseline gap-1">
              {groupLabels && <span className="text-[12px] font-normal text-[#7a7975]">Contact:</span>}
              <span className="text-[13px] font-semibold text-[#383836]">{contact.name}</span>
              <span className="text-[13px] font-normal text-[#383836]">({contact.count})</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderRefrigerationGroupRow = (group: TransportModeGroup, contact: ContactGroup, refGroup: RefrigerationGroup, refGroupIndex: number) => {
    const refGroupRowIds = getRowsInRefrigerationGroup(refGroup.id);
    const selectedRowsInRefGroup = refGroupRowIds.filter(id => selectedRows.has(id)).length;
    const isRefGroupFullySelected = refGroupRowIds.length > 0 && selectedRowsInRefGroup === refGroupRowIds.length;
    const isRefGroupPartiallySelected = selectedRowsInRefGroup > 0 && selectedRowsInRefGroup < refGroupRowIds.length;
    
    return (
      <div 
        key={refGroup.id} 
        className="w-full bg-white hover:bg-[#ecf1ff] cursor-pointer"
        onClick={() => toggleRefrigerationGroup(group.id, contact.id, refGroup.id)}
      >
        <div className="flex items-center pl-16 pr-2 h-10">
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                className="p-1 h-auto hover:bg-transparent"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleRefrigerationGroup(group.id, contact.id, refGroup.id);
                }}
              >
                <ExpandIcon isExpanded={refGroup.isExpanded} />
              </Button>
              <Checkbox 
                checked={isRefGroupFullySelected ? true : isRefGroupPartiallySelected ? 'indeterminate' : false}
                onCheckedChange={() => toggleRefrigerationGroupSelection(refGroup.id)}
                onClick={(e) => e.stopPropagation()} 
              />
            </div>
            <div className="flex items-baseline gap-1">
              {groupLabels && <span className="text-[12px] font-normal text-[#7a7975]">Cargo type:</span>}
              <span className="text-[13px] font-semibold text-[#383836]">{refGroup.isHazardous ? 'Hazardous' : 'Non-hazardous'}</span>
              <span className="text-[13px] font-normal text-[#383836]">({refGroup.count})</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderDataRow = (
    row: DataRow,
    isAlternate: boolean = false,
    showBorder: boolean = false,
    isFirst: boolean = false
  ) => {
    const isSelected = selectedRows.has(row.id);
    const rowBgColor = isSelected
      ? 'bg-[#ecf1ff]'
      : zebraRows && isAlternate ? 'bg-[#f7f7f4]' : 'bg-white';
    const borderClass = [
      (!zebraRows || showBorder) ? 'border-b border-[#e8e7e3]' : '',
      (!zebraRows && isFirst) ? 'border-t border-[#e8e7e3]' : '',
    ].filter(Boolean).join(' ');

    return (
      <div key={row.id} className={`flex w-full h-8 ${rowBgColor} ${borderClass} hover:bg-[#ecf1ff]`}>
        {/* Actions Column */}
        <div className="w-36 flex items-center justify-start rounded-l">
          <div className="flex items-center pl-[109px] pr-2 gap-1">
            <Checkbox
              checked={selectedRows.has(row.id)}
              onCheckedChange={() => toggleRowSelection(row.id)}
            />
          </div>
        </div>

        {/* Date Column */}
        <div className="flex-1 flex items-center justify-start px-2">
          <span className="text-[13px] font-normal text-[#383836]">{row.date}</span>
        </div>

        {/* Weight Column */}
        <div className="w-[155px] flex items-center justify-end px-2">
          <span className="text-[13px] font-normal text-[#383836] text-right">{row.weight.toFixed(2)}</span>
        </div>

        {/* Status Column */}
        <div className="flex-1 flex items-center justify-start px-2">
          <StatusBadge status={row.status} />
        </div>

        {/* Origin Column */}
        <div className="flex-1 flex items-center justify-start px-2">
          <span className="text-[13px] font-normal text-[#383836]">{row.origin}</span>
        </div>

        {/* Description Column */}
        <div className="flex-1 flex items-center justify-start px-2">
          <span className="text-[13px] font-normal text-[#383836]">{row.description}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col">
      {renderTableHeader()}
      
      {data.groups.map((group, groupIndex) => (
        <div key={group.id}>
          {renderGroupRow(group, groupIndex)}

          {/* Level 1: records directly under transport group */}
          {visibleLevels === 1 && group.isExpanded &&
            getAllRecordsInGroup(group).map((row, index) =>
              renderDataRow(row, index % 2 === 0, false, index === 0)
            )
          }

          {/* Level 2: contacts, then records directly under each contact */}
          {visibleLevels === 2 && group.isExpanded && group.contacts.map((contact, contactIndex) => (
            <div key={contact.id}>
              {renderContactRow(group, contact, contactIndex)}
              {contact.isExpanded &&
                getAllRecordsInContact(contact).map((row, index) =>
                  renderDataRow(row, index % 2 === 0, false, index === 0)
                )
              }
            </div>
          ))}

          {/* Level 3: full hierarchy */}
          {visibleLevels === 3 && group.isExpanded && group.contacts.map((contact, contactIndex) => (
            <div key={contact.id}>
              {renderContactRow(group, contact, contactIndex)}

              {contact.isExpanded && contact.refrigerationGroups.map((refGroup, refGroupIndex) => (
                <div key={refGroup.id}>
                  {renderRefrigerationGroupRow(group, contact, refGroup, refGroupIndex)}

                  {refGroup.isExpanded && refGroup.rows.map((row, index) => {
                    const isLastRowInRefGroup = index === refGroup.rows.length - 1;
                    const isLastRefGroupInContact = refGroupIndex === contact.refrigerationGroups.length - 1;
                    const isLastContactInGroup = contactIndex === group.contacts.length - 1;
                    const isLastGroupInData = groupIndex === data.groups.length - 1;
                    const showBorder = isLastRowInRefGroup && (
                      !isLastRefGroupInContact ||
                      (isLastRefGroupInContact && !isLastContactInGroup) ||
                      (isLastRefGroupInContact && isLastContactInGroup && !isLastGroupInData)
                    );
                    return renderDataRow(row, index % 2 === 0, showBorder, index === 0);
                  })}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
});

DataTable.displayName = 'DataTable';