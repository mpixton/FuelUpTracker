import React from "react";
import styles from "../styles/FuelUpRow.module.css";

const FuelUpRow = ({ total, ppg, gallons, trip, odometer, car, passedKey }) => {
  return (
    <React.Fragment key={passedKey}>
      <div>{car}</div>
      <div>{odometer} miles</div>
      <div>{gallons} gallons</div>
      <div>${ppg}</div>
      <div>${total}</div>
      <div>{trip} miles</div>
      <div>{(trip / gallons).toFixed(2)} mpg</div>
    </React.Fragment>
  );
};

export default FuelUpRow;
