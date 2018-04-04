import {
  GET_DECKS
} from '../actions'

import { deckData } from '../api'

const decks = (state = deckData, action) => {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state
      }
    
    default:
      return state
  }
}

export default decks
