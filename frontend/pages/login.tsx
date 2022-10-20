import React, { useReducer, useState } from 'react'
import { useRouter } from 'next/router'
import Input from '../components/Input'
import Button from '../components/Button'
import styles from '../styles/login.module.scss'
import axios from 'axios'

type LoginState = {
  id: string
  password: string
}

type Action = { type: string; value: string }

const InitialFormData = {
  id: '',
  password: '',
}

function formReducer(state: LoginState, action: Action): LoginState {
  switch (action.type) {
    case 'id':
      return { ...state, id: action.value }
    case 'password':
      return { ...state, password: action.value }
    default:
      throw new Error()
  }
}

const Login = () => {
  const router = useRouter()
  const [state, dispatch] = useReducer(formReducer, InitialFormData)

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: e.target.name, value: e.target.value })
  }

  const submitHandler = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    try {
      const result = await axios.post(
        'http://localhost:9091/api/auth/login',
        state,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
          withCredentials: true,
        }
      )
      if (result.status === 201) router.push('/category')
      return 'success'
    } catch (error) {
      console.log('error occured at login', error)
    }
  }

  return (
    <>
      <form className={styles.form} action="submit">
        <div className={styles.title__wrapper}>
          <h1>Login</h1>
        </div>

        <Input type="text" label="아이디" onChange={inputHandler} name="id" />

        <Input
          type="password"
          label="비밀번호"
          onChange={inputHandler}
          name="password"
        />

        <div className={styles.btn__wrapper}>
          <Button content="로그인" onClick={submitHandler} />
        </div>
      </form>
    </>
  )
}

export default Login
