import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDFxtpcWc1AdjXNz6IatgI2PnHANDyx6bk",
    authDomain: "formularteam.firebaseapp.com",
    projectId: "formularteam",
    storageBucket: "formularteam.appspot.com",
    messagingSenderId: "759342495169",
    appId: "1:759342495169:web:fd4c4c88d82d22567c2b40"
};

firebase.initializeApp(firebaseConfig);

export default firebase;