import React from "react";
import ReactDOM from "react-dom";
import Root from "Root";
import App from "components/App";

const providerApp = (
  <Root>
    <App />
  </Root>
);

ReactDOM.render(providerApp, document.querySelector("#root"));
