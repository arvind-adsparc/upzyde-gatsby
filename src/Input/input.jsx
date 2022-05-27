import React from "react";
import "./input.scss";

const Input = ({ name, label, type }) => {
  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} />
    </div>
  );
};

export default Input;
