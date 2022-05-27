import React from "react";
import Input from "../Input/input";
import "./form.scss";

const Form = () => {
  return (
    <div className="contact-form">
      <Input name="name" label="Name" type="text" isRequired={true} />
      <Input name="email" label="Email" type="email" isRequired={true} />
      <Input name="subject" label="Subject" type="text" isRequired={false} />
      <Input
        name="message"
        label="Message"
        type="text"
        isRequired={false}
        textarea={true}
      />

      <div className="submit-container">
        <button className="submit-btn">Send</button>
      </div>
    </div>
  );
};

export default Form;
