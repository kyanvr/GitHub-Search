import React from "react";
import Reset from "../Button/Reset/Reset";
import Search from "../Button/Search/Search";
import Input from "../Input/Input";
import SearchForm from "./SearchForm";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design/SearchForm",
  component: SearchForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SearchForm {...args} />;

export const SearchFormElement = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SearchFormElement.args = {
  className: "searchForm",
  children: [
      <>
      <Input />
      <Search />
      <Reset />
      </>
  ],
};
