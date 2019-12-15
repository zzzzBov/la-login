import React from 'react'

export interface IPageProps { }

export const Page: React.FC<IPageProps> = ({
  children
}) => (
  <main className='Page'>
    {children}
  </main>
)
