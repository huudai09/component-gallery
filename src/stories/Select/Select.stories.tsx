import React from "react";
import { Story, Meta } from "@storybook/react";
import { Select, SelectProps } from "./Select";

export default {
  title: "TW-DataEntry/Select",
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Normal = Template.bind({});
