import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASECONFIG_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASECONFIG_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASECONFIG_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASECONFIG_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASECONFIG_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASECONFIG_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASECONFIG_APP_ID
};
class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.database = firebase.database()
        this.auth = firebase.auth()
        this.userUid = null;
        this.userEmail=null;
    }
    setUserUid = (uid) => this.userUid = uid;
    setUserEmail = (email) => this.userEmail = email;
    signWithEmailAndPassword = (email,password) => this.auth.signInWithEmailAndPassword(email,password);

    createUserWithEmailAndPassword = (email,password) => this.auth.createUserWithEmailAndPassword(email, password);

    signOut = () => this.auth.signOut();

    getUserCardsRef = () => {
        console.log('userId',this.userId);
        return this.database.ref(`/cards/${this.userUid}`);

}
getUserCurrentCardRef=(id)=> this.database.ref(`/cards/${this.userUid}/${id}`);
    
}



export default Firebase;


