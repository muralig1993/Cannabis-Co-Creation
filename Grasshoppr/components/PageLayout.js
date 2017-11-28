import React, { Component } from 'react';
import {
  Platform
} from 'react-native'
import {
  Drawer,
  Container,
  Content,
  Text,
  Card,
  Body,
  Button,
  Title,
  CardItem,
  Header,
  Left,
  Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Sidebar from './Sidebar';

export default class PageLayout extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    console.log(this.props.transparent);
    return(
      <Container
      >
        <Header hasTabs={!!this.props.hasTabs}>
          <Left
          >
            <Button transparent onPress={() => Actions.pop()}>
              <Icon  name='md-close' />
            </Button>
          </Left>
          <Body>
            <Title>{ this.props.title }</Title>
          </Body>
        </Header>
        {this.props.children}
      </Container>
    );
  }
}
