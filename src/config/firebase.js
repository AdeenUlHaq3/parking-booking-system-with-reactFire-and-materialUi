import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBKxYZmGqrWhq9C-23xp7Zr3JhEgjET7jM",
    authDomain: "https://jsproject-951e6.firebaseapp.com/",
    databaseURL: "https://jsproject-951e6.firebaseio.com/",
    projectId: "jsproject-951e6",
    storageBucket: "jsproject-951e6.appspot.com"
};
firebase.initializeApp(config);

export default firebase;