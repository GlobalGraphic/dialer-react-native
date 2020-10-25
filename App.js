import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,View } from 'react-native';
import Header from './components/Header';
import Keyboard from './components/Keyboard';

export default function App() {
  return (
    <View>
      <Header/>
      <Keyboard/>
    </View>
  );
}
