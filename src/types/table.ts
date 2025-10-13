export interface TableColumn<T> {
  key: keyof T | 'actions';
  label: string;
  sortable?: boolean;
  render?: (value: any, data: T) => React.ReactNode;
}

export interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  onEdit?: (data: T) => void;
  onDelete?: (data: T) => void;
  onView?: (data: T) => void;
  onChangeStatus?: (data: T) => void;
  isLoading?: boolean;
  actions?: ('view' | 'edit' | 'delete' | 'changeStatus')[];
}
