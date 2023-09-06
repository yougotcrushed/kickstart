import React, { useState } from "react";

const Button1 = () => {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 21022,
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 210111 },
    });
  };
  return (
    <div>
      {customer.address.zipCode} {customer.address.city}
      <button onClick={handleClick}>Call Me</button>
    </div>
  );
};

export default Button1;
