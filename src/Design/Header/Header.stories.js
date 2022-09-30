import React from "react";
import Header from "./Header";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design/Header",
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Header {...args} />;

export const HeaderElement = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HeaderElement.args = {
  className: "header",
  children: "Github Search",
};
