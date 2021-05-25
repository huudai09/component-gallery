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

export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Button",
// };
