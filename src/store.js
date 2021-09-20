import React, { useState, useEffect } from 'react';
// import app from './firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        return setCurrentUser(user);
      }
      setCurrentUser(null);
    });
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
