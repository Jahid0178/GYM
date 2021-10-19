import React, { useEffect, useState } from "react";
import useAuth from "./hooks/useAuth";

const LoadData = () => {
  const [{}, storeData, setStoreData] = useAuth();

  useEffect(() => {
    fetch("./fakeData.json")
      .then((response) => response.json())
      .then((data) => {
        setStoreData(data);
      });
  }, []);
};

export default LoadData;
