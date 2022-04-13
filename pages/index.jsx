import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../src/Button";
import FuelUpCard from "../src/FuelUpCard";
import PaginationControls from "../src/PaginationControls";
import styles from "../styles/Home.module.css";

const Index = () => {
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
      <h1 className={styles.header}>Fuel Up Tracker</h1>
      <div className={styles.cardDisplay}>
        {fuelUps.length ? (
          fuelUps.map((e, i) => (
            <React.Fragment key={i.toString()}>
              <FuelUpCard fuelup={e} />
            </React.Fragment>
          ))
        ) : (
          <div className={styles.emptyList}>
            No fuel ups yet! Add a fuel up to get started.
          </div>
        )}
      </div>
      <div className={styles.pagination}>
        <div>
          <Button
            text="Add Fuel Up"
            onClick={() => router.push("/addFuelUp")}
          />
          <Button text="Add Car" onClick={() => router.push("/addCar")} />
        </div>
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

export default Index;
