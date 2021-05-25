import React from "react";
import "./button.css";

import { Spinner } from "../Spinner/Spinner";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * Display loading status
   */
  loading?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  loading = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary ? "tw-btn--primary" : "tw-btn--secondary";
  const classes = ["tw-btn", `tw-btn--${size}`, mode];

  return (
    <button
      type="button"
      className={classes.join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      <div className="tw-btn-wrapper">
        {loading ? <Spinner /> : null}
        <span>{label}</span>
      </div>
    </button>
  );
};
