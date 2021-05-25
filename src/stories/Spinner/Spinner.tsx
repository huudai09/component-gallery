import React from "react";
import "./spinner.css";

export interface SpinnerProps {
  /**
   * Spinner's color
   */
  color?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ color = "#eaeaea" }) => {
  return (
    <svg
      className="spinner"
      width="14px"
      height="14px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <rect
        className="spinner__rect"
        x="0"
        y="0"
        width="100"
        height="100"
        fill="none"
      ></rect>
      <circle
        className="spinner__circle"
        cx="50"
        cy="50"
        r="40"
        stroke={color}
        fill="none"
        stroke-width="6"
        stroke-linecap="round"
      ></circle>
    </svg>
  );
};
