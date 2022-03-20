import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import React from "react";
import WeatherDetailsCard from "./WeatherDetailsCard";
import LineChart from "./LineChart";
import { LinearGradient } from "expo-linear-gradient";
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
  let color1 = "#274060";
  let color2 = "#1b2845";

  let [fontsLoaded] = useFonts({
    B612Mono_400Regular,
    B612Mono_400Regular_Italic,
    B612Mono_700Bold,
    B612Mono_700Bold_Italic,
  });

  if (weather.current.is_day == 1) {
    color1 = "#046190";
    color2 = "#0d0a0b";
  }

  return (
    <View style={styles.main}>
      <TouchableNativeFeedback
        onPress={console.log("pressed")}
        background={
          Platform.OS === "android"
            ? TouchableNativeFeedback.SelectableBackground()
            : ""
        }
      >
        <View style={styles.container}>
          <LinearGradient
            // Background Linear Gradient
            colors={[color1, color2]}
            style={styles.background}
          />
          <Text style={styles.header}>{name}</Text>
          <View style={styles.temperature}>
            <Text style={styles.text}>
              {weather.current.temp_c}
              <Text style={styles.text2}>&deg;c</Text>
            </Text>
          </View>
          <View style={styles.weatherImage}>
            <Image style={styles.image} source={{ uri: icon }} />
            <Text style={styles.description}>{description}</Text>
          </View>
          <Text style={styles.date}>
            {date} / {month} / {year}{" "}
          </Text>
        </View>
      </TouchableNativeFeedback>
      <WeatherDetailsCard weather={weather} />
      <LineChart weather={weather} date={date} month={month} year={year} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    overflow: "hidden",
    marginTop: 80,
    alignItems: "center",
    height: "30%",
    width: "95%",
    padding: 10,
    justifyContent: "space-evenly",
    flexDirection: "row",
    // backgroundColor: "#232435",
    borderRadius: 20,
    shadowColor: "black",
    elevation: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    position: "relative",
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
    fontSize: 50,
  },

  text2: {
    color: "#f8de7e",
  },
  date: {
    color: "white",
    position: "absolute",
    top: 10,
    right: 40,
    opacity: 0.5,
  },
  description: {
    // position: "absolute",
    //  top: 120,
    letterSpacing: 2,
    fontSize: 25,
    color: "#f8de7e",
    //  left: 0,
  },
  header: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "capitalize",
    position: "absolute",
    top: 20,
    left: 20,
  },
  temperature: {
    height: "100%",
    justifyContent: "space-evenly",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});
