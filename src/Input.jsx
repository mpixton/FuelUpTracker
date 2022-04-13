import React from "react";

const Input = ({
  name,
  id,
  labelText,
  defaultValue,
  handleChange,
  type = "text",
}) => {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}:</label>}
      <input
        type={type}
        id={id}
        name={name}
        value={defaultValue}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
