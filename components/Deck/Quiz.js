import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Dimensions
} from 'react-native'
import {
  Col,
  Row,
  Grid
} from 'react-native-easy-grid'
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  View,
  Text,
  Title,
  Button,
  Icon,
  DeckSwiper
} from 'native-base'
import { NavigationActions } from 'react-navigation'
import FlipCard from 'react-native-flip-card'
import AppHeader from '../AppHeader'
import {
  DeckFront,
  DeckBack
} from '../Deck'

import { getDeck } from '../../actions'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  content: {
    padding: width / 12
  },
  score: {
    flex: 1,
    alignItems: 'center'
  }
})

export const QuizScore = props => {
  const {
    score,
    navigation,
    resetQuiz
  } = props

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
            onPress={() => navigation.navigate('Home')}
          >
            <Text>All Decks</Text>
          </Button>
        </Col>
      </Row>
    </Grid>
  )
}

class DeckCard extends Component {
  state = {
    question: 0,
    correct: 0
  }
  
  componentDidMount () {
    const {
      getDeck,
      navigation: {
        state: {
          params
        }
      }
    } = this.props

    getDeck(params.title)
  }

  handleIncorrect = () => {
    this.setState(prevState => {
      return { question: prevState.question + 1 }
    })
  }

  handleCorrect = () => {
    this.setState(prevState => {
      return {
        question: prevState.question + 1,
        correct: prevState.correct + 1
      }
    })
  }

  resetQuiz = () => {
    this.setState({
      question: 0,
      correct: 0
    })
  }

  render() {
    const { navigation, decks } = this.props
    const { question, correct } = this.state
    
    const totalQuestions = Object.values(decks)[0].questions.length
    const quizComplete = question === totalQuestions
    const score = Math.round((correct / totalQuestions) * 100)
    
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => navigation.goBack()}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Quiz</Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.content}>
        {quizComplete
          ?
            <QuizScore
              score={score}
              navigation={navigation}
              resetQuiz={this.resetQuiz}
            />
          : decks !== undefined ?
            <Grid>
              <Row>
                <Col style={{marginBottom: 12}}>
                  <Text>{`${question + 1} of ${totalQuestions}`}</Text>
                </Col>
              </Row>
              <Row>
                <Col size={1}>
                  <FlipCard
                    style={{ borderWidth: 0 }}
                    friction={12}
                    perspective={1000}
                    flipHorizontal={true}
                    flipVertical={false}
                  >
                    <DeckFront
                      isFlipped
                      question={question}
                      deck={Object.values(decks)[0]}
                    />
                    <DeckBack
                      isFlipped
                      question={question}
                      deck={Object.values(decks)[0]}
                    />
                  </FlipCard>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    block
                    danger
                    onPress={() => this.handleIncorrect()}
                  >
                    <Text>Incorrect</Text>
                  </Button>
                </Col>
                <Col size={.1} />
                <Col>
                  <Button
                    block
                    primary
                    onPress={() => this.handleCorrect()}
                  >
                    <Text>Correct</Text>
                  </Button>
                </Col>
              </Row>
            </Grid>
          : null}
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = ({ decks }) => ({
  decks
})

const mapDispatchToProps = dispatch => ({
  getDeck: title => dispatch(getDeck(title))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckCard)
