import React, { useState } from "react";
import { StyleSheet, TextInput, ImageBackground, Image } from "react-native";
import AppButton from "../../shared/components/AppButton";
import { AssistanceController } from "./controllers/assistance-controller";
import { Assistance } from "../../shared/models/assistances.model";
import BackButton from "../../shared/components/BackButton";

export default function addAssistance({ history }: any) {
  let assistanceController = new AssistanceController();

  const [city, setCity] = useState("");
  const [nbPlaces, setNbPlaces] = useState("");
  const [description, setDescription] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  function add() {
    let assistance = new Assistance();

    assistance.city = city;
    assistance.nbPlaces = Number(nbPlaces);
    assistance.description = description;
    assistance.latitude = Number(latitude);
    assistance.longitude = Number(longitude);

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
        style={styles.input}
        onChangeText={setLatitude}
        value={latitude}
        placeholder="Latitude"
        
      />

      <TextInput
        style={styles.input}
        onChangeText={setLongitude}
        value={longitude}
        placeholder="Longtitude"
        
      />
      <TextInput
        multiline
        numberOfLines={3}
        style={styles.input}
        onChangeText={setDescription}
        value={description}
        placeholder="Description"
      />
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
    width: 200,
    height: 200,
  },
});
