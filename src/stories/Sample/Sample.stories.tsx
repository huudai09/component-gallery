import React from "react";
import { Story, Meta } from "@storybook/react";
import { Sample, SampleProps } from "./Sample";

export default {
  title: "TW-DataEntry/Sample",
  component: Sample,
} as Meta;

const Template: Story<SampleProps> = (args) => <Sample {...args} />;

export const Normal = Template.bind({});
