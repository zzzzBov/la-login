import React, { FC, FormEvent, useCallback } from 'react'

export interface ITextFieldProps {
  id: string
  invalid?: boolean,
  label: string
  name: string
  onBlur?(): void
  onChange(value: string): void
  value: string
}

export const TextField: FC<ITextFieldProps> = ({
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
    <div className={`TextField TextField-${mod}`} id={id}>
      <label className={`TextField_label TextField-${mod}_label`} htmlFor={`${id}_input`}>
        { label }:
      </label>
      { children && (
        <div className={`TextField_description TextField-${mod}_description`} id={`${id}_description`} aria-live='polite'>
          { children }
        </div>
      )}
      <input
        aria-describedby={children ? `${id}_description` : undefined}
        className={`TextField_input TextField-${mod}_input`}
        id={`${id}_input`}
        name={name}
        onBlur={onBlur}
        onChange={internalOnChange}
        type='text'
        value={value}
      />
    </div>
  )
}
