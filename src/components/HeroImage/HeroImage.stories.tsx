import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HeroImage from "./HeroImage";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/HeroImage",
  component: HeroImage,
} as ComponentMeta<typeof HeroImage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeroImage> = (args) => <HeroImage {...args} />;

export const DefaultHeroImage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultHeroImage.args = {
  label: "Nature",
  backgroundImage: "https://images.unsplash.com/photo-1739981062052-d47d99db0d34?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  bgColor: "blue", // Default background color
  hoverColor: "darkblue", // Default hover color
};
