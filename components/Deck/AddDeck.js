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

import { addDeck } from '../../actions'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: width / 12,
    flexDirection: 'column',
    justifyContent: 'center'
  }
})

class AddDeck extends Component {
  state = {
    deckTitle: ''
  }
  addDeck = () => {
    const { deckTitle } = this.state
    deckTitle !== ''
    ? this.props.addDeck( deckTitle )
    : Alert.alert(
      'Hey! 👋',
      'The deck needs a name!'
    )

    this.props.navigation.navigate(
      'DeckItem', {
        title: deckTitle 
      }
    )
  }
  render() {
    const { navigation } = this.props
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => navigation.navigate('Home')}
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
          <H1 style={{textAlign: 'center'}}>What's the title of your new Deck?</H1>
          <Form>
            <Item>
              <Input
                autoFocus
                placeholder="Deck title"
                onChangeText={ deckTitle => this.setState({ deckTitle }) }
              />
            </Item>
            <Button
              style={{marginTop: 32}}
              block
              primary
              onPress={() => this.addDeck()}
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
  addDeck: deckTitle => dispatch(addDeck(deckTitle))
})

export default connect(
  null,
  mapDispatchToProps
)(AddDeck)
