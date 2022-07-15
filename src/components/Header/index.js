import React from 'react';
import { Link } from 'react-router-dom';
import styles from './../Header/Header.module.scss';
import HeaderButton from './HeaderButton';


const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/"><img src="/static/images/logo.png" alt="Logo" /></Link>
      <HeaderButton />
    </div>
  );
}

export default Header;
