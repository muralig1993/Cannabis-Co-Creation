import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ListView,
  ScrollView
} from 'react-native';
import Icon from '../Icon'
import Layout from './Layout'

const Header = (props) => (
  <View
    style={{width: '100%'}}
  >
    <View
      style={{width: '100%', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20, paddingTop: 20}}
    >
      <Text
        style={styles.nameStyle}
      >
        {props.name}
      </Text>
      <Text
        style={[styles.text, styles.editLabelStyle]}
      >
        <Text><Icon name="Pencil" height="15" width="20" style={{borderColor: 'yellow'}}/></Text>
        <Text>Edit</Text>
      </Text>
    </View>
    <View
      style={{width: '100%', justifyContent: 'center', alignItems: 'center', paddingVertical: 50}}
    >
      <Image
        source={require('../assets/white-bikini.png')}
        resizeMode="cover"
        style={{borderRadius: 15, width: '50%', height: 300}}
      />
    </View>
  </View>
)

const Info = (props) => (
  <View
    style={{width: '100%', flexDirection: 'row', paddingHorizontal: '10%'}}
  >
    <View
      style={{width: '50%', alignItems: 'flex-start'}}
    >
      <Text
        style={styles.labelStyle}
      >
        Birthday:
      </Text>
      <Text
        style={styles.labelStyle}
      >
        Email:
      </Text>
      <Text
        style={styles.labelStyle}
      >
        Gender:
      </Text>
    </View>
    <View
      style={{width: '50%', alignItems: 'flex-end'}}
    >
      <Text
        style={styles.text}
      >
        {props.birthdate}
      </Text>
      <Text
        style={styles.text}
      >
        {props.email}
      </Text>
      <Text
        style={styles.text}
      >
        {props.gender}
      </Text>
    </View>
  </View>
)

const Choices = (props) => (
  <View
    style={{paddingTop: 20}}
  >
    <ListView contentContainerStyle={styles.list}
        dataSource={props.dataSource}
        renderRow={(rowData) =>
          <View
            style={styles.item}
          >
            <Text
            style={styles.text}
            >
              {rowData}
            </Text>
          </View>
        }
      />
  </View>
)


class Profile extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.choices),
    };
  }
  render() {
    return(
      <Layout>
        <ScrollView
        contentContainerStyle={{alignItems: 'center', justifyContent: 'flex-start', width: '100%'}}
        >
          <Header {...this.props}/>
          <Info {...this.props}/>
          <Choices {...this.props} dataSource={this.state.dataSource}/>
        </ScrollView>
      </Layout>
    )
  }

}

const styles = StyleSheet.create({
  title: {
    color: '#5F5F6B',
    fontFamily: 'Avenir',
    fontSize: 18,
    fontWeight: '700'
  },
  text: {
    color: '#5F5F6B',
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '100'
  },
  buttonText: {
    color: '#5F5F6B',
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: '200'
  },
  labelStyle: {
    color: '#717171',
    fontSize: 16,
    fontFamily: 'Avenir',
    fontWeight: '700'
  },
  nameStyle: {
    color: '#717171',
    fontSize: 20,
    fontFamily: 'Avenir',
    fontWeight: '700'
  },
  list: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%'
  },
  item: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderRadius: 25,
      borderColor: '#CEC8C8',
      margin: 10,
      width: 100,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center'
  },
  editLabelStyle: {
    alignItems: 'center'
  }
});

export default Profile
