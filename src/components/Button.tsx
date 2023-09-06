import React from "react";

interface Props {
  color?: string;
  name: string;
  onClick: () => void;
}

const Button = ({ color = "primary", name, onClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
