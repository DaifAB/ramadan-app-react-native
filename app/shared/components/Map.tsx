import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import BackButton from "./BackButton";
import { useHistory } from "react-router-native";

// @ts-ignore
import firebase from '../../../environments/firebase';
const db = firebase.firestore();

export function Map(props: any) {

  const history = useHistory();

 
  

  const reservation = (id: any,nbPlaces : any) => {

    if (nbPlaces>0) {

      db.collection(props.name).doc(id).update({
        nbPlaces: nbPlaces -1 
      });
      console.log(id);
      
    }

   
  };

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
        {props.data &&
          props.data.map((item: any) => {
            return (
              <Marker
                key={item.id}
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude,
                }}
              >
                <Callout
                  tooltip
                  onPress={() => {
                    reservation(item.id,item.nbPlaces);
                  }}
                >
                  <View>
                    <Text>Click me !</Text>
                  </View>
                </Callout>
              </Marker>
            );
          })}
      </MapView>
      <BackButton
        onPress={() => {
          history.push("/home");
        }}
      />
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
