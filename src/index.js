import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return (
    // nesting of components inside another component
    <div>
      <Person />
      <Message />
    </div>
  );
}

// component_1
const Person = () => {
  return <h1>John Doe</h1>;
};

// component_2
function Message() {
  return <p>I am a student at JS-U</p>;
}

ReactDOM.render(<Greeting />, document.getElementById("root"));
