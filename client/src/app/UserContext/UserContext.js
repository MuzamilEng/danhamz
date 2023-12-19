import React, { createContext, useContext, useEffect, useState } from 'react';
import { useGetAllLettingsQuery } from '../store/storeApi';

const UserContext = createContext();

export const useGlobalContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const { data } = useGetAllLettingsQuery()
  const [content, setContent] = useState([]);

  useEffect(() => {
    if (data) {
      setContent(data);
    }
  }, [data]);
 
  console.log(content);
  
  return (
    <UserContext.Provider value={{ content, setContent }}>
      {children}
    </UserContext.Provider>
  );
};
