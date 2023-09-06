import React, { ReactNode, useState } from "react";

interface Props {
  maxChars?: number;
  children: string;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  const summary = isExpanded ? children : children.substring(0, maxChars);

  return (
    <p>
      {summary}...
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
