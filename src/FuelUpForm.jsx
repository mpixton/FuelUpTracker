import React, { useState } from "react";

import {
  validateGallonsOrPPG,
  validateOdometer,
  validateTotal,
  validateTrip,
} from "../utils/RegexValidators";
import styles from "../styles/FuelUpForm.module.css";
import Input from "./Input";
import Button from "./Button";

const FuelUpForm = ({ onSubmit }) => {
  const [fuelUp, setFuelUp] = useState({
    car: "",
    trip: "",
    gallons: "",
    total: "",
    price: "",
    odometer: "",
  });

  const handleInput = (value, propName, validateFn) => {
    let valid = true;
    if (validateFn && typeof validateFn === "function") {
      valid = validateFn(value);
    }
    if (valid) {
      setFuelUp({
        ...fuelUp,
        [propName]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(fuelUp);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        id="car"
        name="car"
        labelText="Car"
        defaultValue={fuelUp.car}
        handleChange={(e) => {
          e.preventDefault();
          handleInput(e.target.value, "car");
        }}
      />
      <Input
        id="trip"
        name="trip"
        labelText="Trip"
        defaultValue={fuelUp.trip}
        handleChange={(e) => {
          e.preventDefault();
          handleInput(e.target.value, "trip", validateTrip);
        }}
      />
      <Input
        id="gallons"
        name="gallons"
        labelText="Gallons"
        defaultValue={fuelUp.gallons}
        handleChange={(e) => {
          e.preventDefault();
          handleInput(e.target.value, "gallons", validateGallonsOrPPG);
        }}
      />
      <Input
        id="price"
        name="price"
        labelText="Price"
        defaultValue={fuelUp.price}
        handleChange={(e) => {
          e.preventDefault();
          handleInput(e.target.value, "price", validateGallonsOrPPG);
        }}
      />
      <Input
        id="total"
        name="total"
        labelText="Total"
        defaultValue={fuelUp.total}
        handleChange={(e) => {
          e.preventDefault();
          handleInput(e.target.value, "total", validateTotal);
        }}
      />
      <Input
        id="odometer"
        name="odometer"
        labelText="Odometer"
        defaultValue={fuelUp.odometer}
        handleChange={(e) => {
          e.preventDefault();
          handleInput(e.target.value, "odometer", validateOdometer);
        }}
      />
      <div className={styles.submitBtn}>
        <Button
          type="submit"
          text="Submit"
          onClick={(e) => {
            alert("Submit was clicked.");
          }}
          size="large"
        />
      </div>
    </form>
  );
};

export default FuelUpForm;
