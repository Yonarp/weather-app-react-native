import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { AppLoading } from "expo-app-loading";
import {
  useFonts,
  B612Mono_400Regular,
  B612Mono_400Regular_Italic,
  B612Mono_700Bold,
  B612Mono_700Bold_Italic,
} from "@expo-google-fonts/b612-mono";

export default function WeatherInfo({ weather }) {
  const icon = `https://${weather.current.condition.icon}`;
  const name = weather.location.name;
  const description = weather.current.condition.text;
  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  let [fontsLoaded] = useFonts({
    B612Mono_400Regular,
    B612Mono_400Regular_Italic,
    B612Mono_700Bold,
    B612Mono_700Bold_Italic,
  });

  return (
    <View style={styles.container}>
      <View style={styles.temperature}>
        <Text style={styles.header}>{name}</Text>
        <Text style={styles.text}>{weather.current.temp_c}<Text style={styles.text2}>&deg;c</Text></Text>
      </View>
      <View style={styles.weatherImage}>
        <Image style={styles.image} source={{ uri: icon }} />
        <Text style={styles.description}>{description}</Text>
      </View>
      <Text style={styles.date}>{date} / {month} / {year} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "50%",
    width: "95%",
    padding: 10,
    justifyContent: "space-evenly",
    flexDirection: "row",
    backgroundColor: "#232435",
    borderRadius: 20,
    shadowColor: "black",
    elevation: 10,
    shadowOffset: {width: 0, height: 2 },
    shadowOpacity: 0.5,
    position: 'relative',
  },

  weatherImage: {
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    //marginBottom: 100,
    position: "relative",
  },
  text: {
    color: "white",
    fontFamily: "B612Mono_400Regular",
    fontSize: 50,
  },

  text2: {
    color:"#f8de7e"
  },
  date:{
    color: "white",
    position: 'absolute',
    top: 10,
    right:40,
    opacity: 0.5,
  },
  description: {
    color: "white",
    // position: "absolute",
    //  top: 120,
    letterSpacing: 2,
    fontSize: 25,
    color: "#f8de7e"
    //  left: 0,
  },
  header: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "capitalize",
  },
  temperature: {
    height: "100%",
    justifyContent: "space-evenly",
  },
});
