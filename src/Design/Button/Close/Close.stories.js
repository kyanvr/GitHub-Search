import React from "react";
import Close from "./Close";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design/Buttons",
  component: Close,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Close {...args} />;

export const CloseButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CloseButton.args = {
  className: "detail__btn-close",
  children: "X",
};
