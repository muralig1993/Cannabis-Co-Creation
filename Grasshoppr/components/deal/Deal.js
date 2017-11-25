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
import PageLayout from '../PageLayout'

const Header = (props) => (
  <View
    style={{width: '100%', justifyContent: 'space-between', flexDirection: 'row'}}
  >
    <Text
    style={styles.title}
    >Blue Dream</Text>
    <Text
    style={styles.text}
    >3 grams</Text>
  </View>
)

const Body = (props) => (
  <View
    style={{width: '100%', justifyContent: 'space-between', flexDirection: 'row'}}
  >
    <Text
    style={styles.text}
    >Terrapentine Care Station</Text>
    <Text
    style={styles.text}
    >4 miles away</Text>
  </View>
)




const Footer = (props) => (
  <View
    style={{width: '100%', justifyContent: 'space-between', flexDirection: 'row'}}
  >
    <View
    style={{flexDirection: 'row', alignItems: 'center'}}
    >
      { (Platform.OS === 'ios') ? <Icon name="Heart" height="20" width="20"/> : <NativeIcon name="md-heart-outline" style={{fontSize: 14, color: '#5F5F6B'}}/>}
      <Text> 32 likes</Text>
    </View>
    <View
    style={{flexDirection: 'row', alignItems: 'center'}}
    >
      { (Platform.OS === 'ios') ? <Icon name="EmptyStar" height="20" width="20"/> : <NativeIcon name="ios-star-outline" style={{fontSize: 14, color: '#5F5F6B'}}/> }
      <Text> 33 Claims</Text>
    </View>
  </View>
)

const Deal = (props) => (
  <PageLayout>
    <View
      style={{width: '100%', height: 'auto'}}
    >
      <Image
        source={require('../../assets/deal.png')}
        resizeMode="cover"
      />
      <View
      style={{paddingHorizontal: '5%'}}
      >
      <Text>{props.key}</Text>
      <Header {...props}/>
      <Body {...props}/>
      <Footer {...props}/>
      </View>
    </View>
  </PageLayout>
)


const styles = StyleSheet.create({
  title: {
    color: '#5F5F6B',
    fontFamily: 'Avenir',
    fontSize: 21,
    fontWeight: '700'
  },
  text: {
    color: '#888',
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: '100'
  },
  buttonStyle: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 4,
    borderColor: '#351B40',
    borderRadius: 5,
  }
});

export default Deal
