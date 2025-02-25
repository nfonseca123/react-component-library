import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "./Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultCard.args = {
  cardTitle: "Card",
  cardText: "This is a simple card element. You can add more content here as needed.",
  cardFooter: "Footer",
  bgColor: "blue", // Default background color
  hoverColor: "darkblue", // Default hover color
};
