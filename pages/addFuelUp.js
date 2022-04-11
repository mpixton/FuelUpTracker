import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import styles from "../styles/AddFuelUp.module.css";
import Modal from "../src/Modal";
import CarForm from "../src/CarForm";
import FuelUpForm from "../src/FuelUpForm";

export default function AddFuelUp() {
  const [carOptions, setCarOptions] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [carsFetched, setCarsFetched] = useState(false);
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

  const openModal = () => {
    console.log(modalOpen);
    setModalOpen(true);
  };

  const closeModal = () => {
    console.log(modalOpen);
    setModalOpen(false);
  };

  const handleSubmit = (data) => {
    console.log(data);
  };

  const addCarSubmit = (data) => {
    fetch("api/car", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        setCarsFetched(false);
        closeModal();
        return;
      }
      closeModal();
      return;
    });
  };

  useEffect(() => {
    getCarOptions();
    setCarsFetched(true);
  }, [carsFetched]);

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
          addCarOnClick={openModal}
        />
        <Modal show={modalOpen}>
          <div className={styles.centerForm}>
            <CarForm onCancel={closeModal} onSubmit={addCarSubmit} />
          </div>
        </Modal>
      </div>
    </>
  );
}
