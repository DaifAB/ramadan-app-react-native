import React from "react";
import { ImageBackground  } from 'react-native';


export default function Splash({history} : any) {

    setTimeout(() => {
        history.push('/home')
    }, 3000);


    return (
        <ImageBackground source={require('../../../assets/splashApp.png')}>
      
        </ImageBackground>
    )
}