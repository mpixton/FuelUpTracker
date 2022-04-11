import React, { useState } from "react";

import formStyles from "../styles/Forms.module.css";
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

  const [errors, setErrors] = useState({
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempErrors = { ...errors };
    if (carData.name === "") {
      tempErrors.name = "Nickname must be filled out.";
    }
    setErrors({
      ...errors,
      ...tempErrors,
    });
    onSubmit(carData);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className={formStyles.form}>
      <div className={formStyles.labelAndInput}>
        <Input
          id="name"
          name="name"
          labelText="Nickname"
          defaultValue={carData.name}
          handleChange={(e) => {
            e.preventDefault();
            console.log(e.target.value);
            validateHasTextInput(e.target.value);
            handleInput(
              e.target.value,
              "name",
              carData,
              setCarData,
              validateHasTextInput
            );
          }}
        />
      </div>
      {errors.name && <div className={formStyles.error}>{errors.name}</div>}
      <div className={formStyles.labelAndInput}>
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
      </div>
      <div className={formStyles.labelAndInput}>
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
      </div>
      <div className={formStyles.labelAndInput}>
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
      </div>
      <div className={formStyles.btnRow}>
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
