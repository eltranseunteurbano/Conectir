import * as firebase from "firebase/app";
import "firebase/auth";
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyA0b0BTp5w7Cp-irDa2aDAG56OiCVwp6t4",
    authDomain: "conectir-1265c.firebaseapp.com",
    databaseURL: "https://conectir-1265c.firebaseio.com",
    projectId: "conectir-1265c",
    storageBucket: "conectir-1265c.appspot.com",
    messagingSenderId: "893217829184",
    appId: "1:893217829184:web:39558b74d6e73cad2a0aa5"
};
// Initialize Firebase
var Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;