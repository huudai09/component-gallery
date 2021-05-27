import React, { useEffect, useState } from "react";
import "./radio.css";

export interface RadioProps {
  /**
   * Label of Radio
   */
  label?: string;
  /**
   * Radio's status
   */
  checked?: boolean;
  /**
   * Radio's mode
   */
  disabled?: boolean;
  /**
   * Radio's value
   */
  value?: string;
  /**
   * Event when Radio changes
   */
  onChange?: (val: boolean) => void;
}

export const Radio: React.FC<RadioProps> = ({
  label = "",
  value = "",
  checked = false,
  disabled = false,
  onChange = () => {},
}) => {
  const [val, setVal] = useState(checked);
  const id = (new Date().getTime() + 0.1).toString(16);

  useEffect(() => {
    setVal(checked);
  }, [checked]);

  return (
    <label className="tw-radio-container" htmlFor={id}>
      {label ? <span className="tw-radio-label">{label}</span> : null}
      <input
        onChange={() => {
          setVal(!val);
          onChange(val);
        }}
        value={value}
        id={id}
        disabled={disabled}
        type="radio"
        checked={val}
      />
      <span className="tw-radio-checkmark"></span>
    </label>
  );
};
