import react from "react";

export default ({ name, id, labelText, defaultValue, handleChange }) => {
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
