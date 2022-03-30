import React, { useState } from "react";
import {
  validateGallonsOrPPG,
  validateOdometer,
  validateTotal,
  validateTrip,
} from "../utils/RegexValidators";
import styles from "../styles/InputForm.module.css";
import FormInput from "./FormInput";
import { useRouter } from "next/router";

const InputForm = ({}) => {
  const router = useRouter();
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
    if (validateFn) {
      valid = validateFn(value);
    }
    if (valid) {
      setFuelUp({
        ...fuelUp,
        [propName]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/fuelUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(fuelUp),
    }).then((res) => {
      if (res.ok) {
        router.push("/");
      }
    });
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
          handleInput(e.target.value, "car");
        }}
      />
      <FormInput
        id="trip"
        name="trip"
        labelText="Trip"
        defaultValue={fuelUp.trip}
        handleChange={(e) => {
          e.preventDefault();
          handleInput(e.target.value, "trip", validateTrip);
        }}
      />
      <FormInput
        id="gallons"
        name="gallons"
        labelText="Gallons"
        defaultValue={fuelUp.gallons}
        handleChange={(e) => {
          e.preventDefault();
          handleInput(e.target.value, "gallons", validateGallonsOrPPG);
        }}
      />
      <FormInput
        id="price"
        name="price"
        labelText="Price"
        defaultValue={fuelUp.price}
        handleChange={(e) => {
          e.preventDefault();
          handleInput(e.target.value, "price", validateGallonsOrPPG);
        }}
      />
      <FormInput
        id="total"
        name="total"
        labelText="Total"
        defaultValue={fuelUp.total}
        handleChange={(e) => {
          e.preventDefault();
          handleInput(e.target.value, "total", validateTotal);
        }}
      />
      <FormInput
        id="odometer"
        name="odometer"
        labelText="Odometer"
        defaultValue={fuelUp.odometer}
        handleChange={(e) => {
          e.preventDefault();
          handleInput(e.target.value, "odometer", validateOdometer);
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
