import authReducer from './authReducer'
import etudiantReducer from './etudiantReducer'
import enseignantReducer from './enseignantReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore' ;
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  etudiant: etudiantReducer,
  enseignant: enseignantReducer,
  firestore: firestoreReducer,
  firebase : firebaseReducer ,
});

export default rootReducer

// the key name will be the data property on the state object