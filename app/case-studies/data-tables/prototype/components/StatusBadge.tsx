interface StatusBadgeProps {
  status: 'Pending' | 'Critical' | 'Success';
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'bg-indigo-100 text-indigo-700';
      case 'Critical':
        return 'bg-rose-100 text-rose-700';
      case 'Success':
        return 'bg-emerald-100 text-emerald-700';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className={`inline-flex items-center justify-center px-2.5 py-px rounded-2xl ${getStatusStyles(status)}`}>
      <span className="text-[12px] font-normal leading-[16px] whitespace-pre">
        {status}
      </span>
    </div>
  );
}