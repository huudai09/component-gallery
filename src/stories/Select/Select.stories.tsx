import React from "react";
import { Story, Meta } from "@storybook/react";
import { Select, SelectProps } from "./Select";

export default {
  title: "TW-DataEntry/Select",
  component: Select,
  // decorators: [
  //   (Story) => {
  //     return (
  //       <>
  //         <div style={{ width: 300 }}>
  //           <Story />
  //         </div>
  //       </>
  //     );
  //   },
  // ],
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Normal = Template.bind({});

Normal.args = {
  label: "Select field",
  placeholder: "Please select a value",
  selected: ["3"],
  onChange: (v) => {
    console.log("v", v);
  },
  disabled: false,
  readonly: false,
  values: [
    { title: "option 1", value: "1" },
    { title: "option 2", value: "2" },
    { title: "option 3", value: "3" },
    { title: "option 4", value: "4" },
    { title: "option 5", value: "5" },
  ],
};

export const Disable = Template.bind({});

Disable.args = {
  label: "Select field",
  selected: ["3"],
  disabled: true,
  values: [
    { title: "option 1", value: "1" },
    { title: "option 2", value: "2" },
    { title: "option 3", value: "3" },
    { title: "option 4", value: "4" },
    { title: "option 5", value: "5" },
  ],
};

export const Multiple = Template.bind({});

Multiple.args = {
  label: "Select multiple field",
  selected: ["3", "4"],
  multiple: true,
  values: [
    { title: "option 1", value: "1" },
    { title: "option 2", value: "2" },
    { title: "option 3", value: "3" },
    { title: "option 4", value: "4" },
    { title: "option 5", value: "5" },
  ],
};
