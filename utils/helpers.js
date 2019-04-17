import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'App:notifications'

export function clearLocalNotifications(){
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduleNotificationsAsync)
}

function createNotification(){
    return {
        title: 'Lembrete do seu App',
        body: 'Não esquece de praticar Hj!',
        ios:{
            sound: true,
        },
        android:{
            sound: true,
            priority:'high',
            sticky: false,
            vibrate: true,
        }
    }

}

export function setLocalNotification(){
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if(data === null)
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                .then(({status}) =>{
                    if(status === 'granted')
                        Notifications.cancelAllScheduledNotificationsAsync()

                        let tomorrow = new Date()
                        tomorrow.setDate(tomorrow.getDate() + 1)
                        tomorrow.setHours(20)
                        tomorrow.setMinutes(0)

                        Notifications.scheduleLocalNotificationAsync(
                            createNotification(),
                            {
                                time: tomorrow,
                                repeat: 'day',
                            }
                        )
                        AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                })
    })
}