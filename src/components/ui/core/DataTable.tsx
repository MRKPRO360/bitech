'use client';

import React from 'react';
import ReactDOM from 'react-dom';
import { Edit, Trash2, Eye, Loader2, MoreVertical } from 'lucide-react';
import { TableColumn, TableProps } from '@/types/table';

const DataTable = <T,>({
  data,
  columns,
  onEdit,
  onDelete,
  onView,
  isLoading = false,
  actions = ['view', 'edit', 'delete'],
}: TableProps<T>) => {
  const renderCellContent = (column: TableColumn<T>, item: T) => {
    if (column.render) {
      return column.render((item as any)[column.key as keyof T], item);
    }

    const value = (item as any)[column.key as keyof T];

    switch (typeof value) {
      case 'boolean':
        return value ? (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Yes
          </span>
        ) : (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            No
          </span>
        );

      case 'object':
        if (value instanceof Date) {
          return value.toLocaleDateString();
        }
        if (Array.isArray(value)) {
          return (
            <div className="flex flex-wrap gap-1">
              {value.slice(0, 2).map((item, index) => (
                <span
                  key={index}
                  className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded"
                >
                  {String(item)}
                </span>
              ))}
              {value.length > 2 && (
                <span className="inline-block bg-gray-50 text-gray-500 text-xs px-2 py-1 rounded">
                  +{value.length - 2}
                </span>
              )}
            </div>
          );
        }
        return JSON.stringify(value);

      default:
        return <span className="text-sm text-gray-900">{String(value)}</span>;
    }
  };

  const ActionDropdown = ({
    item,
    onClose,
    position,
  }: {
    item: T;
    onClose: () => void;
    position: { top: number; left: number };
  }) => {
    return ReactDOM.createPortal(
      <div
        onClick={(e) => e.stopPropagation()} // 🧠 prevent bubbling up
        style={{
          position: 'absolute',
          top: position.top,
          left: position.left,
          zIndex: 9999,
        }}
        className="w-32 bg-white border border-gray-200 rounded-lg shadow-lg"
      >
        <ul className="py-1 text-sm text-gray-700">
          {actions.includes('view') && onView && (
            <li>
              <button
                onClick={() => {
                  onView(item);
                  onClose();
                }}
                className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-100 transition"
              >
                <Eye className="w-4 h-4 text-blue-500" />
                View
              </button>
            </li>
          )}
          {actions.includes('edit') && onEdit && (
            <li>
              <button
                onClick={() => {
                  onEdit(item);
                  onClose();
                }}
                className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-100 transition"
              >
                <Edit className="w-4 h-4 text-green-500" />
                Edit
              </button>
            </li>
          )}
          {actions.includes('delete') && onDelete && (
            <li>
              <button
                onClick={() => {
                  onDelete(item);
                  onClose();
                }}
                className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-100 text-red-600 transition"
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
            </li>
          )}
        </ul>
      </div>,
      document.body
    );
  };

  const renderActions = (item: T) => {
    const [open, setOpen] = React.useState(false);
    const [position, setPosition] = React.useState<{
      top: number;
      left: number;
    } | null>(null);
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          buttonRef.current &&
          !buttonRef.current.contains(event.target as Node)
        ) {
          setOpen(false);
        }
      };
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const handleOpen = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setPosition({
          top: rect.bottom + window.scrollY + 4,
          left: rect.right - 130 + window.scrollX,
        });
      }
      setOpen((prev) => !prev);
    };

    return (
      <>
        <button
          ref={buttonRef}
          onClick={handleOpen}
          className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition"
        >
          <MoreVertical className="w-5 h-5" />
        </button>

        {open && position && (
          <ActionDropdown
            item={item}
            onClose={() => setOpen(false)}
            position={position}
          />
        )}
      </>
    );
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-lg border border-gray-200">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 relative">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                {columns.map((column) => (
                  <td
                    key={String(column.key)}
                    className="p-3 whitespace-nowrap"
                  >
                    {column.key === 'actions'
                      ? renderActions(item)
                      : renderCellContent(column, item)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {data.length === 0 && !isLoading && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-2">
            <Eye className="w-12 h-12 mx-auto opacity-50" />
          </div>
          <p className="text-gray-500 text-lg font-medium">No data found</p>
          <p className="text-gray-400 text-sm mt-1">
            There's nothing to display at the moment
          </p>
        </div>
      )}
    </div>
  );
};

export default DataTable;
