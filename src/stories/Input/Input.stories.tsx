import React from "react";
import { Story, Meta } from "@storybook/react";
import { Input, InputProps } from "./Input";

export default {
  title: "TW-DataEntry/Input",
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Normal = Template.bind({});

Normal.args = {
  label: "Input label",
};
