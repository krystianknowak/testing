import React from "react";
import { mount } from "enzyme";
import Root from "Root";
import CommentList from "components/CommentList";

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ["Comment 1", "Comment 2"]
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("creates one LI per comment", () => {
  expect(wrapped.find("li").length).toEqual(2);
});

it("shows text for each comment", () => {
  // console.log(wrapped.render().text()); // return a cheerio element, something like jquery
  expect(wrapped.render().text()).toContain("Comment 1");
  expect(wrapped.render().text()).toContain("Comment 2");
});
