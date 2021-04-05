import React from "react";
import ReactDOM from "react-dom";

// to add CSS
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
      {/* {} takes an expression and not a statement */}
      {/* expressions are statements that return values */}
      <p>This book is for children not below {4 + 2}</p>
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/51rm2Y8L0ML._SX331_BO1,204,203,200_.jpg"
      alt="book"
    />
  );
};

const Author = () => {
  const name = "Victoria Jamieson";
  return (
    <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
      {name.toUpperCase()}
    </h4>
  );
};

const Title = () => {
  return <h1>When Stars Are Scattered</h1>;
};

ReactDOM.render(<BookList />, document.getElementById("root"));
