import react from "react";
import styles from "../styles/FuelUpRow.module.css";

export const FuelUpRow = ({
  total,
  ppg,
  gallons,
  trip,
  odometer,
  car,
  key,
}) => {
  return (
    <div className={styles.fuelUpRow} key={key}>
      <div>{car}</div>
      <div>{trip}</div>
      <div>{odometer}</div>
      <div>{gallons}</div>
      <div>{total}</div>
      <div>{ppg}</div>
      <div>{trip / gallons}</div>
    </div>
  );
};
