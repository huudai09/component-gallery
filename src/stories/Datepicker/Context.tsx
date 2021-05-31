import { createContext, useReducer, Dispatch, useContext } from "react";
import { IAction, IState, dpReducer } from "./Reducer";

const initialState = {
  value: "",
};

interface IContext {
  state: IState;
  dispatch: Dispatch<IAction>;
}

export const Context = createContext<IContext>({
  state: initialState,
  dispatch: (v) => {},
});

interface IDatepickerProvider {
  children: JSX.Element | JSX.Element[];
}

const DatepickerProvider = ({ children }: IDatepickerProvider) => {
  const [state, dispatch] = useReducer(dpReducer, initialState);
  const value = { state, dispatch };

  return (
    <Context.Provider value={value}>
      <>{children}</>
    </Context.Provider>
  );
};

const useDatepickerState = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useDatepickerState must be used within a R2DContext");
  }
  return context;
};

export { DatepickerProvider, useDatepickerState };
