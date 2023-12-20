import React, { createContext, useContext, useEffect, useState } from 'react';
import { useGetAllLettingsQuery, useGetAllSalesQuery } from '../store/storeApi';

const UserContext = createContext();

export const useGlobalContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const { data: lettings } = useGetAllLettingsQuery()
  const { data: sales } = useGetAllSalesQuery()
  const [lettingProperties, setLettingProperties] = useState([]);
  const [salesProperties, setSalesProperties] = useState([]);

  useEffect(() => {
    if (lettings) {
      setLettingProperties(lettings);
    }
    if(sales) {
      setSalesProperties(sales);
    }
  }, [lettings, sales]);
 
  console.log(lettings,"Lettings");
  console.log(sales,"Sales");
  
  return (
    <UserContext.Provider value={{ lettingProperties, setLettingProperties, salesProperties, setSalesProperties }}>
      {children}
    </UserContext.Provider>
  );
};
