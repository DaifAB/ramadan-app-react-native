import React from "react";
import { ImageBackground,StyleSheet  } from 'react-native';


export default function Splash({history} : any) {

    setTimeout(() => {
        history.push('/home')
    }, 3000);


    return (
        <ImageBackground
        style={styles.imageBackground}
         source={require('../../../assets/splashApp.png')}>
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