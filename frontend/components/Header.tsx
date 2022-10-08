import React from 'react';
import Link from 'next/link';
import styles from '../styles/header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <Link href="/category">
        <span className={styles.header__title}>Ya-Cafe !!</span>
      </Link>
    </div>
  );
}

export default Header;
