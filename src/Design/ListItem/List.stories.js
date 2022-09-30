import React from "react";
import ListItem from "./ListItem";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design/ListItem",
  component: ListItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ListItem {...args} />;

export const ListItemElement = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ListItemElement.args = {
  className: "list--listItem",
  children: "Kyan",
};
