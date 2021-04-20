import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView  } from 'react-native';
import {NativeRouter, Switch, Route, Redirect} from 'react-router-native'
import addAssistance from './app/assistances/screens/addAssistance';
import findAssistance from './app/assistances/screens/findAssistance';
import addBreakfast from './app/breakfasts/screens/addBreakfast';
import findBreakfast from './app/breakfasts/screens/findBreakfast';
import Home from './app/shared/componenets/Home';

import firebase from 'firebase';
import Splash from './app/shared/componenets/Splash';

// import 'firebase/firestore';

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
    <NativeRouter>
      <Switch>
        {/* <Redirect exact from="/" to="/home" /> */}
        <Route exact path="/" component={Splash} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/addAssist" component={addAssistance} />
        <Route exact path="/getAssist" component={findAssistance} />
        <Route exact path="/addFutor" component={addBreakfast} />
        <Route exact path="/getFutor" component={findBreakfast} />
      </Switch>
    </NativeRouter>
  );
}

