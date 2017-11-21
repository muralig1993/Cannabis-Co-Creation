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

import DealCell from './DealCell';
import DATA from '../../data/deals.json';


export default class Deals extends React.Component<{}> {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.stage}>
          <Header searchBar rounded>
            <InputGroup>
                <Icon name="ios-search" />
                <Input placeholder="Search" />
                <Icon name="ios-people" />
            </InputGroup>
            <Button transparent>
                <Text>Search</Text>
            </Button>
          </Header>
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
