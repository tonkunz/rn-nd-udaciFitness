import React from 'react'
import { View, Platform } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

//Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

//Components
import UdaciStatusBar from './components/UdaciStatusBar'

//Navigation
import StackNav from './components/StackNav'

//Utils
import { white, purple } from './utils/colors'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor={purple} barStyle='light-content'/>
          <StackNav />
        </View>
      </Provider>
    )
  }
}