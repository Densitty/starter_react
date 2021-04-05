import React from "react";
import ReactDOM from "react-dom";

import { books } from "./books";
import Book from "./components/Book";

// to add CSS
import "./index.css";

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

ReactDOM.render(<BookList />, document.getElementById("root"));
