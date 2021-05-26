import React from "react";
import { Story, Meta } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
  title: "TW-DataEntry/Checkbox",
  component: Checkbox,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: "Checkbox",
};

export const Checked = Template.bind({});
Checked.args = {
  label: "Checked",
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  checked: true,
  disabled: true,
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Button",
// };
