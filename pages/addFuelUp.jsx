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
  const [fuelUpPostError, setFuelUpPostError] = useState("");
  const [carPostError, setCarPostError] = useState("");
  const router = useRouter();

  const getCarOptions = () => {
    fetch("/api/car")
      .then((res) => res.json())
      .then(({ success, data }) => {
        if (success) {
          const { cars } = data;
          const options = cars.map((e) => ({ label: e.name, value: e.car_id }));
          setCarOptions(options);
          return;
        }
        console.log(data);
        return;
      })
      .catch(console.log);
  };

  useEffect(() => {
    getCarOptions();
    setCarsFetched(true);
  }, [carsFetched]);

  const handleSubmit = (data) => {
    console.log(data);
    fetch("/api/fuelUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(({ success, data }) => {
        if (success) {
          router.push("/");
          return;
        }
        console.log(data);
        setFuelUpPostError(data.msg);
        return;
      })
      .catch(console.log);
  };

  const addCarSubmit = (data) => {
    fetch("api/car", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(({ success, data }) => {
        if (success) {
          setCarsFetched(false);
          closeModal();
          return;
        }
        console.log(data);
        setCarPostError(data.msg);
        return;
      });
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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
          submissionError={fuelUpPostError}
        />
        <Modal show={modalOpen}>
          <div className={styles.centerForm}>
            <CarForm
              onCancel={closeModal}
              onSubmit={addCarSubmit}
              submissionError={carPostError}
            />
          </div>
        </Modal>
      </div>
    </>
  );
};

export default AddFuelUp;
