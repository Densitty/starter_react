import React from "react";

const Image = (props) => {
  // to setup an even, we need an attribute and an eventHandler
  // onClick is the attribute, clickHandler is the eventHandler
  const clickHandler = () => {
    console.log("Thanks for checking out my list");
  };
  return <img src={props.image} alt="book" onClick={clickHandler} />;
};

export default Image;
