import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CarForm from "../src/CarForm";
import FuelUpForm from "../src/FuelUpForm";
import Modal from "../src/Modal";
import styles from "../styles/AddFuelUp.module.css";

const AddFuelUp = () => {
  const [carOptions, setCarOptions] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [carsFetched, setCarsFetched] = useState(false);
  const router = useRouter();

  const handleSubmit = (data) => {
    fetch("/api/fuelUp", {
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
};

export default AddFuelUp;
