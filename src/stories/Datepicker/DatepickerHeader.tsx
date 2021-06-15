import React from "react";
import { DatepickerDateHeader } from "./Date/DatepickerDateHeader";

export const DatepickerHeader = () => {
  return (
    <div className="tw-dp-header">
      <div className="tw-dp-btn-header tw-dp-btn-back"></div>
      <div className="tw-dp-header-view">
        <DatepickerDateHeader />
      </div>
      <div className="tw-dp-btn-header tw-dp-btn-next"></div>
    </div>
  );
};
