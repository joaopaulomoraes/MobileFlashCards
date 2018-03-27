import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Header,
  Left,
  Body,
  Right,
  Title
} from 'native-base'

const AppHeader = props => {
  const { title } = props
  return (
    <Header>
      <Left />
      <Body>
        <Title>{title}</Title>
      </Body>
      <Right />
    </Header>
  )
}

AppHeader.defaultProps = {
  title: 'FlashCards App'
}

AppHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default AppHeader
