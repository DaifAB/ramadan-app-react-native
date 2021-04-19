import React from 'react'
import { Button, Text, View } from 'react-native';



export default function findAssistance({history} : any) {
    return (
        <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
            <Text> Get assistance component</Text>
            <Button title='Back' onPress={()=>{history.push('/home')}}/>
        </View>
    )
}


