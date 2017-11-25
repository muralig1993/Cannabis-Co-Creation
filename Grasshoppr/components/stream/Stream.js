import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Platform } from 'react-native';
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Drawer,
  withNavigation
 } from 'native-base';
import Deals from './Deals'
import Stores from './Stores'
import Discover from './Discover'
import Layout from '../Layout'

class Stream extends Component {
  render() {
    return (
      <Layout>
          <Container>
              <Tabs initialPage={0}>
                <Tab heading="Deals">
                  <ScrollView>
                    <Deals />
                  </ScrollView>
                </Tab>
                <Tab heading="Stores">
                  <ScrollView>
                    <Stores />
                  </ScrollView>
                </Tab>
                <Tab heading="Discover">
                  <Discover />
                </Tab>
              </Tabs>
          </Container>
      </Layout>
    )
  }
}

export default Stream
