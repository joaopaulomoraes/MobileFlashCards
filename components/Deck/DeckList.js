import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Dimensions
} from 'react-native'
import {
  Container,
  View,
  Icon,
  Text,
  DeckSwiper
} from 'native-base'

import AppHeader from '../AppHeader'
import { DeckFront } from '../Deck'
import NotFound from '../NotFound'

const { width, height } = Dimensions.get('window')

import { getDecks } from '../../actions'

const styles = StyleSheet.create({
  content: {
    padding: width / 12
  },
  description: {
    flex: 1,
    alignItems: 'center',
    marginTop: height / 1.6
  }
})

class DeckList extends Component {
  componentDidMount () {
    this.props.dispatch(getDecks())
  }
  render() {
    const { decks, navigation } = this.props
    return (
      <Container>
        <AppHeader title="Decks" />
        {decks !== undefined ?
        <View>
          <View style={styles.content}>
            <DeckSwiper
              ref={(c) => this._deckSwiper = c}
              dataSource={Object.values(decks)}
              renderItem={deck =>
                <DeckFront
                  deckCover
                  deck={deck}
                  navigation={navigation}
                />
              }
            />
          </View>
          <View style={styles.description}>
            <Icon name="swap" />
            <Text>Move to change the decks</Text>
          </View>
        </View>
        : <NotFound />}
      </Container>
    )
  }
}

const mapStateToProps = ({ decks }) => ({
  decks
})

export default connect(mapStateToProps)(DeckList)
