import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAtXqIEfiYnOeZ59wioiBt3WPieuPk-CIA",
  authDomain: "first-react-firebase-2daaf.firebaseapp.com",
  databaseURL: "https://first-react-firebase-2daaf.firebaseio.com",
  projectId: "first-react-firebase-2daaf",
  storageBucket: "first-react-firebase-2daaf.appspot.com",
  messagingSenderId: "127854460835",
  appId: "1:127854460835:web:f5defa227905b1d2a96416",
  measurementId: "G-2Z36511ZFB"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const messaging = firebase.messaging();