import classNames from "classnames";
import React, { useState } from "react";

import styles from "../styles/FuelUpCard.module.css";

export default ({ fuelup }) => {
  const {
    car,
    carId,
    trip,
    price,
    gallons,
    total,
    odometer,
    date,
    city,
    state,
    vendor,
  } = fuelup;

  const handleMouseEnter = (e, value) => {
    e.target.textContent = value;
  };

  const handleMouseLeave = (e, value) => {
    e.target.textContent = value;
  };

  return (
    <div className={styles.card}>
      <div className={styles.car}>{car}</div>
      <div
        onMouseEnter={(e) => handleMouseEnter(e, "Trip")}
        onMouseLeave={(e) => handleMouseLeave(e, trip.toFixed(1))}
        className={styles.value}
      >
        {trip.toFixed(1)}
      </div>
      <div
        onMouseEnter={(e) => handleMouseEnter(e, "Price")}
        onMouseLeave={(e) => handleMouseLeave(e, `$${price.toFixed(3)}`)}
        className={styles.value}
      >
        ${price.toFixed(3)}
      </div>
      <div
        onMouseEnter={(e) => handleMouseEnter(e, "Gallons")}
        onMouseLeave={(e) => handleMouseLeave(e, gallons.toFixed(3))}
        className={styles.value}
      >
        {gallons.toFixed(3)}
      </div>
      <div
        onMouseEnter={(e) => handleMouseEnter(e, "Total")}
        onMouseLeave={(e) => handleMouseLeave(e, `$${total.toFixed(3)}`)}
        className={styles.value}
      >
        ${total.toFixed(3)}
      </div>
      <div
        onMouseEnter={(e) => handleMouseEnter(e, "Odometer")}
        onMouseLeave={(e) => handleMouseLeave(e, odometer.toFixed(0))}
        className={styles.value}
      >
        {odometer.toFixed(0)}
      </div>
      <div
        onMouseEnter={(e) => handleMouseEnter(e, "Date")}
        onMouseLeave={(e) =>
          handleMouseLeave(e, new Date(date).toLocaleDateString())
        }
        className={styles.value}
      >
        {new Date(date).toLocaleDateString()}
      </div>
      <div
        className={classNames(styles.location, styles.value)}
        onMouseEnter={(e) => handleMouseEnter(e, "City, State")}
        onMouseLeave={(e) => handleMouseLeave(e, `${city}, ${state}`)}
      >
        {city}, {state}
      </div>
      <div
        onMouseEnter={(e) => handleMouseEnter(e, "Vendor")}
        onMouseLeave={(e) => handleMouseLeave(e, vendor)}
        className={styles.value}
      >
        {vendor}
      </div>
    </div>
  );
};
