import React, { useState } from "react";
import "./ListGroup.css";
import style from "styled-components";

const List = style.ul`
list-style: none;
    font-weight: 400;
    color: chocolate;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = style.li<ListItemProps>`
background-color: bisque;
background: ${(props) => (props.active ? "gold" : "none")}

`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  //   items = [];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
