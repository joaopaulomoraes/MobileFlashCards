import React, { Component } from 'react'
import {
  StyleSheet,
  Dimensions
} from 'react-native'
import {
  View,
  Icon,
  Text
} from 'native-base'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  content: {
    padding: width / 12,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const NotFound = ({ message }) => {
  return (
    <View style={styles.content}>
      <Icon name="sad" />
      <Text>No decks here!</Text>
    </View>
  )
}

export default NotFound
