import React from "react";
import { Link } from "react-router-dom";
import Text from "../components/text/Text";

const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
      <Link to={"/users"}>Users</Link>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
        delectus modi, obcaecati velit fuga animi praesentium tempore minus
        fugiat quia suscipit nesciunt unde voluptates illo inventore ipsum
        adipisci eos laboriosam.
      </Text>
    </>
  );
};

export default HomePage;
