import React, { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

interface Customer {
  id: number;
  name: string;
}

const FetchData = () => {
  const [users, setUsers] = useState<Customer[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // This is a built in class in modern browsers, that allows us to cancel or abort asynchronous operations
    // like fetch requests, DOM manipulations or any operation that might take a long time to complete. --->
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<Customer[]>("/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    // .finally(() => {
    //   setLoading(false);
    // });

    return () => controller.abort();
  }, []);

  // I personally have used async and await a billion times before and never had a problems with them
  // But when it comes to using the effect hook in React, i dont find this approach elegant
  // Because for starter, we have to create an extra function, then we have to wrap our code inside a try catch block.
  // And on top of that we have to use type assertion to tell the TypeScript compiler the type of this error object,
  //  there is a amount of extra work we have to do in comparison with the previous implementation.
  // useEffect(() => {
  //   const FetchUser = async () => {
  //     try {
  //       const res = await axios.get<Customer[]>(
  //         "http://127.0.0.1:8000/live/customers/"
  //       );
  //       setUsers(res.data);
  //     } catch (err) {
  //       setError((err as AxiosError).message);
  //     }
  //   };

  //   FetchUser();
  // }, []);

  const deleteUser = (user: Customer) => {
    const originalUsers = [...users];
    setUsers(users.filter((e) => e.id !== user.id));

    apiClient.delete("/users/" + user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Benjamin" };
    setUsers([newUser, ...users]);

    apiClient
      .post("/users", newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: Customer) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "+" };
    setUsers(users.map((e) => (e.id === user.id ? updatedUser : e)));

    apiClient.patch("/users/" + updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-2"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FetchData;
