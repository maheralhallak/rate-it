import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
/* import Link from '@material-ui/core/Link';  */
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import axios from 'axios';
import {Link , Redirect} from 'react-router-dom';
import './style.css'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://rateit.de/">
        rate-it
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root:{
    display:'flex',
    justifyContent:'center',
  },
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center'
  },
  avatar: {
    margin: theme.spacing(0),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(0),
    display:'flex',
    justifyContent:'center',
    flexDirection:'column'

  },
  submit: {
    margin: theme.spacing(3, 0, 1),
    
  }
  
}));

const defaultProps = {
  bgcolor: '#EEEE',
  m: 1,
  border: 0,
  margin: 5,

  left:0,
  boxShadow: '10px 10px 40px #222831',
  style: { width: '50%',
          margin:'80wh'  },
};
export default
function SignIn() {
  const classes = useStyles();
  
  const [stateSignin, setStateSigin] = useState(false);
  // const [wrongCredential, setWrongCredential] = useState(false);

  let registerHandler = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let  pass = e.target.password.value;

    axios.post('http://localhost:5000/users/login', {
        email,
        pass
    } ).then(function (response) {
      console.log(response);
      if (response.data.token) {
        localStorage.setItem('token',response.data.token);
        axios.defaults.headers['x-auth-token'] = response.data.token;
        setStateSigin(true);
      }else {
        localStorage.setItem('token','');
       // setWrongCredential(true);
      }
    })
    .catch(function (error){
      console.log(error);
      //setWrongCredential(true)
      
    })
  }
  if (stateSignin) {
    return <Redirect to='/welcome' />
  } else {
  return (
    <div className="parent">
    <Container {...defaultProps} component="main" maxWidth="xl" className={classes.root} >
      <Box padding={2} {...defaultProps}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form className={classes.form} noValidate onSubmit={registerHandler}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            className={classes.submit}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <Link to="/Brand-register" variant="body1" style={{color:"red", fontSize:"1.4em"}}>
                {"Register Your Brand here"}
              </Link>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
      </Box>
    </Container>
    </div>
    
  );
}
}