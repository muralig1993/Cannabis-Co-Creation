import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Image } from 'react-native';
import Icon from '../../Icon';
import StoreHeader from './StoreHeader'
import PageLayout from '../PageLayout'

const Store = (props) => (
  <PageLayout>
    <ScrollView>
      <StoreHeader/>
    </ScrollView>
  </PageLayout>
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

export default Store
