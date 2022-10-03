import React from "react";

class App extends React.Component {
  render() {
    return (
      <div id="data-1">
        <h1>Hello World</h1>
      </div>
    );
  }
}

const App = React.createElement(
  "div",
  { id: "data-1" },
  React.createElement("h1", null, "hello world")
);
