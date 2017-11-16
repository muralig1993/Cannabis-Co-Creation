import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import {
  Cell
} from 'react-native-tableview-simple';
import { Button } from 'native-base';
import Icon from '../Icon';
import { Actions } from 'react-native-router-flux';

const DealCell = (props) => (
  <Cell
    {...props}
    contentContainerStyle={{ alignItems: 'flex-start', height: 'auto', paddingVertical: 10 }}
    cellContentView={
      <View
        style={{ alignItems: 'flex-start', flexDirection: 'column', paddingVertical: 0, width: '100%' }}
      >
        <View
          style={{ alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'row', width: '100%' }}
        >
          <Text
            allowFontScaling
            numberOfLines={1}
            style={styles.title}
          >
          {props.name}
          </Text>
          <Text
            allowFontScaling
            numberOfLines={1}
            style={styles.text}
          >
          {props.distance} miles away
          </Text>
        </View>
        <View
          style={{ alignItems: 'flex-start', flexDirection: 'column' }}
        >
          <View
            style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}
          >
            <View>
              <Text
                allowFontScaling
                numberOfLines={2}
                style={styles.text}
              >
              {props.location}
              </Text>
              <Text
                allowFontScaling
                numberOfLines={4}
                style={styles.text}
              >
              THC: {props.THC}% CBD: {props.CBD}% CBN: {props.CBN}%
              </Text>
            </View>
            <View>
              <Text
                allowFontScaling
                numberOfLines={4}
                style={styles.amountText}
              >
              {props.amount} grams
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%' }}
          >
            <View>
              <Text
                allowFontScaling
                numberOfLines={4}
                style={styles.text}
              >
              {props.strain}
              </Text>
              <Text
                allowFontScaling
                numberOfLines={1}
                style={styles.text}
              >
              <Text style={styles.crossed}>${props.prevValue}</Text>
              </Text>
              <Text
                allowFontScaling
                numberOfLines={2}
                style={styles.text}
              >
              ${props.value} {props.valueOff}% off
              </Text>
            </View>
            <View style={{width: '75%', flexDirection: 'row'}}>
              <View
                style={{width: '40%', flexDirection: 'column', justifyContent: 'center'}}
              >
                <Text>{props.claims} claims</Text>
                <Text>{props.stock}</Text>
              </View>
              <Button
                style={{width: '60%'}}
                block success
                onPress={() => Actions.signup()}
              >
                <Text style={{color: 'white'}}>Get Deal</Text>
              </Button>
            </View>
          </View>
          <View
            style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}
          >
            <Text
              allowFontScaling
              numberOfLines={2}
              style={styles.text}
            >
            <Icon name="Heart" height="15" width="15" />
            {props.likes} likes
            </Text>
            <Text
              allowFontScaling
              numberOfLines={2}
              style={styles.text}
            >
            {props.type}
            </Text>
          </View>
        </View>
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
  crossed: {
    color: '#5F5F6B',
    textDecorationLine: 'line-through'
  },
  amountText: {
    color: '#5F5F6B',
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: '700'
  }
});

export default DealCell;
