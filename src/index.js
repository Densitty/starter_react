import React from "react";
import ReactDOM from "react-dom";

// to add CSS
import "./index.css";

const myBook = {
  name: "Victoria Jamieson",
  image:
    "https://images-na.ssl-images-amazon.com/images/I/51rm2Y8L0ML._SX331_BO1,204,203,200_.jpg",
  title: "When Stars Are Scattered",
};

function BookList() {
  return (
    <section className="booklist">
      <Book name={myBook.name} title={myBook.title} image={myBook.image}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
        veritatis. Rem molestias neque libero iste.
      </Book>
      <Book
        name="Kat Leyh"
        title="Snapdragon"
        image="https://images-na.ssl-images-amazon.com/images/I/51ieSUPgKyL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
        numbers_sold={25000}
      />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <Image image={props.image} />
      <Title title={props.title} />
      <Author name={props.name} />
      <p>{`${
        props.numbers_sold ? props.numbers_sold + " copies sold." : ""
      }`}</p>
      <p>{props.children}</p>
    </article>
  );
};

const Image = (props) => {
  return <img src={props.image} alt="book" />;
};

const Author = (props) => {
  return (
    <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
      {props.name}
    </h4>
  );
};

const Title = (props) => {
  return <h1>{props.title}</h1>;
};

ReactDOM.render(<BookList />, document.getElementById("root"));
