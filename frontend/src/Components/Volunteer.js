import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import GroupIcon from "@material-ui/icons/Group";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(7),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%"
  }
}));

export default function AddEmployee() {
  const classes = useStyles();
  const [firstLoad, setLoad] = React.useState(true);

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("1998-04-02T21:11:54")
  );
  const [lastname, setLastname] = React.useState("");
  
  const [firstname, setFirstname] = React.useState("");
    const [email, setEmail] = React.useState("");
      const [phonenumber, setPhonenumber] = React.useState(""); 
  const [gender, setGender] = React.useState("");

  const handleDateChange = date => setSelectedDate(date.target.value);
  const handleLastnameChange = event => setLastname(event.target.value);
  const handleFirstnameChange = event => setFirstname(event.target.value);

  const handleEmailChange = event => setEmail(event.target.value);
  const handlePhonenumberChange = event => setPhonenumber(event.target.value);
  
   
  const handleGenderChange = event => setGender(event.target.value);

  const [message, setMessage] = React.useState("Nothing saved in the session");

  async function sampleFunc(toInput) {
    const response = await fetch("/api/volunteer", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify(toInput) // body data type must match "Content-Type" header
    });
    let body = await response.json();
    console.log(body.id);
    setMessage(body.id ? "Data sucessfully updated" : "Data updation failed");
  }

  const handleSubmit = variables => {
    const toInput = { lastname,firstname,email, phonenumber, gender, birthday: selectedDate };
    sampleFunc(toInput);
    setFirstname("");
    setLastname("");
    setEmail("");
    setPhonenumber("");
     
    setGender("");
  };

  if (firstLoad) {
    // sampleFunc();
    setLoad(false);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <GroupIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Volunteer Registration
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastname"
                value={lastname}
                label="Last Name"
                name="lastname"
                autoComplete="Last Name"
                onChange={handleLastnameChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="firstname"
                value={firstname}
                label="First Name"
                name="firstname"
                autoComplete="First Name"
                onChange={handleFirstnameChange}
              />
            </Grid>           
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                value={email}
                label="email"
                name="email"
                autoComplete="email"

                onChange={handleEmailChange}
              />
            </Grid>
 
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phonenumber"
                value={phonenumber}
                label="phone number"
                name="phonenumber"
                autoComplete="phone number"

                onChange={handlePhonenumberChange}
              />
            </Grid>
 
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="gender"
                value={gender}
                label="Gender"
                name="gender"
                autoComplete="gender"
                onChange={handleGenderChange}
              />
            </Grid>
           
            <Grid item xs={12}>
              <TextField
                id="date"
                label="Date of birth"
                type="date"
                defaultValue="1998-04-02"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                onChange={handleDateChange}
              />
            </Grid>
          </Grid>
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            preventDefault
            className={classes.submit}
            onClick={handleSubmit}
          >
            Save
          </Button>

          <Grid container justify="center">
            <Grid item>
              <Link to="/view">View Volunteer Records</Link>
            </Grid>
    
          </Grid>
        </form>
        <Typography style={{ margin: 7 }} variant="body1">
          Status: {message}
        </Typography>
      </div> 
        <div>
            How to design the basic development framework built by React, Springboot and Mysql .  Volunteer Registration as a basic sample
        </div>
    </Container>
  );
}
