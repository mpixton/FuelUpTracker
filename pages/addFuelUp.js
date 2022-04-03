import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import styles from "../styles/AddFuelUp.module.css";
import FuelUpForm from "../src/FuelUpForm";

export default function AddFuelUp() {
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

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Fuel Tracker</title>
      </Head>
      <div className={styles.centerForm}>
        <FuelUpForm onSubmit={handleSubmit} />
      </div>
    </>
  );
}
