import React from 'react'

export interface IPageProps {

}

export const Page: React.FC<IPageProps> = ({
  children
}) => (
  <div className='Page'>
    {children}
  </div>
)
