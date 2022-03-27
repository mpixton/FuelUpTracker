import react from "react";
import styles from "../styles/AddFuelUp.module.css";
import Head from "next/head";
import InputForm from "../src/InputForm";

export default function AddFuelUp() {
  return (
    <>
      <Head>
        <title>Fuel Tracker</title>
      </Head>
      <InputForm></InputForm>
    </>
  );
}
