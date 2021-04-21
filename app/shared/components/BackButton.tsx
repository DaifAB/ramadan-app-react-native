import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function BackButton({ onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>Back</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    borderTopRightRadius: 10,
    borderBottomEndRadius: 10,
    backgroundColor: "#FFF",
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: "20%",
    position: "absolute",
    left: 0,
    marginTop: 30,
  },
  appButtonText: {
    fontSize: 14,
    color: "#454EAF",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
