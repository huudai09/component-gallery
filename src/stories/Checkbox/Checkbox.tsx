import React, { useState } from "react";
import "./checkbox.css";

export interface CheckboxProps {
  /**
   * Label of checkbox
   */
  label?: string;
  /**
   * Checkbox's status
   */
  checked?: boolean;
  /**
   * Checkbox's mode
   */
  disabled?: boolean;
  /**
   * Event when checkbox changes
   */
  onChange?: (val: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label = "",
  checked = false,
  disabled = false,
  onChange = () => {},
}) => {
  const [val, setVal] = useState(checked);
  const id = (new Date().getTime() + 0.1).toString(16);

  return (
    <label className="tw-checkbox-container" htmlFor={id}>
      {label ? <span className="tw-checkbox-label">{label}</span> : null}
      <input
        onChange={() => {
          setVal(!val);
          onChange(val);
        }}
        id={id}
        disabled={disabled}
        type="checkbox"
        checked={val}
      />
      <span className="tw-checkbox-checkmark"></span>
    </label>
  );
};
