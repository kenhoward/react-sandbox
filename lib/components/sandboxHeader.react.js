var SandboxHeader = React.createClass({
  displayName: "SandboxHeader",

  render: function () {
    return React.createElement(
      "nav",
      { className: "navbar navbar-default" },
      React.createElement(
        "div",
        { className: "container-fluid" },
        React.createElement(
          "div",
          { className: "navbar-header" },
          React.createElement(
            "a",
            { className: "navbar-brand", href: "#" },
            "React Sandbox"
          )
        )
      )
    );
  }
});