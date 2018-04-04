import { AsyncStorage } from 'react-native'

export const FLASHCARDS_STORAGE_KEY = '@FlashCards:cards'

export const deckData = {
  allDecks: {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
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
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
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
}

export const sumitDeck = () => {
  
}

export const removeDeck = () => {
  
}
