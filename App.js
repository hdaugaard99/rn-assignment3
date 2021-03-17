
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View} from 'react-native';
import ComponentA from './components/componentA/componentA';
import DarkTheme from './components/componentB/DarkTheme';



export default function App() {
  return <DarkTheme />;
  
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginTop: 20,
  },

  message: {
    fontSize: 18,
  },

  warning: {
    color: 'red',
  },


});
