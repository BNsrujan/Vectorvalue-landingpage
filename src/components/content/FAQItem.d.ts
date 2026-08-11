export interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  defaultOpen?: boolean;
  tone?: "light" | "dark";
  style?: React.CSSProperties;
}
export declare function FAQItem(props: FAQItemProps): JSX.Element;
