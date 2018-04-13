import React, { Component } from 'react'
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import {
  Col,
  Row,
  Grid
} from 'react-native-easy-grid'
import {
  Content,
  Card,
  CardItem,
  Body,
  Thumbnail,
  Button,
  Icon,
  Text,
  H1,
  View
} from 'native-base'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  content: {
    padding: width / 12
  },
  deck: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: height / 1.6,
    marginBottom: width / 12,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 12,
    borderRadius: 12
  },
  deckCard: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 6,
    width: width / 1.4,
    height: height / 1.8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    alignItems: 'center'
  },
  h1: {
    marginTop: width / 6,
    textAlign: 'center'
  },
  thumbnail: {
    width: width / 4,
    height: width / 4
  }
})

export const DeckFront = ({ deck, showAsDeckCard, deckCover, navigation, question, isFlipped }) => {
  const {
    title,
    questions,
    thumbnail,
    backgroundColor
  } = deck
  return (
    <Grid>
      <Row>
        <Col>
        {deckCover ?
          <Card style={[
            styles.deck,
            {backgroundColor: backgroundColor ? backgroundColor : '#778F9A'}
          ]}>
            <TouchableOpacity onPress={() => navigation.navigate('DeckItem', { title })}>
              <View style={styles.deckCard}>
                <CardItem style={{backgroundColor: 'transparent'}}>
                  <Body style={styles.body}>
                    <Thumbnail
                      square
                      source={thumbnail ? thumbnail.white : require('../../assets/decks-white.png')}
                      style={styles.thumbnail}
                    />
                    <H1 style={[
                      styles.h1, {
                        fontSize: 32,
                        color: 'white'
                      }
                    ]}>
                      {title}
                    </H1>
                  </Body>
                </CardItem>
                <CardItem
                  footer
                  style={{backgroundColor: 'transparent'}}
                >
                  <Text style={{color: 'white'}}>
                    {questions.length} {questions.length === 1 ? 'card' : 'cards'}
                  </Text>
                </CardItem>
              </View>
            </TouchableOpacity>
          </Card>
        : <Card style={[styles.deck]}>
            <CardItem>
              <Body style={styles.body}>
                <Thumbnail
                  square
                  source={thumbnail ? thumbnail.default : require('../../assets/decks.png')}
                  large
                />
                <H1 style={styles.h1}>{showAsDeckCard ? title : questions[question || 0].question}</H1>
              </Body>
            </CardItem>
            <CardItem
              footer
              style={{backgroundColor: 'transparent'}}
            >
            {isFlipped ?
              <Text style={{color: 'black'}}>
                👆 touch to see the answer
              </Text>
            :
              <Text style={{color: showAsDeckCard ? 'black' : 'white'}}>
                {showAsDeckCard ? questions.length : 0 } {showAsDeckCard ? questions.length === 1 ? 'card' : 'cards' : null}
              </Text>
            }
            </CardItem>
          </Card>
        }
        </Col>
      </Row>
    </Grid>
  )
}

export const DeckBack = ({ deck, question, isFlipped }) => {
  const { questions, thumbnail } = deck
  return (
    <Grid>
      <Row>
        <Col>
          <Card style={styles.deck}>
            <CardItem header>
              <Thumbnail
                square
                small
                source={thumbnail ? thumbnail.default : require('../../assets/decks.png')}
              />
            </CardItem>
            <CardItem>
              <Body style={styles.body}>
                <Text style={{textAlign: 'center'}}>{questions[question || 0].answer || 0 }</Text>
              </Body>
            </CardItem>
            <CardItem footer>
            {isFlipped ?
              <Text style={{color: 'black'}}>
                👆 Touch to see the question
              </Text>
            : null}
            </CardItem>
          </Card>
        </Col>
      </Row>
    </Grid>
  )
}
