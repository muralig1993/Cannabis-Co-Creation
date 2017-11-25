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
import {
  Container,
  Header,
  InputGroup,
  Input,
  Button,
  Icon
} from 'native-base';
import { SearchBar } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';

import DealCell from './DealCell';
import DATA from '../../data/deals.json';


export default class Deals extends React.Component<{}> {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.handleSearch = this.handleSearch.bind(this)
  }
  handleSearch() {

  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.stage}>
          <SearchBar
            round
            lightTheme
            onChangeText={this.handleSearch}
            onClearText={this.handleSearch}
            placeholder='Search for deals'
            containerStyle={styles.searchBarContainerStyle}
            inputStyle={styles.inputStyle}
            />
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
                  onPress={() => Actions.deal()}
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
  },
  inputStyle: {
    fontFamily: 'Avenir',
    fontSize: 16,
    backgroundColor: '#f1f1f1'
  },
  searchBarContainerStyle: {
    width: '100%',
    backgroundColor: 'white'
  }
});
