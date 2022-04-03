import React, { useState } from "react";

import styles from "../styles/CarForm.module.css";
import Input from "./Input";
import Button from "./Button";
import { validateYear, validateHasTextInput } from "../utils/RegexValidators";
import { handleInput } from "../utils/HandleFormInput";

const CarForm = ({ onSubmit, onCancel }) => {
  const [carData, setCarData] = useState({
    name: "",
    make: "",
    model: "",
    year: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (carData.name === "") {
      alert("Nickname must be filled out.");
    }
    onSubmit(carData);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        id="name"
        name="name"
        labelText="Nickname"
        defaultValue={carData.name}
        handleChange={(e) => {
          e.preventDefault();
          handleInput(
            e.target.value,
            "name",
            carData,
            setCarData,
            validateHasTextInput
          );
        }}
      />
      <Input
        id="make"
        name="make"
        labelText="Make"
        defaultValue={carData.make}
        handleChange={(e) => {
          e.preventDefault();
          handleInput(e.target.value, "make", carData, setCarData);
        }}
      />
      <Input
        id="model"
        name="model"
        labelText="Model"
        defaultValue={carData.model}
        handleChange={(e) => {
          e.preventDefault();
          handleInput(e.target.value, "model", carData, setCarData);
        }}
      />
      <Input
        id="year"
        name="year"
        labelText="Year"
        defaultValue={carData.year}
        handleChange={(e) => {
          e.preventDefault();
          handleInput(
            e.target.value,
            "year",
            carData,
            setCarData,
            validateYear
          );
        }}
      />
      <div className={styles.btnRow}>
        <Button
          type="button"
          text="Cancel"
          color="white"
          onClick={handleCancel}
        />
        <Button type="submit" text="Submit" color="primary" />
      </div>
    </form>
  );
};

export default CarForm;
