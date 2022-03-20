import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  VictoryBar,
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
} from "victory-native";

const LineChart = ({ weather, date, month, year }) => {
  let hours = new Date().getHours();
  const arr = weather.forecast.forecastday.map((day) => day.hour.slice(0, 24));
  const time = arr.map((item) => item.slice(0, 24));
  console.log(time[0][23].time);
  if (hours.toString().length === 1) {
    hours = "0" + hours;
  }
  let hour1 = hours + 1
  if(hour1 > 23){
    hour1 = 23
  }
  let hour2 = hours + 2
  if(hour2 > 23){
    hour2 = 23
  } 
  let hour_1 = hours - 1;
  if(hour_1 < 0){
    hour_1 = 0
  }
  let hour_2 = hours - 2;
  if(hour_2 < 0){
    hour_2 = 0
  }

  return (
    <View style={styles.container}>
      <VictoryChart width={330} height={300} theme={VictoryTheme.material}>
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: "white" },
            ticks: { stroke: "white" },
            tickLabels: { fill: "white" },
            grid: { stroke: "transparent" },
          }}
          standalone={false}
        />
        <VictoryAxis
          style={{
            axis: { stroke: "white" },
            ticks: { stroke: "white" },
            tickLabels: { fill: "white" },
            grid: { stroke: "transparent" },
          }}
          standalone={false}
        />
        <VictoryLine
          style={{
            data: { stroke: "#f8de7e", strokeWidth: 2, fill: "transparent" },
            grid: { strokeDasharray: "0,5" },

            //parent: { border: "1px solid #ccc"}
          }}
          interpolation="natural"
          data={[
            { x: `${hour_2}:00`, y: time[0][hour_2].temp_c },
            { x: `${hour_1}:00`, y: time[0][hour_1].temp_c },
            { x: `${hours}:00`, y: time[0][hours].temp_c },
            { x: `${hour1}:00`, y: time[0][hour1].temp_c },
            { x: `${hour2}:00`, y: time[0][hour2].temp_c },
          ]}
          animate={{
            duration: 2000,
            onLoad: { duration: 2000 },
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
