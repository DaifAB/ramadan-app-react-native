import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";

export function Map(props:any) {

  
  console.log('====================================');
  console.log(props.data);
  console.log('====================================');


  const reservation=(id:any)=>{

    console.log(id);
    
  }
 

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 32.29512789087331,
          longitude: -9.233774559186537,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        }}
      >

        {
          props.data ? (
            props.data.map((item:any)=>{

              console.log('====================================***');
              console.log(item);
              console.log('====================================****');
              <Marker key={item.id}
              coordinate={{
                latitude: 32.29512789087331,
                longitude: -9.233774559186537,
              }}
            >
              <Callout
                tooltip
                onPress={() => {
                  console.log(item.id);
                  reservation(item.id)
                }}
              >
                <View>
                  <Text>Click me !</Text>
                </View>
              </Callout>
            </Marker>

          
  
            })
          ):(
            <Text>t</Text>
            
         
          )
        }

     

      
    
      
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
  },
  text: {
    textAlign: "center",
  },
  map: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
});
