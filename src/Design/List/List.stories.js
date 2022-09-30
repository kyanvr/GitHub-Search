import React from "react";
import ListItem from "../ListItem/ListItem";
import List from "./List";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design/List",
  component: List,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <List {...args} />;

export const ListElement = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ListElement.args = {
  className: "usersList",
  children: [
      <>
        <ListItem name="Kyan" />
        <ListItem name="Robin" />
        <ListItem name="Niels" />
        <ListItem name="Naboth" />
      </>
  ],
};
