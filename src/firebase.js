import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

let firebaseConfig = {
    apiKey: "AIzaSyAKAdwP0NO7OC46_F7offcfE0mIelvIkUM",
    authDomain: "ab-advogados.firebaseapp.com",
    projectId: "ab-advogados",
    storageBucket: "ab-advogados.appspot.com",
    messagingSenderId: "220980942424",
    appId: "1:220980942424:web:0e3cb948dbbd962a959c2d",
    measurementId: "G-4VTJ03R9YK"
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