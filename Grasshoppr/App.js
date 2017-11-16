import React from 'react'
import { Router, Scene, Actions } from 'react-native-router-flux';
// import { Card, Navigation } from 'react-router-navigation'
// import Profile from './Components/Profile'
import { StyleSheet, Text } from 'react-native';
import EditProfile from './components/EditProfile'
import Discover from './components/Discover'
import Deals from './components/Deals'
import Stores from './components/Stores'
import Deal from './components/Deal'
import Store from './components/Store'
import Sort from './components/Sort'
import Filter from './components/Filter'
import Stream from './components/Stream'
import Login from './components/Login'
import Signup from './components/Signup'
import Modal from './components/Modal'

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
  )
}

export default class App extends React.Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      currentScene: this.props.title
    }
  }
  render() {
    return (
      <Router>
        <Scene key="root"
        title={this.state.currentScene}
        >
          <Scene
            key="login"
            component={Login}
            title="Grasshoppr"
            initial
          />
          <Scene
            key="editprofile"
            component={EditProfile}
            title="Create Profile"
          />
          <Scene
            key="signup"
            component={Signup}
            title="Create Profile"
          />
          <Scene
            key="modal"
            component={Modal}
            title="Modal"
            direction="vertical"
            hideNavBar
          />
          <Scene
            key="stream"
            tabs
            tabBarStyle={{ backgroundColor: '#FFFFFF'}}
          >
            <Scene key="deals" title="Deals" icon={TabIcon}>
              <Scene key="d"
                component={Deals}
              />
            </Scene>
            <Scene key="stores" title="Stores" icon={TabIcon}>
              <Scene key="s"
                component={Stores}
              />
            </Scene>
            <Scene key="discover" title="Discover" icon={TabIcon}>
              <Scene key="d"
                component={Discover}
              />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
}
