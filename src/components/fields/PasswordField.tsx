import React, { FC, FormEvent, useCallback } from 'react'

export interface IPasswordFieldProps {
  id: string
  invalid?: boolean
  label: string
  name: string
  onBlur?(): void
  onChange (value: string): void
  value: string
}

export const PasswordField: FC<IPasswordFieldProps> = ({
  children,
  id,
  invalid,
  label,
  name,
  onBlur,
  onChange,
  value
}) => {
  const internalOnChange = useCallback((e: FormEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value)
  }, [onChange])

  const mod =
    invalid
      ? 'invalid'
      : 'valid'

  return (
    <div className={`PasswordField PasswordField-${mod}`} id={id}>
      <label className={`PasswordField_label PasswordField-${mod}_label`} htmlFor={`${id}_input`}>
        { label }:
      </label>
      { children && (
        <div className={`PasswordField_description PasswordField-${mod}_description`} id={`${id}_description`} aria-live='polite'>
          { children }
        </div>
      )}
      <input
        aria-describedby={children ? `${id}_description` : undefined}
        className={`PasswordField_input PasswordField-${mod}_input`}
        id={`${id}_input`}
        name={name}
        onBlur={onBlur}
        onChange={internalOnChange}
        type='password'
        value={value}
      />
    </div>
  )
}
