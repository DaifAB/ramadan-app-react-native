import React, { useState } from "react";
import { StyleSheet, TextInput, ImageBackground, Image } from "react-native";
import AppButton from "../../shared/components/AppButton";
import { AssistanceController } from "./controllers/assistance-controller";
import { Assistance } from "../../shared/models/assistances.model";
import BackButton from "../../shared/components/BackButton";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import mapStyle from "../../shared/components/mapStyle";

export default function addAssistance({ history }: any) {
  let assistanceController = new AssistanceController();

  const [city, setCity] = useState("");
  const [nbPlaces, setNbPlaces] = useState("");
  const [description, setDescription] = useState("");
  const [region, setRegion] = useState({
    latitude: 32.29512789087331,
    longitude: -9.233774559186537,
  });

  function onRegionChange(region: any) {
    setRegion(region);
  }

  let coordinates_marker = {
    latitude: region.latitude,
    longitude: region.longitude,
  };

  function add() {
    let assistance = new Assistance();

    assistance.city = city;
    assistance.nbPlaces = Number(nbPlaces);
    assistance.description = description;
    assistance.latitude = Number(region.latitude);
    assistance.longitude = Number(region.longitude);

    assistanceController.Add(assistance);

    history.push("/home");
  }

  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require("../../../assets/night.png")}
    >
      <BackButton
        onPress={() => {
          history.push("/home");
        }}
      />
      <Image
        style={styles.img}
        source={require("../../../assets/pngwing.com.png")}
      />
      <TextInput
        style={styles.input}
        onChangeText={setCity}
        value={city}
        placeholder="City"
      />

      <TextInput
        style={styles.input}
        onChangeText={setNbPlaces}
        value={nbPlaces}
        placeholder="Places Number"
      />

      <TextInput
        multiline
        numberOfLines={3}
        style={styles.input}
        onChangeText={setDescription}
        value={description}
        placeholder="Description"
      />
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
        onRegionChange={(region) => onRegionChange(region)}
      >
        <Marker coordinate={coordinates_marker}></Marker>
      </MapView>
      <AppButton
        title="Add"
        onPress={() => {
          add();
        }}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    width: "80%",
  },
  imageBackground: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 40,
  },
  img: {
    width: 170,
    height: 170,
  },
  map: {
    width: "80%",
    height: 150,
  },
});
