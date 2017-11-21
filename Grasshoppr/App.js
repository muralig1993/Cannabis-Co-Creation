import React from 'react'
import { Router, Scene, Actions } from 'react-native-router-flux';
import { StyleSheet, Text, Platform } from 'react-native';

import Deals from './components/stream/Deals'
import Stores from './components/stream/Stores'
import Discover from './components/stream/Discover'
import Stream from './components/stream/Stream'

import Profile from './components/Profile'
import EditProfile from './components/EditProfile'
import Login from './components/Login'
import Signup from './components/Signup'

import Deal from './components/Deal'
import Store from './components/Store'
import Sort from './components/Sort'
import Filter from './components/Filter'
import Modal from './components/Modal'
import Layout from './components/Layout'

import MessageCenter from './components/MessageCenter'
import Suggestions from './components/Suggestions'

import USERDATA from './data/user.json'

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
      <Router
        barButtonTextStyle={styles.barButtonTextStyle}
        barButtonIconStyle={styles.barButtonIconStyle}
      >
        <Scene key="root"
          title={this.state.currentScene}
          initial
        >
          <Scene
            key="login"
            component={Login}
            title="Grasshoppr"
            hideNavBar={true}
          />
          <Scene
            key="profile"
            component={() => <Profile {...USERDATA[0]}/>}
            title="Profile"
            hideNavBar
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
            key="deal"
            component={Deal}
            title="Deal"
            hideNavBar
          />
          <Scene
            key="store"
            component={Store}
            title="Store"
            hideNavBar
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
            hideNavBar
          />
          <Scene
            key="messageCenter"
            component={MessageCenter}
            hideNavBar={true}
          />
          <Scene
            key="suggestions"
            component={Suggestions}
            hideNavBar
          />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontFamily: 'Avenir',
    fontSize: 22
  },
  navbar: {
    ...Platform.select({
          ios: {
            height: 64,
          },
          android: {
            height: 54,
          },
        }),
  },
  barButtonTextStyle: {
    color: 'white'
  },
  barButtonIconStyle: {
    color: 'white'
  },
  navbarStyle: {
    backgroundColor: '#351B40',
    height: 30
  }
})
