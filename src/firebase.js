import firebase from 'firebase/app';
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: 'AIzaSyD5GbAEyhxeSc1_IISDLJ7ADtv8xB0_rb0',
  authDomain: 'login-auth-8229a.firebaseapp.com',
  databaseURL: 'https://login-auth-8229a.firebaseapp.com',
  projectId: 'login-auth-8229a',
  storageBucket: 'login-auth-8229a.appspot.com',
  messagingSenderId: '17224338155',
  appId: '1:17224338155:web:e93fa0e81305fed0c74cae',
});

export const auth = app.auth();
export default app;