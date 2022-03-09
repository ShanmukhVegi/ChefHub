import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styles from './styles';

class SignUp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You have come to signup.</Text>

        <Button
          title="Go Home ra pilla bach"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
      </View>
    );
  }
}

export default SignUp;