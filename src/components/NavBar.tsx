import React from "react";

interface Props {
  cartItemCount: number;
}

const NavBar = (props: Props) => {
  return <div>NavBar: {props.cartItemCount}</div>;
};

export default NavBar;
