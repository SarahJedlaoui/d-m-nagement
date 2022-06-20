import React from 'react';
import MaterialTable from 'material-table';
import { useEffect,useState } from 'react';
/*import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';*/
import {getEnseignant} from './Enseignant'
import firebase from 'firebase/app'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';




function ISED() {
   return (
     <Typography variant="body2" color="textSecondary" align="center">
       {'ISED '}
 
       <Link color="inherit">
       <i className="fas fa-university"></i>
       </Link>{ ' ' }
 
       {new Date().getFullYear()}
       {'.'}
     </Typography>
   );
 }

const useStyles = makeStyles((theme) => ({
  
   layout: {
     width: 'auto',
     height:'auto',
     marginLeft: theme.spacing(2),
     marginRight: theme.spacing(2),
     [theme.breakpoints.up(100 + theme.spacing(2) * 2)]: {
       width: 1000,
       marginLeft: 'auto',
       marginRight: 'auto',
     },
   },
   paper: {
      
     height:600,
     marginTop: theme.spacing(3),
     marginBottom: theme.spacing(3),
     padding: theme.spacing(2),
     [theme.breakpoints.up(700 + theme.spacing(3) * 2)]: {
       marginTop: theme.spacing(6),
       marginBottom: theme.spacing(6),
       padding: theme.spacing(3),
     },
   },
 }));


export default function ListeEnseignantTest() {
   const classes = useStyles();
   var [state, setState] = React.useState({
    columns : [
      { field: 'id', title: 'ID', width: 100 },

      {field: 'prenom', title: 'Prénom',width: 150,
    },
      {field: 'nom',title: 'Nom',width: 150, 
     },
      {field: 'nCin',title: 'N°CIN', width: 120, 
    },
    
      {field: 'specialite',title: 'Spécialité',width: 200,
   },
    
    ],
       
     
   });
   
   var [data, setData] = React.useState([]);
   const [isLoading,setIsLoading] = useState(false);
   
   useEffect(() => {
       // By moving this function inside the effect, we can clearly see the values it uses.
       setIsLoading(true);

       async function fetchData() {
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
           setData(await getEnseignant());
           setIsLoading(false);
       }
       fetchData();
   }, []);
   
   const handleCreateEnseignant = async (etudiant)  => {
       setIsLoading(true);
       const db = firebase.firestore();
       await db.collection("enseignants").add(etudiant).then(async () => {
           setData(await getEnseignant());
       });
       setIsLoading(false);
   };

  /* const handleUpdateEnseignant = async (id,value)  => {
    
    const db = firebase.firestore();
    await  db.collection("enseignants").doc().update(value).then(async () => {
      setTimeout(async () => {
        setData(await getEnseignant());
       },1000);
       
        });
        };
*/
   
   return (
    <React.Fragment>
   <CssBaseline/>
   <main className={classes.layout}>
     <Paper className={classes.paper}>
    <div style={{ height: 400, width: '100%' }}>
       <h1 align="center">Liste des enseignants </h1>
      <Box  mt={5}>
      </Box>
       <MaterialTable
           title="Enseignants"
           columns={state.columns}
           data={(data)}
           isLoading={isLoading}
           editable={{
              onRowAdd:(newData) =>handleCreateEnseignant(newData),
              onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
                setTimeout(async() => {
                    const dataUpdate = [...data];
                    const index = oldData.id;
                    const db = firebase.firestore();
                    db.collection("enseignants").doc("inDBhhhcuT1F9yxHQ6hX").update(newData);
                    dataUpdate[index] = newData;
                    setData(await getEnseignant());
                    resolve();
                }, 1000);
            }),
              onRowDelete: oldData =>
              new Promise((resolve, reject) => {
                
                  setTimeout(async () => {
                    //const dataDelete = [...data];
                    //const sara =  oldData.rowData
                    //const index =  sara.id ;
                    const index = oldData.tableData.id;
                    //const id = oldData.tableData.field("id");
                    //const reponse = await firebase.firestore().collection("enseignants").where    ('id','==',id).get() ; 
                    const db = firebase.firestore().collection("enseignants");
                    //db.where('id','==',id)
                    db.doc("inDBhhhcuT1F9yxHQ6hX").delete();
                    //dataDelete.splice(index, 1);
                    console.log("deleted");
                    setData(await getEnseignant());
                    resolve();
                  }, 1000);
              })
      }}
           
           options={{
            actionsColumnIndex: -1, addRowPosition: "first"
          }}
       />
       <Grid item xs>
      <Link href='Administre' variant="body2" color='primary'>
        Retour
      </Link>
    </Grid>
     </div>
    </Paper>
    <Box mt={5}>
        <ISED /> 
      </Box>
      </main>
    </React.Fragment>
   );
}