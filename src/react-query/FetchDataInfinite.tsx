import React, { useState } from "react";
import usePostInfinite from "./hooks/usePostInfinite";

const FetchDataInfinite = () => {
  const pageSize = 10;
  //   const [page, setPage] = useState(1);
  const [userId, setUserId] = useState<number>();
  const {
    data: posts,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = usePostInfinite({ pageSize });

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
        {posts.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </div>
      <button
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
        className="btn btn-primary m-2"
      >
        {isFetchingNextPage ? "Loading...." : "Laod more"}
      </button>
    </>
  );
};

export default FetchDataInfinite;
