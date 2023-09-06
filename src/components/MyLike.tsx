import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

interface Props {
  color: string;
  onClick: () => void;
}
//  My Own solution as oppose to Mosh own in MoshLike.tsx component

const MyLike = ({ onClick, color }: Props) => {
  const [selectedIcon, setSelectedIcon] = useState(false);

  const toggle = () => {
    setSelectedIcon(!selectedIcon);
    onClick();
  };

  return (
    <div>
      <AiFillHeart
        color={selectedIcon ? (color = "red") : "null"}
        size={20}
        onClick={toggle}
      />
    </div>
  );
};

export default MyLike;
