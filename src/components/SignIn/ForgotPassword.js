import React ,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Alert } from "react-bootstrap" ;
import { auth } from "../../fire";
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
   paper: {
     marginTop: theme.spacing(8),
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
   },
   avatar: {
     margin: theme.spacing(1),
     backgroundColor: theme.palette.secondary.main,
   },
   form: {
     width: '100%', // Fix IE 11 issue.
     marginTop: theme.spacing(1),
   },
   submit: {
     margin: theme.spacing(3, 0, 2),
   },
 }));
 


export default function ForgotPassword() {
  
  const classes = useStyles();
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  
  
 


async function handleSubmit(e) {
   e.preventDefault()

   try {
     setMessage("")
     setError("")
     setLoading(true)
     
     await auth.sendPasswordResetEmail(email)
     //await fire.auth.sendPasswordResetEmail(email)
     //setMessage("Check your inbox for further instructions")
     setMessage("Vérifiez votre boîte de réception pour plus d'instructions ")
   } catch {
     //setError("Failed to reset password")
     setError("Échec de la réinitialisation du mot de passe ")
   }

   setLoading(false)
 }


 
  return (
   <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <Typography component="h1" variant="h4" align="center">
        Réinitialisation du mot de passe 
     </Typography>
     <Avatar className={classes.avatar}>
    <LockOutlinedIcon />
  </Avatar>

  {error && <Alert variant="danger">{error}</Alert>}
  {message && <Alert variant="success">{message}</Alert>} 
  <form className={classes.form} onSubmit={handleSubmit} >
    <TextField onChange={(e) => setEmail(e.target.value)}
      variant="outlined"
      margin="normal"
      required
      fullWidth
      label="Adresse Email"
      id='email'
      type="email"
    />
    <Button 
      fullWidth
      variant="contained"
      color="primary"
      className={classes.submit}
     type='submit'
     disabled={loading}
    >
     réinitialiser le mot de passe
      
    </Button> 
    
    <Grid container>
      <Grid item xs>
        <Link href="/Administratif" variant="body2">
        Se connecter
        </Link>
      </Grid>
      <Grid item>
        <Link href="sign-up" variant="body2">
          {"Créer un compte"}

          </Link>
        </Grid>
      </Grid>
     </form>
    </div>
      <Box mt={20}>
       <ISED />
       </Box>
    </Container>
  )
}





 
