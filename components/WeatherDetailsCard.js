import { Text, View,StyleSheet } from 'react-native'
import React, { Component } from 'react'

export class WeatherDetailsCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>WeatherDetailsCard</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {}
})
export default WeatherDetailsCard