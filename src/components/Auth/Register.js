import React,{useState , useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


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
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '5',
    
  },
  avatar: {
    margin: theme.spacing(0),
    backgroundColor: theme.palette.secondary.primary,
  },
  form: {
    width: '80%', // Fix IE 11 issue.
    marginTop: theme.spacing(0),
  },
  submit: {
    margin: theme.spacing(3, 0, 1),
    
  },
  parent:{
    display: 'flex',
    alignItems:'center'
  }
  
}));

const defaultProps = {
  bgcolor: '#EEEE',
  m: 1,
  border: 0,
  margin: 0,
  marginTop:5,
  left:0,
  boxShadow: '10px 10px 40px #222831',
  style: { width: '100%', height: '100%' },
};



   

export default function SignUp() {

  const [count ,setCount]= useState(0)
  useEffect(() =>{
    document.title= `you have clicked ${count} times `;
  });

  const classes = useStyles();
  
  const [value, setValue] = React.useState('');
  
  const handleChange = event => {
    setValue(event.target.value);
  }

  return (
    <div className="parent">
    <Container component="main" maxWidth="xl" >
      <Box padding={2} {...defaultProps}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
         Sign Up
        </Typography>
        <form className={classes.form} noValidate>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="First Name"
            name="first name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Surname"
            name="Surname"
          />
          
          <FormControl component="fieldset">
         <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
          </FormControl>
           
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
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
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Retype Password"
            type="password"
            id="password"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            className={classes.submit}
            
          >
            Submit
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2" onClick={() =>setCount(count +1)}>
                {"Already registered? Log in!"}
              </Link>
            </Grid>
          </Grid>
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