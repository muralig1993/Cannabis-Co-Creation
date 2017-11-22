import React from 'react'
import {
  StyleSheet
 } from 'react-native';
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
    Header
  } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Icon from '../Icon';

const Sidebar = () => (
  <Container>
    <Content
      style={styles.navbarStyle}
    >
      <List>
        <Header>
        </Header>
        <ListItem icon onPress={()=>{Actions.stream()}}>
          <Left>
            <Icon name="Home" width={20} height={20}/>
          </Left>
          <Body>
            <Text
              style={styles.text}
            >Home</Text>
          </Body>
        </ListItem>
        <ListItem icon onPress={()=>{Actions.profile()}}>
          <Left>
            <Icon name="Person" width={20} height={20}/>
          </Left>
          <Body>
            <Text
              style={styles.text}
            >Profile</Text>
          </Body>
        </ListItem>
        <ListItem icon onPress={()=>{Actions.messageCenter()}}>
          <Left>
            <Icon name="Message" width={20} height={20}/>
          </Left>
          <Body>
            <Text
              style={styles.text}
            >Message Center</Text>
          </Body>
        </ListItem>
        <ListItem icon onPress={()=>{Actions.suggestions()}}>
          <Left>
            <Icon name="Suggestions" width={20} height={20}/>
          </Left>
          <Body>
            <Text
              style={styles.text}
            >Feedback & Suggestions</Text>
          </Body>
        </ListItem>
      </List>
    </Content>
  </Container>
)

const styles = StyleSheet.create({
  text: {
    color: '#5F5F6B',
    fontFamily: 'Avenir',
    fontSize: 18
  },
  navbarStyle: {
    backgroundColor: 'white',
    height: 70
  }
})

export default Sidebar
