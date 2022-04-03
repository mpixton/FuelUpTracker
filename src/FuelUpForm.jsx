import React, { useState } from "react";

import {
  validateGallonsOrPPG,
  validateOdometer,
  validateTotal,
  validateTrip,
} from "../utils/RegexValidators";
import { handleInput } from "../utils/HandleFormInput";
import formStyles from "../styles/Forms.module.css";
import Input from "./Input";
import Button from "./Button";

const FuelUpForm = ({ onSubmit, onCancel }) => {
  const [fuelUp, setFuelUp] = useState({
    car: "",
    trip: "",
    gallons: "",
    total: "",
    price: "",
    odometer: "",
  });

  const [errors, setErrors] = useState({
    ...fuelUp,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempErrors = { ...errors };
    let valid = true;
    for (const prop in fuelUp) {
      if (fuelUp[prop] === "") {
        tempErrors[prop] = `${prop[0].toUpperCase()}${prop.slice(
          1
        )} is required.`;
        valid = false;
      }
    }
    if (!valid) {
      setErrors({
        ...errors,
        ...tempErrors,
      });
      return;
    }
    onSubmit(fuelUp);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    onCancel();
  };

  return (
    <form className={formStyles.form} onSubmit={handleSubmit}>
      <Input
        id="car"
        name="car"
        labelText="Car"
        defaultValue={fuelUp.car}
        handleChange={(e) => {
          e.preventDefault();
          handleInput(e.target.value, "car", fuelUp, setFuelUp);
        }}
      />
      {errors.car && <div className={formStyles.error}>{errors.car}</div>}
      <Input
        id="trip"
        name="trip"
        labelText="Trip"
        defaultValue={fuelUp.trip}
        handleChange={(e) => {
          e.preventDefault();
          handleInput(e.target.value, "trip", fuelUp, setFuelUp, validateTrip);
        }}
      />
      {errors.trip && <div className={formStyles.error}>{errors.trip}</div>}
      <Input
        id="gallons"
        name="gallons"
        labelText="Gallons"
        defaultValue={fuelUp.gallons}
        handleChange={(e) => {
          e.preventDefault();
          handleInput(
            e.target.value,
            "gallons",
            fuelUp,
            setFuelUp,
            validateGallonsOrPPG
          );
        }}
      />
      {errors.gallons && (
        <div className={formStyles.error}>{errors.gallons}</div>
      )}
      <Input
        id="price"
        name="price"
        labelText="Price"
        defaultValue={fuelUp.price}
        handleChange={(e) => {
          e.preventDefault();
          handleInput(
            e.target.value,
            "price",
            fuelUp,
            setFuelUp,
            validateGallonsOrPPG
          );
        }}
      />
      {errors.price && <div className={formStyles.error}>{errors.price}</div>}
      <Input
        id="total"
        name="total"
        labelText="Total"
        defaultValue={fuelUp.total}
        handleChange={(e) => {
          e.preventDefault();
          handleInput(
            e.target.value,
            "total",
            fuelUp,
            setFuelUp,
            validateTotal
          );
        }}
      />
      {errors.total && <div className={formStyles.error}>{errors.total}</div>}
      <Input
        id="odometer"
        name="odometer"
        labelText="Odometer"
        defaultValue={fuelUp.odometer}
        handleChange={(e) => {
          e.preventDefault();
          handleInput(
            e.target.value,
            "odometer",
            fuelUp,
            setFuelUp,
            validateOdometer
          );
        }}
      />
      {errors.odometer && (
        <div className={formStyles.error}>{errors.odometer}</div>
      )}
      <div className={formStyles.btnRow}>
        <Button
          type="button"
          text="Cancel"
          onClick={handleCancel}
          size="large"
        />
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
