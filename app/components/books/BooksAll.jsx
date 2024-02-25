"use client";

import React, { useState } from "react";
import books from "../../data/data.json";
import Image from "next/image";

const BooksAll = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <div>
      <div>
        <p className="text-black text-[32px] font-semibold roboto py-3">
          Popular Books
        </p>
        <div className="carousel gap-10">
          {books.map((book) => (
            <div
              key={book.id}
              className="carousel-item rounded"
              onClick={() => handleClick(book)}
            >
              <img
                src={book.src}
                alt="Book"
                className="w-[200px] h-[250px] shadow-lg hover:shadow-2xl hover:shadow-gray-600 hover:cursor-pointer border-2 border-gray-300"
              />
            </div>
          ))}
        </div>
      </div>
      {selectedBook && (
        <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
          <img
            src={selectedBook.src}
            alt={selectedBook.title}
            className="h-[250px] w-[200px] shadow-xl"
          />
          {/* <h2>{selectedBook.title}</h2> */}
          {Object.keys(selectedBook).map((key) => {
            if (Array.isArray(selectedBook[key])) {
              return (
                <div key={key}>
                  {/* <h3>{key}</h3> */}
                  {selectedBook[key].map((item, index) => (
                    <div
                      key={index}
                      className="text-center flex flex-col justify-center items-center"
                    >
                      <p className="roboto text-[18px] lg:text-[22px] text-black">
                        {item.type}
                      </p>
                      <p className="roboto text-[13px] font-light py-3 text-black">
                        {item.desc}
                      </p>
                      <p className="roboto text-[18px] lg:text-[22px] text-black">
                        ${item.price}
                      </p>

                      <button className="text-white hover:bg-white hover:text-[#846640] hover:border-2 border-gray-100 hover:rounded-xl bg-[#846640] px-10 py-2 roboto rounded font-semibold mt-8">
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default BooksAll;
