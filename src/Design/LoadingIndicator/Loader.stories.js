import React from "react";
import Loader from "./LoadingIndicator";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design/Loader",
  component: Loader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Loader {...args} />;

export const LoaderElement = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LoaderElement.args = {
  className: "loader",
  children: "Loading",
};
