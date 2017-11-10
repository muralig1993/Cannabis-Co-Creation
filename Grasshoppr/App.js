import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Icon, Button, Content, Container } from 'native-base';
// import SvgUri from 'react-native-svg-uri';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: 'your email',
        password: 'your password'
      };
      this.login = this.login.bind(this)
      this.signup = this.signup.bind(this)
  }
  login() {

  }
  signup() {

  }
  render() {
    return (
      <View style={styles.container}>
        <Icon size={25} color={'#fff'} name={'ios-chatbubbles'}/>
        <Text
        style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', width: '90%', marginTop: 10}}
        >Email</Text>
        <TextInput
          style={{height: 40, width: '90%', borderColor: '#474a4f', borderBottomWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          placeholder='your email'
        />
        <Text
        style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', width: '90%', marginTop: 10}}
        >Password</Text>
        <TextInput
          style={{height: 40, width: '90%', borderColor: '#474a4f', borderBottomWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          placeholder='your password'
        />
        <View style={{width: '90%', paddingTop: 40}}>
          <Button style={{height: 50, width: '100%'}} block success>
            <Text style={{color: 'white'}}>Login</Text>
          </Button>
        </View>
        <View style={{width: '90%', paddingTop: 10}}>
          <Button block success>
            <Text style={{color: 'white'}}>Sign Up</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
