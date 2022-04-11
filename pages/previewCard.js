import React from "react";

import FuelUpCard from "../src/FuelUpCard";

export default () => {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "1fr",
          placeItems: "center",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          gap: "0.5rem",
          padding: "0 1rem",
          paddingTop: "1rem",
        }}
      >
        <FuelUpCard />
        <FuelUpCard />
        <FuelUpCard />
        <FuelUpCard />
        <FuelUpCard />
        <FuelUpCard />
        <FuelUpCard />
        <FuelUpCard />
        <FuelUpCard />
        <FuelUpCard />
        <FuelUpCard />
        <FuelUpCard />
        <FuelUpCard />
        <FuelUpCard />
        <FuelUpCard />
        <FuelUpCard />
        <FuelUpCard />
        <FuelUpCard />
        <FuelUpCard />
        <FuelUpCard />
      </div>
    </>
  );
};
