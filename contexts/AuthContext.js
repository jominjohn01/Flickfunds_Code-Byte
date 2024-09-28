import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth"; // Make sure to import this
// import { authentication } from "../../firebase/config"; // Adjust path as necessary
import { authentication } from "../firebase/config";
const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loading, setLoading] = useState(true); // To manage loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authentication, (user) => {
      setLoggedInUser(user); // Update the logged in user state
      setLoading(false); // Set loading to false once the state is determined
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return (
    <AuthContext.Provider value={{ loggedInUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);

export default AuthContext;
