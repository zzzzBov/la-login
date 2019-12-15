import React, { FC } from 'react'

export interface IValidationListProps {}

export const ValidationList: FC<IValidationListProps> = ({
  children
}) => (
  <ul className='ValidationList'>
    {children}
  </ul>
)
