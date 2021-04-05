import React from "react";

const Title = (props) => {
  return <h1 onClick={() => console.log(props.title)}>{props.title}</h1>;
};

export default Title;
