 import React from 'react'
 import { View, ImageBackground,StyleSheet  } from 'react-native';

 import AppButton from './AppButton'

 export default function Home({history} : any) {
     return (
         <ImageBackground
         style={styles.imageBackground}
         source={require('../../../assets/night.png')}
         >
                <AppButton title="Add Assistance Place" onPress={() => {history.push('/addAssist')}}  />
                <AppButton title="Add Futor Place" onPress={() => {history.push('/addFutor')}}/>
                <AppButton title="Show Assistances" onPress={() => {history.push('/getAssist')}}/>
                <AppButton title="Show Futors" onPress={() => {history.push('/getFutor')}}/>
         </ImageBackground>
     )
 }


 const styles = StyleSheet.create({
    imageBackground : {
        flex : 1,
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'space-around',
        paddingVertical : 100
    }

  });