export interface IState {
  value: string;
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
      return { ...state, ...{ value } };
    }

    case IDatepickerActionType.Update: {
      const value = action.payload as string;
      return { ...state, ...{ value } };
    }

    default: {
      // return state;
      throw new Error(`Unhandled action`);
    }
  }
}

export { dpReducer };
