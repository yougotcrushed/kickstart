import React, { useState } from "react";
import usePost from "./hooks/usePost";

const FetchData3 = () => {
  const [userId, setUserId] = useState<number>();
  const { data: posts, error, isLoading } = usePost(userId);

  if (error) return <p>{error.message}</p>;

  if (isLoading) return <p>Loading....</p>;

  return (
    <>
      <select
        onChange={(event) => setUserId(parseInt(event.target.value))}
        value={userId}
        className="form-select mb-3"
      >
        <option value=""></option>
        <option value="1">User1</option>
        <option value="2">User2</option>
        <option value="3">User3</option>
      </select>
      <div className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </div>
    </>
  );
};

export default FetchData3;
