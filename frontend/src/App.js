import React, { useEffect, useState } from 'react' 
import axios from 'axios'
import Main from './mainPage'
import PublicData from './publicData'
import { Redirect, Route, Switch } from "react-router-dom";

import './App.css'

function App()  {
  const [connected, setConnected] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    const getData = async () => {
      try {
        const {
          data: { connection },
        } = await axios.get('/api/heartbeat')
        setConnected(connection)
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
    </Switch>
  );
}

export default App
