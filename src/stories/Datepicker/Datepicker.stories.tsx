import React from "react";
import { Story, Meta } from "@storybook/react";
import { Datepicker, DatepickerProps } from "./Datepicker";

export default {
  title: "TW-DataEntry/Datepicker",
  component: Datepicker,
} as Meta;

const Template: Story<DatepickerProps> = (args) => <Datepicker {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  value: "30/05/2021",
  placeholder: "Datepicker",
};
