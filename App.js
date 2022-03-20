import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import WeatherInfo from "./components/WeatherInfo";
import Tabbar from "@arelstone/react-native-animated-tabbar";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen  from "./screens/HomeScreen";

export default function App() {
  const API_KEY = "9d8f4895a487445db1b165027221403 ";
  const URL =
    "http://api.weatherapi.com/v1/forecast.json?key=9d8f4895a487445db1b165027221403&q=Brisbane&days=1&aqi=no&alerts=yes";
  const [weather, setWeather] = useState(null);
  const [temp, setTemp] = useState(null);
  const icon1 = <Icon name="home-outline" size={25} color="#f8de7e" />;
  const icon1_active = <Icon name="home" size={25} color="#f8de7e" />;
  const icon2 = <Icon name="sunny-outline" size={25} color="#f8de7e" />;
  const icon2_active = <Icon name="sunny" size={25} color="#f8de7e" />;
  const icon3 = <Icon name="rainy-outline" size={25} color="#f8de7e" />;
  const icon3_active = <Icon name="rainy" size={25} color="#f8de7e" />;

  useEffect(() => {
    load();
  }, []);
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
      if (response.ok) {
        setWeather(data);
        setTemp(data.current.temp_c);
      } else {
        setWeather("error");
        setTemp("there was a problem");
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
      <HomeScreen weather = {weather}/>
      <Tabbar
        tabs={[
          {
            icon: icon1,
            activeIcon: icon1_active,
            onPress: () => {},
            label: "Home",
            active: true,
          },
          {
            icon: icon2,
            activeIcon: icon2_active,
            onPress: () => {},
            label: "Sun",
          },
          {
            icon: icon3,
            activeIcon: icon3_active,
            onPress: () => {},
            label: "Rain",
          },
        ]}
        backgroundColor="#232435"
        circleAnimationDurationMs={1000}
  
      />
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
    position: "relative",
  },
  header: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    position: "absolute",
    top: 40,
    left: 20,
    elevation: 10,
  },
});
