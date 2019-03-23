import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'

export default function UdaciStepers ({ value, max, step, unit, onIncrement, onDecrement}) {
  return (
    <View>
      <View>
        <TouchableOpacity onPress={onDecrement} size={30} color='black'>
          <FontAwesome name='minus'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={onIncrement} size={30} color='black'>
          <FontAwesome name='plus'/>
        </TouchableOpacity>
      </View>
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  )
}