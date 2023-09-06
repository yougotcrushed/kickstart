import React from "react";
import { useForm } from "react-hook-form";

// React Hook form uses (ref)reference objects to get values from an input fields
// so there is no rerendering involved here.

// To make our TypeScript compiler to be aware of our input field -->
// we can use an interface to define the shape of this form and also -->
//  To provide a better development exprience as well as type safety with this -->
//  when we type errors. we can see our input fields in the auto completion box
interface FormData {
  name: string;
  age: number;
}

const Form2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required.</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-warning">The name must atleast 3 characters..</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form2;
