import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDsnSAwDgs8EGlvh4PdCMT_3kEA8xRMGRU",
    authDomain: "learn-the-world-4ba25.firebaseapp.com",
    databaseURL: "https://learn-the-world-4ba25.firebaseio.com",
    projectId: "learn-the-world-4ba25",
    storageBucket: "learn-the-world-4ba25.appspot.com",
    messagingSenderId: "540427061944",
    appId: "1:540427061944:web:9e11306a6819100bc2024d"
};

firebase.initializeApp(firebaseConfig);
export const fire =firebase;
const database = firebase.database();

export default database;