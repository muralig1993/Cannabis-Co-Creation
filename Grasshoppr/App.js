import React from 'react'
import { Router, Scene } from 'react-native-router-flux';
// import { Card, Navigation } from 'react-router-navigation'
import CreateProfile from './CreateProfile'
import Login from './Login'

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="scarlet"
          component={Login}
          title="Scarlet"
          initial
        />
        <Scene key="scarlet"
          component={CreateProfile}
          title="Scarlet"
          initial
        />
      </Scene>
    </Router>
  );
}

export default App;
