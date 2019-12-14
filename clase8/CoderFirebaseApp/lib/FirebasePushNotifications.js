import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

import * as firebase from 'firebase'
import "firebase/firestore"

async function registerForPushNotificationsAsync() {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
  
    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
  
    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
        console.log("Me fui", finalStatus)
        return;
    }
  
    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();
  
    // POST the token to your backend server from where you can retrieve it to send push notifications.
    console.log("Token", token)

    const db = firebase.firestore()
    db.collection("usuarios").doc("SKm9CJLY2o9ETEQ3JV8x").update({
        pushToken: token
    })

}

export default registerForPushNotificationsAsync;