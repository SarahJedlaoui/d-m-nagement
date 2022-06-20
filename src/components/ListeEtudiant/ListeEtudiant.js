import * as React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MaterialTable from 'material-table';
import {connect} from 'react-redux'; 
import Grid from '@material-ui/core/Grid';
//import {ajoutEtudiant} from '../../store/actions/dataActions';
import {firestoreConnect} from 'react-redux-firebase'; 
import {compose} from 'redux';


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

function ListeEtudiant({etudiants}) {

  //const etudiant = firebase.firestore().collection('etudiants');
 
  const [state, setState] = useState({
    id: '',
    prenom: '',
    nom :'',
    filiere : '',
    groupe: '',
  });
  /*const handleChange = (e) => {
      setState({
      [e.target.id]: e.target.value
    })
  }
*/
  const handleAdd=(e)=>{
    //e.preventDefault();
   // ajoutEtudiant(state);
    
  }

   const classes = useStyles();

   const [data, setData] = useState(etudiants)

   const columns = [
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
  
  ];

  
  
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
        columns={columns}
        rows={data}
        title="Table des étudiants" 
        data={data}
        pageSize={5}
        
       editable={{
         onRowAdd :  (newRow) => new Promise((resolve) => {
          const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow } ]
          
           setTimeout(() => {
            setState(updatedRows)
            
            handleAdd(state)
             resolve()
           }, 2000)
         }),
         onRowDelete: selectedRow => new Promise((resolve, reject) => {
           const index = selectedRow.tableData.id;
           const updatedRows = [...data]
           updatedRows.splice(index, 1)
           setTimeout(() => {
             setData(updatedRows)
             resolve()
           }, 2000)
         }),
         onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
           const index=oldRow.tableData.id;
           const updatedRows=[...data]
           updatedRows[index]=updatedRow
           setTimeout(() => {
             setData(updatedRows)
             resolve()
           }, 2000)
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


const mapStateProps =(state)=>{
  console.log(state);
  return{
    etudiants: state.firestore.ordered.etudiants
  }
}
const mapDispatchToProps = (dispatch) => {
  
  return {
   // ajoutEtudiant: (etudiant) => dispatch(ajoutEtudiant(etudiant))
  }
}

export default compose(connect(mapStateProps,mapDispatchToProps),
firestoreConnect([
 {collection :'etudiants'}
])
) (ListeEtudiant) ; 