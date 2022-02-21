import React from "react";
import { Link } from 'react-router-dom';
import styles from './login.module.css'
import Home from '../Pages/Home'

function Login() {
  return (
    <>
      <div className={Home}>
        <aside>
          <div className={styles.foto}></div>
        </aside>
        <main className={styles.main}>
          <form>
            <input type="text" placeholder="Login" />
            <input type="password" placeholder="Senha" />
            <Link to="home">Entrar</Link>
          </form>
        </main>
      </div>
    </>
  );
}

export default Login;