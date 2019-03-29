import React from 'react'
import { View } from 'react-native'

//Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

//Components
import AddEntry from './components/AddEntry'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View>
          <AddEntry />
        </View>
      </Provider>
    )
  }
}