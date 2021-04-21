import React, { useEffect, useState } from "react";
import { Button, Text, View, StyleSheet, ImageBackground } from "react-native";
import { RamadanMap } from "../../ramadan/screens/ramadan-map";
import AppButton from "../../shared/components/AppButton";
import BackButton from "../../shared/components/BackButton";
import { Map } from "../../shared/components/Map";
import { BreakfastController } from "./controllers/breakfast-controller";

export default function findBreakfast({ history }: any) {

  const [allBreakfasts, setAllBreakfasts] = useState(null);

  useEffect(() => {
    async function getAllBreakfasts() {
      let breakfastController = new BreakfastController();

      let data = await breakfastController.GetAll();

      console.log('====================================******');
      console.log(data);
      console.log('====================================************');

      setAllBreakfasts(data);
    }
    getAllBreakfasts();
  }, []);

  
  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require("../../../assets/night.png")}
    >
      <Map data={allBreakfasts && allBreakfasts  } name="breakfasts"  />
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
