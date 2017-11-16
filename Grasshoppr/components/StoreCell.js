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
import Icon from '../Icon';
import { Actions } from 'react-native-router-flux';

const Header = (props) => (
  <View
    style={{paddingVertical: 10}}
  >
    <View
      style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%'}}
    >
      <Text
        style={styles.title}
      >
        {props.name}
      </Text>
      <Text
        style={styles.text}
      >
        {props.distance} miles away
      </Text>
    </View>
    <View
      style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%'}}
    >
      <Text
        style={styles.text}
      >
        {props.location}
      </Text>
      <Text
        style={styles.quantityText}
      >
        {props.quantity} grams
      </Text>
    </View>
  </View>
)

const Footer = (props) => (
  <View
    style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', width: '100%', paddingTop: 20 }}
  >
    <Text
      style={styles.footerText}
    >
      <Icon
        name="Heart"
        height="20"
        width="20"
      /> {props.likes} likes
    </Text>
    <Text
      style={styles.footerText}
    >
      {props.claims} claims
    </Text>
    <Text
      style={styles.footerText}
    >
      {props.stock}
    </Text>
  </View>
)

const Body = (props) => (
  <View
    style={{ alignItems: 'flex-end', flexDirection: 'row', paddingVertical: 0, width: '100%' }}
  >
    <Image
      source={require('../assets/bluedream.png')}
      style={{width: '35%'}}
    />
    <View
      style={{ justifyContent: 'space-between', flexDirection: 'row', paddingVertical: 0, width: '65%', height: '100%' }}
    >
      <View
        style={{width: '40%', marginLeft: '5%', justifyContent: 'space-between'}}
      >
        <Text
          style={styles.text}
        >
          {props.strain}
        </Text>
        <Text
          style={styles.text}
        >
          THC: {props.THC}%
        </Text>
        <Text
          style={styles.text}
        >
          CBD: {props.CBD}%
        </Text>
        <Text
          style={styles.text}
        >
          CBN: {props.CBN}%
        </Text>
        <Text>
          {props.type}
        </Text>
      </View>
      <View
        style={{width: '50%', alignItems: 'flex-end', justifyContent: 'space-between', flexDirection: 'column'}}
      >
        <Text
          style={{textDecorationLine: 'line-through', color: '#777'}}
        >
          {props.prevValue}
        </Text>
        <Text
          style={styles.valueText}
        >
          ${props.value}
        </Text>
        <Button
          style={{height: 50, width: '100%'}}
          block success
          onPress={() => Actions.deal()}
        >
          <Text style={{color: 'white'}}>GET</Text>
        </Button>
      </View>
    </View>
  </View>
)

const StoreCell = (props) => (
  <Cell
    {...props}
    contentContainerStyle={{ alignItems: 'flex-start', height: 'auto', paddingVertical: 10 }}
    cellContentView={
      <View
        style={{ alignItems: 'flex-start', flexDirection: 'column', paddingVertical: 0, width: '100%' }}
      >
        <Header {...props}/>
        <Body {...props}/>
        <Footer {...props}/>
      </View>
    }
  />
);

const styles = StyleSheet.create({
  title: {
    color: '#5F5F6B',
    fontFamily: 'Avenir',
    fontSize: 21,
    fontWeight: '700'
  },
  text: {
    color: '#888',
    fontFamily: 'Avenir-Medium',
    fontSize: 14,
    fontWeight: '100'
  },
  quantityText: {
    color: '#5F5F6B',
    fontFamily: 'Avenir-Heavy',
    fontSize: 17,
    fontWeight: '700'
  },
  crossed: {
    color: '#5F5F6B',
    textDecorationLine: 'line-through'
  },
  footerText: {
    color: '#5F5F6B',
    fontFamily: 'Avenir',
    fontSize: 18,
    fontWeight: '600'
  },
  valueText: {
    color: '#5F5F6B',
    fontFamily: 'Avenir',
    fontSize: 22,
    fontWeight: '900'
  }
});

export default StoreCell;
