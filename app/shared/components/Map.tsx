import React, { useEffect } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import BackButton from "./BackButton";
import { useHistory } from "react-router-native";
import mapStyle from "./mapStyle";

// @ts-ignore
import firebase from "../../../environments/firebase";
const db = firebase.firestore();

export function Map(props: any) {
  const history = useHistory();

  const reservation = (id: any, nbPlaces: any) => {


    if (nbPlaces > 0) {

      db.collection(props.name)
        .doc(id)
        .update({
          nbPlaces: nbPlaces - 1,
        });

        db.collection('reservation').add({
          typeId: id,
          name: "Kamal"
         
      })
      
      Alert.alert('Successful','Reservation Done',[{text: 'Ok',onPress:()=> history.push("/home")}])

    }else{
      Alert.alert('OOPS!','No Place Available',[{text: 'Ok',onPress:()=> history.push("/home")}])

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
        customMapStyle={mapStyle}
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
                    reservation(item.id, item.nbPlaces);
                  }}
                >
                  <View style={styles.modal}>
                    <Text style={styles.title}>Description</Text>
                    <Text style={styles.text}>{item.description}</Text>
                    <Text style={styles.title}>Places number</Text>
                    {item.nbPlaces ? (
                      <Text style={styles.text}>{item.nbPlaces}</Text>
                    ) : (
                      <Text style={styles.full}>Full</Text>
                    )}
                    <Text style={styles.press}>Press here to reserve</Text>
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
    fontSize: 15,
    fontFamily: "monospace",
  },
  full: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: "monospace",
    color: "red",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "monospace",
    fontWeight: "bold",
  },
  press: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: "monospace",
    color: "blue",
    textDecorationLine: "underline",
  },
  map: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  modal: {
    backgroundColor: "white",
    width: 200,
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
  },
});
