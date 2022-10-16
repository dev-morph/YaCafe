import React, { useReducer } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Input from '../components/Input'
import Button from '../components/Button'
import styles from '../styles/signup.module.scss'

type LoginState = {
  id: string
  password: string
  password__confirm: string
  email: string
  isIdChecked: boolean
}

type Action = { type: string; value: string | boolean }

const InitialFormData = {
  id: '',
  password: '',
  password__confirm: '',
  email: '',
  isIdChecked: false,
}

function reducer(state: LoginState, action: Action): LoginState {
  console.log('Action would be', action)
  switch (action.type) {
    case 'id':
      //아이디를 변경하는 경우, idCheck다시 하도록 isIdChecked값을 false로 설정
      return { ...state, id: action.value as string, isIdChecked: false }
    case 'password':
      return { ...state, password: action.value as string }
    case 'password__confirm':
      return { ...state, password__confirm: action.value as string }
    case 'email':
      return { ...state, email: action.value as string }
    case 'isIdChecked':
      return { ...state, isIdChecked: action.value as boolean }
    default:
      throw new Error()
  }
}

const Signup = () => {
  const router = useRouter()

  const [state, dispatch] = useReducer(reducer, InitialFormData)
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: e.target.name, value: e.target.value })
  }

  const checkIdDuplication = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const { id } = state
    try {
      const result = await axios.get(`http://localhost:9091/user/${id}`)
      if (result.data.code === 204) {
        dispatch({ type: 'isIdChecked', value: true })
      }
      alert(result.data.message)
      return
    } catch (error) {
      console.log('error occured at checkIdDuplication', error)
    }
  }

  const submitHandler = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const { isIdChecked, password__confirm, ...userData } = state

    if (!isIdChecked) {
      alert('ID 중복체크를 해주세요.')
      return
    }

    const result = await axios.post(
      'http://localhost:9091/user/signup',
      userData,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    )
    router.push('/category')
  }
  return (
    <>
      <form className={styles.form} action="submit">
        <div className={styles.title__wrapper}>
          <h1>회원가입</h1>
        </div>

        <Input type="text" label="아이디" onChange={inputHandler} name="id" />
        <Button content="아이디 중복 체크" onClick={checkIdDuplication} />
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
