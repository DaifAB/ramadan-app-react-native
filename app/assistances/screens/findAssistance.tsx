import React, { useEffect, useState } from 'react'
import { Button, Text, View,StyleSheet, TextInput, FlatList, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { Map } from '../../shared/components/Map';

import { AssistanceController } from './controllers/assistance-controller';



export default function findAssistance({history} : any) {


    const [allAssistances, setAllAssistances] = useState([
      {
      "city": "",
      "description": "",
      "id": "",
      "latitude": 0,
      "longitude": 0,
      "nbPlaces": 0,
    }
  ]);



    useEffect(() => {
        async function getAllAssistances() {

            let assistanceController =  new AssistanceController();

            let data = await assistanceController.GetAll();

          setAllAssistances(data);

        }    
        getAllAssistances();
      }, []);


      const pressHandler = (id:any) => {

       console.log(id);
       console.log('cliked');
    
      
      }

 
    

    return (
       
        <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/night.png')}
        >
            
       <Map data={allAssistances}/>
        </ImageBackground>

     

     
  
    //   </View>
    )
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
      paddingTop:40,
      paddingHorizontal:20,
    },
    item: {
     marginTop: 24,
     padding: 30,
     backgroundColor: '#ffffff',
     fontSize: 24,
    },
    imageBackground : {
        flex : 1,
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'space-around',
        paddingVertical : 100
    }
  
  });
  
