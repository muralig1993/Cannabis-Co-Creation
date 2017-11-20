import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image
} from 'react-native';

const Profile = () => (
  <View
  style={{alignItems: 'center', justifyContent: 'flex-start'}}
  >
    <Text>
      Rebecca Jane
    </Text>
    <Image
      source={require('../assets/white-bikini.png')}
      resizeMode="cover"
      style={{borderRadius: 15, width: '50%', height: 300}}
    />
    <Text>
      February 3rd, 1991
    </Text>
    <Text>
      rebeccajane@mail.com
    </Text>
    <Text>
      Female
    </Text>
    <Text>
      Choices:
    </Text>
  </View>
)

export default Profile
