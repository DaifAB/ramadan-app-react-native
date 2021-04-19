import React from 'react'
import { Button, Text, View } from 'react-native';



export default function findBreakfast({history} : any) {
    return (
        <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
            <Text> Get Futor component</Text>
            <Button title='Back' onPress={()=>{history.push('/home')}}/>
        </View>
    )
}


