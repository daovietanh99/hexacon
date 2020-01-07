import Rebase from "re-base";
import firebase from "firebase/app";

const config = {
    apiKey: "AIzaSyAgBgLu7ayA70TE7N5rJ1bPu2l37mF5_p0",
    authDomain: "hexacon-a2c50.firebaseapp.com",
    databaseURL: "https://hexacon-a2c50.firebaseio.com",
    projectId: "hexacon-a2c50",
    storageBucket: "hexacon-a2c50.appspot.com",
    messagingSenderId: "983254084201",
    appId: "1:983254084201:web:908e060940110373d1d0f8",
    measurementId: "G-HGCTPKFV6S"
};

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
const base = Rebase.createClass(firebase.database());

export default firebaseApp