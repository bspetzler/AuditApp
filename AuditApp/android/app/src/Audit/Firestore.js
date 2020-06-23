import firebase from 'firebase';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCVLui5JpvE04jRWRyyK6OtkDAQ6CzRYjU",
    authDomain: "checklist-24673.firebaseapp.com",
    databaseURL: "https://checklist-24673.firebaseio.com",
    projectId: "checklist-24673",
    storageBucket: "checklist-24673.appspot.com",
    messagingSenderId: "842605873898",
    appId: "1:842605873898:web:c30f8927c8db4310a4e593",
    measurementId: "G-DF91FDPK29"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;