import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import styles from "../styles/AddCar.module.css";
import CarForm from "../src/CarForm";

export default () => {
  const router = useRouter();

  // const handleSubmit = (data) => {
  //   fetch("/api/car", {
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
      <Head>Add Car</Head>
      <div className={styles.centerForm}>
        <CarForm onSubmit={handleSubmit} onCancel={router.back} />
      </div>
    </>
  );
};
