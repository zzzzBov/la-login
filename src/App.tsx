import React from 'react'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs'
import { Page, LoginForm, RegistrationForm } from './components'

export interface IAppProps {

}

export const App: React.FC<IAppProps> = () => {

  return (
    <Page>
      <Tabs>
        <TabList>
          <Tab>Log in</Tab>
          <Tab>Register</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <h1>Log In</h1>
            <LoginForm />
          </TabPanel>
          <TabPanel>
            <h1>Register</h1>
            <RegistrationForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Page>
  )
}
