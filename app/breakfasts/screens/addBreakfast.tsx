import React, { useState } from "react";
import { StyleSheet, TextInput, ImageBackground, Image } from "react-native";
import AppButton from "../../shared/components/AppButton";
import { BreakfastController } from "./controllers/breakfast-controller";
import { Breakfast } from "../../shared/models/breakfast.model";
import BackButton from "../../shared/components/BackButton";

export default function addBreakfast({ history }: any) {
  let breakfastController = new BreakfastController();

  const [city, setCity] = useState("");
  const [nbPlaces, setNbPlaces] = useState("");
  const [description, setDescription] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  function add() {
    let breakfast = new Breakfast();

    breakfast.city = city;
    breakfast.nbPlaces = Number(nbPlaces);
    breakfast.description = description;
    breakfast.latitude = Number(latitude);
    breakfast.longitude = Number(longitude);

    breakfastController.Add(breakfast);

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
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        onChangeText={setLatitude}
        value={latitude}
        placeholder="Latitude"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        onChangeText={setLongitude}
        value={longitude}
        placeholder="Longtitude"
        keyboardType="numeric"
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
