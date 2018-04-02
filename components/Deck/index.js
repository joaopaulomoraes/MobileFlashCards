import React from 'react'
import { StyleSheet } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import {
  Content,
  Card,
  CardItem,
  Header,
  Left,
  Right,
  Body,
  Thumbnail,
  Button,
  Icon,
  Text,
  Title,
  H1,
  H3,
  Container
} from 'native-base'

import FlipCard from 'react-native-flip-card'
import AppHeader from '../AppHeader'

const styles = StyleSheet.create({
  deck: {
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 12
  }
})

export const Deck = ({ navigation, ...props }) => {
  return (
    <Grid>
      <Row>
        <Col>
          <Card style={styles.deck}>
            <CardItem>
              <Body style={{ alignItems: 'center' }}>
                <Thumbnail source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png' }} />
                <H1>{'{title}'}</H1>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>{'{number}'} cards</Text>
            </CardItem>
          </Card>
        </Col>
      </Row>
    </Grid>
  )
}

const deckData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export const DeckList = ({ navigation, ...props }) => {
  return (
    <Container>
      <AppHeader title="Decks" />
      <Content padder>
        {[1, 2, 3].map(deck =>
          <Deck
            key={deck}
            {...props}
          />
        )}
      </Content>
    </Container>
  )
}

export const DeckCard = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Deck</Title>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Grid>
          <Row>
            <Col size={1}>
              <FlipCard 
                style={{ borderWidth: 0 }}
                friction={12}
                perspective={1000}
                flipHorizontal={true}
                flipVertical={false}
                alignWidth={true}
                alignHeight={true}
              >
                <Grid>
                  <Row>
                    <Col size={1}>
                      <Card style={styles.deck}>
                        <CardItem>
                          <Body style={{ alignItems: 'center' }}>
                            <Thumbnail source={{ uri: 'https://devstickers.com/assets/img/pro/h8ci.png' }} />
                            <H1>What is React?</H1>
                          </Body>
                        </CardItem>
                        <CardItem footer>
                          <Text>{2} cards</Text>
                        </CardItem>
                      </Card>
                    </Col>
                  </Row>
                </Grid>
                <Card style={styles.deck}>
                  <CardItem>
                    <Body>
                      <H3>A library for managing user interfaces</H3>
                    </Body>
                  </CardItem>
                </Card>
              </FlipCard>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                block
                light
                onPress={() => alert('AddCard')}
              >
                <Text>Add Card</Text>
              </Button>
            </Col>
            <Col size={.1} />
            <Col>
              <Button
                block
                primary
                onPress={() => navigation.navigate('Quiz')}
              >
                <Text>Start Quiz</Text>
              </Button>
            </Col>
          </Row>
        </Grid>
      </Content>
    </Container>
  )
}
