import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

// Utils
import { purple } from '../utils/colors'

export default function TextButton ({ value, onPress, style = {} }) {
  return (
    <TouchableOpacity style={[styles.reset, style]} onPress={onPress}>
      <Text>{value}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center',
    color: purple,
  }
})