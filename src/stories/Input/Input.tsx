import React from "react";
import { InputBaseProps } from "../../interfaces/DataEntry";
import "./input.css";

// type TInputType = "text" | "number";
enum EInputType {
  Text = "text",
  Number = "number",
}

export interface InputProps extends InputBaseProps {
  /**
   * Label of checkbox
   */
  label?: string;
  /**
   * Label of checkbox
   */
  type?: EInputType;
}

export const Input: React.FC<InputProps> = ({
  label = "",
  type = "text",
  readonly = false,
  onChange = () => {},
  ...props
}) => {
  const id = (new Date().getTime() + 0.1).toString(16);

  return (
    <label htmlFor={id} className="tw-input-wrapper">
      {label ? <span className="tw-input-label">{label}</span> : null}
      <input
        id={id}
        type={type}
        className="tw-input"
        onKeyPress={(ev: React.KeyboardEvent<HTMLInputElement>) => {
          if (ev.key === "e" && type === EInputType.Number) {
            ev.preventDefault();
          }
        }}
        readOnly={readonly}
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
          onChange(ev.target.value);
        }}
        {...props}
      />
    </label>
  );
};
