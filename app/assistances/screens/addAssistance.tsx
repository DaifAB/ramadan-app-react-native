import React, { useState } from 'react'
import { Button, Text, View,StyleSheet, TextInput } from 'react-native';

import { AssistanceController } from './controllers/assistance-controller';
import { Assistance } from '../../shared/models/assistances.model'



export default function addAssistance({history} : any) {

    let assistanceController = new  AssistanceController();


    const [city, setCity] = useState("");
    const [nbPlaces, setNbPlaces] = useState("");
    const [description, setDescription] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");


    function add(){
        
        let assistance = new Assistance();

        assistance.city=city;
        assistance.nbPlaces=Number(nbPlaces);
        assistance.description=description;
        assistance.latitude=Number(latitude);
        assistance.longitude=Number(longitude);

        assistanceController.Add(assistance);
    }
 



    return (
        <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>

        <TextInput
        style={styles.input}
        onChangeText={setCity}
        value={city}
        placeholder="City"
        
        />

        <TextInput
        style={styles.input}
        onChangeText={setDescription}
        value={description}
        placeholder="Description"
        
        />

        <TextInput
        style={styles.input}
        onChangeText={setNbPlaces}
        value={nbPlaces}
        placeholder="nb Places"
        keyboardType="numeric"
        />


        <TextInput
        style={styles.input}
        onChangeText={setLatitude}
        value={latitude}
        placeholder="latitude"
        keyboardType="numeric"
        
        />

        <TextInput
        style={styles.input}
        onChangeText={setLongitude}
        value={longitude}
        placeholder="longtitude"
        keyboardType="numeric"
        
        />


        <Button
        title="Add"
        onPress={() => {
            
            add()
        }}
      />
            
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
  });