import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDuR-7C2lXyc1KMOC9DqZ5xHWq8bPIWnqw',
  authDomain: 'nextjs-typescript-fireba-1ffa5.firebaseapp.com',
  databaseURL: 'https://nextjs-typescript-fireba-1ffa5.firebaseio.com',
  projectId: 'nextjs-typescript-fireba-1ffa5',
  storageBucket: 'nextjs-typescript-fireba-1ffa5.appspot.com',
  messagingSenderId: '827059717429'
};
if (!firebase.apps.length) firebase.initializeApp(config);

export default firebase;
