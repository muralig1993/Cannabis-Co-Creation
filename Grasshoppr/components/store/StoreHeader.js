import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image } from 'react-native';
import Icon from '../../Icon';
import { Icon as NativeIcon } from 'native-base';
import Rating from '../Rating';

const Header = (props) => (
  <View
    style={{width: '100%'}}
  >
    <View style={styles.section}>
      <Text style={styles.title}>Terrapentine Care Station</Text>
      <Text style={[styles.text, styles.happyHoursText]}>Happy Hours</Text>
    </View>
    <Section1 {...props}/>
    <Section2 {...props}/>
  </View>
)

const Section1 = (props) => (
  <View
    style={styles.section}
  >
    <Rating/>
    <Text
    style={styles.text}
    >4 miles away</Text>
  </View>
)

const Section2 = (props) => (
  <View
    style={styles.section}
  >
    <View
    style={styles.subSection}
    >
      <View
        style={{flexDirection: 'row'}}
      >
        { (Platform.OS === 'ios') ? <Icon name="Heart" height="20" width="20"/> : <NativeIcon name="md-heart-outline" style={{fontSize: 20, color: '#5F5F6B'}}/>}
        <Text>32 likes</Text>
      </View>
    </View>
    <View
    style={styles.subSection}
    >
      <View
        style={{flexDirection: 'row'}}
      >
      { (Platform.OS === 'ios') ? <Icon name="EmptyStar" height="20" width="20"/> : <NativeIcon name="md-star-outline" style={{fontSize: 20, color: '#5F5F6B'}}/>}
        <Text>33 Claims</Text>
      </View>
    </View>
  </View>
)


const Location = (props) => (
  <View style={styles.sectionStyle}>
    <View style={{width: '100%', flexDirection: 'row'}}>
      <View style={{width: '80%'}}>
        <Text>Recreational Dispensary</Text>
        <Text>2300 Arapahoe Avenue</Text>
        <Text>Boulder, CO</Text>
      </View>
      <View style={{width: '20%'}}>
        <Text>
        {props.distance} miles away  { (Platform.OS === 'ios') ? <Icon  name="Nav" height="20" width="20"/> : <NativeIcon  name="md-pin" style={{fontSize: 16, color: '#5F5F6B'}}/>}
        </Text>
      </View>
    </View>
    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style={{flexDirection: 'row'}}>
        <NativeIcon  name="ios-call-outline" style={{fontSize: 16, color: '#5F5F6B'}}/>
        <Text> (720) 111 2222</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <NativeIcon  name="ios-mail-outline" style={{fontSize: 16, color: '#5F5F6B'}}/>
        <Text> store@recdispensary.com</Text>
      </View>
    </View>
  </View>
)

const Schedule = (props) => (
  <View
    style={{width: '100%'}}
  >
  </View>
)

const Links = (props) => (
  <View
    style={styles.section}
  >
  </View>
)

const Store = (props) => (
    <View
      style={{width: '100%'}}
    >
      <Image
        source={require('../../assets/store.png')}
        resizeMode="cover"
        style={{zIndex: -1}}
      />
      <View
      style={{paddingHorizontal: '5%'}}
      >
        <Text>{props.key}</Text>
        <Header {...props}/>
        <Location {...props}/>
        <Links {...props}/>
      </View>
    </View>
)

const styles = StyleSheet.create({
  title: {
    color: '#5F5F6B',
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: '700'
  },
  happyHoursText: {
    color: '#77BD81'
  },
  statusText: {
    color: '#77BD81'
  },
  section: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  subSection: {
    width: '50%',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  sectionStyle: {
    width: '100%',
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: '#5F5F6B'
  }
});

export default Store
