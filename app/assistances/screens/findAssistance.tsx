import React, { useState } from 'react'
import { Button, Text, View,StyleSheet, TextInput } from 'react-native';

import { AssistanceController } from './controllers/assistance-controller';



export default function findAssistance({history} : any) {


    const [allAssistances, setAllAssistances] = useState([]);

    let assistanceController = new  AssistanceController();

    let y = assistanceController.GetAll();

    // console.log(y);
    

    return (
        <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
            <Text> Get assistance component</Text>
            <Button title='Back' onPress={()=>{history.push('/home')}}/>
        </View>
    )
}


