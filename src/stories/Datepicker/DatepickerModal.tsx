import React from "react";
import { DatepickerBody } from "./DatepickerBody";
import { DatepickerHeader } from "./DatepickerHeader";

export const DatepickerModal = () => {
  return (
    <div className="tw-dp-modal tw-modal">
      <DatepickerHeader />
      <DatepickerBody />
    </div>
  );
};
