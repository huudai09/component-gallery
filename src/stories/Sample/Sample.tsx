import React from "react";
import "./sample.css";

export interface SampleProps {
  /**
   * Label of checkbox
   */
  label?: string;
}

export const Sample: React.FC<SampleProps> = ({ label = "" }) => {
  return <div>Sample</div>;
};
