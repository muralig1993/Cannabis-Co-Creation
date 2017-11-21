import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView
} from 'react-native';
import {
  Cell,
  Section,
  TableView
} from 'react-native-tableview-simple';
import StoreCell from './StoreCell';
import DATA from '../../data/stores.json';

export default class Stores extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.stage}>
          <TableView>
            <Section footer="All rights reserved.">
            {
              DATA.map((cellData, i) => (
                <StoreCell
                  key={i}
                  name={cellData.name}
                  rating={cellData.rating}
                  status={cellData.status}
                  city={cellData.city}
                  distance={cellData.distance}
                  type={cellData.type}
                  imageURL={cellData.imageURL}
                  onPress={() => console.log('open Help/FAQ')}
                />
              ))
            }
            </Section>
          </TableView>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  stage: {
    backgroundColor: '#EFEFF4',
    paddingBottom: 20,
    flex: 1
  }
});
