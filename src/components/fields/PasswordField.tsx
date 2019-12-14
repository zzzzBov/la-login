import React, { FC, FormEvent, useCallback } from 'react'

export interface IPasswordFieldProps {
  id: string
  label: string
  name: string
  onBlur?(): void
  onChange (value: string): void
  value: string
}

export const PasswordField: FC<IPasswordFieldProps> = ({
  children,
  id,
  label,
  name,
  onBlur,
  onChange,
  value
}) => {
  const internalOnChange = useCallback((e: FormEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value)
  }, [onChange])

  return (
    <div className='PasswordField' id={id}>
      <label className='PasswordField_label' htmlFor={`${id}_input`}>
        { label }:
      </label>
      { children && (
        <div className='PasswordField_description' id={`${id}_description`}>
          { children }
        </div>
      )}
      <input
        aria-describedby={children ? `${id}_description` : undefined}
        className='PasswordField_input'
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
