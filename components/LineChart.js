import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  VictoryBar,
  VictoryLine,
  VictoryChart,
  VictoryTheme,
} from "victory-native";

const LineChart = ({ weather, date, month, year }) => {
  let hours = new Date().getHours();
  const arr = weather.forecast.forecastday.map((day) => day.hour.slice(0, 23));
  const time = arr.map((item) => item.slice(0, 23));
  console.log(time[0][hours].time);
  if (hours.toString().length === 1) {
    hours = "0" + hours;
  }

  return (
    <View style={styles.container}>
      <VictoryChart width={350} height={300} theme={VictoryTheme.material}>
        <VictoryLine
          style={{
            data: { stroke: "#c43a31" },
            //parent: { border: "1px solid #ccc"}
          }}
          data={[
            { x: `${hours - 2}:00`, y: time[0][hours - 2].temp_c },
            { x: `${hours - 1}:00`, y: time[0][hours - 1].temp_c },
            { x: `${hours}:00`, y: time[0][hours].temp_c },
            { x: `${hours + 1}:00`, y: time[0][hours + 1].temp_c },
            { x: `${hours + 2}:00`, y: time[0][hours + 2].temp_c },
          ]}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
        />
      </VictoryChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default LineChart;
