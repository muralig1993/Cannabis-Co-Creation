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
import DealCell from './DealCell';
import DATA from '../data/deals.json';


export default class Deals extends React.Component<{}> {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.stage}>
          <TableView>
            <Section footer="All rights reserved.">
            {
              DATA.map((cellData, i) => (
                <DealCell
                  key={i}
                  name={cellData.name}
                  location={cellData.location}
                  distance={cellData.distance}
                  THC={cellData.THC}
                  CBD={cellData.CBD}
                  CDN={cellData.CDN}
                  strain={cellData.strain}
                  prevValue={cellData.prevValue}
                  value={cellData.value}
                  valueOff={cellData.valueOff}
                  likes={cellData.likes}
                  claims={cellData.claims}
                  stock={cellData.stock}
                  quantity={cellData.quantity}
                  type={cellData.type}
                  imageURL={cellData.imageURL}
                  titleTextColor="#007AFF"
                  onPress={() => console.log('open Help/FAQ')}
                />
              ))
            }
            </Section>
          </TableView>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  stage: {
    backgroundColor: '#EFEFF4',
    paddingBottom: 20,
    flex: 1
  }
});
