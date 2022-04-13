import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import CarForm from "../src/CarForm";
import styles from "../styles/AddCar.module.css";

const AddCar = () => {
  const router = useRouter();

  const handleSubmit = (data) => {
    fetch("/api/car", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        router.push("/");
      }
    });
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

export default AddCar;
