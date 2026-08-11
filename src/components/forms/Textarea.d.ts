export interface TextareaProps {
  label?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  error?: string;
  hint?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Textarea(props: TextareaProps): JSX.Element;
