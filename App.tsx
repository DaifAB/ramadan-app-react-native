import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView  } from 'react-native';
import { RamadanHome } from './app/ramadan/screens/ramadan-home';
import { RamadanMap } from './app/ramadan/screens/ramadan-map';

import * as firebase from 'firebase';

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAWNIV8yVQ_J58tbosUltElh5I-9mCDDdw",
  authDomain: "ramdan-mubarak-app-ts.firebaseapp.com",
  projectId: "ramdan-mubarak-app-ts",
  storageBucket: "ramdan-mubarak-app-ts.appspot.com",
  messagingSenderId: "762400960186",
  appId: "1:762400960186:web:30f5fd416ba52e29735c83"
};

firebase.initializeApp(firebaseConfig);


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
