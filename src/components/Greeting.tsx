import React, { FC, useRef, useEffect } from 'react'

export interface IGreetingProps {
  onLogOut (): void
  username: string
}

export const Greeting: FC<IGreetingProps> = ({
  onLogOut,
  username
}) => {
  const heading = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (heading.current) {
      heading.current.focus()
    }
  }, [heading])

  return (
    <div className='Greeting'>
      <h1 ref={heading} tabIndex={-1}>Welcome {username}!</h1>
      <button className='Greeting_logOut' type='button' onClick={onLogOut}>Log Out</button>
    </div>
  )
}
