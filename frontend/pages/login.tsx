import React, { useReducer, useState } from 'react';
import Input from '../components/Input';
import styles from '../styles/login.module.scss';

type LoginState = {
  ID: string;
  password: string;
};

type Action = { type: string; value: string };

const InitialFormData = {
  ID: '',
  password: '',
};

function formReducer(state: LoginState, action: Action): LoginState {
  switch (action.type) {
    case 'ID':
      return { ...state, ID: action.value };
    case 'password':
      return { ...state, password: action.value };
    default:
      throw new Error();
  }
}

const login = () => {
  const [state, dispatch] = useReducer(formReducer, InitialFormData);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: e.target.id, value: e.target.value });
  };

  const submitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('final', state);
  };

  return (
    <>
      <form className={styles.form} action="submit">
        <div className={styles.title__wrapper}>
          <h1>Login</h1>
        </div>

        <Input type="text" label="ID" onChange={inputHandler} />

        <Input type="password" label="password" onChange={inputHandler} />

        <div className={styles.btn__wrapper}>
          <button className={styles.login__btn} onClick={submitHandler}>
            로그인
          </button>
        </div>
      </form>
    </>
  );
};

export default login;
