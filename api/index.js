import { AsyncStorage } from 'react-native'

export const FLASHCARDS_STORAGE_KEY = '@FlashCards:decks'

export const deckData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ],
    thumbnail: {
      default: require('../assets/react.png'),
      white: require('../assets/react-white.png')
    },
    backgroundColor: '#63DBFB'
  },
  Redux: {
    title: 'Redux',
    questions: [
      {
        question: 'What is Redux?',
        answer: 'Redux is a predictable state container for JavaScript apps'
      }
    ],
    thumbnail: {
      default: require('../assets/redux.png'),
      white: require('../assets/redux-white.png')
    },
    backgroundColor: '#764ABC'
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ],
    thumbnail: {
      default: require('../assets/javascript.png'),
      white: require('../assets/javascript-white.png')
    },
    backgroundColor: '#FBDE34'
  }
}

/**
 * @description Promise to get all data of all decks
 * @returns {Promise} The Promise object that represents all decks
 */
export const getDecks = () => {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(decks =>
    decks === null ? (
      AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(deckData)),
      deckData
    ) : JSON.parse(decks)
  )
}

/**
 * @description Promise to get all data of a deck
 * @param {string} title - Deck title
 * @returns {Promise} The Promise object that represents a deck
 */
export const getDeck = title => {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(deck => {
    const state = JSON.parse(deck)
    return {
      [title]: state[title]
    }
  })
}

/**
 * @description Promise to create a deck
 * @param {string} title - Title with form value
 * @returns {Promise} The Promise object that represents a new deck
 */
export const addDeck = title => {
  AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title,
      questions: []
    }
  }))

  return getDeck(title)
}

/**
 * @description Promise to create a card in deck
 * @param {string} title - Title with form value
 * @param {object} object - Card with a question and an answer
 * @returns {Promise} The Promise object that represents a new card
 */
export const addCardToDeck = (title, object) => {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(decks => {
    decks = JSON.parse(decks)
    decks[title].questions.push(object)
    return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(decks))
  })
}

/**
 * @description Promise to delete all data in the Storage
 * @returns {Promise} The Promise object
 */
export const deleteDeckStorage = () => {
  return AsyncStorage.removeItem(FLASHCARDS_STORAGE_KEY)
}
