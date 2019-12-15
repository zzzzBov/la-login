import React, { useState, useCallback } from 'react'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs'
import { Page, LoginForm, RegistrationForm } from './components'

export interface IAppProps {

}

console.group('TODO: App')
console.log('add `@reach/router`')
console.log('handle Login & Registration form submissions')
console.groupEnd()

export const App: React.FC<IAppProps> = () => {
  const [tab, setTab] = useState(0)

  const onLogin = useCallback((username, password) => {
    console.log(`Login as ${username} using ${password}`)
  }, [])

  return (
    <Page>
      <Tabs className='Tabs' index={tab} onChange={setTab}>
        <TabList className='TabList'>
          <Tab className={`Tab Tab-${tab === 0 ? 'active' : 'inactive'}`}>
            Log in
          </Tab>
          <Tab className={`Tab Tab-${tab === 1 ? 'active' : 'inactive'}`}>
            Register
          </Tab>
        </TabList>
        <TabPanels className='TabPanels'>
          <TabPanel className='TabPanel'>
            <h1>Log In</h1>
            <LoginForm onSubmit={onLogin} />
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
