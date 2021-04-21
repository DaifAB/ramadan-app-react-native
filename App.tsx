import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView  } from 'react-native';
import {NativeRouter, Switch, Route, Redirect} from 'react-router-native'
import addAssistance from './app/assistances/screens/addAssistance';
import findAssistance from './app/assistances/screens/findAssistance';
import addBreakfast from './app/breakfasts/screens/addBreakfast';
import findBreakfast from './app/breakfasts/screens/findBreakfast';
import Home from './app/shared/components/Home';

import Splash from './app/shared/components/Splash';


export default function App() {
  return (
    <NativeRouter>
      <Switch>
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

