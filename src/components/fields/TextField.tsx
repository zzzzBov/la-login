import React, { FC, FormEvent, useCallback } from 'react'

export interface ITextFieldProps {
  id: string
  label: string
  name: string
  onBlur?(): void
  onChange(value: string): void
  value: string
}

export const TextField: FC<ITextFieldProps> = ({
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
    <div className='TextField' id={id}>
      <label className='TextField_label' htmlFor={`${id}_input`}>
        { label }:
      </label>
      { children && (
        <div className='TextField_description' id={`${id}_description`}>
          { children }
        </div>
      )}
      <input
        aria-describedby={children ? `${id}_description` : undefined}
        className='TextField_input'
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
