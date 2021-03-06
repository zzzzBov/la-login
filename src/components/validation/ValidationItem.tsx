import React, { FC } from "react";

export interface IValidationItemProps {
  valid: boolean
}

export const ValidationItem: FC<IValidationItemProps> = ({
  children,
  valid
}) => (
  <li className={`ValidationItem ValidationItem-${valid ? 'valid' : 'invalid'}`}>
    {valid ? (
      <span role='img' aria-label='checked'><span aria-hidden='true'>✔</span></span>
    ) : (
      <span role='img' aria-label='unchecked'><span aria-hidden='true'>✖</span></span>
    ) }
    { ' ' }
    {valid ? (
      <s>{ children }</s>
    ) : (
      <>{ children }</>
    )}
  </li>
)
