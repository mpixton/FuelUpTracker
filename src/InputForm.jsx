import React from "react";
import styles from "../styles/InputForm.module.css";

const InputForm = ({}) => {
  return (
    <form className={styles.form} onSubmit={console.log}>
      <label htmlFor="car">Car:</label>
      <input type="text" id="car" name="car" />
      <label htmlFor="trip">Trip:</label>
      <input type="text" id="trip" name="trip" />
      <label htmlFor="gallons">Gallons Purchased:</label>
      <input type="text" name="gallons" id="gallons" />
      <label htmlFor="price">Total Price:</label>
      <input type="text" id="price" name="price" />
      <label htmlFor="ppg">Price Per Gallon:</label>
      <input type="text" id="ppg" name="ppg" />
      <label htmlFor="odometer">Odometer:</label>
      <input type="text" name="odometer" id="odometer" />
      <button
        type="submit"
        className={styles.submitBtn}
        onClick={(e) => {
          e.preventDefault();
          alert("Submit was clicked.");
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default InputForm;
