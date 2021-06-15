import dayjs, { Dayjs } from "dayjs";

export interface IState {
  value: Dayjs;
  format: string;
}

export type IAction = {
  type: string;
  payload?: any;
};

export enum IDatepickerActionType {
  Initial = "Initial",
  Update = "Update",
}

function dpReducer(state: IState, action: IAction) {
  switch (action.type) {
    case IDatepickerActionType.Initial: {
      const value = action.payload as string;
      const dayobj = dayjs(value || new Date());

      // const startOfMonth = dayobj.startOf("month");

      // console.log("---------------------------");
      // console.log("current date:", dayobj.date());
      // console.log("current day:", dayobj.day());
      // console.log("current month:", dayobj.month());
      // console.log("start of month:", startOfMonth.day());
      // console.log("end of month:", dayobj.endOf("month"));
      // console.log("subtract 1 month", startOfMonth.subtract(1, "date"));

      return { ...state, ...{ value: dayobj } };
    }

    // case IDatepickerActionType.Update: {
    //   const value = action.payload as string;
    //   return { ...state, ...{ value } };
    // }

    default: {
      // return state;
      throw new Error(`Unhandled action`);
    }
  }
}

export { dpReducer };
