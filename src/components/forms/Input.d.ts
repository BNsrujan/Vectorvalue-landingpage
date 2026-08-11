/**
 * Single-line text field with uppercase mono label, hint and error states.
 * @startingPoint section="Forms" subtitle="Text, select, textarea, checkbox and file upload" viewport="700x300"
 */
export interface InputProps {
  label?: string;
  name?: string;
  type?: "text" | "email" | "tel" | "url" | "number";
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  /** Error message — turns the border red and sets aria-invalid. */
  error?: string;
  /** Helper text shown under the field when there is no error. */
  hint?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
