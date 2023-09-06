import axios from "axios";
import React, { useEffect, useState } from "react";
interface Todo {
  id: number;
  name: string;
}

// To fetch data with react query we use the query hook define in tanstack/reactQuery
// we call the hook and give it a configuration object with two properties, the first one is our
//  querykey which is a unique identifier for the query, its used internally for caching
// so anytime we retrieve a piece of data from the backend, the data is stored in the cache, and will be
// accessible via this key
// The second property is our query funnction and this is the function that we use to fetch the data from the
// backend, this function should return a promise that resolves to data or throws an error.
const FetchData1 = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    axios
      .get("")
      .then((res) => setTodos(res.data))
      .catch((err) => setError(err.message));
  });

  if (error) return <p>{error}</p>;

  return (
    <div>
      {error && <p>{error}</p>}
      {todos.map((todo) => (
        <li key={todo.id}>{todo.name}</li>
      ))}
    </div>
  );
};

export default FetchData1;
