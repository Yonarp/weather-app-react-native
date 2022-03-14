import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";

export default function App() {
  useEffect(() => {
    load();
  });
  async function load() {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
      }
      let location = await Location.getCurrentPositionAsync({});
      const { longitude, latitude } = location.coords;
      alert(`You are at ${latitude}, ${longitude}`);
    } catch (error) {
      alert(error);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello People</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
