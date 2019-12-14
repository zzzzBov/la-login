import React, { FC } from 'react'

export interface ISubmitButtonProps { }

export const SubmitButton: FC<ISubmitButtonProps> = ({
  children
}) => (
  <button className='SubmitButton' type='submit'>
    { children }
  </button>
)
