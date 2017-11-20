import React from 'react'
import { Router, Scene, Actions } from 'react-native-router-flux';
// import { Card, Navigation } from 'react-router-navigation'
// import Profile from './Components/Profile'
import { StyleSheet, Text, Platform } from 'react-native';
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
        initial
        titleStyle={{color: 'white'}}
        navigationBarStyle={{ backgroundColor: '#351B40', paddingVertical: 10 }}
        leftButtonImage={require('./assets/store.png')}
        >
          <Scene
            key="login"
            component={Login}
            title="Grasshoppr"

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
            component={Stream}
          >
          </Scene>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    ...Platform.select({
          ios: {
            height: 64,
          },
          android: {
            height: 54,
          },
        }),
  }
})
