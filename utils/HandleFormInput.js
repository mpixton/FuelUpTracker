export const handleInput = (
  value,
  propName,
  stateObj,
  stateSetter,
  validateFn
) => {
  let valid = true;
  if (validateFn && typeof validateFn === "function") {
    valid = validateFn(value);
  }
  if (valid) {
    stateSetter({
      ...stateObj,
      [propName]: value,
    });
  }
};
