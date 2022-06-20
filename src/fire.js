import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


  var firebaseConfig = {
   apiKey: "AIzaSyDVMQTTeQNgYQK69bRo-zZ6mKfRdt2c7Tg",
   authDomain: "stage-3bafa.firebaseapp.com",
   projectId: "stage-3bafa",
   storageBucket: "stage-3bafa.appspot.com",
   messagingSenderId: "787381117281",
   appId: "1:787381117281:web:390c80190666eedff5e520",
   measurementId: "G-RT1BQ8HLHT"
 };
 // Initialize Firebase
   const fire =firebase.initializeApp(firebaseConfig);
   firebase.firestore().settings({timestampsInSnapshots:true}) ;
  
 export const auth=fire.auth();
 
 export default fire ;

 