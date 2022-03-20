import { View, Text,StyleSheet} from 'react-native'
import React from 'react'
import WeatherInfo from '../components/WeatherInfo'

const HomeScreen = ({navigation,weather}) => {
  return (
    <View style={styles.container}>
         <Text style={styles.header}>Today's Report</Text>
          <View style={styles.main}>
            <WeatherInfo weather={weather} />
          </View>
    </View>
  )
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

export default HomeScreen