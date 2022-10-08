import React from 'react';
import styles from '../styles/input.module.scss';
import Input from '../components/Input';

const login = () => {
  return (
    <>
      <form action="submit">
        <Input type="text" label="ID" />
        <Input type="password" label="password" />
      </form>
    </>
  );
};

export default login;
