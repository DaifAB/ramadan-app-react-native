import React, { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import AppButton from "../../shared/components/AppButton";
import BackButton from "../../shared/components/BackButton";

import { AssistanceController } from "./controllers/assistance-controller";

export default function findAssistance({ history }: any) {
  const [allAssistances, setAllAssistances] = useState([]);

  //   let assistanceController = new AssistanceController();

  //   let y = assistanceController.GetAll();

  // console.log(y);

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
      <AppButton title="Show Assistances" onPress={() => {}} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 100,
  },
});
