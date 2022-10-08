import React, { useReducer } from 'react';
import Input from '../components/Input';
import styles from '../styles/signup.module.scss';

type LoginState = {
  id: string;
  password: string;
};

type Action = { type: string; value: string };

type InputType = HTMLInputElement & {
  subType: string;
};

const InitialFormData = {
  id: '',
  password: '',
};

function formReducer(state: LoginState, action: Action): LoginState {
  switch (action.type) {
    case 'id':
      return { ...state, id: action.value };
    case 'password':
      return { ...state, password: action.value };
    default:
      throw new Error();
  }
}

const signup = () => {
  const [state, dispatch] = useReducer(formReducer, InitialFormData);
  const inputHandler = (e: React.ChangeEvent<InputType>) => {
    dispatch({ type: e.target.subType, value: e.target.value });
  };

  const submitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('final', e);
  };
  return (
    <>
      <form className={styles.form} action="submit">
        <div className={styles.title__wrapper}>
          <h1>회원가입</h1>
        </div>

        <Input
          type="text"
          label="아이디"
          onChange={inputHandler}
          subType="id"
        />

        <Input
          type="password"
          label="비밀번호"
          onChange={inputHandler}
          subType="password"
        />

        <Input
          type="password"
          label="비밀번호 확인"
          onChange={inputHandler}
          subType="password__confirm"
        />

        <div className={styles.btn__wrapper}>
          <button className={styles.login__btn} onClick={submitHandler}>
            가입하기
          </button>
        </div>
      </form>
    </>
  );
};

export default signup;
