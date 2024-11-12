import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>Adivinanzas Interactivas</h1>
    <nav className={styles.nav}>
      <a href="#">Inicio</a>
      <a href="#">Sobre Nosotros</a>
      <a href="#">Contacto</a>
    </nav>
  </header>
);

export default Header;
