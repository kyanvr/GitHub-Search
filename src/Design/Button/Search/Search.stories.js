import React from "react";
import Search from "./Search";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design/Buttons",
  component: Search,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Search {...args} />;

export const SearchActive = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SearchActive.args = {
  className: "btnSearch",
  children: "Search",
};

export const SearchDisabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SearchDisabled.args = {
  className: "btnSearch disabled",
  children: "Search",
};
