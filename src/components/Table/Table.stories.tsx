import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Table from "./Table";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const DefaultTable = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultTable.args = {
  headerName: "Header",
  tableData: "Data",
  footerName: "Footer",
  bgColor: "blue",  
  hoverColor: "darkblue", 
};
