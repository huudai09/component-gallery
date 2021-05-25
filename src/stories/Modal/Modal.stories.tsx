import React from "react";
import { Story, Meta } from "@storybook/react";

import { Modal, ModalProps } from "./Modal";

export default {
  title: "TW-Feedback/Modal",
  visible: true,
  onShow: () => {},
} as Meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const ModalShow = Template.bind({});
ModalShow.args = {
  visible: true,
  title: "Modal visible 22",
  onShow: () => {},
};

export const ModalHide = Template.bind({});
ModalHide.args = {
  visible: true,
  title: "Modal hidden",
  onShow: () => {},
};
