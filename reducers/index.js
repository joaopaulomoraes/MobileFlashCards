import {
  GET_DECKS,
  GET_DECK,
  ADD_DECK,
  DELETE_DECK_STORAGE,
  ADD_CARD_TO_DECK
} from '../actions'

const decks = (state = {}, action) => {
  const {
    decks,
    deck,
    title,
    deckCard
  } = action
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        decks: {
          ...decks
        }
      }
    
    case GET_DECK:
      return {
        ...state,
        decks: {
          ...deck
        }
      }

    case ADD_DECK:
      return {
        ...state
      }

    case ADD_CARD_TO_DECK:
      return {
        ...state,
        decks: {
          ...deckCard,
          title: 'Deck hacked!'
        }
      }
    
    case DELETE_DECK_STORAGE:
      return {
        ...state
      }
    
    default:
      return state
  }
}

export default decks
