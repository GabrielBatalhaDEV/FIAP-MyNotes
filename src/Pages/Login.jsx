import React from "react";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import styles from "./login.module.css";

function Login() {
  const nav = useNavigate();

  function handleUserHome() {
    console.log("nav");
    nav("home");
  }

  return (
    <>
      <main className={styles.main}>
        <h1>
          My
          <Typewriter
            loop
            cursor
            cursorStyle="_"
            typeSpeed={150}
            deleteSpeed={100}
            delaySpeed={1000}
            words={["Notes"]}
          />
        </h1>
        <form>
          <input
            type="text"
            placeholder="Login"
            className={styles.input}
          ></input>
          <input
            type="password"
            placeholder="Senha"
            className={styles.input}
          ></input>
          <button
            type="submit"
            className={styles.button}
            onClick={handleUserHome}
          >
            Entrar
          </button>
        </form>
      </main>
    </>
  );
}

export default Login;
