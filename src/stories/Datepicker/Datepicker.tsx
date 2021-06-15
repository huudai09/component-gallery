import "../common.css";
import "./datepicker.css";
import React, { useEffect } from "react";
import { InputBaseProps } from "../../interfaces/DataEntry";
import { DatepickerProvider, useDatepickerState } from "./Store/Context";
import { useDatepickerAction } from "./Hooks";
import { IDatepickerActionType } from "./Store/Reducer";
import { DatepickerModal } from "./DatepickerModal";

enum DatepickerMode {
  Date = "Date",
  Month = "Month",
  Year = "Year",
}

export interface DatepickerProps extends InputBaseProps {
  /**
   * Values of datepicker
   */
  value?: string;
  /**
   * Values of datepicker
   */
  mode?: DatepickerMode;
}

const DatepickerWrapper: React.FC<DatepickerProps> = ({
  value = "",
  placeholder = "",
  readonly = false,
  mode = DatepickerMode.Date,
  onChange = () => {},
  ...props
}) => {
  const { state, dispatch } = useDatepickerState();
  const { initial, renderByFormat } = useDatepickerAction();

  useEffect(() => {
    initial(value);
  }, [value, initial]);

  return (
    <div className="tw-dp-container">
      <input
        type="text"
        value={renderByFormat(state.value)}
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
          console.log(ev.target.value);
          dispatch({
            type: IDatepickerActionType.Update,
            payload: ev.target.value,
          });
        }}
        readOnly={readonly}
        className="tw-input"
        {...props}
      />
      <DatepickerModal />
    </div>
  );
};

export const Datepicker: React.FC<DatepickerProps> = (props) => {
  return (
    <DatepickerProvider>
      <DatepickerWrapper {...props} />
    </DatepickerProvider>
  );
};
