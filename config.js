import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCywh8ykNne0QtSRvsVyeXUl_Kf9Yk1e3A",
    authDomain: "e-ride-227cb.firebaseapp.com",
    projectId: "e-ride-227cb",
    storageBucket: "e-ride-227cb.appspot.com",
    messagingSenderId: "681787758074",
    appId: "1:681787758074:web:0e95582e4f9e78582e4043"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
