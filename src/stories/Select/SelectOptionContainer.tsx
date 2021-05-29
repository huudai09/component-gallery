import React from "react";
import { useSelectState, useSelectUtils } from "./SelectContext";

export const SelectOptionContainer = () => {
  const {
    state: { values, visible },
  } = useSelectState();

  const { setVisible, setSelected, getSelected } = useSelectUtils();

  return (
    <div className={`tw-select-options ${visible ? "visible" : ""}`}>
      {values.map((data, index) => {
        const isSelected = getSelected(data.value);
        return (
          <div
            key={index}
            onClick={() => {
              setVisible(false);
              setSelected(data);
            }}
            className={`tw-option ${isSelected ? "selected" : ""}`}
          >
            {data.title}
          </div>
        );
      })}
    </div>
  );
};
