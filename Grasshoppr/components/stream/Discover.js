import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import MapView from 'react-native-maps';

export default class Discover extends React.Component<{}> {
  render() {
    return (
      <View>
        <MapView
          style={{top: 0, left: 0}}
         initialRegion={{
           latitude: 37.78825,
           longitude: -122.4324,
           latitudeDelta: 0.0922,
           longitudeDelta: 0.0421,
         }}
         />
      </View>
    )
  }

}
