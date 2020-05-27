import React, { Component } from "react";
import "./homePage.scss";
import mainpic13 from "./assist/mainpic13.svg";
import stars from "./assist/3.png";
import "../contact/Popup";
import Box from "@material-ui/core/Box";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

/* Contact popup */
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    "& .row": {
      textAlign: "right",
      width: `calc( 100% - ${theme.spacing(1) * 2}px )`,
    },
    "& button": {
      display: "inline",
    },
  },
}));
function Inputs() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Input
        label="Your name ..."
        helperText="* required"
        inputProps={{ "aria-label": "description" }}
      />
      <Input
        label="Your last name ..."
        helperText="* required"
        inputProps={{ "aria-label": "description" }}
      />
      <br />
      <Input
        helperText="* required"
        inputProps={{ "label-full-width": "email" }}
        label="Your Email ..."
      />
      <Input
        helperText="* required"
        inputProps={{ "label-full-width": "email" }}
        label="Confirm your Email ..."
      />
      <div className={classes.root}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">About</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label="About"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>request</MenuItem>
            <MenuItem value={2}>complaint</MenuItem>
            <MenuItem value={3}>none of the above</MenuItem>
          </Select>
        </FormControl>
        <br />
        <TextField
          id="standard-textarea"
          label="Your text..."
          placeholder="Your text..."
          multiline
        />
      </div>
      <div className="row">
        <Button variant="contained" color="primary" className={classes.button}>
          Send
        </Button>
      </div>
    </form>
  );
}

export default class HomePage extends Component {
  render() {
    var lr = (
      <section className="presentation" id="presentation">
        <div className="introduction">
          <div className="intro-text">
            <div id="text" data-text="Rate it">
              Rate it
            </div>
            <p>
              Consumer review sites have been one of the Internet’s most
              persistent and valuable resources since the very beginning. This
              website allows consumers to review brands and then alerts brands
              to the feedback they’ve received.
            </p>
          </div>{" "}
          <br />
          <div className="wrapper">
            <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
                  <a
                    className="btn1"
                    variant="contained"
                    {...bindTrigger(popupState)}
                    
                  >
                    <span></span>
                  
                  </a>
                  <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}>
                    <Box p={2}>
                      <Inputs></Inputs>
                    </Box>
                  </Popover>
                </div>
              )}
            </PopupState>
          </div>
        </div>

        <div className="cover">
          <img
            src={mainpic13}
            alt="stars"
            style={{ width: "100%", opacity: "0.9" }}
          />
        </div>
        <section id="section05" class="demo">
          <a href="#secondParagraph">
            <span></span>About us
          </a>
        </section>
      </section>
    );
    var see = (
    
        <div class="row">
        <div class="card-deck" id="secondParagraph">
          <div class="card col-md-12  m-5">
            <div class="card-body">
              <h5 class="card-title">Consumer review :</h5>
              <p class="card-text"> Internet’s most persistent and valuable
                    resources since the very beginning.</p>
            </div>
          </div>
          <div class="card col-md-12  m-5">
            <div class="card-body">
              <h5 class="card-title"> The website allows consumers to :</h5>
              <p class="card-text">review brands and then alerts brands
                    to the feedback they’ve received..</p>
              
            </div>
          </div>
          <div class="card col-md-12  m-5">
            <div class="card-body">
              <h5 class="card-title">Consumers can...</h5>
              <p class="card-text">post their Good or Bad experiences about almost
                    anything known as reviews at rate-it.</p>
              
            </div>
          </div>
          <div class="card col-md-12  m-5">
            <div class="card-body">
              <h5 class="card-title"> Com and associated brands...</h5>
              <p class="card-text">(If Registered) will be notified instantly
                    about the review which helps quickly resolve .</p>
              
            </div>
          </div>
         
          </div>
        </div>
   
    );
    var bee = (
      <div class="row row2">
        <div class="card-deck">
      <div class="card col-md-4 m-5">
      <div class="card-body card-b2">
        <h5 class="card-title"> As a Brand on rate-it.com :</h5>
        <p class="card-text">you can easily connect with your
              consumers and help them if needed or say thanks for their good
              review.</p>
        
      </div>
    </div>
    <div class="card col-md-4  m-0 mt-5">
      <div class="card-body card-b2">
        <h5 class="card-title"> All this shows :</h5>
        <p class="card-text"> to your potential buyers and they know they will get
              top notch customer service if they buy from you..</p>
        
      </div>
    </div>
    <div class="card col-md-4  m-5">
      <div class="card-body card-b2">
        <h5 class="card-title"> The key to :</h5>
        <p class="card-text">this site’s service is the fact that while reviews and
              brand responses are public.</p>
        
      </div>
    </div>
    </div>
    </div>
    )

    window.addEventListener("", () => {
      var newone = lr.cloneNode(true);
      lr.parentNode.replaceChild(newone, lr);
      lr = newone;
    });
    return (
      <div>
        <main>
          {lr}
          <img className="big-star" src={stars} alt="" />
          <img className="mid-icon" src={stars} alt="" />
        </main>
        {see}
        {bee}
      </div>
    );
  }
}
