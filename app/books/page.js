import React from "react";
import BooksAll from "../components/books/BooksAll";
import Sidebar from "../components/Sidebar";

const Books = () => {
  return (
    <div className="flex">
        <Sidebar />
      <BooksAll />
    </div>
  );
};

export default Books;
