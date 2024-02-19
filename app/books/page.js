import React from "react";
import BooksAll from "../components/books/BooksAll";
import Sidebar from "../components/Sidebar";
import Bookcontainers from "../components/books/BookContainers";

const Books = () => {
  return (
    <div className="flex mt-20">
      <Sidebar />
      <div>
        <BooksAll />
        <Bookcontainers />
      </div>
    </div>
  );
};

export default Books;
