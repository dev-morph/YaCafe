import React from 'react';
import styles from '../styles/input.module.scss';

const login = () => {
  return (
    <>
      <form className={styles.form} action="submit">
        <div className="text__input__wrapper">
          <input
            className={styles.form__input}
            type="text"
            id="id"
            autoComplete="off"
          />
          <label className="form__label" htmlFor="id">
            ID
          </label>
        </div>
      </form>
    </>
  );
};

export default login;
