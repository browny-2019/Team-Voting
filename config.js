import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB1Xy7x-94FUhV6cu7sWWl5XyI7pbRSgRg",
  authDomain: "team-voting-app-ce60b.firebaseapp.com",
  databaseURL: "https://team-voting-app-ce60b-default-rtdb.firebaseio.com",
  projectId: "team-voting-app-ce60b",
  storageBucket: "team-voting-app-ce60b.appspot.com",
  messagingSenderId: "394061309349",
  appId: "1:394061309349:web:5462182243b529939eb44c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
