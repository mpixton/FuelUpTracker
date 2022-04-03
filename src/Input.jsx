import React from "react";

const Input = ({ name, id, labelText, defaultValue, handleChange }) => {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}:</label>}
      <input
        type="text"
        id={id}
        name={name}
        value={defaultValue}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
