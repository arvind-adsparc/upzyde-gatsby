import React from "react";
import "./input.scss";

const Input = ({ name, label, type, isRequired, textarea }) => {
  return (
    <div className="input-container">
      <label htmlFor={name}>
        {label}
        {isRequired && "*"}{" "}
      </label>

      {textarea ? (
        <textarea id={name} name={name} rows="4"></textarea>
      ) : (
        <input type={type} id={name} />
      )}
    </div>
  );
};

export default Input;
