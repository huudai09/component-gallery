import { Dayjs } from "dayjs";
import { useCallback, useContext } from "react";
import { Context } from "./Store/Context";
import { IDatepickerActionType } from "./Store/Reducer";

export const useDatepickerAction = () => {
  const context = useContext(Context);
  const dispatch = context.dispatch;

  const initial = useCallback(
    (dateStr: string) => {
      console.log("run initial datepicker");
      dispatch({
        type: IDatepickerActionType.Initial,
        payload: dateStr,
      });
    },
    [dispatch]
  );

  const update = (dateStr: string) => {
    dispatch({
      type: IDatepickerActionType.Update,
      payload: dateStr,
    });
  };

  const renderByFormat = useCallback(
    (date: Dayjs) => {
      console.log("context.state.format", context.state.format);
      return date.format(context.state.format);
    },
    [context.state.format]
  );

  return { initial, update, renderByFormat };
};

export const useDatepickerBodyAction = () => {
  const context = useContext(Context);
  const dispatch = context.dispatch;
  const { value: date } = context.state;

  const getDateByMonth = () => {
    const dateArr = [];
    const firstDateOfMonth = date.startOf("month");
    const maxDate = date.endOf("month").date();
    let index = firstDateOfMonth.day();
    let start = 1;
    const len = maxDate + index;

    for (;index < len; index++) {
      dateArr[index] = start++;
    }

    console.log("firstDateOfMonth", maxDate, dateArr);

    // console.log(
    //   "firstDateOfMonth:",
    //   firstDateOfMonth,
    //   dayOfFistDate,
    //   lastDateOfMonth.date()
    // );
  };

  return { getDateByMonth };
};
