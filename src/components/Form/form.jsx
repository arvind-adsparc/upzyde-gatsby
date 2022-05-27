import React from "react";
import Input from "../Input/input";

const Form = () => {
  return (
    <div className="contact-form">
      <Input name="name" label="Name" type="text" isRequired={true} />
      <Input name="email" label="Email" type="email" isRequired={true} />
      <Input name="subject" label="Subject" type="text" isRequired={false} />
    </div>
  );
};

export default Form;
