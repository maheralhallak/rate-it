import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
// MateialUi part starts here //
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
//import Link from '@material-ui/core/Link';  // make sure if you can replace this one with DOM Link
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

// MaterialUi part ends here //

// Imported Axios to have 2 way connection between frontend and backend
import axios from "axios";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://rateit.de/">
        rate-it
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "5",
  },
  avatar: {
    margin: theme.spacing(0),
    backgroundColor: theme.palette.secondary.primary,
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(0),
  },
  submit: {
    margin: theme.spacing(2, 0, 1),
  },
  parent: {
    display: "flex",
    alignItems: "center",
  },
  gender: {
    display: "flex",
    flexDirection: "row",
  },
}));

const defaultProps = {
  bgcolor: "#EEEE",
  m: 1,
  border: 0,
  margin: 5,
  left: 0,
  boxShadow: "10px 10px 40px #222831",
  style: {
    width: "50%",
    position: "relative",
    left: "50%",
    transform: "translate(-52%)",
  },
};

export default function BrandSignUp() {
  const [state, setState] = useState(null);
  const history = useHistory();
  const onChangeHandler = (e) => {
    // Assuming only image
    //console.log(e.target);
    var file = e.target.files[0];
    if (!file) return;
    //console.log(file);
    var reader = new FileReader();
    

    reader.onloadend = function (e) {
      setState({
        imgSrc: [reader.result],
      });
    };
  // Would see a path?
    // TODO: concat files
  };

  const classes = useStyles();
 
  const registerHandler = (e) => {
    e.preventDefault();
 
     

    //fName, lName, gender, email, pass
    let brandName = e.target.brandName.value;
    let  email = e.target.email.value;
    let  pass = e.target.password.value;
    let  logo = e.target.logo.files[0];


    const formData = new FormData();
    formData.append('brandName',brandName);
    formData.append('email',email);
    formData.append('pass',pass);
    formData.append('logo',logo);
   
    

    axios
      .post("/users/b-register", formData,
      {
        headers: {
          'content-type': 'multipart/form-data'
      }
      })
      .then((result, reject) => {
        
        if (reject) {
          console.log(reject);
        } else {
          if (result.data.status === "success") {
            //redirect login
            history.push('/')
          } else {
            //alert message
            console.log("somthing went wrong");
          }
        }
      })
      .catch((err) => {
        throw err;
      });
  };
  //express bcrypt jwt
  return (
    <div className="parent" style={{paddingTop:"12px"}}>
      <Container component="main" maxWidth="xl" >
        <Box padding={2} {...defaultProps}>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}></Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <form
              className={classes.form}
              noValidate
              onSubmit={(e) => registerHandler(e)}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="brandName"
                label="Brands Name"
                name="brandName"
                autoFocus
              />
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                type="file"
                name="logo"
                multiple="false"
                onChange={onChangeHandler}
              />
              <label
                htmlFor="contained-button-file"
                style={{ textAlign: "center", width: "100%" }}
              >
                <Button variant="contained" color="primary"  component="span">
                  Upload LOGO
                </Button>
                {state ? (
                  <img
                    className="previewImg"
                    src={state.imgSrc}
                    style={{
                      maxWidth: "150px",
                      maxHeight: "150px",
                      marginLeft: "5%",
                    }}
                    alt="something"
                  />
                ) : null}
              </label>

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
                name="sec-pass"
                label="Retype Password"
                type="password"
                id="sec-pass"
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
                  <Link to="/signin" variant="body2">
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
