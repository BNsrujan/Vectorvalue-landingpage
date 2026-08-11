export interface FileUploadProps {
  label?: string;
  name?: string;
  /** Format/size guidance rendered in mono under the prompt. */
  hint?: string;
  accept?: string;
  multiple?: boolean;
  onFiles?: (files: File[]) => void;
  style?: React.CSSProperties;
}
export declare function FileUpload(props: FileUploadProps): JSX.Element;
