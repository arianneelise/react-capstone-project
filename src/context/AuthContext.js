import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useContext, useEffect, useState, createContext } from "react";
import { auth } from "../firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = (auth, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (auth, email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = (auth) => {
    return signOut(auth);
  };

  useEffect(() => {
    // Whenever we call the signup function and create a user, this will set the user to the created user:
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    // The reason we set it to the variable 'unsubscribe' is because the onAuthStateChanged function returns a method which, when called, will unsubscribed the listener.
    // We return this because we want to unsubscribe whenever we unmount this event:
    return unsubscribe;
  }, []);

  const value = {
    user,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
