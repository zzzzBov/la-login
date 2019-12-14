import React, { FC, FormEvent, useCallback } from 'react'

export interface IPasswordFieldProps {
  id: string
  label: string
  name: string
  onChange(value: string): void
  value: string
}

export const PasswordField: FC<IPasswordFieldProps> = ({
  children,
  id,
  label,
  name,
  onChange,
  value
}) => {
  const internalOnChange = useCallback((e: FormEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value)
  }, [onChange])

  return (
    <div className='PasswordField' id={id}>
      <label className='PasswordField_label' htmlFor={`${id}_input`}>{ label }</label>
      { children && (
        <div className='PasswordField_description' id={`${id}_description`}>
          { children }
        </div>
      )}
      <input
        aria-describedby={children ? `${id}_description` : undefined}
        id={`${id}_input`}
        name={name}
        onChange={internalOnChange}
        type='password'
        value={value}
      />
    </div>
  )
}
