import React from "react";
import "./modal.css";

export interface ModalProps {
  visible?: boolean;
  title: string;
  onShow: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Modal: React.FC<ModalProps> = ({
  visible = false,
  title = "Title",
  ...props
}) => {
  return <div onClick={props.onShow} {...props}>{title}</div>;
};
