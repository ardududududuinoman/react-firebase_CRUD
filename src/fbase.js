import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyA-dYWAy6A96rbmX8BDDn4kwgx1a7j92j8",
  authDomain: "reactcrud-8a751.firebaseapp.com",
  projectId: "reactcrud-8a751",
  storageBucket: "reactcrud-8a751.appspot.com",
  messagingSenderId: "194308173751",
  appId: "1:194308173751:web:93ab6fa9f63c3e81dc8232",
};
firebase.initializeApp(firebaseConfig);
export default firebase;
