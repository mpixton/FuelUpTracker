import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { useRouter } from "next/router";

import FuelUpRow from "../src/FuelUpRow";

export default function Home() {
  const router = useRouter();
  const [fuelUps, setFuelUps] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFuelUps = () => {
    fetch("/api/fuelUp")
      .then((res) => res.json())
      .then(({ data }) => {
        setFuelUps(data);
      })
      .catch(console.log);
    setLoading(false);
  };

  useEffect(() => {
    fetchFuelUps();
  }, [loading]);

  return (
    <>
      <Head>
        <title>Fuel Tracker</title>
      </Head>
      <div className={styles.navBar}>
        <button onClick={() => router.push("/addFuelUp")}>Add Fuel Up</button>
      </div>
      <div className={styles.listDisplay}>
        <div className={styles.colHeader}>Car</div>
        <div className={styles.colHeader}>Odometer</div>
        <div className={styles.colHeader}>Gallons</div>
        <div className={styles.colHeader}>Price Per Gallon</div>
        <div className={styles.colHeader}>Total Cost</div>
        <div className={styles.colHeader}>Trip</div>
        <div className={styles.colHeader}>Economy</div>
        {fuelUps.length &&
          fuelUps.map((e, i) => (
            <FuelUpRow
              car={e.car}
              gallons={e.gallons}
              key={i.toString()}
              odometer={e.odometer}
              ppg={e.price}
              total={e.total}
              trip={e.trip}
            />
          ))}
        {!fuelUps.length && (
          <div className={styles.emptyList}>
            No fuel ups yet! Add a fuel up to get started.
          </div>
        )}
      </div>
    </>
  );
}
