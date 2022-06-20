/*const initState = {
   etudiants: [
  { id: 1, nom:'Jedlaoui', prenom: 'Sarah' ,filiere:'FIA1',groupe: '02' },
  { id: 2, nom:'Ghammam', prenom:  'Amira', filiere:'EEA',groupe: '01' },
  { id: 3, nom:'Zantour' , prenom: 'Wael', filiere:'Prepa1',groupe: '05' },
  { id: 4, nom:'Kchelfi' , prenom:'Yasmin' , filiere:'FIA3',groupe: '03' },
  { id: 5, nom:'Sioud', prenom:  'Khalil', filiere:'Prepa1',groupe: '04' }
   ]
}

const etudiantReducer = (state = initState, action) => {
  switch(action.type){
    case 'ADD_ETUDIANT':
      console.log('added student',action.etudiant);
      return state; 
       case 'ADD_DATA_ERROR':
         console.log('add data error',action.err)
      return state;
     default :
     return state ;
  }

};

export default etudiantReducer;*/