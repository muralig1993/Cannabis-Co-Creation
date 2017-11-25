import React from 'react'
import {
  StyleSheet,
  TextInput,
  ScrollView,
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
import PageLayout from './PageLayout'
import SuggestionCell from './SuggestionCell'

const Suggestions = () => (
  <PageLayout>
      <Container
      contentContainerStyle={{width: '100%', alignItems: 'center', justifyContent: 'space-around'}}
      >
        <ScrollView
        contentContainerStyle={{width: '100%', alignItems: 'center', justifyContent: 'space-around'}}
        >
          <List
            style={{width: '100%', alignItems: 'center', justifyContent: 'space-around'}}
          >
            <SuggestionCell question={"Rate your experience with our app."}/>
            <SuggestionCell question={"How do you like the features on this app."}/>
            <SuggestionCell question={"Is this app easy to use?"}/>
            <SuggestionCell question={"Did you experience any bugs?"}/>
            <SuggestionCell question={"Is the design fitting to your needs?"}/>
            <SuggestionCell question={"Was it easy to shop?"}/>
          </List>
        </ScrollView>
      </Container>
  </PageLayout>
)

export default Suggestions
