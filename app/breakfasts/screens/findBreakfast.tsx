import React from "react";
import { Button, Text, View, StyleSheet, ImageBackground } from "react-native";
import { RamadanMap } from "../../ramadan/screens/ramadan-map";
import AppButton from "../../shared/components/AppButton";
import BackButton from "../../shared/components/BackButton";

export default function findBreakfast({ history }: any) {
  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require("../../../assets/night.png")}
    >
      <RamadanMap />
      <BackButton
        onPress={() => {
          history.push("/home");
        }}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
