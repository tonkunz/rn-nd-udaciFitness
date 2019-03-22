import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello App!</Text>
        <Ionicons name='md-pizza'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
