export const GET_DECKS = 'GET_DECKS'
export const GET_DECK = 'GET_DECK'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD_TO_DECK = 'ADD_DECK'

export const getDecks = () => {
  return dispatch => {
    dispatch({ GET_DECKS })
  }
}
