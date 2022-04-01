import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { useRouter } from "next/router";

import FuelUpRow from "../src/FuelUpRow";
import PaginationControls from "../src/PaginationControls";

export default () => {
  const router = useRouter();
  const [fuelUps, setFuelUps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalFuelUps, setTotalFuelUps] = useState(0);

  const fetchFuelUps = (pageNum) => {
    fetch(`/api/fuelUp?pageNum=${pageNum ?? 1}`)
      .then((res) => res.json())
      .then(({ data }) => {
        setFuelUps(data);
      })
      .catch(console.log);
    setLoading(false);
  };

  const fetchTotalItems = () => {
    fetch("/api/pagination")
      .then((res) => res.json())
      .then(({ totalItems }) => setTotalFuelUps(totalItems))
      .catch(console.log);
  };

  useEffect(() => {
    fetchTotalItems();
  }, []);

  useEffect(() => {
    const { pageNum } = router.query;
    fetchFuelUps(pageNum);
  }, [loading, router.query]);

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
              passedKey={i.toString()}
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
      <div className={styles.pagination}>
        <PaginationControls
          pageNum={Number.parseInt(router.query["pageNum"], 10) ?? 1}
          pageSize={20}
          totalItems={Number.parseInt(totalFuelUps, 10)}
          urlBase={router.basePath}
        />
      </div>
    </>
  );
};
