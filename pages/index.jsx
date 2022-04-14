import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../src/Button";
import FuelUpCard from "../src/FuelUpCard";
import PaginationControls from "../src/PaginationControls";
import styles from "../styles/Home.module.css";
import { useAppContext } from "../utils/AppContext";

const Index = () => {
  const router = useRouter();
  const [fuelUps, setFuelUps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalFuelUps, setTotalFuelUps] = useState(0);
  const { pageNum } = useAppContext();

  const fetchFuelUps = (pageNum) => {
    fetch(`/api/fuelUp?pageNum=${pageNum ?? 1}`)
      .then((res) => res.json())
      .then(({ success, data }) => {
        if (success) {
          const { fuelUps } = data;
          setFuelUps(fuelUps);
          return;
        }
        console.log(data);
        return;
      })
      .catch(console.log);
  };

  const fetchTotalItems = () => {
    fetch("/api/pagination")
      .then((res) => res.json())
      .then(({ success, data }) => {
        if (success) {
          const { totalItems } = data;
          setTotalFuelUps(totalItems);
          return;
        }
        console.log(data);
        return;
      })
      .catch(console.log);
  };

  useEffect(() => {
    fetchTotalItems();
  }, []);

  useEffect(() => {
    fetchFuelUps(pageNum);
    setLoading(false);
  }, [loading, pageNum]);

  return (
    <>
      <Head>
        <title>Fuel Tracker</title>
      </Head>
      <div className={styles.header}>
        <div className={styles.actions}>
          <Button
            text="Add Fuel Up"
            onClick={() => router.push("/addFuelUp")}
          />
          <Button text="Add Car" onClick={() => router.push("/addCar")} />
        </div>
        <h1 className={styles.title}>Fuel Up Tracker</h1>
        <div className={styles.pagination}>
          <PaginationControls
            pageSize={20}
            totalItems={Number.parseInt(totalFuelUps, 10)}
          />
        </div>
      </div>
      <div className={styles.cardDisplay}>
        {fuelUps.length ? (
          fuelUps.map((e, i) => <FuelUpCard fuelup={e} key={i.toString()} />)
        ) : (
          <div className={styles.emptyList}>
            No fuel ups yet! Add a fuel up to get started.
          </div>
        )}
      </div>
    </>
  );
};

export default Index;
