import React from "react";
import "./datepicker.css";

export interface DatepickerProps {
  /**
   * Label of checkbox
   */
  label?: string;
}

export const Datepicker: React.FC<DatepickerProps> = ({ label = "" }) => {
  return <div>Datepicker</div>;
};
