import { AsyncStorage } from 'react-native';
import auth from '@react-native-firebase/auth';

export const USER_KEY = 'auth-demo-key';

export class Auth {
  async login(email, password) {
    try {
      await auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('login successful');
          AsyncStorage.setItem(USER_KEY, 'true');
          this.props.navigation.navigate('App');
        })
        .catch(e => {
          console.log(e.message);
          throw e.message;
        });
    } catch (e) {
      console.log(e.message);
      throw e.message;
    }
  }

  async register(email, password) {
    try {
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          AsyncStorage.setItem(USER_KEY, 'true');
          this.props.navigation.navigate('Todos');
        })
        .catch(e => {
          console.log(e.message);
          throw e.message;
        });
    } catch (e) {
      console.log(e.message);
      throw e.message;
    }
  }

  async logout(email, password) {
    try {
      await auth().signOut(() => {
        AsyncStorage.removeItem(USER_KEY);
      });
    } catch (e) {
      console.log(e.message);
      throw e.message;
    }
  }

  isSignedIn() {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(USER_KEY)
        .then(res => {
          if (res !== null) {
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch(err => reject(err));
    });
  }
}
