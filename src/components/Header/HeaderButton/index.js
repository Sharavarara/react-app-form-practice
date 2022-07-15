import React from 'react';
import styles from './../HeaderButton/HeaderButton.module.scss';
import { useLocation, Link } from 'react-router-dom';

const HeaderButton = () => {
  const { pathname } = useLocation();
  const getRightPath = () => {
    if (pathname === '/') {
      return 'login'
    } else if (pathname === '/login') {
      return 'signup'
    }
    return 'login'
  };

  return (
    <div className={styles.button}>
      <Link to={`/${getRightPath()}`} >{getRightPath()}</Link>
    </div>
  );
}

export default HeaderButton;
