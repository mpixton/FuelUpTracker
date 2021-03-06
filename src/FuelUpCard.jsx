import React from "react";
import styles from "../styles/FuelUpCard.module.css";
import Button from "./Button";
import { useAppContext } from "../utils/AppContext";
import { useRouter } from "next/router";
import format from "date-fns/format";

export default ({ fuelup }) => {
  const router = useRouter();

  const {
    fuelUpId,
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

  const { setCarId, setFuelUpId, setPageNum } = useAppContext();

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
        {trip.toFixed(1)} miles
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
        {odometer.toLocaleString()}
      </div>
      <div
        onMouseEnter={(e) => handleMouseEnter(e, "Date")}
        onMouseLeave={(e) =>
          handleMouseLeave(e, format(new Date(date), "d MMM yyyy"))
        }
        className={styles.value}
      >
        {format(new Date(date), "d MMM yyyy")}
      </div>
      <div className={styles.details}>
        <Button
          text="View Details"
          onClick={() => {
            setFuelUpId(fuelUpId);
            setCarId(carId);
            setPageNum(1);
            window.sessionStorage.setItem("carId", carId);
            window.sessionStorage.setItem("fuelUpId", fuelUpId);
            router.push("/detailView");
          }}
        />
      </div>
    </div>
  );
};
