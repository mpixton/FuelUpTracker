import React, { useState } from "react";

import {
  validateGallonsOrPPG,
  validateOdometer,
  validateTotal,
  validateTrip,
} from "../utils/RegexValidators";
import { handleInput } from "../utils/HandleFormInput";
import formStyles from "../styles/Forms.module.css";
import styles from "../styles/FuelUpForm.module.css";
import Input from "./Input";
import Button from "./Button";
import Select from "./Select";

const FuelUpForm = ({ onSubmit, onCancel, carOptions, addCarOnClick }) => {
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
    console.log(fuelUp);
    let tempErrors = { ...errors };
    let valid = true;
    for (const prop in fuelUp) {
      if (fuelUp[prop] === "") {
        tempErrors[prop] = `${prop[0].toUpperCase()}${prop.slice(
          1
        )} is required.`;
        valid = false;
      } else {
        tempErrors[prop] = "";
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
      <div className={styles.carSelect}>
        <Select
          id="car"
          name="car"
          options={carOptions ?? []}
          selected={fuelUp.car}
          labelText="Car"
          handleChange={(e) => {
            e.preventDefault();
            handleInput(e.target.value, "car", fuelUp, setFuelUp);
          }}
        />
      </div>
      <div>
        <Button onClick={addCarOnClick} text="Add Car" />
      </div>
      {errors.car && <div className={formStyles.error}>{errors.car}</div>}
      <div className={formStyles.labelAndInput}>
        <Input
          id="trip"
          name="trip"
          labelText="Trip"
          defaultValue={fuelUp.trip}
          handleChange={(e) => {
            e.preventDefault();
            handleInput(
              e.target.value,
              "trip",
              fuelUp,
              setFuelUp,
              validateTrip
            );
          }}
        />
      </div>
      {errors.trip && <div className={formStyles.error}>{errors.trip}</div>}
      <div className={formStyles.labelAndInput}>
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
      </div>
      {errors.gallons && (
        <div className={formStyles.error}>{errors.gallons}</div>
      )}
      <div className={formStyles.labelAndInput}>
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
      </div>
      {errors.price && <div className={formStyles.error}>{errors.price}</div>}
      <div className={formStyles.labelAndInput}>
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
      </div>
      {errors.total && <div className={formStyles.error}>{errors.total}</div>}
      <div className={formStyles.labelAndInput}>
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
      </div>
      {errors.odometer && (
        <div className={formStyles.error}>{errors.odometer}</div>
      )}
      <div className={formStyles.labelAndInput}>
        <label htmlFor="date">Date:</label>
        <input id="date" type="date" />
      </div>
      <div className={formStyles.btnRow}>
        <Button
          type="button"
          text="Cancel"
          color="white"
          onClick={handleCancel}
        />
        <Button type="submit" text="Submit" />
      </div>
    </form>
  );
};

export default FuelUpForm;
