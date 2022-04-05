import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";
import Button from "../src/Button";
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
    setLoading(false);
  }, [loading, router.query]);

  return (
    <>
      <Head>
        <title>Fuel Tracker</title>
      </Head>
      <div className={styles.navBar}>
        <Button text="Add Fuel Up" onClick={() => router.push("/addFuelUp")} />
        <Button text="Add Car" onClick={() => router.push("/addCar")} />
      </div>
      <div className={styles.listDisplay}>
        <div className={styles.colHeader}>Car</div>
        <div className={styles.colHeader}>Odometer</div>
        <div className={styles.colHeader}>Gallons</div>
        <div className={styles.colHeader}>Price Per Gallon</div>
        <div className={styles.colHeader}>Total Cost</div>
        <div className={styles.colHeader}>Trip</div>
        <div className={styles.colHeader}>Economy</div>
        {fuelUps.length ? (
          fuelUps.map((e, i) => (
            <React.Fragment key={i.toString()}>
              <div>{e.car}</div>
              <div>{e.odometer} miles</div>
              <div>{Number.parseFloat(e.gallons).toFixed(3)} gallons</div>
              <div>${Number.parseFloat(e.price).toFixed(3)}</div>
              <div>${Number.parseFloat(e.total).toFixed(2)}</div>
              <div>{e.trip} miles</div>
              <div>{(e.trip / e.gallons).toFixed(2)} mpg</div>
            </React.Fragment>
          ))
        ) : (
          <div className={styles.emptyList}>
            No fuel ups yet! Add a fuel up to get started.
          </div>
        )}
      </div>
      <div className={styles.pagination}>
        <PaginationControls
          pageNum={router.query["pageNum"] ?? 1}
          pageSize={20}
          totalItems={Number.parseInt(totalFuelUps, 10)}
          urlBase={router.basePath}
        />
      </div>
    </>
  );
};
