import React, { FC } from 'react'

export interface IGreetingProps {
  onLogOut (): void
  username: string
}

export const Greeting: FC<IGreetingProps> = ({
  onLogOut,
  username
}) => {
  return (
    <div className='Greeting'>
      <h1>Welcome {username}!</h1>
      <button className='Greeting_logOut' type='button' onClick={onLogOut}>Log Out</button>
    </div>
  )
}
