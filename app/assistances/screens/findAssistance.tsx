import React, { useEffect, useState } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Map } from "../../shared/components/Map";

import { AssistanceController } from "./controllers/assistance-controller";

export default function findAssistance({ history }: any) {
  
  const [allAssistances, setAllAssistances] = useState(null);

  useEffect(() => {
    async function getAllAssistances() {
      let assistanceController = new AssistanceController();

      let data = await assistanceController.GetAll();

      setAllAssistances(data);
    }
    getAllAssistances();
  }, []);

  const pressHandler = (id: any) => {
    console.log(id);
    console.log("cliked");
  };

  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require("../../../assets/night.png")}
    >
      <Map data={allAssistances && allAssistances} name="assistances" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageBackground: {
    flex: 1,
  },
});
