import React from "react";
import { useDatepickerBodyAction } from "../Hooks";
// import { useDatepickerState } from "../Store/Context";

export const DatepickerDateBody = () => {
  // const { state } = useDatepickerState();
  const { getDateByMonth } = useDatepickerBodyAction();

  // console.log(state.value);
  // const en
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = getDateByMonth();

  return (
    <table className="tw-dp-body">
      <thead>
        <tr>
          {days.map((day) => {
            return <th key={day}>{day}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        <tr></tr>
      </tbody>
    </table>
  );
};
