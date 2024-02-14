import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTX3O_E1d4vj8o4Ily1OrjGt82dI0g61U",
  authDomain: "tik-tok-demo-c8727.firebaseapp.com",
  databaseURL: "https://tik-tok-demo-c8727.firebaseio.com",
  projectId: "tik-tok-demo-c8727",
  storageBucket: "tik-tok-demo-c8727.appspot.com",
  messagingSenderId: "661420991267",
  appId: "1:661420991267:web:ccb9201e2332df9bfea296",
  measurementId: "G-2CSBDK0ZKJ",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default db;
