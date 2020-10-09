import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCP0fo0a-X03XJytKrVmEeGB8y4Ch1gllk",
    authDomain: "login1-91de6.firebaseapp.com",
    databaseURL: "https://login1-91de6.firebaseio.com",
    projectId: "login1-91de6",
    storageBucket: "login1-91de6.appspot.com",
    messagingSenderId: "128924693857",
    appId: "1:128924693857:web:15504df220ceec951ac120"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;