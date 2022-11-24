import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './src/routes/StackNavigator';
import {FitnessContext} from './src/context/FitnessContext';
import React from 'react';

export default function App() {
  return (
    <FitnessContext>
      <StackNavigator/>
    </FitnessContext>
  );
}

