import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import {
  Col,
  Row,
  Grid
} from 'react-native-easy-grid'
import {
  View,
  Text,
  Button,
} from 'native-base'

import {
  clearLocalNotification,
  setLocalNotification
} from '../../utils/LocalNotifications'

const styles = StyleSheet.create({
  score: {
    flex: 1,
    alignItems: 'center'
  }
})

class QuizScore extends Component {
  componentDidMount () {
    clearLocalNotification().then(() => setLocalNotification())
  }

  render() {
    const {
      score,
      navigation,
      resetQuiz,
      navigation: {
        state: {
          params
        }
      }
    } = this.props

    return (
      <Grid style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <Row>
          <View style={styles.score}>
            <Text style={{
              fontSize: 68,
              marginBottom: 32
            }}>
              {score > 0 ? '🎉' : '😕'}
            </Text>
            <Text style={{
              fontSize: 28
            }}>
              {score > 0 ? 'Congratulations!' : 'Oh no!'}
            </Text>
            <Text>Your Score is {score} of 100</Text>
            <Text style={{
              fontSize: 32,
              marginTop: 32
            }}>
              {score === 100 ? '🏆' : score > 60 ? '🥇🥇🥇' : score > 40 ? '🥈🥈🥈' : score > 20 ? '🥉🥉🥉' : ''}
            </Text>
          </View>
        </Row>
        <Row style={{marginTop: 128}}>
          <Col>
            <Button
              block
              onPress={() => resetQuiz()}
            >
              <Text>Restart</Text>
            </Button>
          </Col>
          <Col size={.1} />
          <Col>
            <Button
              block
              onPress={() => navigation.navigate('DeckItem', { title: params.title })}
            >
              <Text>Back to Deck</Text>
            </Button>
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = ({ decks }) => ({
  decks
})

export default QuizScore
