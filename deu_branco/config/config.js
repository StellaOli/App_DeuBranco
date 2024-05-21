// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXnmvolZgbn89vE9KpVV_k5T5l7IlEGEY",
  authDomain: "deu-branco.firebaseapp.com",
  databaseURL: "https://deu-branco-default-rtdb.firebaseio.com",
  projectId: "deu-branco",
  storageBucket: "deu-branco.appspot.com",
  messagingSenderId: "206190917769",
  appId: "1:206190917769:web:0cd2eb11ae65d8be092e58"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;