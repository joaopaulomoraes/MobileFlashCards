import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Dimensions 
} from 'react-native'
import {
  Container,
  View,
  DeckSwiper
} from 'native-base'

import AppHeader from '../AppHeader'
import { DeckFront } from '../Deck'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  content: {
    padding: width / 12
  }
})

class DeckList extends Component {
  render() {
    const { allDecks } = this.props
    return (
      <Container>
        <AppHeader title="Decks" />
          <View style={styles.content}>
            <DeckSwiper
              ref={(c) => this._deckSwiper = c}
              dataSource={Object.values(allDecks)}
              renderItem={deck =>
                <DeckFront
                  deckCover
                  deck={deck}
                />
              }
            />
          </View>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(DeckList)
