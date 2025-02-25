import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RadioButton from "./RadioButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/RadioButton",
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />;

export const DefaultRadioButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultRadioButton.args = {
  radioButtonName: "Are you a robot?",
  firstQuestion: "Yes",
  secondQuestion: "No",
  bgColor: "blue", // Default background color
  hoverColor: "darkblue", // Default hover color
};
