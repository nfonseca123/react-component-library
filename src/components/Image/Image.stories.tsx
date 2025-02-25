import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Image from "./Image";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Image",
  component: Image,
} as ComponentMeta<typeof Image>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const DefaultImage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultImage.args = {
  src: "https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg",
  alt: "Cat",
  borderColor: "green",
  bgColor: "blue",  
  hoverColor: "darkblue",
};
