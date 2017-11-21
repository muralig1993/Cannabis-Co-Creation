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
import Lightbox from 'react-native-lightbox';

const Header = (props) => (
  <View
    style={{paddingVertical: 0, width: '100%'}}
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
        style={styles.text}
      >
        {props.type}
      </Text>
    </View>
    <View
      style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%'}}
    >
      <Text style={styles.text}>THC: {props.THC}% CBD: {props.CBD}% CBN: {props.CBN}%</Text>
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
    style={{ alignItems: 'flex-end', justifyContent: 'space-between', flexDirection: 'row', width: '100%', paddingTop: 20 }}
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
      style={styles.stockText}
    >
      {props.stock}
    </Text>
  </View>
)

const Body = (props) => (
  <View
    style={{ alignItems: 'flex-end', flexDirection: 'row', paddingTop: 10, width: '100%' }}
  >
    <Image
      source={require('../../assets/bluedream.png')}
      resizeMode="cover"
      style={{height: 170, width: '35%'}}
    />
    <View
      style={{ flexDirection: 'column', width: '60%', marginLeft: '5%', height: '100%'}}
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
    fontFamily: 'Avenir-Medium',
    fontSize: 14,
    fontWeight: '100'
  },
  quantityText: {
    color: '#5F5F6B',
    fontFamily: 'Avenir-Heavy',
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
    fontWeight: '600'
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
    borderColor: '#351B40',
    borderRadius: 5,
  }
});

export default DealCell;
