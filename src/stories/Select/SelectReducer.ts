export interface SelectValue {
  title: string;
  value: string;
}

type TSelected = string[];

export interface IState {
  id: string;
  visible: boolean;
  multiple: boolean;
  disabled: boolean;
  readonly: boolean;
  placeholder: string;

  selected: TSelected;
  values: SelectValue[];
}

export type IAction = {
  type: string;
  payload?: any;
};

export enum IActionType {
  Visible = "Visible",
  Initial = "Initial",
  Select = "Select",
  Status = "Status",
  DeleteAll = "DeleteAll",
}

type ISelectIntialType = Pick<IState, "values" | "id" | "placeholder">;
type IStatusType = Pick<IState, "multiple" | "disabled" | "readonly">;

function r2dReducer(state: IState, action: IAction) {
  switch (action.type) {
    case IActionType.Initial: {
      const { values, id, placeholder } = action.payload as ISelectIntialType;
      return { ...state, ...{ values, id, placeholder } };
    }

    case IActionType.Visible: {
      const visible = action.payload as boolean;
      const stt = state.disabled || state.readonly ? false : visible;
      return { ...state, ...{ visible: stt } };
    }

    case IActionType.Select: {
      const selected = action.payload as TSelected;
      let newSelected = state.selected;
      if (state.multiple) {
        selected.forEach((s) => {
          const existIndex = newSelected.findIndex((v) => v === s);
          if (existIndex !== -1) {
            delete newSelected[existIndex];
          } else {
            newSelected.push(s);
          }
        });
      } else {
        newSelected = selected;
      }

      console.log("newSelected", newSelected);

      return { ...state, ...{ selected: newSelected } };
    }

    case IActionType.Status: {
      const { disabled, multiple, readonly } = action.payload as IStatusType;
      return { ...state, ...{ disabled, multiple, readonly } };
    }

    case IActionType.DeleteAll: {
      return { ...state, ...{ selected: [] } };
    }

    default: {
      // return state;
      throw new Error(`Unhandled action`);
    }
  }
}

export { r2dReducer };
