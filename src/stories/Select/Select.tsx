import React from "react";
import "./select.css";

export interface SelectProps {
  /**
   * Label of checkbox
   */
  label?: string;
}

export const Select: React.FC<SelectProps> = ({ label = "" }) => {
  return <div>Select</div>;
};
