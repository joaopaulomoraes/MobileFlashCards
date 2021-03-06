import React from 'react'
import { connect } from 'react-redux'
import {
  TabNavigator,
  StackNavigator
} from 'react-navigation'
import {
  Footer,
  FooterTab,
  Button,
  Icon,
  Text
} from 'native-base'

import DeckList from '../Deck/DeckList'
import DeckItem from '../Deck/DeckItem'
import Quiz from '../Deck/Quiz'
import AddDeck from '../Deck/AddDeck'
import AddDeckCard from '../Deck/AddDeckCard'

export const StackFooter = TabNavigator(
  {
    DeckList,
    AddDeck
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: ({ navigationState, navigation }) => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={navigationState.index === 0}
              onPress={() => navigation.navigate('DeckList')}
              style={{ backgroundColor: 'transparent' }}
            >
              <Icon name="logo-buffer" />
              <Text>Decks</Text>
            </Button>
            <Button
              vertical
              active={navigationState.index === 1}
              onPress={() => navigation.navigate('AddDeck')}
              style={{ backgroundColor: 'transparent' }}
            >
              <Icon
                ios="ios-add-circle"
                android="md-add-circle"
              />
              <Text>Add Deck</Text>
            </Button>
          </FooterTab>
        </Footer>
      )
    }
  }
)

const StackNavigation = StackNavigator(
  {
    Home: {
      screen: StackFooter,
    },
    DeckItem,
    AddDeck,
    AddDeckCard,
    Quiz
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
)

export default connect()(StackNavigation)
