import React from "react";

interface Props {
  cartItem: string[];
  onClear: () => void;
}

const Cart = ({ cartItem, onClear }: Props) => {
  return (
    <>
      <p>Cart</p>
      <ul>
        {cartItem.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
    </>
  );
};

export default Cart;
