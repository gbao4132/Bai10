import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null); // Thêm state để lưu thông tin người dùng

  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn, userInfo, setUserInfo }}>
      {children}
    </AppContext.Provider>
  );
};