import React from 'react';
import Link from 'next/link';
import styles from '../styles/footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <span>Footer</span>
      <Link href="/login">
        <div>MenuBtn</div>
      </Link>
    </footer>
  );
}

export default Footer;
