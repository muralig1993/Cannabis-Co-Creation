import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image } from 'react-native';
import Icon from '../../Icon';

const StoreFAQ = (props) => (
  <View>
    <StoreHeader/>
  </View>
)

const styles = StyleSheet.create({
  section: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  subSection: {
    width: '50%',
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
});

export default StoreFAQ
