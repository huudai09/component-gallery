import React, { useEffect, useRef } from "react";
import { InputBaseProps } from "../../interfaces/DataEntry";
import { random } from "../core/utils";
import "./select.css";
import { SelectProvider, useSelectState } from "./SelectContext";
import { SelectOptionContainer } from "./SelectOptionContainer";
import { IActionType } from "./SelectReducer";
import { SelectTitles } from "./SelectTitles";

export interface SelectValues {
  title: string;
  value: string;
}

export type SelectedValueType = string[];

export interface SelectProps extends InputBaseProps {
  /**
   * Label of checkbox
   */
  label?: string;
  /**
   * Label of checkbox
   */
  multiple?: boolean;
  /**
   * List of values
   */
  values?: SelectValues[];
  /**
   * List of values
   */
  selected?: SelectedValueType;
}

const SelectWrapper: React.FC<SelectProps> = ({
  label = "",
  onChange = () => {},

  multiple = false,
  disabled = false,
  readonly = false,
  placeholder = "",
  selected = [],
  values = [],
}) => {
  const {
    dispatch,
    state: { selected: selectedOptions },
  } = useSelectState();
  const id = useRef(random());
  const hasSelectOptions = selectedOptions.filter(Boolean);

  useEffect(() => {
    selectedOptions && onChange(selectedOptions[0]);
  }, [selectedOptions, onChange]);

  useEffect(() => {
    dispatch({
      type: IActionType.Initial,
      payload: {
        values,
        placeholder,
        id: id.current,
      },
    });
  }, [values, placeholder, dispatch, id]);

  useEffect(() => {
    dispatch({
      type: IActionType.Select,
      payload: selected,
    });
  }, [selected, dispatch]);

  useEffect(() => {
    dispatch({
      type: IActionType.Status,
      payload: {
        multiple,
        disabled,
        readonly,
      },
    });
  }, [multiple, disabled, readonly, dispatch]);

  const classes = [];

  disabled && classes.push("disabled");
  readonly && classes.push("readonly");
  multiple && classes.push("multiple");
  hasSelectOptions.length > 0 && classes.push('has-selected-option')

  return (
    <>
      {label ? <div className="tw-input-label">{label}</div> : null}
      <div className={`tw-select-wrapper ${classes.join(" ")}`} id={id.current}>
        <SelectTitles />
        <SelectOptionContainer />
      </div>
    </>
  );
};

export const Select: React.FC<any> = (props) => {
  return (
    <SelectProvider>
      <SelectWrapper {...props} />
    </SelectProvider>
  );
};
