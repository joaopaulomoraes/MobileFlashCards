export const GET_DECKS = 'GET_DECKS'
export const GET_DECK = 'GET_DECK'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD_TO_DECK = 'ADD_DECK'
export const DELETE_DECK_STORAGE = 'DELETE_DECK_STORAGE'
export const ADD_DECK_CARD = 'ADD_DECK_CARD'

import * as flashCardsAPI from '../api'

/**
 * @description Get all decks
 * @returns {object} action - The action type
 */
export const getDecks = () => {
  return dispatch => flashCardsAPI.getDecks().then(decks =>
    dispatch({ type: GET_DECKS, decks })
  )
}

/**
 * @description Get all the details of a deck
 * @param {string} title - Deck title
 * @returns {object} The deck data and action type
 */
export const getDeck = title => {
  return dispatch => flashCardsAPI.getDeck(title).then(deck =>
    dispatch({ type: GET_DECK, deck })
  )
}

/**
 * @description Create a new deck
 * @param {string} title - Deck title
 * @returns {object} The deck data and action type
 */
export const addDeck = title => {
  return dispatch => flashCardsAPI.addDeck(title).then(deck =>
    dispatch({ type: ADD_DECK, deck })
  )
}

/**
 * @description Create a new card in deck
 * @param {string} title - Deck title
 * @param {object} object - Object data with form values (question, answer)
 * @returns {object} The deck data and action type
 */
export const addCardToDeck = (title, object) => {
  return dispatch => flashCardsAPI.addCardToDeck(title, object).then(deckCard =>
    dispatch({ type: ADD_DECK, deckCard })
  )
}

/**
 * @description Delete all data in the Storage
 * @returns {object} action - The action type
 */
export const deleteDeckStorage = () => {
  return dispatch => flashCardsAPI.deleteDeckStorage().then(() =>
    dispatch({ type: DELETE_DECK_STORAGE })
  )
}
