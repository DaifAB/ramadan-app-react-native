import React, { useEffect, useState } from 'react'
import { Button, Text, View,StyleSheet, TextInput, FlatList, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

import { AssistanceController } from './controllers/assistance-controller';



export default function findAssistance({history} : any) {


    const [allAssistances, setAllAssistances] = useState([]);



    useEffect(() => {
        async function getAllAssistances() {

            let assistanceController =  new AssistanceController();

            let data = await assistanceController.GetAll();

        console.log('====================================*');
        console.log(data);
        console.log('====================================*');

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
            
            <FlatList
        keyExtractor={(item :any)=> item.id}
        data={allAssistances}
        renderItem={({ item })=>(
          <TouchableOpacity onPress={()=> pressHandler(item.id)}>
          <Text style={styles.item}> city : {item.city} nbPlce : {item.nbPlaces} </Text>
          
          </TouchableOpacity>
        )}
        
        />
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
  
