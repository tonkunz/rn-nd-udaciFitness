import react from 'react'
import { Platfrom } from 'react-native'
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation'

// Components
import EntryDetail from './EntryDetail'
import TabNav from './TabNav'

// Utils
import { white, purple } from '../utils/colors'

const router = {
  Home: {
    screen: TabNav,
    navigationOptions: {
      header: null
    }
  },
  EntryDetail: {
    screen: EntryDetail,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  }
}

const StackNav = createStackNavigator(router)

export default createAppContainer(StackNav)