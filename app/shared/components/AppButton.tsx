import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function AppButton({ onPress, title }: any) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#FFF",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: "80%",
    borderColor: "#454EAF",
    borderWidth: 2,
  },
  appButtonText: {
    fontSize: 18,
    color: "#454EAF",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
