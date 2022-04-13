import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../utils/AppContext";

export default () => {
  const [loaded, setLoaded] = useState(false);
  const [idsLoaded, setIdsLoaded] = useState(false);
  const [fuelUp, setFuelUp] = useState({});
  const [otherFuelUps, setOtherFuelUps] = useState([{}]);
  const router = useRouter();
  const { carId, fuelUpId, setCarId, setFuelUpId } = useAppContext();

  const fetchFuelUp = (id) => {
    fetch(`/api/details/${id}`)
      .then((res) => res.json())
      .then(({ success, data }) => {
        console.log("Success: %s, Data: %o", success, data);
        if (success) {
          const { fuelUp = {} } = data;
          console.log(fuelUp);
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
    setIdsLoaded(true);
  }, []);

  useEffect(() => {
    fetchFuelUp(fuelUpId);
  }, [fuelUpId]);

  useEffect(() => {
    fetchOtherCarFuelUps(carId);
  }, [carId]);

  useEffect(() => {
    setLoaded(true);
  }, [fuelUp, otherFuelUps]);

  return (
    <>
      <Head>
        <title>Detail View</title>
      </Head>
      <div>
        {!loaded ? (
          <div>Loading</div>
        ) : (
          <div>
            <div>{fuelUp.odometer}</div>
          </div>
        )}
      </div>
    </>
  );
};
