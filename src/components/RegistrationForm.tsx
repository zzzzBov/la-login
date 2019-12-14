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
  matches,
  required
} from '../validators'

export interface IRegistrationFormProps { }

export const RegistrationForm: React.FC<IRegistrationFormProps> = () => {
  const username = useField({
    available (value: string) {
      return value !== 'level'
    },
    required
  }, '')

  const password = useField({
    lowercase: matches(/[a-z]/),
    number: matches(/\d/),
    required,
    uppercase: matches(/[A-Z]/)
  }, '')

  return (
    <form className='RegistrationForm' method='POST'>
      <div className='RegistrationForm_username'>
        <TextField
          id='registration-username'
          label='Username'
          name='username'
          onChange={username.set}
          value={username.value}
        />
      </div>
      <div className='RegistrationForm_password'>
        <PasswordField
          id='registration-password'
          label='Password'
          name='password'
          onChange={password.set}
          value={password.value}>
          <p>Passwords must include at least one of each of the following:</p>
          <ul>
            <li>uppercase letters</li>
            <li>lowercase letters</li>
            <li>numbers</li>
          </ul>
        </PasswordField>
      </div>
      <div className='RegistrationForm_submit'>
        <SubmitButton>Register</SubmitButton>
      </div>
    </form>
  )
}
