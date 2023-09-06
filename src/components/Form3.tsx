import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// React Hook form uses (ref)reference objects to get values from an input fields
// so there is no rerendering involved here.

// SCHEMA BASED VALIDATION WITH ZOD

// Using Z we can define the shape or schema of our form and all its validation rules,
// z.object as an argument we pass an object with properties that represent our form fileds.
// so using the syntax, by chaining method calls, we can define our validation rules in a single place

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  age: z
    .number({ invalid_type_error: "Age field is required." })
    .min(18, { message: "Age must be at least 18." }),
});

// The great thing about zod is that its has a method that allows us to extract a type from a shema object,
//  we dont have to type the interface by hand
// Using a type we can define the shape of an object --> similar to an interface
// we can see the shape when we hover on the FormData
// so a TypeScript type is very similar to a TypeScript interface

type FormData = z.infer<typeof schema>;

const Form2 = () => {
  // integrating React Hook form with zod after the installation
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}.</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })} //so while registring this field we instruted react hook form to interpret this value as number
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button className="btn btn-primary" type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};

export default Form2;
