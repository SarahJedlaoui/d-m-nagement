import firebase from 'firebase/app'

export async function getEnseignant() {
        try {
            require("firebase/firestore");

            const firebaseConfig = {
               apiKey: "AIzaSyDVMQTTeQNgYQK69bRo-zZ6mKfRdt2c7Tg",
               authDomain: "stage-3bafa.firebaseapp.com",
               projectId: "stage-3bafa",
               storageBucket: "stage-3bafa.appspot.com",
               messagingSenderId: "787381117281",
               appId: "1:787381117281:web:390c80190666eedff5e520",
               measurementId: "G-RT1BQ8HLHT"
            };

            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
            }

            var db = firebase.firestore();
            const snapshot = await db.collection('enseignants').orderBy("id").get();
            return snapshot.docs.map(doc => doc.data());

        }
        catch (e) {
            console.log(e);

        }

}