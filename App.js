import React, { Component } from 'react'
import Expo from 'expo'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { Container, Text } from 'native-base'

import StackFooter from './components/StackFooter'

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
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />
    }
    return (
      <Provider store={createStore(reducer)}>
        <Container>
          <StackFooter />
        </Container>
      </Provider>
    )
  }
}

export default App
