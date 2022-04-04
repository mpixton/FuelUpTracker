import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import styles from "../styles/AddFuelUp.module.css";
import FuelUpForm from "../src/FuelUpForm";

export default function AddFuelUp() {
  const [carOptions, setCarOptions] = useState([]);
  const router = useRouter();

  // const handleSubmit = (data) => {
  //   fetch("/api/fuelUp", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   }).then((res) => {
  //     if (res.ok) {
  //       router.push("/");
  //     }
  //   });
  // };

  const getCarOptions = () => {
    fetch("/api/car")
      .then((res) => res.json())
      .then(({ cars }) => {
        const options = cars.map((e) => ({ label: e.name, value: e.car_id }));
        setCarOptions(options);
      });
  };

  const handleSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    getCarOptions();
  }, []);

  return (
    <>
      <Head>
        <title>Fuel Tracker</title>
      </Head>
      <div className={styles.centerForm}>
        <FuelUpForm
          onSubmit={handleSubmit}
          onCancel={router.back}
          carOptions={carOptions}
        />
      </div>
    </>
  );
}
