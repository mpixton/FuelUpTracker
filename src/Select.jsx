import React from "react";

const Select = ({ name, id, labelText, options, selected, handleChange }) => {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}:</label>}
      <select name={name} id={id} onChange={handleChange}>
        {options.length > 1 ? (
          <>
            <option value="" disabled hidden>
              Select One
            </option>
            {options.map((e, i) => (
              <option
                {...() =>
                  e.value.toString() === selected.toString()
                    ? "selected"
                    : null}
                key={i.toString()}
                value={e.value}
              >
                {e.label}
              </option>
            ))}
          </>
        ) : (
          <option value="">No options</option>
        )}
      </select>
    </>
  );
};

export default Select;
