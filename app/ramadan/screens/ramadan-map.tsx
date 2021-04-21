import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { RamadanMapsEnum } from "../../shared/enums/ramdan_maps.enum";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";

export function RamadanMap() {
  let ramadanMapsEnum = RamadanMapsEnum;
  let coordinates_marker = {
    latitude: 32.296418099951424,
    longitude: -9.241842831480078,
  };
  let coordinates_marker1 = {
    latitude: 32.296418019951424,
    longitude: -9.241842831480078,
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
        <Marker
          coordinate={coordinates_marker}
          title={"test"}
          description={"kdjfhskldjhfskldhf skjdfhksjdhf sdkjfhsjdkhf"}
        >
          <Callout
            tooltip
            onPress={() => {
              console.log("pressed");
            }}
          >
            <View>
              <Text>Click me !</Text>
            </View>
          </Callout>
        </Marker>
        <Marker
          coordinate={coordinates_marker1}
          title={"test"}
          description={"kdjfhskldjhfskldhf skjdfhksjdhf sdkjfhsjdkhf"}
        >
          <Callout
            tooltip
            onPress={() => {
              console.log("pressed");
            }}
          >
            <View>
              <Text>Click me !</Text>
            </View>
          </Callout>
        </Marker>
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
