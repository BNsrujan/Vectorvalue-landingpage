export interface SelectOption { value: string; label: string }
export interface SelectProps {
  label?: string;
  name?: string;
  /** Strings or {value,label} objects. */
  options?: (string | SelectOption)[];
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  hint?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Select(props: SelectProps): JSX.Element;
