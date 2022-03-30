import React from "react";
import styles from "../styles/FuelUpRow.module.css";

const FuelUpRow = ({ total, ppg, gallons, trip, odometer, car, key }) => {
  return (
    <React.Fragment key={key}>
      <div>{car}</div>
      <div>{trip}</div>
      <div>{odometer}</div>
      <div>{gallons}</div>
      <div>{total}</div>
      <div>{ppg}</div>
      <div>{trip / gallons}</div>
    </React.Fragment>
  );
};

export default FuelUpRow;
