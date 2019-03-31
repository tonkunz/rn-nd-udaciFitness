import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import DateHeader from './DateHeader'
import { getMetricMetaInfo } from '../utils/helpers'
import { gray } from '../utils/colors'

export default function MetricCard ({ date, metrics }) {
  return (
    <View>
      {date && <DateHeader date={date}/>}
      {Object.keys(metrics).map(key => {
        const { getIcon, displayName, unit, backgroundColor } = getMetricMetaInfo(key)
        return (
          <View style={styles.metric} key={key}>
            {getIcon()}
            <View>
              <Text style={{fontSize: 20}}>
                {displayName}
              </Text>
              <Text style={{fontSize: 16, color: gray}}>
                {key[key]}{unit}
              </Text>
            </View>
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  metric: {
    flexDirection: 'row',
    marginTop: 12
  },
})