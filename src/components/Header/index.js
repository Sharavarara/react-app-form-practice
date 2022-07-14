import React from 'react';
import { Link } from 'react-router-dom';
import styles from './../Header/Header.module.scss';


const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/"><img src="/static/images/logo.png" alt="Logo" /></Link>
      <button>Login</button>
    </div>
  );
}

export default Header;
