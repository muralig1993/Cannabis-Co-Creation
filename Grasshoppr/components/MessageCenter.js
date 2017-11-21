import React from 'react'
import {
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
    Header
  } from 'native-base';
import Icon from '../Icon';
import Layout from './Layout'

const MessageCenter = () => (
  <Layout>
    <Content>
      <Header>
          <Text>Message Center</Text>
      </Header>
      <List>
        <ListItem icon onPress={()=>{Actions.profile()}}>
          <Left>
            <Icon name="Store" width={20} height={20}/>
          </Left>
          <Body>
            <Text>Terrapentine Care Station</Text>
          </Body>
        </ListItem>
      </List>
    </Content>
  </Layout>
)

export default MessageCenter
