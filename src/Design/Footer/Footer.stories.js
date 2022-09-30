import React from "react";
import Footer from "./Footer";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design/Footer",
  component: Footer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Footer {...args} />;

export const FooterElement = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FooterElement.args = {
  className: "footer",
  children: "Arteveldehogeschool - Kyan Van Rossem",
};
