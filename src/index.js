import React from "react";
import ReactDOM from "react-dom";

// to add CSS
import "./index.css";

const books = [
  {
    name: "Victoria Jamieson",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51rm2Y8L0ML._SX331_BO1,204,203,200_.jpg",
    title: "When Stars Are Scattered",
  },
  {
    name: "Kat Leyh",
    title: "Snapdragon",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51ieSUPgKyL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    numbers_sold: 25000,
  },
  {
    name: "Lauren Tarshis",
    title: "I Survived the Battle of Gettysburg, 1863",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51qILmvdZmL._AC_UL200_SR200,200_.jpg",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        /* console.log(book); */
        return <Book {...book} key={index} />;
      })}
    </section>
  );
}

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

const Image = (props) => {
  // to setup an even, we need an attribute and an eventHandler
  // onClick is the attribute, clickHandler is the eventHandler
  const clickHandler = () => {
    console.log("Thanks for checking out my list");
  };
  return <img src={props.image} alt="book" onClick={clickHandler} />;
};

const Author = (props) => {
  return (
    <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
      {props.name}
    </h4>
  );
};

const Title = (props) => {
  return <h1 onClick={() => console.log(props.title)}>{props.title}</h1>;
};

ReactDOM.render(<BookList />, document.getElementById("root"));
