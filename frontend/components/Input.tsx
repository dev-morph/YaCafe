import React from 'react';
import styles from '../styles/input.module.scss';

interface InputType {
  type: 'text' | 'password';
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ type, label, onChange }: InputType) => {
  return (
    <div className={styles.form}>
      <input
        id={label}
        className={styles.form__input}
        type={type}
        autoComplete="off"
        placeholder=" "
        onChange={onChange}
      />
      <label className={styles.form__label} htmlFor={label}>
        {label}
      </label>
    </div>
  );
};

export default Input;
