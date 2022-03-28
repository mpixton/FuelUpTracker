import React, { useState } from "react";
import styles from "../styles/InputForm.module.css";
import FormInput from "./FormInput";

const InputForm = ({}) => {
  const [car, setCar] = useState("");
  const [trip, setTrip] = useState("");
  const [gallons, setGallons] = useState("");
  const [price, setPrice] = useState("");
  const [total, setTotal] = useState("");
  const [odometer, setOdometer] = useState("");

  const [fuelUp, setFuelUp] = useState({});

  const handleInput = (value, updateStateFn, validateFn) => {
    let valid = true;
    if (validateFn) {
      valid = validateFn(value);
    }
    if (valid) {
      updateStateFn(value);
    }
  };

  const handleObjectInput = (value, propName, validateFn) => {
    let valid = true;
    if (validateFn) {
      valid = validateFn(value);
    }
    if (valid) {
      const update = {
        ...fuelUp,
      };
      update[propName] = value;
      setFuelUp(update);
    }
  };

  return (
    <form className={styles.form}>
      <FormInput
        id="car"
        name="car"
        labelText="Car"
        defaultValue={car}
        handleChange={(e) => {
          e.preventDefault();
          handleInput(e.target.value, setCar);
        }}
      />
      <FormInput
        id="trip"
        name="trip"
        labelText="Trip"
        defaultValue={trip}
        handleChange={(e) => {
          e.preventDefault();
          handleInput(e.target.value, setTrip);
        }}
      />
      <FormInput
        id="gallons"
        name="gallons"
        labelText="Gallons"
        defaultValue={gallons}
        handleChange={(e) => {
          e.preventDefault();
          handleInput(e.target.value, setGallons);
        }}
      />
      <FormInput
        id="price"
        name="price"
        labelText="Price"
        defaultValue={price}
        handleChange={(e) => {
          e.preventDefault();
          handleInput(e.target.value, setPrice);
        }}
      />
      <FormInput
        id="total"
        name="total"
        labelText="Total"
        defaultValue={total}
        handleChange={(e) => {
          e.preventDefault();
          handleInput(e.target.value, setTotal);
        }}
      />
      <FormInput
        id="odometer"
        name="odometer"
        labelText="Odometer"
        value={odometer}
        handleChange={(e) => {
          e.preventDefault();
          handleInput(e.target.value, setOdometer);
        }}
      />
      <button
        type="submit"
        className={styles.submitBtn}
        onClick={(e) => {
          e.preventDefault();
          console.log(car, trip, gallons, total, odometer);
          // alert("Submit was clicked.");
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default InputForm;
