import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title
} from 'native-base'

const AppHeader = props => {
  const { title } = props
  return (
    <Container>
      <Header>
        <Left/>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right/>
      </Header>
    </Container>
  )
}

AppHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default AppHeader
