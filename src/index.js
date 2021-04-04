import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return (
    <React.Fragment>
      <h1>Hello World! My name is John Doe</h1>
      <p>I love:</p>
      <ul>
        <li>writing JavaScript</li>
        <li>reading about Computing</li>
        <li>playing Football Manager</li>
      </ul>
      <img src="" alt="" />
    </React.Fragment>
  );
}

ReactDOM.render(<Greeting />, document.getElementById("root"));
