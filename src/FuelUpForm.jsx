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

const FuelUpForm = ({
  onSubmit,
  onCancel,
  carOptions,
  addCarOnClick,
  submissionError,
}) => {
  const [fuelUp, setFuelUp] = useState({
    car_id: "",
    trip: "",
    gallons: "",
    total: "",
    price: "",
    odometer: "",
    date: "",
    city: "",
    state: "",
    vendor: "",
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
          name="car_id"
          options={carOptions ?? []}
          selected={fuelUp.car}
          labelText="Car"
          handleChange={(e) => {
            e.preventDefault();
            handleInput(e.target.value, "car_id", fuelUp, setFuelUp);
          }}
        />
      </div>
      <div>
        <Button onClick={addCarOnClick} text="Add Car" addMargin={false} />
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
        <Input
          id="date"
          type="date"
          name="date"
          labelText="Date"
          defaultValue={fuelUp.date}
          handleChange={(e) => {
            e.preventDefault();
            handleInput(e.target.value, "date", fuelUp, setFuelUp);
          }}
        />
      </div>
      {errors.date && <div className={formStyles.error}>{errors.date}</div>}
      <div className={formStyles.labelAndInput}>
        <Input
          id="city"
          name="city"
          labelText="City"
          defaultValue={fuelUp.city}
          handleChange={(e) => {
            e.preventDefault();
            handleInput(e.target.value, "city", fuelUp, setFuelUp);
          }}
        />
      </div>
      {errors.city && <div className={formStyles.error}>{errors.city}</div>}
      <div className={formStyles.labelAndInput}>
        <Input
          id="state"
          name="state"
          labelText="State"
          defaultValue={fuelUp.state}
          handleChange={(e) => {
            e.preventDefault();
            handleInput(e.target.value, "state", fuelUp, setFuelUp);
          }}
        />
      </div>
      {errors.state && <div className={formStyles.error}>{errors.state}</div>}
      <div className={formStyles.labelAndInput}>
        <Input
          id="vendor"
          name="vendor"
          labelText="Vendor"
          defaultValue={fuelUp.vendor}
          handleChange={(e) => {
            e.preventDefault();
            handleInput(e.target.value, "vendor", fuelUp, setFuelUp);
          }}
        />
      </div>
      {errors.vendor && <div className={formStyles.error}>{errors.vendor}</div>}
      {submissionError && (
        <div className={formStyles.error}>{submissionError}</div>
      )}
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
