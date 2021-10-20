import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  // Provider
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // google
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // git hub
  const signInUsingGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    if (password.length < 6) {
      setError("Password should be an 6 character or more");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const processAccount = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // observe the user state change or not
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribed;
  }, []);

  // log out
  const logOut = () => {
    signOut(auth).then(() => {});
  };

  return {
    user,
    error,
    signInUsingGoogle,
    signInUsingGithub,
    handleEmailChange,
    handlePasswordChange,
    handleRegister,
    processAccount,
    logOut,
    setError,
    setUser,
  };
};

export default useFirebase;
