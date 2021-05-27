export interface InputBaseProps {
  disabled?: boolean;
  readonly?: boolean;
  placeholder?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}
