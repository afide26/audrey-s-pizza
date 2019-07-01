import { useState, useEffect } from "react";
const auth = window.firebase.auth();
const provider = new window.firebase.auth.GoogleAuthProvider();

export function useAuthentication() {
  const [authenticated, setAuthenticate] = useState("loading");

  function login() {
    auth.signInWithPopup(provider);
  }

  function logout() {
    auth
      .signOut()
      .then(function() {})
      .catch(function(error) {
        console.log(error);
      });
  }
  useEffect(() => {
    auth.onAuthStateChanged(
      function(user) {
        if (user) {
          setAuthenticate(user);
        } else {
          setAuthenticate();
        }
      },
      function(error) {
        console.log(error);
      }
    );
  }, []);
  return {
    login,
    logout,
    loggedIn: authenticated
  };
}
