import React from "react";
import Reset from "./Reset";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design/Buttons",
  component: Reset,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Reset {...args} />;

export const ResetButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ResetButton.args = {
  className: "btnReset",
  children: "Reset",
};
