import * as firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyBNRxZ1bnkghS2pnJztOTmO1pGYhYrbI0U",
  authDomain: "melon-4fc60.firebaseapp.com",
  databaseURL: "https://melon-4fc60.firebaseio.com",
  projectId: "melon-4fc60",
  storageBucket: "melon-4fc60.appspot.com",
  messagingSenderId: "987033244988"
});

export const db = firebase.database();

