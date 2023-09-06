import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useRef } from "react";
import { Todo } from "./hooks/useTodos";
import axios from "axios";

const TodoForm = () => {
  const queryClient = useQueryClient();
  const addTodo = useMutation<Todo, Error, Todo>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos/", todo)
        .then((res) => res.data),
    onSuccess: (savedTodo, newTodo) => {
      // Approach: Invalidatin the cache
      //   queryClient.invalidateQueries({
      //     queryKey: ['todos']
      //   })
      //   Unfortunately this method cant work because jsonplaceholder is a fake backend

      // Approach2: Updating the data in the cache
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        savedTodo,
        ...(todos || []),
      ]);

      if (ref.current) ref.current.value = "";
    },
  });
  const ref = useRef<HTMLInputElement>(null);
  return (
    // 1 now what if our request fails, as a good developer we should anticipate this situation and
    // handle them properly. Hence the mutation object we have above has property for tracking errors
    // we have an error we should show an error message to the user.

    // Now saving data can sometimes take a bit of time, so to improve the user exprience, we should
    // show a spinner or some type of indicator that the operation is in progress the mutation object tha we have
    //  also have isloading exactly as our query objects

    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}
      <form
        action=""
        className="row mb-3"
        onSubmit={(event) => {
          event.preventDefault();

          if (ref.current && ref.current.value)
            addTodo.mutate({
              id: 0,
              title: ref.current?.value,
              completed: false,
              userId: 1,
            });
        }}
      >
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button className="btn btn-primary" disabled={addTodo.isLoading}>
            {addTodo.isLoading ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
