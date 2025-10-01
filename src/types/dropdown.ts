export interface IDropdownItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  tag?: string;
}

export interface IDropdownProps {
  title: string;
  items: IDropdownItem[];
  icon?: React.ReactNode;
  className?: string;
  mainLink: string;
}
