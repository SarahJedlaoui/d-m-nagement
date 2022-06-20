import * as React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MaterialTable from 'material-table'
import {connect} from 'react-redux'; 
import Grid from '@material-ui/core/Grid';



function ISED() {
   return (
     <Typography variant="body2" color="textSecondary" align="center">
       {'ISED '}
 
       <Link color="inherit">
       <i class="fas fa-university"></i>
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





function ListeEnseignant({enseignants}) {
   const classes = useStyles();

   const [data, setData] = useState(enseignants)
   const columns = [
      { field: 'id', title: 'ID', width: 100 },

      {field: 'prenom', title: 'Prénom',width: 150,//editable: true 
    },
      {field: 'nom',title: 'Nom',width: 150,//editable: true
     },
      {field: 'nCin',title: 'N°CIN', width: 120,// editable: true,
    },
    
      {field: 'specialite',title: 'Spécialité',width: 200,//editable: true,
   },
    
    ];
  return (
   <React.Fragment>
   <CssBaseline />
   <main className={classes.layout}>
     <Paper className={classes.paper}>
    <div style={{ height: 400, width: '100%' }}>
       <h1 align="center">Liste des enseignants</h1>
      <Box  mt={5}>
      </Box>
      
      <MaterialTable
        columns={columns}
        rows={data}
        title="Table des enseignants"
        data={data}
        pageSize={5}
       
        editable={{
         onRowAdd: (newRow) => new Promise((resolve, reject) => {
           const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }]
           setTimeout(() => {
             setData(updatedRows)
             resolve()
           }, 2000)
         }),
         onRowDelete: oldData =>
         new Promise((resolve, reject) => {
             setTimeout(() => {
                 const dataDelete = [...data];
                 const index = oldData.tableData.id;
                 dataDelete.splice(index, 1);
                 setData([...dataDelete]);

                 resolve();
             }, 1000);
         
         }),
         onRowUpdate: (newData, oldData) =>
         new Promise((resolve, reject) => {
          setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
          }, 1000);
         }),

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
  return{
    enseignants: state.enseignant.enseignants
  }
}


export default connect(mapStateProps) (ListeEnseignant) ;