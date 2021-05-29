import React, { useEffect } from "react";
import { useSelectState, useSelectUtils } from "./SelectContext";
import { SelectDeleteAll } from "./SelectDeleteAll";
import { IActionType } from "./SelectReducer";

export const SelectTitles = () => {
  const {
    state: { id, selected },
    dispatch,
  } = useSelectState();

  const { getDataBySelected } = useSelectUtils();

  const toggleSelect = (visible: boolean) => {
    dispatch({
      type: IActionType.Visible,
      payload: visible,
    });
  };

  useEffect(() => {
    if (id) {
      const clickOutside = (event: MouseEvent) => {
        const selectWrapper = document.getElementById(id);
        if (selectWrapper === null) return;
        if (!selectWrapper.contains(event.target as Node)) {
          toggleSelect(false);
        }
      };
      document.addEventListener("mousedown", clickOutside);
      return () => {
        document.removeEventListener("mousedown", clickOutside);
      };
    }
  }, [id]);

  console.log("selected", selected);
  const hasNoSelect = selected.filter(Boolean);

  return (
    <div
      className="tw-select-label tw-input"
      tabIndex={-1}
      onClick={() => {
        toggleSelect(true);
      }}
    >
      {selected
        ? selected.map((s) => {
            const dt = getDataBySelected(s);
            return <span className="tw-select-label-item">{dt?.title}</span>;
          })
        : null}

      {!hasNoSelect.length ? <span className="tw-placeholder">Placeholder</span> : null}
      <div className="tw-select-icon"></div>
      <SelectDeleteAll/>
    </div>
  );
};
