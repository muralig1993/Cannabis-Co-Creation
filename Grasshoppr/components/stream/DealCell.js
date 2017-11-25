import React from 'react'
import {
  Platform,
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
import Lightbox from 'react-native-lightbox';
import { Icon as NativeIcon } from 'native-base';

const Header = (props) => (
  <View
    style={{paddingVertical: 0, width: '100%'}}
  >
    <View
      style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', alignItems: 'center'}}
    >
      <Text
        style={styles.title}
      >
        {props.name}
      </Text>
      <Text
        style={styles.text}
      >
        {props.distance} mi.
      </Text>
    </View>
    <View
      style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%'}}
    >
      <Text
        style={[styles.text, styles.locationText]}
      >
        {props.location}
      </Text>
      <Text
        style={styles.text}
      >
        {props.type}
      </Text>
    </View>
    <View
      style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%'}}
    >
      <View
        style={{flexDirection: 'column'}}
      >
        <Text style={styles.text}>THC: {props.THC}%</Text>
        <Text style={styles.text}>CBD: {props.CBD}%</Text>
        <Text style={styles.text}>CBN: {props.CBN}%</Text>
      </View>
      <Text
        style={styles.crossed}
      >
        ${props.prevValue}
      </Text>
    </View>
    <View
      style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%'}}
    >
      <Text style={styles.text}>{props.strain}</Text>
      <Text style={styles.valueText}>${props.value}</Text>
    </View>
  </View>
)

const Footer = (props) => (
  <View
    style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', paddingTop: 20 }}
  >
    <View
    style={{width: '80%', flexDirection: 'row', justifyContent: 'space-around'}}
    >
      <Text
        style={styles.footerText}
      >
        <Text>{ (Platform.OS === 'ios') ? <Icon name="Heart" height="20" width="20"/> : <NativeIcon name="md-heart-outline" style={{fontSize: 20, color: '#5F5F6B'}}/>}</Text>
        <Text> {props.likes} likes</Text>
      </Text>
      <Text
        style={styles.footerText}
      >
        <Text>{ (Platform.OS === 'ios') ? <Icon name="EmptyStar" height="22" width="22"/> : <NativeIcon name="ios-star-outline" style={{fontSize: 20, color: '#5F5F6B'}}/>}</Text>
        <Text> {props.claims} claims</Text>
      </Text>
    </View>
    <View
    style={{flexDirection: 'row', alignItems: 'flex-start'}}
    >
      <Text
        style={styles.stockText}
      >
        {props.stock}
      </Text>
    </View>
  </View>
)

const Body = (props) => (
  <View
    style={{ alignItems: 'flex-start', flexDirection: 'row', paddingTop: 10, width: '100%', justifyContent: 'space-between' }}
  >
    <Image
      source={require('../../assets/bluedream.png')}
      resizeMode="cover"
      style={{height: '100%', width: '35%', borderRadius: 10}}
    />
    <View
      style={{ flexDirection: 'column', width: '62%'}}
    >
      <Header {...props}/>
      <View
        style={{ justifyContent: 'space-between', flexDirection: 'row', paddingTop: 10, width: '100%' }}
      >
        <View
          style={{ alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column', paddingVertical: 0, width: '50%' }}
        >
          <Text style={styles.quantityText}>{props.quantity} grams</Text>
        </View>
        <View
          style={{width: '50%', alignItems: 'flex-end', justifyContent: 'space-between', flexDirection: 'column', height: '100%'}}
        >
          <Button
            style={styles.buttonStyle}
            block success
            onPress={() => Actions.deal()}
          >
            <Text style={{color: 'black'}}>GET</Text>
          </Button>
        </View>
      </View>
    </View>
  </View>
)

const DealCell = (props) => (
  <Cell
    {...props}
    contentContainerStyle={{ alignItems: 'flex-start', height: 'auto', paddingVertical: 10 }}
    cellContentView={
      <View
        style={{ alignItems: 'flex-start', flexDirection: 'column', paddingVertical: 0, width: '100%' }}
      >
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
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: '100'
  },
  locationText: {
    width: '70%',
    paddingBottom: 5
  },
  quantityText: {
    color: '#5F5F6B',
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: '700'
  },
  crossed: {
    color: '#5F5F6B',
    textDecorationLine: 'line-through'
  },
  footerText: {
    color: '#5F5F6B',
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: '600',
    alignItems: 'center',
    width: '48%',
    justifyContent: 'space-around'
  },
  stockText: {
    color: '#5F5F6B',
    fontFamily: 'Avenir',
    fontSize: 12,
    fontWeight: '600'
  },
  valueText: {
    color: '#5F5F6B',
    fontFamily: 'Avenir',
    fontSize: 22,
    fontWeight: '900'
  },
  buttonStyle: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 4,
    borderColor: '#5F5F6B',
    borderRadius: 5,
  }
});

export default DealCell;
