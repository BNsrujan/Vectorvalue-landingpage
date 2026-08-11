export interface CheckboxProps {
  label: React.ReactNode;
  name?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
