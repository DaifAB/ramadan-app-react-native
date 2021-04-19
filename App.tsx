import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView  } from 'react-native';
import { RamadanHome } from './app/ramadan/screens/ramadan-home';
import { RamadanMap } from './app/ramadan/screens/ramadan-map';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Test App , working !</Text>
      <StatusBar style="auto" />
      <RamadanHome></RamadanHome>
      <RamadanMap></RamadanMap>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
