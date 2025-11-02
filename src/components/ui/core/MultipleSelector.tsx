'use client';

import clsx from 'clsx';
import { Command as CommandPrimitive, useCommandState } from 'cmdk';
import { X } from 'lucide-react';
import * as React from 'react';
import { forwardRef, useEffect } from 'react';

// Custom Badge component to replace shadcn Badge
const Badge = ({
  children,
  className = '',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <span
      className={`
        inline-flex items-center gap-1 rounded-full border
        border-gray-200 bg-gray-100 px-2.5 py-0.5 text-xs font-medium
        text-gray-800 transition-colors hover:bg-gray-200
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
};

// Custom Command components to replace shadcn
const Command = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={`
      flex h-full w-full flex-col overflow-hidden rounded-md bg-white
      ${className}
    `}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

const CommandList = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={`
      max-h-96 overflow-y-auto overflow-x-hidden
      ${className}
    `}
    {...props}
  />
));
CommandList.displayName = CommandPrimitive.List.displayName;

const CommandGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={`
      overflow-hidden p-1 text-gray-800 [&_[cmdk-group-heading]]:px-2 
      [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs 
      [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-gray-500
      ${className}
    `}
    {...props}
  />
));
CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={`
      relative flex cursor-pointer select-none items-center rounded-sm px-2 
      py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none 
      data-[selected=true]:bg-primary/10 data-[selected=true]:text-primary
      data-[disabled=true]:opacity-50
      ${className}
    `}
    {...props}
  />
));
CommandItem.displayName = CommandPrimitive.Item.displayName;

// Utility function (keep the same)
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

export interface Option {
  value: string;
  label: string;
  disable?: boolean;
  /** fixed option that can't be removed. */
  fixed?: boolean;
  /** Group the options by providing key. */
  [key: string]: string | boolean | undefined;
}

interface GroupOption {
  [key: string]: Option[];
}

interface MultipleSelectorProps {
  value?: Option[];
  defaultOptions?: Option[];
  /** manually controlled options */
  options?: Option[];
  placeholder?: string;
  /** Loading component. */
  loadingIndicator?: React.ReactNode;
  /** Empty component. */
  emptyIndicator?: React.ReactNode;
  /** Debounce time for async search. Only work with `onSearch`. */
  delay?: number;
  /**
   * Only work with `onSearch` prop. Trigger search when `onFocus`.
   * For example, when user click on the input, it will trigger the search to get initial options.
   **/
  triggerSearchOnFocus?: boolean;
  /** async search */
  onSearch?: (value: string) => Promise<Option[]>;
  /**
   * sync search. This search will not showing loadingIndicator.
   * The rest props are the same as async search.
   * i.e.: creatable, groupBy, delay.
   **/
  onSearchSync?: (value: string) => Option[];
  onChange?: (options: Option[]) => void;
  /** Limit the maximum number of selected options. */
  maxSelected?: number;
  /** When the number of selected options exceeds the limit, the onMaxSelected will be called. */
  onMaxSelected?: (maxLimit: number) => void;
  /** Hide the placeholder when there are options selected. */
  hidePlaceholderWhenSelected?: boolean;
  disabled?: boolean;
  /** Group the options base on provided key. */
  groupBy?: string;
  className?: string;
  badgeClassName?: string;
  /**
   * First item selected is a default behavior by cmdk. That is why the default is true.
   * This is a workaround solution by add a dummy item.
   *
   * @reference: https://github.com/pacocoursey/cmdk/issues/171
   */
  selectFirstItem?: boolean;
  /** Allow user to create option when there is no option matched. */
  creatable?: boolean;
  /** Props of `Command` */
  commandProps?: React.ComponentPropsWithoutRef<typeof Command>;
  /** Props of `CommandInput` */
  inputProps?: Omit<
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>,
    'value' | 'placeholder' | 'disabled'
  >;
  /** hide the clear all button. */
  hideClearAllButton?: boolean;
}

export interface MultipleSelectorRef {
  selectedValue: Option[];
  input: HTMLInputElement;
  focus: () => void;
  reset: () => void;
}

export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

function transToGroupOption(options: Option[], groupBy?: string) {
  if (options.length === 0) return {};
  if (!groupBy) return { '': options };

  const groupOption: GroupOption = {};
  options.forEach((option) => {
    const key = (option[groupBy] as string) || '';
    if (!groupOption[key]) groupOption[key] = [];
    groupOption[key].push(option);
  });
  return groupOption;
}

function removePickedOption(groupOption: GroupOption, picked: Option[]) {
  const cloneOption = JSON.parse(JSON.stringify(groupOption)) as GroupOption;
  for (const [key, value] of Object.entries(cloneOption)) {
    cloneOption[key] = value.filter(
      (val) => !picked.find((p) => p.value === val.value)
    );
  }
  return cloneOption;
}

function isOptionsExist(groupOption: GroupOption, targetOption: Option[]) {
  for (const [, value] of Object.entries(groupOption)) {
    if (
      value.some((option) => targetOption.find((p) => p.value === option.value))
    ) {
      return true;
    }
  }
  return false;
}

const CommandEmpty = forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof CommandPrimitive.Empty>
>(({ className, ...props }, forwardedRef) => {
  const render = useCommandState((state) => state.filtered.count === 0);
  if (!render) return null;

  return (
    <div
      ref={forwardedRef}
      className={cn('py-6 text-center text-sm text-gray-500', className)}
      cmdk-empty=""
      role="presentation"
      {...props}
    />
  );
});
CommandEmpty.displayName = 'CommandEmpty';

const MultipleSelector = React.forwardRef<
  MultipleSelectorRef,
  MultipleSelectorProps
>(
  (
    {
      value,
      onChange,
      placeholder = 'Select options...',
      defaultOptions: arrayDefaultOptions = [],
      options: arrayOptions,
      delay,
      onSearch,
      onSearchSync,
      loadingIndicator = (
        <div className="py-6 text-center text-sm">Loading...</div>
      ),
      emptyIndicator = (
        <div className="py-6 text-center text-sm">No results found.</div>
      ),
      maxSelected = Number.MAX_SAFE_INTEGER,
      onMaxSelected,
      hidePlaceholderWhenSelected,
      disabled,
      groupBy,
      className,
      badgeClassName,
      selectFirstItem = true,
      creatable = false,
      triggerSearchOnFocus = false,
      commandProps,
      inputProps,
      hideClearAllButton = false,
    }: MultipleSelectorProps,
    ref: React.Ref<MultipleSelectorRef>
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [open, setOpen] = React.useState(false);
    const [onScrollbar, setOnScrollbar] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    const [selected, setSelected] = React.useState<Option[]>(value || []);
    const [options, setOptions] = React.useState<GroupOption>(
      transToGroupOption(arrayDefaultOptions, groupBy)
    );
    const [inputValue, setInputValue] = React.useState('');
    const debouncedSearchTerm = useDebounce(inputValue, delay || 500);

    React.useImperativeHandle(
      ref,
      () => ({
        selectedValue: [...selected],
        input: inputRef.current as HTMLInputElement,
        focus: () => inputRef?.current?.focus(),
        reset: () => setSelected([]),
      }),
      [selected]
    );

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
        inputRef.current.blur();
      }
    };

    const handleUnselect = React.useCallback(
      (option: Option) => {
        const newOptions = selected.filter((s) => s.value !== option.value);
        setSelected(newOptions);
        onChange?.(newOptions);
      },
      [onChange, selected]
    );

    const handleKeyDown = React.useCallback(
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        const input = inputRef.current;
        if (input) {
          if (e.key === 'Delete' || e.key === 'Backspace') {
            if (input.value === '' && selected.length > 0) {
              const lastSelectOption = selected[selected.length - 1];
              if (!lastSelectOption.fixed) {
                handleUnselect(selected[selected.length - 1]);
              }
            }
          }
          if (e.key === 'Escape') input.blur();
        }
      },
      [handleUnselect, selected]
    );

    useEffect(() => {
      if (open) {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchend', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('touchend', handleClickOutside);
      }
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('touchend', handleClickOutside);
      };
    }, [open]);

    useEffect(() => {
      if (value) setSelected(value);
    }, [value]);

    useEffect(() => {
      if (!arrayOptions || onSearch) return;
      const newOption = transToGroupOption(arrayOptions || [], groupBy);
      if (JSON.stringify(newOption) !== JSON.stringify(options)) {
        setOptions(newOption);
      }
    }, [arrayDefaultOptions, arrayOptions, groupBy, onSearch, options]);

    useEffect(() => {
      const doSearchSync = () => {
        const res = onSearchSync?.(debouncedSearchTerm);
        setOptions(transToGroupOption(res || [], groupBy));
      };

      const exec = async () => {
        if (!onSearchSync || !open) return;
        if (triggerSearchOnFocus) doSearchSync();
        if (debouncedSearchTerm) doSearchSync();
      };

      void exec();
    }, [
      debouncedSearchTerm,
      groupBy,
      open,
      triggerSearchOnFocus,
      onSearchSync,
    ]);

    useEffect(() => {
      const doSearch = async () => {
        setIsLoading(true);
        const res = await onSearch?.(debouncedSearchTerm);
        setOptions(transToGroupOption(res || [], groupBy));
        setIsLoading(false);
      };

      const exec = async () => {
        if (!onSearch || !open) return;
        if (triggerSearchOnFocus) await doSearch();
        if (debouncedSearchTerm) await doSearch();
      };

      void exec();
    }, [debouncedSearchTerm, groupBy, open, triggerSearchOnFocus, onSearch]);

    const CreatableItem = () => {
      if (!creatable) return undefined;
      if (
        isOptionsExist(options, [{ value: inputValue, label: inputValue }]) ||
        selected.find((s) => s.value === inputValue)
      )
        return undefined;

      const Item = (
        <CommandItem
          value={inputValue}
          className="cursor-pointer"
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          onSelect={(value: string) => {
            if (selected.length >= maxSelected) {
              onMaxSelected?.(selected.length);
              return;
            }
            setInputValue('');
            const newOptions = [...selected, { value, label: value }];
            setSelected(newOptions);
            onChange?.(newOptions);
          }}
        >
          {`Create "${inputValue}"`}
        </CommandItem>
      );

      if (!onSearch && inputValue.length > 0) return Item;
      if (onSearch && debouncedSearchTerm.length > 0 && !isLoading) return Item;
      return undefined;
    };

    const EmptyItem = React.useCallback(() => {
      if (!emptyIndicator) return undefined;
      if (onSearch && !creatable && Object.keys(options).length === 0) {
        return (
          <CommandItem value="-" disabled>
            {emptyIndicator}
          </CommandItem>
        );
      }
      return <CommandEmpty>{emptyIndicator}</CommandEmpty>;
    }, [creatable, emptyIndicator, onSearch, options]);

    const selectables = React.useMemo<GroupOption>(
      () => removePickedOption(options, selected),
      [options, selected]
    );

    const commandFilter = React.useCallback(() => {
      if (commandProps?.filter) return commandProps.filter;
      if (creatable)
        return (value: string, search: string) =>
          value.includes(search) ? 1 : -1;
      return undefined;
    }, [creatable, commandProps?.filter]);

    return (
      <Command
        ref={dropdownRef}
        {...commandProps}
        onKeyDown={(e) => {
          handleKeyDown(e);
          commandProps?.onKeyDown?.(e);
        }}
        className={cn(
          'h-auto overflow-visible bg-transparent',
          commandProps?.className
        )}
        shouldFilter={
          commandProps?.shouldFilter !== undefined
            ? commandProps.shouldFilter
            : !onSearch
        }
        filter={commandFilter()}
      >
        <div
          className={cn(
            'min-h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 transition-colors',
            'focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20',
            disabled && 'cursor-not-allowed opacity-50 bg-gray-100',
            selected.length > 0 && 'py-2',
            className
          )}
          onClick={() => {
            if (disabled) return;
            inputRef?.current?.focus();
          }}
        >
          <div className="relative flex flex-wrap gap-1">
            {selected.map((option) => (
              <Badge
                key={option.value}
                className={cn(
                  badgeClassName,
                  (disabled || option.fixed) && 'opacity-50 cursor-not-allowed'
                )}
                data-fixed={option.fixed}
                data-disabled={disabled || undefined}
              >
                {option.label}
                <button
                  className={cn(
                    'ml-1 rounded-full outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1',
                    (disabled || option.fixed) && 'hidden'
                  )}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleUnselect(option);
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={() => handleUnselect(option)}
                >
                  <X className="h-3 w-3 text-gray-500 hover:text-gray-700" />
                </button>
              </Badge>
            ))}
            <CommandPrimitive.Input
              {...inputProps}
              ref={inputRef}
              value={inputValue}
              disabled={disabled}
              onValueChange={(value) => {
                setInputValue(value);
                inputProps?.onValueChange?.(value);
              }}
              onBlur={(event) => {
                if (!onScrollbar) setOpen(false);
                inputProps?.onBlur?.(event);
              }}
              onFocus={(event) => {
                setOpen(true);
                inputProps?.onFocus?.(event);
              }}
              placeholder={
                hidePlaceholderWhenSelected && selected.length !== 0
                  ? ''
                  : placeholder
              }
              className={clsx(
                'flex-1 bg-transparent outline-none placeholder:text-gray-400 text-sm',
                {
                  'w-full': hidePlaceholderWhenSelected,
                  'ml-1': selected.length !== 0,
                },
                inputProps?.className
              )}
            />
            <button
              type="button"
              onClick={() => {
                setSelected(selected.filter((s) => s.fixed));
                onChange?.(selected.filter((s) => s.fixed));
              }}
              className={cn(
                'absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 hover:text-gray-600',
                (hideClearAllButton ||
                  disabled ||
                  selected.length < 1 ||
                  selected.filter((s) => s.fixed).length === selected.length) &&
                  'hidden'
              )}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="relative">
          {open && (
            <CommandList
              className="absolute top-1 z-50 w-full rounded-lg border border-gray-200 bg-white shadow-lg py-1"
              onMouseLeave={() => setOnScrollbar(false)}
              onMouseEnter={() => setOnScrollbar(true)}
              onMouseUp={() => inputRef?.current?.focus()}
            >
              {isLoading ? (
                <div className="py-2 px-2">{loadingIndicator}</div>
              ) : (
                <>
                  {EmptyItem()}
                  {CreatableItem()}
                  {!selectFirstItem && (
                    <CommandItem value="-" className="hidden" />
                  )}
                  {Object.entries(selectables).map(([key, dropdowns]) => (
                    <CommandGroup
                      key={key}
                      heading={key}
                      className="overflow-hidden"
                    >
                      {dropdowns.map((option) => (
                        <CommandItem
                          key={option.value}
                          value={option.value}
                          disabled={option.disable}
                          onMouseDown={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                          }}
                          onSelect={() => {
                            if (selected.length >= maxSelected) {
                              onMaxSelected?.(selected.length);
                              return;
                            }
                            setInputValue('');
                            const newOptions = [...selected, option];
                            setSelected(newOptions);
                            onChange?.(newOptions);
                          }}
                          className={cn(
                            'cursor-pointer',
                            option.disable && 'cursor-default text-gray-400'
                          )}
                        >
                          {option.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  ))}
                </>
              )}
            </CommandList>
          )}
        </div>
      </Command>
    );
  }
);

MultipleSelector.displayName = 'MultipleSelector';
export default MultipleSelector;
