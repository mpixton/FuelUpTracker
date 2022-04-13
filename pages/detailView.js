import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../utils/AppContext";
import format from "date-fns/format";

export default () => {
  const [fuelUpFetched, setFuelUpFetched] = useState(false);
  const [otherFuelUpsFetched, setOtherFuelUpsFetched] = useState(false);
  const [fuelUp, setFuelUp] = useState({});
  const [otherFuelUps, setOtherFuelUps] = useState([]);
  const router = useRouter();
  const { carId, fuelUpId, setCarId, setFuelUpId } = useAppContext();

  console.log("CarId: %s, FuelUpId: %s", carId, fuelUpId);

  const fetchFuelUp = (id) => {
    fetch(`/api/details/${id}`)
      .then((res) => res.json())
      .then(({ success, data }) => {
        console.log("Success: %s, Data: %o", success, data);
        if (success) {
          const { fuelUp = {} } = data;
          setFuelUp(fuelUp);
        }
      });
  };

  const fetchOtherCarFuelUps = (carId) => {
    fetch(`/api/car/${carId}`)
      .then((res) => res.json())
      .then(({ success, data }) => {
        console.log("Success: %s, Data: %o", success, data);
        if (success) {
          const { fuelUps } = data;
          setOtherFuelUps(fuelUps);
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
  }, []);

  useEffect(() => {
    if (fuelUpId !== null) {
      fetchFuelUp(fuelUpId);
      setFuelUpFetched(true);
    }
  }, [fuelUpId]);

  useEffect(() => {
    if (carId !== null) {
      fetchOtherCarFuelUps(carId);
      setOtherFuelUpsFetched(true);
    }
  }, [carId]);

  return (
    <>
      <Head>
        <title>Detail View</title>
      </Head>
      <div>
        {!(fuelUpFetched && otherFuelUpsFetched) ? (
          <div>Loading</div>
        ) : (
          <div>
            <div>{fuelUp.car}</div>
            <div>Odometer: {fuelUp.odometer}</div>
            <div>Trip: {fuelUp.trip}</div>
            <div>Gallons Purchased: {fuelUp.gallons}</div>
            <div>Total Cost: {fuelUp.total}</div>
            <div>Price Per Gallon: {fuelUp.price}</div>
            <div>City: {fuelUp.city}</div>
            <div>
              Date Purchased:{" "}
              {new Date(fuelUp.date).toLocaleDateString("en-us", {
                day: "numeric",
                month: "short",
                year: "numeric",
                weekday: "short",
              })}
            </div>
            <div>State: {fuelUp.state}</div>
            <div>Vendor: {fuelUp.vendor}</div>
            <div>
              ${fuelUp.total && (fuelUp.total / fuelUp.trip).toFixed(3)} per
              mile
            </div>
            <div>
              {fuelUp.trip && (fuelUp.trip / fuelUp.gallons).toFixed(3)} mpg
            </div>
          </div>
        )}
      </div>
    </>
  );
};
