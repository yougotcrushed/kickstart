import React, { FormEvent, useRef, useState } from "react";

// Using State Hook to get the value of input fields in a form, instead of Ref Hook
// one thing about this approach is that every time the user types or removes a character and then,
// because we update the state, our component is rerender
// if you have a really complex page, a complex form with a lot of elements, and you observe perfomance issues
// with this approach, then go ahead and use the Ref Hook. But for the most cases, you are not going to exprience that.
const Form1 = () => {
  // as our form get more complex, managing our form state with a State Hook can become time  consuming and error prone
  // because for every Input field, we have to set two attributes onChange and Value
  //  And this is where we can use a popular library called React hook. We this library we can quickly build forms with less code.

  const [person, setPerson] = useState({
    name: "",
    age: "",
  });
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="form-control"
          placeholder="your name...."
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          value={person.name}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          type="number"
          className="form-control"
          onChange={(event) =>
            setPerson({ ...person, age: parseInt(event.target.value) })
          }
          value={person.age}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form1;
