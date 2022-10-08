import React, { ReactNode, ReactElement } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/layout.module.scss';

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Ya-Cafe!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className={styles.main__wrapper}>
        <main className={styles.main}>{children}</main>
      </div>

      <Footer />
    </>
  );
};
