import React, { useState } from "react";
import "./text.css";

interface Props {
  maxchars?: number;
  children: string;
}
const Text = ({ children, maxchars = 100 }: Props) => {
  const [isexpandable, setExpandable] = useState(false);

  if (children.length <= maxchars) return <p>{children}</p>;

  const summary = isexpandable ? children : children.substring(0, maxchars);

  return (
    <div>
      {summary}
      <button
        className="btn btn-warning btn-text"
        onClick={() => setExpandable(!isexpandable)}
      >
        {isexpandable ? "Less" : "More"}
      </button>
    </div>
  );
};

export default Text;
