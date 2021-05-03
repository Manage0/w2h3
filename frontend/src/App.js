import React, { useEffect, useState } from 'react' 
import axios from 'axios'
import Main from './mainPage'
import PublicData from './publicData'
import MembersNDues from './MembersNDues'
import SensitveData from './SensitiveData'
import NextMeeting from './NextMeeting'
import {PrivateRoute} from './PrivateRoute'
import { Redirect, Route, Switch } from "react-router-dom";

import './App.css'
import Gallery from './Gallery'

function App()  {
  const [connected, setConnected] = useState(false)
  const [error, setError] = useState()
  const [loggedIn, setLoggedIn] = useState(false)

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
  },[])

  return (
    <Switch>
     <PrivateRoute exact path="/membersndues" component={MembersNDues}/>
     <PrivateRoute exact path="/sensitivedata" component={SensitveData}/>
     <PrivateRoute exact path="/nextmeeting" component={NextMeeting}/>
     <PrivateRoute exact path="/gallery" component={Gallery}/>
      <Route exact path="/">
            <Main />
      </Route>
      <Route exact path="/public">
            <PublicData />
      </Route>
      <Redirect to='/'/>
    </Switch>
  );
}

export default App
