import * as firebase from 'firebase'

const configureFirebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyBexfnvuwAfgN7RchO0ohjRc_dNt5L2zVE",
        authDomain: "coderfirebaseapp.firebaseapp.com",
        databaseURL: "https://coderfirebaseapp.firebaseio.com",
        projectId: "coderfirebaseapp",
        storageBucket: "coderfirebaseapp.appspot.com",
        messagingSenderId: "179026688407",
        appId: "1:179026688407:web:e7aa8fd80e5b5e3cebacd2",
        measurementId: "G-YEBQFTYQ9Z"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);    
}

export default configureFirebase;