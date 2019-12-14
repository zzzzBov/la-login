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
  maxLength,
  minLength,
  required
} from '../validators'

const Valid: React.FC<{valid:boolean}> = ({
  children,
  valid
}) => {
  return valid ? (
    <s>{children}</s>
  ) : (
    <>{children}</>
  )
}

export interface IRegistrationFormProps { }

export const RegistrationForm: React.FC<IRegistrationFormProps> = () => {
  const username = useField({
    available (value: string) {
      return value !== 'level'
    },
    max: maxLength(20),
    min: minLength(8),
    required
  }, '')

  const password = useField({
    lowercase: matches(/[a-z]/),
    max: maxLength(100),
    min: minLength(8),
    numbers: matches(/\d/),
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
          onBlur={username.touch}
          onChange={username.set}
          value={username.value}
        />
      </div>
      <div className='RegistrationForm_password'>
        <PasswordField
          id='registration-password'
          label='Password'
          name='password'
          onBlur={username.touch}
          onChange={password.set}
          value={password.value}>
          <p>Passwords must:</p>
          <ul>
            <li>
              <Valid valid={password.validation.uppercase}>
                include an uppercase letter
              </Valid>
            </li>
            <li>
              <Valid valid={password.validation.lowercase}>
                include a lowercase letter
              </Valid>
            </li>
            <li>
              <Valid valid={password.validation.numbers}>
                include a number
              </Valid>
            </li>
            <li>
              <Valid valid={password.validation.min}>
                be at least 8 characters long
              </Valid>
            </li>
          </ul>
        </PasswordField>
      </div>
      <div className='RegistrationForm_submit'>
        <SubmitButton>Register</SubmitButton>
      </div>
    </form>
  )
}
