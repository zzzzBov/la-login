import React from 'react'

import {
  PasswordField,
  SubmitButton,
  TextField
} from './fields'

import {
  ValidationItem,
  ValidationList
} from './validation'

import {
  useField
} from '../hooks'

import {
  matches,
  maxLength,
  minLength
} from '../validators'

export interface IRegistrationFormProps { }

console.group('TODO: RegistrationForm')
console.log('handle `onSubmit` in RegistrationForm')
console.log('add Password Confirmation field')
console.groupEnd()

export const RegistrationForm: React.FC<IRegistrationFormProps> = () => {
  const username = useField({
    available (value: string) {
      return value !== 'level'
    },
    max: maxLength(20),
    min: minLength(8),
  }, '')

  const password = useField({
    lowercase: matches(/[a-z]/),
    max: maxLength(100),
    min: minLength(8),
    numbers: matches(/\d/),
    uppercase: matches(/[A-Z]/)
  }, '')

  const confirmation = useField({
    matches (value) {
      return value === password.value
    }
  }, '')

  return (
    <form className='RegistrationForm' method='POST'>
      <div className='RegistrationForm_username'>
        <TextField
          id='registration-username'
          invalid={username.error}
          label='Username'
          name='username'
          onBlur={username.touch}
          onChange={username.set}
          value={username.value}
        >
          <ValidationList>
            <ValidationItem valid={username.validation.min && username.validation.max}>
              Usernames must be between 8 and 20 characters long.
            </ValidationItem>
          </ValidationList>
          {!username.validation.available && (
            <p>That username is not available.</p>
          )}
        </TextField>
      </div>
      <div className='RegistrationForm_password'>
        <PasswordField
          id='registration-password'
          invalid={password.error}
          label='Password'
          name='password'
          onBlur={password.touch}
          onChange={password.set}
          value={password.value}>
          <p>Passwords must:</p>
          <ValidationList>
            <ValidationItem valid={password.validation.uppercase}>
              include an uppercase letter
            </ValidationItem>
            <ValidationItem valid={password.validation.lowercase}>
              include a lowercase letter
            </ValidationItem>
            <ValidationItem valid={password.validation.numbers}>
              include a number
            </ValidationItem>
            <ValidationItem valid={password.validation.min}>
              be at least 8 characters long
            </ValidationItem>
          </ValidationList>
        </PasswordField>
      </div>
      <div className='RegistrationForm_confirmation'>
        <PasswordField
          id='registration-confirmation'
          invalid={confirmation.error}
          label='Confirm Password'
          name='confirm'
          onBlur={confirmation.touch}
          onChange={confirmation.set}
          value={confirmation.value}>
          <ValidationList>
            <ValidationItem valid={confirmation.validation.matches}>
              Password and confirmation must match
            </ValidationItem>
          </ValidationList>
        </PasswordField>
      </div>
      <div className='RegistrationForm_submit'>
        <SubmitButton>Register</SubmitButton>
      </div>
    </form>
  )
}
