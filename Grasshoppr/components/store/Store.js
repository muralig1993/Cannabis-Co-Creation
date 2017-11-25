import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image } from 'react-native';
import Icon from '../../Icon';
import PageLayout from '../PageLayout'

const Header = (props) => (
  <View
    style={{width: '100%'}}
  >
    <View
      style={styles.section}
    >
      <Text
      style={styles.title}
      >Blue Dream</Text>
      <Text
      style={styles.text}
      >3 grams</Text>
    </View>
    <Section1 {...props}/>
    <Section2 {...props}/>
  </View>
)

const Section1 = (props) => (
  <View
    style={styles.section}
  >
    <Text
    style={styles.text}
    >Terrapentine Care Station</Text>
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
    style={styles.subsSection}
    >
      <View
        style={{flexDirection: 'row'}}
      >
        { (Platform.OS === 'ios') ? <Icon
          name="Heart"
          height="20"
          width="20"
        /> : <Text></Text>}
        <Text>32 likes</Text>
      </View>
    </View>
    <View
    style={styles.subSection}
    >
      <View
        style={{flexDirection: 'row'}}
      >
        { (Platform.OS === 'ios') ? <Icon
          name="EmptyStar"
          height="20"
          width="20"
        /> : <Text></Text>}
        <Text>33 Claims</Text>
      </View>
    </View>
  </View>
)


const Location = (props) => (
  <View
    style={{width: '100%'}}
  >
    <Text>Recreational Dispensary</Text>
    <Text>2300 Arapahoe Avenue</Text>
    <Text>Boulder, CO</Text>
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
  <PageLayout>
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
