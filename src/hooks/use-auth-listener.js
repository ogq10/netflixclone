import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

//this function listens for the user
export default function useAuthListener() {
  //determine if user is logged in and store state

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    //clean up listener
    return () => listener();
  }, []);

  return user;
}
