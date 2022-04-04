import React from "react";

const Select = ({ name, id, labelText, options, selected, handleChange }) => {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}:</label>}
      <select name={name} id={id} onChange={handleChange}>
        {options.map((e) => (
          <option
            {...() =>
              e.value.toString() === selected.toString() ? "selected" : null}
            value={e.value}
          >
            {e.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
