import React, { createContext, useState } from "react";
import useFirebase from "../hooks/useFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const allContext = useFirebase();
  const [storeData, setStoreData] = useState([]);

  return (
    <AuthContext.Provider value={[allContext, storeData, setStoreData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
