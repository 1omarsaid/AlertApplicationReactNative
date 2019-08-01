import uuid from 'uuid';
import firebase from 'react-native-firebase'


class FireConfig {

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }

    get timestamp() {
        return Date.now();
      }

      
}