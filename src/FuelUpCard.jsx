import React from "react";

import styles from "../styles/FuelUpCard.module.css";

const FuelUpCard = ({
  odometer = 50000,
  trip = 347.2,
  total = 40.25,
  ppg = 3.547,
  gallons = 11.347,
  car = "Doc",
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>{car}</div>
      <div>${ppg}/gallon</div>
      <div>{gallons} G</div>
      <div>${total}</div>
      <div>{odometer.toLocaleString()}</div>
      <div>{(trip / gallons).toFixed(2)} mpg</div>
      <div>${(total / trip).toFixed(3)}/mile</div>
    </div>
  );
};

export default FuelUpCard;
