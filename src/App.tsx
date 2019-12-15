import React, { useState, useCallback } from 'react'
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel
} from '@reach/tabs'

import {
  Greeting,
  LoginForm,
  Page,
  RegistrationForm
} from './components'

export interface IAppProps { }

export const App: React.FC<IAppProps> = () => {
  const [username, setUsername] = useState('')

  const [tab, setTab] = useState(0)

  const [loginMessage, setLoginMessage] = useState('')

  const onLogin = useCallback((username, password) => {
    if (username === 'level' && password === 'Access123') {
      setLoginMessage('')
      setUsername(username)
    } else {
      setLoginMessage('Your username or password was incorrect.')
    }
  }, [])

  const onRegister = useCallback((username, password) => {
    setUsername(username)
  }, [])
  
  return (
    <Page>
      { username ? (
        <Greeting username={username} onLogOut={() => setUsername('')} />
      ) : (
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
              <LoginForm onSubmit={onLogin}>
                {loginMessage && (
                  <p>{loginMessage}</p>
                )}
              </LoginForm>
            </TabPanel>
            <TabPanel className='TabPanel'>
              <h1>Register</h1>
              <RegistrationForm onSubmit={onRegister} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      ) }
    </Page>
  )
}
