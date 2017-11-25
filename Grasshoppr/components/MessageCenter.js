import React from 'react'
import {
  Platform,
  StyleSheet,
  TextInput,
  View } from 'react-native';
import {
    Content,
    List,
    ListItem,
    Text,
    Left,
    Body,
    Right,
    Thumbnail,
    Header,
    Tab,
    Tabs
  } from 'native-base';
import Icon from '../Icon';
import PageLayout from './PageLayout'

const LatestMessages = () => (
  <List>
    <ListItem icon onPress={()=>{Actions.profile()}}>
      <Left>
        { (Platform.OS === 'ios') ? <Icon  name="Store" width={20} height={20}/> : <Text></Text>}
      </Left>
      <Body>
        <Text>Terrapentine Care Station</Text>
      </Body>
    </ListItem>
  </List>
)

const MessageCenter = () => (
  <PageLayout>
    <Content>
      <Tabs initialPage={0}>
        <Tab heading="Latest">
          <LatestMessages/>
        </Tab>
        <Tab heading="Nearby">
          <LatestMessages/>
        </Tab>
      </Tabs>
    </Content>
  </PageLayout>
)

export default MessageCenter
