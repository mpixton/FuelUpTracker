import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import styles from "../styles/AddFuelUp.module.css";
import InputForm from "../src/InputForm";

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
        <InputForm onSubmit={handleSubmit} />
      </div>
    </>
  );
}
