import React from 'react'
import { Button, Text, View } from 'react-native';



export default function addBreakfast({history} : any) {
    return (
        <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
            <Text> Add Futor component</Text>
            <Button title='Back' onPress={()=>{history.push('/home')}}/>
        </View>
    )
}


