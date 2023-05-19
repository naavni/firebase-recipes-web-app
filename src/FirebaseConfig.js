import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyA_XrZIXTKcfom6-Gny8E6MlXRA2wRvAXk",
  authDomain: "fir-recipes-20c83.firebaseapp.com",
  projectId: "fir-recipes-20c83",
  storageBucket: "fir-recipes-20c83.appspot.com",
  messagingSenderId: "968537816619",
  appId: "1:968537816619:web:b63d6880d545073229f46e",
  measurementId: "G-T7JCG8FC8B",
};

if (!firebase.apps.length){
    firebase.initializeApp(config);
}
export default firebase;
