import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native';
import {
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
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default class SuggestionCell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 1,
      radio_props: [
        {label: 'param1', value: 0 },
        {label: 'param2', value: 1 },
        {label: 'param3', value: 2 },
        {label: 'param4', value: 3 },
        {label: 'param5', value: 4 },
        {label: 'param6', value: 5 }
      ]
    }

  }
  render() {
    return (
      <ListItem
      style={styles.container}
      >
        <Text>{this.props.question}</Text>
        <View
          style={styles.radioButtons}
        >
        <RadioForm
          radio_props={this.state.radio_props}
          initial={0}
          style={{width: '100%', flexDirection: 'row'}}
          onPress={(value) => {this.setState({value})}}
        />
        </View>
      </ListItem>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  radioButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20
  }
});
