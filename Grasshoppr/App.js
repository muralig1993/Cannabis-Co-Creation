import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { Icon } from 'native-base';

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
        <Icon size={25} color={'#fff'} name={'navicon'}/>
        <Text
        style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', width: '90%'}}
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
        <View style={{flexDirection: 'row', height: 100, padding: 20, width: '100%'}}>
          <Button
            style={{borderColor: '#474a4f', borderWidth: 1}}
            onPress={this.login}
            title="Login"
            color="#841584"
            accessibilityLabel="press to login"
          />
          <Button
            style={{borderColor: '#474a4f', borderWidth: 1}}
            onPress={this.signup}
            title="Sign Up"
            color="#841584"
            accessibilityLabel="press to signup"
          />
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
