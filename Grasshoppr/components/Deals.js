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


export default class Deals extends React.Component<{}> {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.stage}>
          <TableView>
            <Section footer="All rights reserved.">
              <Cell title="Help / FAQ" titleTextColor="#007AFF" onPress={() => console.log('open Help/FAQ')}/>
              <Cell title="Contact Us" titleTextColor="#007AFF" onPress={() => console.log('open Contact Us')}/>
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
