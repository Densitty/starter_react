import React from "react";

import Title from "./Title";
import Author from "./Author";
import Image from "./Image";

const Book = (props) => {
  const complexExample = (props) => {
    console.log(props.name);
  };
  return (
    <article className="book">
      <Image image={props.image} />
      <Title title={props.title} />
      <Author name={props.name} />
      <p>{`${
        props.numbers_sold ? props.numbers_sold + " copies sold." : ""
      }`}</p>
      <button type="button" onClick={() => complexExample(props)}>
        more complex example
      </button>
    </article>
  );
};

export default Book;
