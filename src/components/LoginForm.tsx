import React from 'react'

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

export interface ILoginFormProps { }

console.group('TODO: LoginForm')
console.log('handle `onSubmit`')
console.groupEnd()

export const LoginForm: React.FC<ILoginFormProps> = () => {
  const username = useField({
    required
  }, '')

  const password = useField({
    required
  }, '')

  return (
    <form className='LoginForm' method='POST'>
      <div className='LoginForm_username'>
        <TextField
          id='login-username'
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
