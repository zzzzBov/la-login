import React, { useCallback, FormEvent } from 'react'

import {
  PasswordField,
  SubmitButton,
  TextField
} from './fields'

import {
  useField
} from '../hooks'

import {
  required
} from '../validators'

export interface ILoginFormProps {
  onSubmit (username: string, password: string): void
}

export const LoginForm: React.FC<ILoginFormProps> = ({
  onSubmit
}) => {
  const username = useField({
    required
  }, '')

  const password = useField({
    required
  }, '')

  const internalOnSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    username.touch()
    password.touch()

    if (username.valid && password.valid) {
      onSubmit(username.value, password.value)
    }
  }, [onSubmit, username, password])

  return (
    <form className='LoginForm' method='POST' onSubmit={internalOnSubmit}>
      <div className='LoginForm_username'>
        <TextField
          id='login-username'
          invalid={username.error}
          label='Username'
          name='username'
          onBlur={username.touch}
          onChange={username.set}
          value={username.value}
        >
          { username.dirty && !username.validation.required && (
            <p>Username is required</p>
          ) }
        </TextField>
      </div>
      <div className='LoginForm_password'>
        <PasswordField
          id='login-password'
          invalid={password.error}
          label='Password'
          name='password'
          onBlur={password.touch}
          onChange={password.set}
          value={password.value}
        >
          { password.dirty && !password.validation.required && (
            <p>Password is required</p>
          ) }
        </PasswordField>
      </div>
      <div className='LoginForm_submit'>
        <SubmitButton>Log In</SubmitButton>
      </div>
    </form>
  )
}
