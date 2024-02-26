import React from "react";
import { useSelector } from "react-redux";

const CartAll = () => {
  const booksCart = useSelector((state) => state.cart);
  return (
    <div>
      <div className="carousel carousel-center gap-5">
        {booksCart.map((item, index) => (
          <div className="carousel-item flex flex-col">
            <p>{item.type}</p>
            <p>{item.desc}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartAll;
