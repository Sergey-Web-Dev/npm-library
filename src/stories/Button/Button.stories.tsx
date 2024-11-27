import React from "react";
import Button from "../../Button/Button";

export default {
  title: "Component/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const GreenPrimaryBtn = Template.bind({});
GreenPrimaryBtn.args = {
  color: "green",
  children: "Add to Card",
};

export const RedPrimaryBtn = Template.bind({});
RedPrimaryBtn.args = {
  color: "red",
  children: "Add to Card",
};

export const LargePrimaryBtn = Template.bind({});
LargePrimaryBtn.args = {
  color: "gray",
  xl: true,
  children: "Add to Card",
};
