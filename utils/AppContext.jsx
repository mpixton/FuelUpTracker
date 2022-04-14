// Code borrowed from
// https://www.netlify.com/blog/2020/12/01/using-react-context-for-state-management-in-next.js/

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
  const [carId, setCarId] = useState(null);
  const [fuelUpId, setFuelUpId] = useState(null);
  const [pageNum, setPageNum] = useState(1);

  const sharedState = {
    carId,
    setCarId,
    fuelUpId,
    setFuelUpId,
    pageNum,
    setPageNum,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
