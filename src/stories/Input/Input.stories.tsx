import React from "react";
import Input from "../../Input/Input";

export default {
  title: "Component/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const LabelPrimaryInput = Template.bind({});
LabelPrimaryInput.args = {
  label: "Test Label",
  placeholder: "Your placeholder",
};

export const ValuePrimaryInput = Template.bind({});
ValuePrimaryInput.args = {
  label: "Test Value",
  placeholder: "Your placeholder",
};

export const LargePrimaryInput = Template.bind({});
LargePrimaryInput.args = {
  label: "Test Value",
  xl: true,
  placeholder: "Your placeholder",
};
