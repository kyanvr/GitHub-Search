import React from "react";
import Error from "./Error";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design/Error",
  component: Error,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Error {...args} />;

export const ErrorMessage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ErrorMessage.args = {
  className: "error",
  children: "Something went wrong",
};
