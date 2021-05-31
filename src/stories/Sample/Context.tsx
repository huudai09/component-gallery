import { createContext, useReducer, useContext, Dispatch } from "react";
import { IAction, IState, dpReducer } from "./Reducer";

const initialState = {
  value: "",
};

export interface IContext {
  state: IState;
  dispatch: Dispatch<IAction>;
}

export const Context = createContext<IContext>({
  state: initialState,
  dispatch: (v) => {},
});

interface ISampleProvider {
  children: JSX.Element | JSX.Element[];
}

const SampleProvider = ({ children }: ISampleProvider) => {
  const [state, dispatch] = useReducer(dpReducer, initialState);
  const newState = state || initialState;
  const value = { state: newState, dispatch };

  console.log("valuevalue", value);
  // const value = { state, dispatch };

  return (
    <Context.Provider value={value}>
      <>{children}</>
    </Context.Provider>
  );
};

export { SampleProvider };
