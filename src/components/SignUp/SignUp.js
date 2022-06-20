import React, { Component } from 'react'
//import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Roj() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'ROJ'}

      <Link color="inherit">
      <i class="fas fa-university"></i>
      </Link>{ ' ' }

      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const styles = theme => ({
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    
  },
});

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    telephone:'',
    nCin:'',
    
  }
 

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSignUp = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  render() {
    const { classes } = this.props;
    const { auth, authError } = this.props;
   // if (auth.uid) return <Redirect to='/' /> 
    return (
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h3">
          Adressess
        </Typography>
        <form className={classes.form} onSubmit={this.handleSignUp}>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
              <TextField //onChange={(e) => setFirstName(e.target.value)}
                onChange={this.handleChange}
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Prénom"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField //onChange={(e) => setLastName(e.target.value)} 
              onChange={this.handleChange}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Nom"
                name="lastName"
                autoFocus
               
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
              onChange={this.handleChange}
                variant="outlined"
                required
                fullWidth
                id="telephone"
                label="telephone"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
              onChange={this.handleChange}
                variant="outlined"
                required
                fullWidth
                id="nCin"
                label="N°Cin"
              />
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              <TextField 
              onChange={this.handleChange}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Adresse e-mail"
              />
             {/*<p className='errorMsg'> {emailError}</p> */} 
            </Grid>
            <Grid item xs={12}>
              <TextField 
               onChange={this.handleChange}
                variant="outlined"
                required
                fullWidth
                label="mot de passe"
                type="password"
                id="password"
                
              />
               {/*<p className='errorMsg'> {passwordError}</p>*/}
            </Grid>
            <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Remember me"
              />
            </Grid>
          </Grid>
          <Button type='submit' 
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            S'inscrire
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
              Vous avez déjà un compte? S'identifier
              </Link>
            </Grid>
            
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Roj /> 
      </Box>
    </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps) (SignUp))