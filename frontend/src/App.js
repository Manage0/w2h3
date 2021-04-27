import React, { useEffect, useState } from 'react' 
import axios from 'axios'
import Main from './mainPage'
import PublicData from './publicData'
import MembersNDues from './MembersNDues'
import SensitveData from './SensitiveData'
import { Redirect, Route, Switch } from "react-router-dom";

import './App.css'

function App()  {
  const [connected, setConnected] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    const getData = async () => {
      try {
        const {
          data: { connection, hbMess },
        } = await axios.get('/api/heartbeat')
        setConnected(connection)
        console.log(hbMess)
      } catch (error) {
        setError(error.message)
      }
    }
    getData()
  }, [])

  return (
    <Switch>
      <Route exact path="/">
            <Main />
      </Route>
      <Route exact path="/public">
            <PublicData />
      </Route>
      <Route exact path="/membersndues">
            <MembersNDues />
      </Route>
      <Route exact path="/sensitivedata">
            <SensitveData />
      </Route>
    </Switch>
  );
}

export default App
