import React, { Component } from 'react'
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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 32,
    flexDirection: 'column',
    justifyContent: 'center'
  }
})

const AddDeck = props => {
  const { navigation } = props
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
        <H1 style={{textAlign: 'center'}}>What's the title of your new Deck?</H1>
        <Form>
          <Item>
            <Input placeholder="Deck Title" />
          </Item>
          <Button
            style={{marginTop: 62}}
            block
            primary
          >
            <Text>Add</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  )
}

export default AddDeck
