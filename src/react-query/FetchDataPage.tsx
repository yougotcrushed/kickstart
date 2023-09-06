import React, { useState } from "react";
import usePostPage from "./hooks/usePostPage";

const FetchDataPage = () => {
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const [userId, setUserId] = useState<number>();
  const { data: posts, error, isLoading } = usePostPage({ page, pageSize });

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
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="btn btn-primary m-2"
      >
        Previous
      </button>
      <button
        disabled={page === posts.length}
        onClick={() => setPage(page + 1)}
        className="btn btn-primary m-2"
      >
        Next
      </button>
    </>
  );
};

export default FetchDataPage;
