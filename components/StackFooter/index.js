import React from 'react'
import {
  FooterTab,
  Button,
  Icon,
  Text,
} from 'native-base'

const StackFooter = ({ navigation }) => {
  return (
    <FooterTab>
      <Button
        vertical
        onPress={() => navigation.navigate('App')}
      >
        <Icon name="logo-buffer" />
        <Text>Decks</Text>
      </Button>
      <Button
        vertical
        onPress={() => navigation.navigate('AddDeck')}
      >
        <Icon
          ios="ios-add-circle"
          android="md-add-circle"
        />
        <Text>New Deck</Text>
      </Button>
    </FooterTab>
  )
}

export default StackFooter
