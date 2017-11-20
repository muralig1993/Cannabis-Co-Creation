import React from 'react'
import { StyleSheet, Text, TextInput, View, Platform } from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Deals from './Deals'
import Stores from './Stores'
import Discover from './Discover'

const Stream = () => (
  <Container>
      <Tabs initialPage={0}>
        <Tab heading="Deals">
          <Deals />
        </Tab>
        <Tab heading="Stores">
          <Stores />
        </Tab>
        <Tab heading="Discover">
          <Discover />
        </Tab>
      </Tabs>
  </Container>
)

export default Stream
