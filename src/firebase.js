import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCxtfb0T11--4aVag5yS0RpToYSro5SLvU",
  authDomain: "tinder-clone-fcdbf.firebaseapp.com",
  databaseURL: "https://tinder-clone-fcdbf.firebaseio.com",
  projectId: "tinder-clone-fcdbf",
  storageBucket: "tinder-clone-fcdbf.appspot.com",
  messagingSenderId: "399587088985",
  appId: "1:399587088985:web:b3cc67858bf2d030772f48",
  measurementId: "G-5NFVE7NV3W",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
