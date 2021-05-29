import React from "react";
import { useSelectState } from "./SelectContext";
import { IActionType } from "./SelectReducer";

export const SelectDeleteAll = () => {
  const { dispatch } = useSelectState();

  return (
    <div
      className="tw-select-delete-all"
      onClick={(ev) => {
        ev.stopPropagation();
        dispatch({
          type: IActionType.DeleteAll,
        });
      }}
    >
      ×
    </div>
  );
};
