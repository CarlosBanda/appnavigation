import 'react-native-gesture-handler';
import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './src/navigations/Stack';

const App = () => {

  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF'
  },
  text: {
    color: '#000'
  }
});

export default App;
