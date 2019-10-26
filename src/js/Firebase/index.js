import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDnVVfhxDeK3jV0p7wGn7bHH0hlRmnNw2E",
  authDomain: "vereio.firebaseapp.com",
  databaseURL: "https://vereio.firebaseio.com",
  projectId: "vereio",
  storageBucket: "vereio.appspot.com",
  messagingSenderId: "155249696867",
  appId: "1:155249696867:web:46ddc21b609f0a6ee01856",
  measurementId: "G-ZEFN5EPCGV"
};
firebase.initializeApp(firebaseConfig);

export default firebase;