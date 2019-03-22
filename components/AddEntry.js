import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { getMetricMetaInfo } from '../utils/helpers'
import { Slider } from 'react-native-gesture-handler';

export default class AddEntry extends Component {
  render (){
    state = {
      run: 0,
      bike: 0,
      swim: 0,
      sleep: 0,
      eat: 0,
    }

    increment = metric => {
      const { max, step } = getMetricMetaInfo(metric)

      this.setState(state => {
        const count = state[metric] + step

        return {
          ...state,
          [metric]: count > max ? max : count,
        }
      })
    }
    decrement = metric => {
      this.setState(state => {
        const count = state[metric] - getMetricMetaInfo(metric).step

        return {
          ...state,
          [metric]: count < 0 ? 0 : count,
        }
      })
    }

    slide = (metric, value) => {
      this.setState({
        [metric]: value,
      })
    }

    return (
      <View>
        {getMetricMetaInfo('bike').getIcon()}
      </View>
    )
  }
}