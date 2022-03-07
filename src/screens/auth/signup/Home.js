import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Home extends React.Component {
  render() {
    return (
      <View>
        <Text>Welcome home spiderman</Text>

        <Button
          title="want to be a spiderman? signup here!"
          onPress={() =>
            this.props.navigation.navigate('SignUp')
          }
        />
      </View>
    );
  }
}

export default Home;