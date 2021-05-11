import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import "date-fns";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  heading: {
    color: "#334443",
  },
  center: {
    alignSelf: "center",
    padding: "30px",
    marginTop: "30px",
    marginBottom: "30px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));

//

export default function StudentForm({ data }) {
  const [state, setState] = useState(0);
  // Proceed to next step
  const nextStep = (e) => {
    e.preventDefault();
    setState(state + 1);
  };

  // Go back to prev step
  const prevStep = (e) => {
    e.preventDefault();
    setState(state - 1);
  };

  switch (state) {
    case 0:
      return <StudentForm1 nextStep={nextStep} data={data} />;
    case 1:
      return (
        <StudentForm2 prevStep={prevStep} nextStep={nextStep} data={data} />
      );
    case 2:
      return (
        <StudentForm3 prevStep={prevStep} nextStep={nextStep} data={data} />
      );
    case 3:
      return (
        <StudentForm4 prevStep={prevStep} nextStep={nextStep} data={data} />
      );
    default:
      console.log("This is a multi-step form built with React.");
      return state;
  }
}

//
function StudentForm1({ nextStep, data }) {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  // date component above
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Typography variant="h2" className={classes.heading}>
        Basic details
      </Typography>

      <div className={classes.root}>
        <Paper elevation={3} className={classes.center}>
          <div>
            <Paper elevation={3} className={classes.center}>
              <TextField
                label="First Name"
                className={clsx(classes.margin, classes.textField)}
              />
              <TextField
                label="Last Name"
                className={clsx(classes.margin, classes.textField)}
              />
              <TextField
                label="Surname"
                className={clsx(classes.margin, classes.textField)}
              />

              <Grid>
                <TextField
                  label="Assign unique roll number"
                  className={clsx(classes.margin, classes.textField)}
                />
                <TextField
                  label="Class"
                  className={clsx(classes.margin, classes.textField)}
                />
                <TextField
                  label="Age"
                  className={clsx(classes.margin, classes.textField)}
                />
              </Grid>

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
              <TextField
                label="Last Name"
                className={clsx(classes.margin, classes.textField)}
              />
              <TextField
                label="Surname"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Rs</InputAdornment>
                  ),
                }}
              />
            </Paper>
          </div>
        </Paper>
      </div>

      <Button color="primary" variant="contained" onClick={nextStep}>
        Next
      </Button>
    </>
  );
}

function StudentForm2({ prevStep, nextStep }) {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h2" className={classes.heading}>
        Contact details
      </Typography>

      <div className={classes.root}>
        <Paper elevation={3} className={classes.center}>
          <div>
            <Paper elevation={3} className={classes.center}>
              <TextField
                label="Enter email id"
                className={clsx(classes.margin, classes.textField)}
              />
              <TextField
                label="Contact number"
                className={clsx(classes.margin, classes.textField)}
              />
              <TextField
                label="Alternate contact number"
                className={clsx(classes.margin, classes.textField)}
              />

              <Grid>
                <TextField
                  label="Address"
                  className={clsx(classes.margin, classes.textField)}
                />
                <TextField
                  label="Class"
                  className={clsx(classes.margin, classes.textField)}
                />
                <TextField
                  label="Age"
                  className={clsx(classes.margin, classes.textField)}
                />
              </Grid>

              <TextField
                label="First Name"
                className={clsx(classes.margin, classes.textField)}
              />
              <TextField
                label="Last Name"
                className={clsx(classes.margin, classes.textField)}
              />
              <TextField
                label="Surname"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Rs</InputAdornment>
                  ),
                }}
              />
            </Paper>
          </div>
        </Paper>
      </div>

      <Button color="primary-secondary" variant="contained" onClick={prevStep}>
        Back
      </Button>
      <Button color="primary" variant="contained" onClick={nextStep}>
        Next
      </Button>
    </>
  );
}

function StudentForm3({ prevStep, nextStep }) {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h2" className={classes.heading}>
        Course Assigning
      </Typography>

      <div className={classes.root}>
        <Paper elevation={3} className={classes.center}>
          <div>
            <Paper elevation={3} className={classes.center}>
              <TextField
                label="Enter email id"
                className={clsx(classes.margin, classes.textField)}
              />
              <TextField
                label="Contact number"
                className={clsx(classes.margin, classes.textField)}
              />
              <TextField
                label="Alternate contact number"
                className={clsx(classes.margin, classes.textField)}
              />

              <Grid>
                <TextField
                  label="Address"
                  className={clsx(classes.margin, classes.textField)}
                />
                <TextField
                  label="Class"
                  className={clsx(classes.margin, classes.textField)}
                />
                <TextField
                  label="Age"
                  className={clsx(classes.margin, classes.textField)}
                />
              </Grid>

              <TextField
                label="First Name"
                className={clsx(classes.margin, classes.textField)}
              />
              <TextField
                label="Last Name"
                className={clsx(classes.margin, classes.textField)}
              />
              <TextField
                label="Surname"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Rs</InputAdornment>
                  ),
                }}
              />
            </Paper>
          </div>
        </Paper>
      </div>

      <Button color="primary-secondary" variant="contained" onClick={prevStep}>
        Back
      </Button>
      <Button color="primary" variant="contained" onClick={nextStep}>
        Next
      </Button>
    </>
  );
}

function StudentForm4({ prevStep }) {
  return (
    <>
      <h1>Form 4</h1>
      <button onClick={prevStep}>back</button>
    </>
  );
}
