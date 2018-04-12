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
  View,
  Header,
  Left,
  Body,
  Right,
  Text,
  Title,
  Button,
  Icon
} from 'native-base'
import { NavigationActions } from 'react-navigation'
import { DeckFront } from '../Deck'
import { getDeck } from '../../actions'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  content: {
    padding: width / 12
  }
})

class DeckItem extends Component {
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
  render() {
    const {
      getDeck,
      navigation: {
        state: {
          params
        }
      },
      navigation,
      decks
    } = this.props
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => navigation.navigate('Home')}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{params.title}</Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.content}>
          {decks !== undefined ?
            <Grid>
              <Row>
                <Col size={1}>
                  <DeckFront
                    showAsDeckCard
                    deck={Object.values(decks)[0]}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    block
                    onPress={() => navigation.navigate('AddDeckCard', { title: params.title })}
                  >
                    <Text>Add Card</Text>
                  </Button>
                </Col>
                <Col size={.1} />
                <Col>
                  <Button
                    block                   
                    onPress={() => navigation.navigate('Quiz')}
                  >
                    <Text>Start Quiz</Text>
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
)(DeckItem)
