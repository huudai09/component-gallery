import { Story, Meta } from "@storybook/react";
import { Radio, RadioProps } from "./Radio";

export default {
  title: "TW-DataEntry/Radio",
  component: Radio,
} as Meta;

const Template: Story<RadioProps> = (args) => <Radio {...args} />;

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
