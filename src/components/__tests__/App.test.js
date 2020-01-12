import React from "react";
import ReactDom from "react-dom";

import App from "../App";

it("shows a comment box", () => {
  const div = document.createElement("div");

  ReactDom.render(<App />, div);

  // Looks inside the div and checks to see if the commentBox is in there
  // console.log(div.innerHTML);
  expect(div.innerHTML).toContain("Comment Box");

  ReactDom.unmountComponentAtNode(div);
});
