import { createContext, useReducer, useContext, Dispatch } from "react";
import {
  IAction,
  IActionType,
  IState,
  r2dReducer,
  SelectValue,
} from "./SelectReducer";

const initialState = {
  id: "",
  placeholder: "",
  visible: false,
  multiple: false,
  disabled: false,
  readonly: false,
  selected: [],
  values: [],
};

interface IContext {
  state: IState;
  dispatch: Dispatch<IAction>;
}

const SelectContext = createContext<IContext>({
  state: initialState,
  dispatch: (v) => {},
});

interface ISelectProvider {
  children: JSX.Element | JSX.Element[];
}

const SelectProvider = ({ children }: ISelectProvider) => {
  const [state, dispatch] = useReducer(r2dReducer, initialState);
  const newState = state || initialState;
  const value = { state: newState, dispatch };

  return (
    <SelectContext.Provider value={value}>
      <>{children}</>
    </SelectContext.Provider>
  );
};

const useSelectState = () => {
  const context = useContext(SelectContext);
  if (context === undefined) {
    throw new Error("useSelectState must be used within a R2DContext");
  }
  return context;
};

const useSelectUtils = () => {
  const context = useContext(SelectContext);
  if (context === undefined) {
    throw new Error("useSelectState must be used within a R2DContext");
  }

  const setVisible = (visible: boolean) => {
    context.dispatch({
      type: IActionType.Visible,
      payload: visible,
    });
  };

  const setSelected = (data: SelectValue) => {
    context.dispatch({
      type: IActionType.Select,
      payload: [data.value],
    });
  };

  const getSelected = (value: string) => {
    return context.state.selected.find((v) => v === value);
  };

  const getDataBySelected = (value: string) => {
    return context.state.values.find((v) => v.value === value);
  };

  return { setVisible, setSelected, getSelected, getDataBySelected };
};

export { SelectProvider, useSelectState, useSelectUtils };
