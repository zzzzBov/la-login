import React from 'react'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs'
import { Page, LoginForm, RegistrationForm } from './components'

export interface IAppProps {

}

export const App: React.FC<IAppProps> = () => {

  return (
    <Page>
      <Tabs className='Tabs'>
        <TabList className='TabList'>
          <Tab className='Tab'>Log in</Tab>
          <Tab className='Tab'>Register</Tab>
        </TabList>
        <TabPanels className='TabPanels'>
          <TabPanel className='TabPanel'>
            <h1>Log In</h1>
            <LoginForm />
          </TabPanel>
          <TabPanel className='TabPanel'>
            <h1>Register</h1>
            <RegistrationForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Page>
  )
}
