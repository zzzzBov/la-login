import React, { useCallback, useReducer } from 'react'

import {
  PasswordField,
  SubmitButton,
  TextField
} from './fields'

import {
  loginReducer,
  updatePassword,
  updateUsername
} from '../rx'

export interface ILoginFormProps { }

export const LoginForm: React.FC<ILoginFormProps> = () => {
  const [
    {
      username,
      password
    },
    dispatch
  ] = useReducer(loginReducer, {
    username: '',
    password: ''
  })

  const onUsernameChange = useCallback((username) => {
    dispatch(updateUsername(username))
  }, [dispatch])

  const onPasswordChange = useCallback((password) => {
    dispatch(updatePassword(password))
  }, [dispatch])

  return (
    <form className='LoginForm' method='POST'>
      <div className='LoginForm_username'>
        <TextField
          id='login-username'
          label='Username'
          name='username'
          onChange={onUsernameChange}
          value={username}
        />
      </div>
      <div className='LoginForm_password'>
        <PasswordField
          id='login-password'
          label='Password'
          name='password'
          onChange={onPasswordChange}
          value={password}
        />
      </div>
      <div className='LoginForm_submit'>
        <SubmitButton>Log In</SubmitButton>
      </div>
    </form>
  )
}
