import React from 'react'
import { View, Platform } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

//Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

//Components
import AddEntry from './components/AddEntry'
import History from './components/History'

//Navigation
import TabNav from './components/TabNav'

//Utils
import { white, purple } from './utils/colors'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <TabNav />
        </View>
      </Provider>
    )
  }
}