import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import {AppLoading} from 'expo-app-loading';
import { 
  useFonts,
  B612Mono_400Regular,
  B612Mono_400Regular_Italic,
  B612Mono_700Bold,
  B612Mono_700Bold_Italic 
} from '@expo-google-fonts/b612-mono'

export default function WeatherInfo({ weather }) {
  const icon = `https://${weather.current.condition.icon}`;
  const name = weather.location.name;
  const description = weather.current.condition.text;

    let [fontsLoaded] = useFonts({
      B612Mono_400Regular,
      B612Mono_400Regular_Italic,
      B612Mono_700Bold,
      B612Mono_700Bold_Italic 
    });
   
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{name}</Text>
      <View style={styles.weatherImage}>
        <Image style={styles.image} source={{ uri: icon }} />
        <Text style={styles.description}>{description}</Text>
      </View>
      <Text style={styles.text}>{weather.current.temp_c}&deg;c</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    width: "100%",
    justifyContent: "space-evenly",
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
  description: {
    color: "white",
    position: "absolute",
    top: 120,
    letterSpacing: 2,
    fontSize:25,
    //  left: 0,
  },
  header: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "capitalize",
  },
});
