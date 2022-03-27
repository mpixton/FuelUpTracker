import react from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Fuel Tracker</title>
      </Head>
      <button onClick={() => router.push("/addFuelUp")}>Add Fuel Up</button>
    </>
  );
}
