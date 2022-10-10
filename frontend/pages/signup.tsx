import axios from 'axios'
import React, { useReducer } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import styles from '../styles/signup.module.scss'

type LoginState = {
  id: string
  password: string
  password__confirm: string
  email: string
}

type Action = { type: string; value: string }

type InputType = HTMLInputElement & {
  name: string
}

const InitialFormData = {
  id: '',
  password: '',
  password__confirm: '',
  email: '',
}

function reducer(state: LoginState, action: Action): LoginState {
  console.log('Action would be', action)
  switch (action.type) {
    case 'id':
      return { ...state, id: action.value }
    case 'password':
      return { ...state, password: action.value }
    case 'password__confirm':
      return { ...state, password__confirm: action.value }
    case 'email':
      return { ...state, email: action.value }
    default:
      throw new Error()
  }
}

const Signup = () => {
  const [state, dispatch] = useReducer(reducer, InitialFormData)
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: e.target.name, value: e.target.value })
  }

  const submitHandler = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const { password__confirm, ...userData } = state
    const result = await axios.post(
      'http://localhost:9091/user/signup',
      userData,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    )
    console.log('result is ', result)
  }
  return (
    <>
      <form className={styles.form} action="submit">
        <div className={styles.title__wrapper}>
          <h1>회원가입</h1>
        </div>

        <Input type="text" label="아이디" onChange={inputHandler} name="id" />

        <Input type="text" label="email" onChange={inputHandler} name="email" />

        <Input
          type="password"
          label="비밀번호"
          onChange={inputHandler}
          name="password"
        />

        <Input
          type="password"
          label="비밀번호 확인"
          onChange={inputHandler}
          name="password__confirm"
        />

        <div className={styles.btn__wrapper}>
          <Button content="회원가입" onClick={submitHandler} />
        </div>
      </form>
    </>
  )
}

export default Signup
