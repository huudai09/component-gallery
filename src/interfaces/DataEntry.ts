export interface InputBaseProps {
  /**
   * Make input disable
   */
  disabled?: boolean;
  /**
   * Readonly status
   */
  readonly?: boolean;
  /**
   * PLaceholder's input
   */
  placeholder?: string;
  /**
   * Default value
   */
  defaultValue?: string;
  onChange?: (value: string) => void;
}
