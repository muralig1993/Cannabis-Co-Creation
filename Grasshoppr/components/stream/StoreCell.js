import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
import {
  Cell
} from 'react-native-tableview-simple';
import { Button } from 'native-base';
import Icon from '../../Icon';
import { Actions } from 'react-native-router-flux';

const Header = (props) => (
  <View
    style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', alignItems: 'center'}}
  >
    <Text
      style={styles.title}
    >{props.name}</Text>
    <Icon name="Nav" height="20" width="20"/>
  </View>
)

const Footer = (props) => (
  <View
    style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', alignItems: 'center'}}
  >
    <Text>{props.city}</Text>
    <Text>{props.type}</Text>
  </View>
)

const Rating = (props) => (
  <View
    style={{justifyContent: 'space-between', flexDirection: 'row', width: '40%', alignItems: 'center'}}
  >
  <Icon name="FilledStar" height="20" width="20"/>
  <Icon name="FilledStar" height="20" width="20"/>
  <Icon name="FilledStar" height="20" width="20"/>
  <Icon name="HalfStar" height="20" width="20"/>
  <Icon name="EmptyStar" height="20" width="20"/>
  </View>
)

const Section1 = (props) => (
  <View
    style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', alignItems: 'center'}}
  >
    <Rating {...props}/>
    <View>
      <Text>{props.distance} miles away</Text>
    </View>
  </View>
)

const Section2 = (props) => (
  <View
    style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', alignItems: 'center', paddingVertical: 10}}
  >
      <Text>{props.status}</Text>
      <Button
        style={styles.buttonStyle}
        onPress={() => Actions.store()}
      >
        <Text
          style={styles.buttonText}
        >View Menu</Text>
      </Button>
  </View>
)

const Body = (props) => (
  <View
    style={{ alignItems: 'flex-start', flexDirection: 'column', paddingVertical: 0, width: '65%', marginLeft: '5%' }}
  >
    <Header {...props}/>
    <Section1 {...props}/>
    <Section2 {...props}/>
    <Footer {...props}/>
  </View>
)

const StoreCell = (props) => (
  <Cell
    {...props}
    contentContainerStyle={{ alignItems: 'flex-start', height: 'auto', paddingVertical: 10 }}
    cellContentView={
      <View
        style={{ alignItems: 'center', flexDirection: 'row', paddingVertical: 0, width: '100%', justifyContent: 'space-between' }}
      >
        <Image
          source={require('../../assets/stores.png')}
          style={{width: 100, height: 100}}
          resizeMode="contain"
        />
        <Body {...props}/>
      </View>
    }
  />
);

const styles = StyleSheet.create({
  title: {
    color: '#5F5F6B',
    fontFamily: 'Avenir',
    fontSize: 18,
    fontWeight: '700'
  },
  buttonText: {
    color: '#5F5F6B',
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: '200'
  },
  buttonStyle: {
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderWidth: 4,
    borderColor: '#351B40',
    borderRadius: 5,
  }
});

export default StoreCell;
