import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { getMetricMetaInfo, timeToString } from '../utils/helpers'

//Components
import UdaciSlider from './UdaciSlider'
import UdaciStepers from './UdaciStepers'
import DateHeader from './DateHeader'

function SubmitBtn ({ onPress }) {
  
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <Text>SUBMIT</Text>
    </TouchableOpacity>
  )
}

export default class AddEntry extends Component {
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

  submit = () => {
    const key = timeToString()
    const entry = this.state

    // Update Redux

    this.setState({
      run: 0,
      bike: 0,
      swim: 0,
      sleep: 0,
      eat: 0,
    })

    // Navigate to Home

    // Save to DB

    // Clearn local notification
  }
  
  render (){
    const metaInfo = getMetricMetaInfo()

    return (
      <View>
        <DateHeader date={(new Date()).toLocaleDateString()}/>
        {Object.keys(metaInfo).map(key => {
          const { getIcon, type, ...rest} = metaInfo[key]
          const value = this.state[key]

          return (
            <View key={key}>
              {getIcon()}
              {type === 'slider'
                ? <UdaciSlider
                    value={value}
                    onChange={value => slide(key, value)}
                    {...rest}
                  />
                : <UdaciStepers
                    value={value}
                    onIncrement={() => increment(key)}
                    onDecrement={() => decrement(key)}
                    {...rest}
                  />
              }
            </View>
          )
        })}
        <SubmitBtn onPress={this.submit}/>
      </View>
    )
  }
}