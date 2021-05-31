import { useContext } from "react";
import { Context } from "./Context";
import { IDatepickerActionType } from "./Reducer";

export const useDatepickerAction = () => {
  const context = useContext(Context);
  const dispatch = context.dispatch;

  const initial = (dateStr: string) => {
    dispatch({
      type: IDatepickerActionType.Initial,
      payload: dateStr,
    });
  };

  const update = (dateStr: string) => {
    dispatch({
      type: IDatepickerActionType.Update,
      payload: dateStr,
    });
  };

  return { initial, update };
};
