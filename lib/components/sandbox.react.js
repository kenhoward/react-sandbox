var Sandbox = React.createClass({
  displayName: "Sandbox",


  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(SandboxHeader, null),
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "h1",
          null,
          "Ready To Go"
        )
      )
    );
  }

});