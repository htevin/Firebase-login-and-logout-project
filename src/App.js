import React from "react";
import "./App.css";
import { auth } from "./firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setUser(user);
        setLoggedIn(true);
      }
    });
  }, []);

  function register() {
    createUserWithEmailAndPassword(auth, "tevin@gmail.com", "bulldog1")
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function login() {
    signInWithEmailAndPassword(auth, "tevin@gmail.com", "bulldog1")
      .then(({ user }) => {
        setUser(user);
        setLoggedIn(true);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function logout() {
    signOut(auth);
    setUser({});
    setLoggedIn(false);
  }

  return (
    <div className="App">
      <div className="topnav">
        <div>
          <a className="active" href="#home">
            Home
          </a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
        <div>
          {loggedIn ? (
            <button className="name__btn" onClick={logout}>
              {user.email[0].toUpperCase()}
            </button>
          ) : (
            <>
              {loading ? (
                <button className="loader">?</button>
              ) : (
                <>
                  <button onClick={login}>Login</button>
                  <button onClick={register}>Register</button>
                </>
              )}
            </>
          )}

          {/* <span className="loader"></span> */}
          {/* <h2>{loading ? "Loading..." : user.email}</h2> */}

          {/* <button  onClick={logout}>{user.email[0]}</button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
