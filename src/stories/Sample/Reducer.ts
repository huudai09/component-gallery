export interface IState {
  value: string;
}

export type IAction = {
  type: string;
  payload?: any;
};

export enum ISampleActionType {
  Initial = "Initial",
}

function dpReducer(state: IState, action: IAction) {
  switch (action.type) {
    case ISampleActionType.Initial: {
      const value = action.payload as string;
      return { ...state, ...{ value } };
    }

    default: {
      // return state;
      throw new Error(`Unhandled action`);
    }
  }
}

const useSampleUtils = () => {
  const log = (dateStr: string) => {
    console.log(dateStr);
  };

  return {
    log,
  };
};

export { dpReducer, useSampleUtils };
