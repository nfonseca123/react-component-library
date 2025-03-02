import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Label from "./Label";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Label",
  component: Label,
} as ComponentMeta<typeof Label>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const DefaultLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultLabel.args = {
  label: "Label",
  bgColor: "blue",
  hoverColor: "darkblue", 
};
