import React from 'react'
import {
  StyleSheet,
  TextInput,
  View } from 'react-native';
import {
    Container,
    Content,
    List,
    ListItem,
    Text,
    Left,
    Body,
    Right,
    Thumbnail,
    Header,
    Radio
  } from 'native-base';
import Icon from '../Icon';
import Layout from './Layout'

const Suggestions = () => (
  <Layout>
    <Container>
      <List>
        <ListItem
        style={{flexDirection: 'column'}}
        >
          <Text>Rate your experience with Grasshoppr</Text>
          <View
            style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%'}}
          >
          <Radio selected={false} />
          <Radio selected={true} />
          <Radio selected={true} />
          <Radio selected={true} />
          <Radio selected={true} />
          </View>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Suggestions
