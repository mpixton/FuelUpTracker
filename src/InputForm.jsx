import React, { useState } from "react";
import styles from "../styles/InputForm.module.css";
import FormInput from "./FormInput";

const InputForm = ({}) => {
  const [fuelUp, setFuelUp] = useState({
    car: "",
    trip: "",
    gallons: "",
    total: "",
    price: "",
    odometer: "",
  });

  const handleObjectInput = (value, propName, validateFn) => {
    let valid = true;
    if (validateFn) {
      valid = validateFn(value);
    }
    console.log(valid);
    if (valid) {
      setFuelUp({
        ...fuelUp,
        [propName]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fuelUp);
  };

  // REGEX for trip /^\d*\.?\d{0,1}$/
  // REGEX for odometer /^\d{1-6}$/
  // REGEX for gallons, price /^\d{1,2}\.\d{3}$/
  // REGEX for total /^\d*\.?\d{0,2}?$/

  const validatePattern = (value, pattern) => {
    const regex = RegExp(pattern);
    return regex.test(value);
  };

  const validateTrip = (value) => {
    // this regex works as intended
    // prettier-ignore
    return validatePattern(value, "^$|^[0-9]+\\.??[0-9]??$");
  };

  const validateOdometer = (value) => {
    // this regex works as intended
    // prettier-ignore
    return validatePattern(value, "^$|^[0-9]{1,6}?$");
  };

  const validateGallonsOrPPG = (value) => {
    // this regex works as intended
    // prettier-ignore
    return validatePattern(value, "^$|^[0-9]\\.??[0-9]{0,3}?$");
  };

  const validateTotal = (value) => {
    // this regex works as intended
    // prettier-ignore
    return validatePattern(value, "^$|^[0-9]*\\.??[0-9]{0,2}?$");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormInput
        id="car"
        name="car"
        labelText="Car"
        defaultValue={fuelUp.car}
        handleChange={(e) => {
          e.preventDefault();
          const v = e.target.value;
          handleObjectInput(v, "car");
        }}
      />
      <FormInput
        id="trip"
        name="trip"
        labelText="Trip"
        defaultValue={fuelUp.trip}
        handleChange={(e) => {
          e.preventDefault();
          const v = e.target.value;
          handleObjectInput(v, "trip", validateTrip);
        }}
      />
      <FormInput
        id="gallons"
        name="gallons"
        labelText="Gallons"
        defaultValue={fuelUp.gallons}
        handleChange={(e) => {
          e.preventDefault();
          const v = e.target.value;
          handleObjectInput(v, "gallons", validateGallonsOrPPG);
        }}
      />
      <FormInput
        id="price"
        name="price"
        labelText="Price"
        defaultValue={fuelUp.price}
        handleChange={(e) => {
          e.preventDefault();
          const v = e.target.value;
          handleObjectInput(v, "price", validateGallonsOrPPG);
        }}
      />
      <FormInput
        id="total"
        name="total"
        labelText="Total"
        defaultValue={fuelUp.total}
        handleChange={(e) => {
          e.preventDefault();
          const v = e.target.value;
          handleObjectInput(v, "total", validateTotal);
        }}
      />
      <FormInput
        id="odometer"
        name="odometer"
        labelText="Odometer"
        defaultValue={fuelUp.odometer}
        handleChange={(e) => {
          e.preventDefault();
          const v = e.target.value;
          handleObjectInput(v, "odometer", validateOdometer);
        }}
      />
      <button
        type="submit"
        className={styles.submitBtn}
        onClick={(e) => {
          alert("Submit was clicked.");
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default InputForm;
