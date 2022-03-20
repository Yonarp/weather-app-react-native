import { View, Text, StyleSheet } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const WeatherDetailsCardComponent = ({ data,header,animation }) => {
  let anim;
  if(animation == "wind"){
    anim =  <LottieView
    style={{ width: "40%" }}
    source={require("../lottie/wind2.json")}
    autoPlay
    loop
  />
  }
  else{ if (animation == "humidity"){
    
     anim =  <LottieView
    style={{ width: "25%" }}
    source={require("../lottie/humid2.json")}
    autoPlay
    speed= {.5}
    loop
  />
  }
  else {
    anim =  <LottieView
    style={{ width: "50%" }}
    source={require("../lottie/rain.json")}
    autoPlay
    loop
  />
  }
}
  return (
    <View style={styles.card}>
      {anim}
      <Text style={styles.text}>{header}</Text>
      <Text style={styles.text2}>{data}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    width: "30%",
    padding: 5,
    backgroundColor: "#232435",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 5,
    marginLeft: 5,
    elevation: 10,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
  text2: {
    marginTop: 5,
    color: "#f8de7e",
    fontWeight: "200",
    fontSize: 15,
  },
});

export default WeatherDetailsCardComponent;
