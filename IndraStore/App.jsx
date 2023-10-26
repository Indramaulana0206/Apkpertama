// import { Text, View , TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import React, { Component } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import barang from './src/screens/barang'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouterName="barang" screenOption={{headerShown : false }}>
        <Stack.Screen name = 'barang' component = {barang}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
