// REGEX for trip /^\d*\.?\d{0,1}$/
// REGEX for odometer /^\d{1-6}$/
// REGEX for gallons, price /^\d{1,2}\.\d{3}$/
// REGEX for total /^\d*\.?\d{0,2}?$/

const validatePattern = (value, pattern) => {
  const regex = RegExp(pattern);
  return regex.test(value);
};

export const validateTrip = (value) => {
  // this regex works as intended
  // prettier-ignore
  return validatePattern(value, "^$|^[0-9]+\\.??[0-9]??$");
};

export const validateOdometer = (value) => {
  // this regex works as intended
  // prettier-ignore
  return validatePattern(value, "^$|^[0-9]{1,6}?$");
};

export const validateGallonsOrPPG = (value) => {
  // this regex works as intended
  // prettier-ignore
  return validatePattern(value, "^$|^[0-9]{1,2}\\.??[0-9]{0,3}?$");
};

export const validateTotal = (value) => {
  // this regex works as intended
  // prettier-ignore
  return validatePattern(value, "^$|^[0-9]*\\.??[0-9]{0,2}?$");
};

export const validateYear = (value) => {
  // prettier-ignore
  return validatePattern(value, "^[0-9]{0,4}$")
};
