import React from 'react'
import { AsyncStorage } from 'react-native'
import {
  Notifications,
  Permissions
} from 'expo'

const FLASHCARDS_NOTIFICATIONS_KEY = '@FlashCards:notifications'

export const clearLocalNotification = () => {
  return AsyncStorage.removeItem(FLASHCARDS_NOTIFICATIONS_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

const createNotification = () => {
  return {
    title: 'Let\'s practice?',
    body: "👋  do not forget to train your knowledge, start a quiz soon!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  }
}

export const setLocalNotification = () => {
  AsyncStorage.getItem(FLASHCARDS_NOTIFICATIONS_KEY).then(JSON.parse).then((data) => {
    data === null ?
      Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
        if (status === 'granted') {
          Notifications.cancelAllScheduledNotificationsAsync()

          let tomorrow = new Date()
          tomorrow.setDate(tomorrow.getDate() + 1)
          tomorrow.setHours(22)
          tomorrow.setMinutes(30)

          Notifications.scheduleLocalNotificationAsync(
            createNotification(),
              {
                time: tomorrow,
                repeat: 'day'
              }
            )

            AsyncStorage.setItem(FLASHCARDS_NOTIFICATIONS_KEY, JSON.stringify(true))
          }
        })
    : null
  })
}
