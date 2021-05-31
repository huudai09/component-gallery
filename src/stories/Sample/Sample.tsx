import React from "react";
import { SampleProvider } from "./Context";
import "./sample.css";

export interface SampleProps {
  /**
   * Label of checkbox
   */
  label?: string;
}

const SampleRoot: React.FC<SampleProps> = ({ label = "" }) => {
  return <div>Sample</div>;
};

export const Sample: React.FC<SampleProps> = (props) => {
  return (
    <SampleProvider>
      <SampleRoot {...props} />
    </SampleProvider>
  );
};
