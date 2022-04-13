import { format, parseISO } from "date-fns";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../src/Button";
import FuelUpCard from "../src/FuelUpCard";
import styles from "../styles/DetailView.module.css";
import { useAppContext } from "../utils/AppContext";

const DetailView = () => {
  const [otherFuelUpsFetched, setOtherFuelUpsFetched] = useState(false);
  const [fuelUp, setFuelUp] = useState({});
  const [otherFuelUps, setOtherFuelUps] = useState([]);
  const [stats, setStats] = useState({});
  const router = useRouter();
  const { carId, fuelUpId, setCarId, setFuelUpId } = useAppContext();

  const fetchFuelUp = (id) => {
    fetch(`/api/details/${id}`)
      .then((res) => res.json())
      .then(({ success, data }) => {
        if (success) {
          const { fuelUp = {} } = data;
          setFuelUp(fuelUp);
        }
      });
  };

  const fetchOtherCarFuelUps = (carId) => {
    fetch(`/api/car/${carId}?limit=10`)
      .then((res) => res.json())
      .then(({ success, data }) => {
        if (success) {
          const { fuelUps } = data;
          setOtherFuelUps(fuelUps);
        }
      });
  };

  const fetchStats = (carId) => {
    fetch(`/api/car/aggregation/${carId}`)
      .then((res) => res.json())
      .then(({ success, data }) => {
        if (success) {
          const { stats } = data;
          setStats(stats);
        }
      });
  };

  useEffect(() => {
    if (window.sessionStorage.getItem("carId")) {
      setCarId(JSON.parse(window.sessionStorage.getItem("carId")));
    }
    if (window.sessionStorage.getItem("fuelUpId")) {
      setFuelUpId(JSON.parse(window.sessionStorage.getItem("fuelUpId")));
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (fuelUpId !== null) {
      fetchFuelUp(fuelUpId);
      setTimeout(() => {
        setFuelUpFetched(true);
      }, 500);
    }
  }, [fuelUpId]);

  useEffect(() => {
    if (carId !== null) {
      fetchOtherCarFuelUps(carId);
      fetchStats(carId);
      setTimeout(() => {
        setOtherFuelUpsFetched(true);
        setStatsFetched(true);
      }, 500);
    }
  }, [carId]);

  return (
    <>
      <Head>
        <title>Detail View</title>
      </Head>
      <div className={styles.layout}>
        <div className={styles.details}>
          {Object.keys(fuelUp).length ? (
            <>
              <div className={styles.backBtn}>
                <Button
                  text="Back"
                  onClick={() => router.push("/")}
                  addMargin={false}
                />
              </div>
              <div className={styles.areaHeader}>
                Fuel Up for {fuelUp.car} on{" "}
                {format(new Date(parseISO(fuelUp?.date)), "d MMM yyyy")}{" "}
              </div>
              <div>Odometer: {fuelUp?.odometer.toLocaleString()}</div>
              <div>Trip: {fuelUp.trip}</div>
              <div>Gallons Purchased: {fuelUp.gallons}</div>
              <div>Total Cost: {fuelUp.total}</div>
              <div>Price Per Gallon: {fuelUp.price}</div>
              <div>City: {fuelUp.city}</div>
              <div>State: {fuelUp.state}</div>
              <div>Vendor: {fuelUp.vendor}</div>
              <div>
                ${fuelUp.total && (fuelUp.total / fuelUp.trip).toFixed(3)} per
                mile
              </div>
              <div>
                {fuelUp.trip && (fuelUp.trip / fuelUp.gallons).toFixed(3)} mpg
              </div>
            </>
          ) : (
            <div className={styles.loading}>Loading Details...</div>
          )}
        </div>
        <div className={styles.stats}>
          {Object.keys(stats).length ? (
            <>
              <div className={styles.areaHeader}>{fuelUp.car} Stats</div>
              <div className={styles.leftCol}>
                <div>Average Stats</div>
                <div>Average Miles Per Trip: {stats.avgTrip?.toFixed(3)}</div>
                <div>
                  Average Total Cost Per Fuel Up: {stats.avgTotal?.toFixed(3)}
                </div>
                <div>
                  Average Gallons Purchased: {stats.avgGallons?.toFixed(3)}
                </div>
                <div>
                  Average Price Per Gallon: {stats.avgPrice?.toFixed(3)}
                </div>
                <div>
                  Average Fuel Economy:{" "}
                  {(stats?.avgTrip / stats?.avgGallons).toFixed(3)} mpg
                </div>
                <div>
                  Average Cost Per Mile: $
                  {(stats?.avgTotal / stats?.avgTrip).toFixed(3)}
                </div>
              </div>
              <div className={styles.rightCol}>
                <div>Total Stats</div>
                <div>Total Miles Tracked: {stats?.totalTrip}</div>
                <div>Total Gallons Tracked: {stats?.totalGallons}</div>
                <div>Total Cost of Fuel Ups Tracked: {stats?.totalTotal}</div>
              </div>
            </>
          ) : (
            <div className={styles.loading}>Loading Stats...</div>
          )}
        </div>
        <div className={styles.otherFuelUps}>
          <div className={styles.areaHeader}>10 Most Recent Fuel Ups</div>
          {otherFuelUps.length ? (
            otherFuelUps.map((e, i) => {
              return <FuelUpCard fuelup={e} key={i.toString()} />;
            })
          ) : otherFuelUpsFetched ? (
            <div className={styles.loading}>No Other Fuel Ups!</div>
          ) : (
            <div className={styles.loading}>Loading Other Fuel Ups....</div>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailView;
