import React from 'react';
import styles from '../styles/input.module.scss';

interface InputType {
  type: 'text' | 'password';
  label: string;
}

const Input = ({ type, label }: InputType) => {
  return (
    <div className={styles.form}>
      <input
        className={styles.form__input}
        type={type}
        autoComplete="off"
        placeholder=" "
      />
      <label className={styles.form__label} htmlFor={label}>
        {label}
      </label>
    </div>
  );
};

export default Input;
