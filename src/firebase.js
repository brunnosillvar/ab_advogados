import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

let firebaseConfig = {
    apiKey: "AIzaSyADTibEF40Ivf-L7qk4iKIozDJ9O6luQkA",
    authDomain: "reactapp-e28f5.firebaseapp.com",
    projectId: "reactapp-e28f5",
    storageBucket: "reactapp-e28f5.appspot.com",
    messagingSenderId: "15041125894",
    appId: "1:15041125894:web:1b1b41c20b244743b22d87",
    measurementId: "G-05V3GNY41R"
};

class Firebase{
    constructor(){
        // Initialize Firebase
        app.initializeApp(firebaseConfig);

        //Referenciando a database para acessar em outros locais
        this.app = app.database();

        this.storage = app.storage();
    }

    login(email, password){
        return app.auth().signInWithEmailAndPassword(email, password)
    }

    logout(){
        return app.auth().signOut();
    }

    async register(nome, email, password){
        await app.auth().createUserWithEmailAndPassword(email, password)

        const uid = app.auth().currentUser.uid;

        return app.database().ref('usuarios').child(uid).set({
            nome: nome
        })
    }

    isInitialized(){
        return new Promise(resolve =>{
            app.auth().onAuthStateChanged(resolve);
        })
    }

    getCurrente(){
        return app.auth().currentUser && app.auth().currentUser.email
    }

    getCurrenteUid(){
        return app.auth().currentUser && app.auth().currentUser.uid;
    }

    async getUserName(callback){
        if(!app.auth().currentUser){
            return null;
        }

        const uid = app.auth().currentUser.uid;
        await app.database().ref('usuarios').child(uid)
        .once('value').then(callback)
    }

}

export default new Firebase();