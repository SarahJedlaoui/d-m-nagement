import React, { Component } from 'react'
//import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions';
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

class Administratif extends Component {
  state = {
    email: '',
    password: ''
  }
 
  
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    
    e.preventDefault();
    this.props.signIn(this.state)
  }
  render() {
    const { classes } = this.props;
    const { auth, authError } = this.props;
    //if (auth.uid) return <Redirect to='/Administre' /> 
    return (
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Se connecter
        </Typography>
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField 
              onChange={this.handleChange}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Adresse e-mail"
              />
              
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
            Se connecter
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/forgotpassword" variant="body2">
              Mot de passe oublié ?
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
      <Box mt={5}>
        <ISED /> 
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
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps) (Administratif))