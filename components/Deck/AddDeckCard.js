import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet } from 'react-native'
import {
  Container,
  Content,
  Header,
  Icon,
  Text,
  H1,
  Form,
  Item,
  Input,
  Button,
  Left,
  Right,
  Title,
  Body
} from 'native-base'
import {
  Keyboard,
  Alert,
  Dimensions
} from 'react-native'
import { NavigationActions } from 'react-navigation'

import { addCardToDeck } from '../../actions'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: width / 12,
    flexDirection: 'column',
    justifyContent: 'center'
  }
})

class AddDeckCard extends Component {
  state = {
    question: '',
    answer: ''
  }
  addCardToDeck = title => {
    const {
      question,
      answer
    } = this.state

    question !== '' && answer !== ''
    ? (
      this.props.addCardToDeck(title, { question, answer }),
      this.props.navigation.navigate(
        'DeckItem', {
          title: this.props.navigation.state.params.title 
        }
      ))
    : Alert.alert(
      'Hey! 👋',
      'The card needs a question and an answer!'
    )
  }
  render() {
    const { navigation, navigation: { state: { params } } } = this.props
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => navigation.goBack()}
            >
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Add Deck</Title>
          </Body>
          <Right />
        </Header>
        <Content contentContainerStyle={styles.content}>
          <Form>
            <Item last>
              <Input
                autoFocus
                placeholder="Question"
                onChangeText={ question => this.setState({ question }) }
              />
            </Item>
            <Item last>
              <Input
                placeholder="Answer"
                onChangeText={ answer => this.setState({ answer }) }
              />
            </Item>
            <Button
              style={{marginTop: 32}}
              block
              primary
              onPress={() => this.addCardToDeck(params.title)}
              onSubmitEditing={Keyboard.dismiss}
            >
              <Text>Add</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}

mapDispatchToProps = dispatch => ({
  addCardToDeck: (title, card) => dispatch(addCardToDeck(title, card))
})

export default connect(
  null,
  mapDispatchToProps
)(AddDeckCard)
