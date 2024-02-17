import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//TODO: Template Screen replace with your own screen
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is an empty screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
