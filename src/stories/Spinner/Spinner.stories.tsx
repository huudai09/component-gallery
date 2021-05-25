import React from "react";
import { Story, Meta } from "@storybook/react";
import { SpinnerProps, Spinner } from "./Spinner";

export default {
  title: "TW-Feedback/Spinner",
  component: Spinner,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as Meta;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Button",
// };
