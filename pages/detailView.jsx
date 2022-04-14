import { format, parseISO } from "date-fns";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../src/Button";
import FuelUpCard from "../src/FuelUpCard";
import styles from "../styles/DetailView.module.css";
import { useAppContext } from "../utils/AppContext";
import PaginationControls from "../src/PaginationControls";

const DetailView = () => {
  const [fuelUp, setFuelUp] = useState({});
  const [otherFuelUps, setOtherFuelUps] = useState([]);
  const [stats, setStats] = useState({});
  const [carDetails, setCarDetails] = useState({});
  const [otherFuelUpsCount, setOtherFuelUpsCount] = useState(0);
  const [otherFuelUpsFetched, setOtherFuelUpsFetched] = useState(false);
  const [fuelUpFetched, setFuelUpFetched] = useState(false);
  const [statsFetched, setStatsFetched] = useState(false);
  const [carDetailsFetched, setCarDetailsFetched] = useState(false);
  const [otherFuelUpsCountFetched, setOtherFuelUpsCountFetched] =
    useState(false);
  const router = useRouter();
  const { carId, fuelUpId, pageNum, setCarId, setFuelUpId, setPageNum } =
    useAppContext();

  const fetchFuelUp = (id) => {
    fetch(`/api/details/${id}`)
      .then((res) => res.json())
      .then(({ success, data }) => {
        if (success) {
          const { fuelUp } = data;
          setFuelUp(fuelUp);
          return;
        }
        console.log(data);
        return;
      })
      .catch(console.log);
  };

  const fetchOtherCarFuelUps = (carId, fuelUpId) => {
    fetch(
      `/api/fuelUp/?carId=${carId}&limit=10&exclude=${fuelUpId}&pageNum=${pageNum}`
    )
      .then((res) => res.json())
      .then(({ success, data }) => {
        if (success) {
          const { fuelUps } = data;
          setOtherFuelUps(fuelUps);
          return;
        }
        console.log(data);
        return;
      })
      .catch(console.log);
  };

  const fetchStats = (carId) => {
    fetch(`/api/car/aggregation/${carId}`)
      .then((res) => res.json())
      .then(({ success, data }) => {
        if (success) {
          const { stats } = data;
          setStats(stats);
          return;
        }
        console.log(data);
        return;
      })
      .catch(console.log);
  };

  const fetchCarDetails = (carId) => {
    fetch(`/api/car/${carId}`)
      .then((res) => res.json())
      .then(({ success, data }) => {
        if (success) {
          const { car } = data;
          setCarDetails(car);
          return;
        }
        console.log(data);
        return;
      });
  };

  const fetchOtherFuelUpsCount = (carId) => {
    fetch(`/api/pagination?carId=${carId}`)
      .then((res) => res.json())
      .then(({ success, data }) => {
        if (success) {
          const { totalItems } = data;
          setOtherFuelUpsCount(totalItems);
          return;
        }
      })
      .catch(console.log);
  };

  useEffect(() => {
    if (window.sessionStorage.getItem("carId")) {
      setCarId(JSON.parse(window.sessionStorage.getItem("carId")));
    }
    if (window.sessionStorage.getItem("fuelUpId")) {
      setFuelUpId(JSON.parse(window.sessionStorage.getItem("fuelUpId")));
    }
    if (carId === null && fuelUpId === null) {
      router.push("/");
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (fuelUpId !== null) {
      fetchFuelUp(fuelUpId);
      setTimeout(() => {
        setFuelUpFetched(true);
      }, 250);
    }
  }, [fuelUpId]);

  useEffect(() => {
    if (carId !== null) {
      fetchStats(carId);
      fetchCarDetails(carId);
      fetchOtherFuelUpsCount(carId);
      setTimeout(() => {
        setStatsFetched(true);
        setCarDetailsFetched(true);
        setOtherFuelUpsCountFetched(true);
      }, 250);
    }
  }, [carId]);

  useEffect(() => {
    if (carId !== null && fuelUpId !== null) {
      fetchOtherCarFuelUps(carId, fuelUpId);
      setTimeout(() => {
        setOtherFuelUpsFetched(true);
      }, 250);
    }
  }, [carId, fuelUpId, pageNum]);

  return (
    <>
      <Head>
        <title>Detail View</title>
      </Head>
      <div className={styles.layout}>
        <div className={styles.details}>
          {fuelUpFetched ? (
            <>
              <div className={styles.backBtn}>
                <Button
                  text="Back"
                  onClick={() => {
                    setPageNum(1);
                    router.push("/");
                  }}
                  addMargin={false}
                />
              </div>
              {fuelUpFetched && (
                <div className={styles.areaHeader}>
                  Fuel Up for {fuelUp?.car} on{" "}
                  {format(new Date(parseISO(fuelUp?.date)), "d MMM yyyy")}
                </div>
              )}
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
          {statsFetched && carDetailsFetched ? (
            <>
              <div className={styles.areaHeader}>{fuelUp.car} Stats</div>
              <div className={styles.leftCol}>
                <div className={styles.subHeader}>Average Stats</div>
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
                <div className={styles.subHeader}>Total Stats</div>
                <div>Total Miles Tracked: {stats?.totalTrip.toFixed()}</div>
                <div>
                  Total Gallons Tracked: {stats?.totalGallons.toFixed(0)}
                </div>
                <div>
                  Total Cost of Fuel Ups Tracked: {stats?.totalTotal.toFixed(0)}
                </div>
                <div className={styles.subHeader}>Car Details</div>
                <div>Make: {carDetails?.make}</div>
                <div>Model: {carDetails?.model}</div>
                <div>Year: {carDetails?.year}</div>
              </div>
            </>
          ) : (
            <div className={styles.loading}>Loading Stats...</div>
          )}
        </div>
        <div className={styles.otherFuelUps}>
          <div className={styles.areaHeader}>Recent Fuel Ups</div>
          {otherFuelUpsFetched && otherFuelUpsCountFetched ? (
            otherFuelUps.length < 2 ? (
              <>
                <div className={styles.loading}>No other Fuel Ups!</div>
                <div className={styles.loading}>
                  Add more Fuel Ups to start tracking a history for{" "}
                  {carDetails?.name}
                </div>
                <div className={styles.loading}>
                  <Button
                    text="Add Fuel Up"
                    onClick={() => router.push("/addFuelUp")}
                  />
                </div>
              </>
            ) : (
              <>
                {otherFuelUps.map((e, i) => {
                  return <FuelUpCard fuelup={e} key={i.toString()} />;
                })}
                <div className={styles.pagination}>
                  <PaginationControls
                    pageSize={10}
                    totalItems={otherFuelUpsCount}
                  />
                </div>
              </>
            )
          ) : (
            <div className={styles.loading}>Loading Other Fuel Ups....</div>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailView;
