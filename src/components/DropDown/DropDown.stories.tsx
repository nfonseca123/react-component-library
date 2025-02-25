import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DropDown from "./DropDown";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/DropDown",
  component: DropDown,
} as ComponentMeta<typeof DropDown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DropDown> = (args) => <DropDown {...args} />;

export const DefaultDropDown = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultDropDown.args = {
  dropDownName: "Fruit",
  optionOneText: "orange",
  optionTwoText: "Apple",
  optionThreeText: "Mango",
  bgColor: "blue",  
  hoverColor: "darkblue",
};
