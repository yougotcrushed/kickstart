import useTodos from "./hooks/useTodos";

// To fetch data with react query we use the query hook define in tanstack/reactQuery
// we call the hook and give it a configuration object with two properties, the first one is our
//  querykey which is a unique identifier for the query, its used internally for caching
// so anytime we retrieve a piece of data from the backend, the data is stored in the cache, and will be
// accessible via this key
// The second property is our query funnction and this is the function that we use to fetch the data from the
// backend, this function should return a promise that resolves to data or throws an error.
const FetchData2 = () => {
  const { data: todos, error, isLoading } = useTodos();

  if (error) return <p>{error.message}</p>;

  if (isLoading) return <p>Laoding....</p>;

  return (
    <div className="list-group">
      {todos?.map((todo) => (
        <li className="list-group-item" key={todo.id}>
          {todo.title}
        </li>
      ))}
    </div>
  );
};

export default FetchData2;

//  ----> So with this implementation we get a number of benefits, for example, we get automatic retries.
// So if the call to the server fails, react query will retry a couple more times.
// ----> the second benefit we gaet is automatic refresh, so we can configure this query to auto refresh
// after a period of time
// ----> We also get caching, so the first time we fetch the data, its stored in the cache
//  and will be refresh for a a certain period of time, and this greatly improves the performance of our application.
