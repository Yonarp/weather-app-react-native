import { View, Text, StyleSheet } from "react-native";
import React from "react";
import WeatherDetailsCardComponent from "./WeatherDetailsCardComponent";
import * as windAnimation from "../lottie/wind.json";

const WeatherDetailsCard = ({ weather }) => {
  return (
    <View style={styles.container}>
      <WeatherDetailsCardComponent
        data={weather.current.wind_kph + " km/h"}
        header={"Wind Speed"}
        animation = {"wind"}
      />
      <WeatherDetailsCardComponent data={weather.current.humidity + "%"} header = {"Humidity"} animation = {"humidity"}/>
      <WeatherDetailsCardComponent data={weather.forecast.forecastday[0].day.daily_chance_of_rain + "%"} header = {"Rain"}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
  },
});

export default WeatherDetailsCard;
