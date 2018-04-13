import React, { Component } from 'react'
import Expo from 'expo'
import store from './store'
import { Provider } from 'react-redux'
import { Container, Text } from 'native-base'
import { setLocalNotification } from './utils/LocalNotifications'

import StackNavigation from './components/StackNavigation'

class App extends Component {
  state = {
    isReady: false
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    })
    this.setState({ isReady: true })

    setLocalNotification()
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />
    }
    return (
      <Provider store={store}>
        <Container>
          <StackNavigation />
        </Container>
      </Provider>
    )
  }
}

export default App
