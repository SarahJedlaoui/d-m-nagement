import React from 'react';
import MaterialTable from 'material-table';
import { forwardRef,useEffect,useState } from 'react';
import AddBox from '@material-ui/icons/AddBox';
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
import ViewColumn from '@material-ui/icons/ViewColumn';
import {getEtudiant} from './etudiant'
import firebase from 'firebase/app'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

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


export default function ListeEtudiantTest() {
   const classes = useStyles();
   var [state, setState] = React.useState({
      columns: [
         { field: 'id', title: 'ID', width: 100 },
         {field: 'prenom', title: 'Prénom',width: 150,//editable: true 
        },
         {field: 'nom',title: 'Nom',width: 150,
        },
         {field: 'filiere',title: 'Filière', width: 120,
       },
         /*{field: 'fullName', title: 'Full name',width: 160,
         valueGetter: (params) =>
             `${params.getValue(params.id, 'firstName') || ''} ${
               params.getValue(params.id, 'lastName') || ''
             }`,
         },*/
         {field: 'groupe',title: 'Groupe',width: 130,
        },
       
       ],
   });
   
   const [data, setData] = React.useState([]);
   const [isLoading,setIsLoading] = useState(false);
   const[selectedRows,setSelectedRows]=useState([]);
   useEffect(() => {
       // By moving this function inside the effect, we can clearly see the values it uses.
       setIsLoading(true);
       async function fetchProduct() {


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
   
           setData(await getEtudiant());
           setIsLoading(false);
       }
       fetchProduct();
   }, []);
   
   const handleCreateEtudiant = async (etudiant)  => {
    setIsLoading(true);
    const db = firebase.firestore();
    await db.collection("etudiants").add(etudiant).then(async () => {
        setData(await getEtudiant());
    });
    setIsLoading(false);
};
const handleDeleteEtudiant = async (oldData)  => {
          
  const db = firebase.firestore();
  await db.collection("enseignants").doc("1").delete()
  .then(async () => {
    setTimeout(async () => {
      setData(await getEtudiant());
     },1000);
      });  
 }
 const handleBulkDelete=()=>{
  const updateData =data.filter(row=>!selectedRows.includes(row))
  setData (updateData)

 }
   return (
      <React.Fragment>
   <CssBaseline />
   <main className={classes.layout}>
     <Paper className={classes.paper}>
    <div style={{ height: 400, width: '100%' }}>
       <h1 align="center">Liste des étudiants </h1>
      <Box  mt={5}>
      </Box>
       <MaterialTable
   
           title="Etudiants"
           columns={state.columns}
           data={(data)}
           icons={tableIcons}
           isLoading={isLoading}
           onSelectionChange={(rows)=>setSelectedRows(rows)}
          editable={{
               onRowAdd: (newData) =>handleCreateEtudiant(newData),
               onRowUpdate: (newData, oldData) =>
               new Promise((resolve, reject) => {
                   setTimeout(async() => {
                       //const dataUpdate = [...data];
                       //const index = oldData.id;
                       const db = firebase.firestore();
                       db.collection("etudiants").doc("SNkl34HbIhvdSS1RKMaN").update(newData);
                       
                       setData(await getEtudiant());
                       resolve();
                   }, 1000);
               }),
                 onRowDelete: oldData =>
                
                 new Promise((resolve, reject) =>                       
                 {
                  

                     setTimeout(async () => {
                       
                       //const index = oldData.Document.id;
                       const db = firebase.firestore();

                       db.collection("etudiants").get().then(function(etudiant) {
                        db.collection("etudiants").doc("SNkl34HbIhvdSS1RKMaN").delete()
                          .then(function() {
                            console.log("Document successfully deleted!");
                          }).catch(function(error) {
                            console.error("Error removing document: ", error);
                          });
                        
                      })







                       /*   
                         db.collection("etudiants").doc.ref().delete().then(function() {
                          console.log("Document successfully deleted!");
                      }).catch(function(error) {
                          console.error("Error removing document: ", error);
                      });*/





                         setData(await getEtudiant());
                         resolve();
                     }, 1000);
                 }
                 )
           }}

          
           options={{ 
             selection:true,
            actionsColumnIndex: -1, addRowPosition: "first"
          }} 
          actions={[
           { icon:'delete',
            tooltip: "delete all selected",
            onClick:()=> handleBulkDelete()
           } ]}
         

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