import React from "react";
import Input from "./Input";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Input {...args} />;

export const InputElement = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputElement.args = {
  className: "input--search",
  children: "Search a GitHub user",
};
