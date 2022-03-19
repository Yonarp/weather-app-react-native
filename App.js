import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import * as API_DUMMY from "./tempData.json";
import WeatherInfo from "./components/WeatherInfo";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

export default function App() {
  const API_KEY = "9d8f4895a487445db1b165027221403 ";
  const URL = "http://api.weatherapi.com/v1/forecast.json?key=9d8f4895a487445db1b165027221403&q=Brisbane&days=1&aqi=no&alerts=yes";
  const [weather, setWeather] = useState(null);
  const [temp, setTemp] = useState(null);

  useEffect(() => {
    load();
  },[]);
  async function load() {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") { 
        alert("Permission to access location was denied");
      }
      let location = await Location.getCurrentPositionAsync({});
      const { longitude, latitude } = location.coords;
          const response = await fetch(
        `${URL}lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
            if(response.ok){
        setWeather(data);
        setTemp(data.current.temp_c);
      }
      else {
        setWeather("error");
        setTemp("there was a problem")
        alert(response.status);
        
      }

      /* const data = API_DUMMY;
      setWeather(data);
      setTemp(data.current.temp_c); */
    } catch (error) {
      alert(error);
    }
  }

  return weather ? (
      <SafeAreaView style={styles.container}> 
      <StatusBar style="light" />
      <Text style= {styles.header}>Today's Report</Text>
      <View style={styles.main}>
        <WeatherInfo weather={weather} />
      </View>
    </SafeAreaView>
  ) : (
    <View style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0C1E",
    //backgroundColor: "white",
    //alignItems: "center",
   // justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  main: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    position: 'relative',
  },
  header: {
    color: "white",
     fontSize: 20,
     fontWeight: "600",
     position: 'absolute',
      top: 40,
      left: 20,
      elevation: 10,

  }
});
