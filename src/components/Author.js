import React from "react";

const Author = (props) => {
  return (
    <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
      {props.name}
    </h4>
  );
};

export default Author;
