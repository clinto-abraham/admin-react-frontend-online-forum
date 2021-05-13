import React, { useState } from "react";
import { createStudent } from "../redux/actions/studentAction";
import clsx from "clsx";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {
  Button,
  Grid,
  Paper,
  TextareaAutosize,
  Typography,
} from "@material-ui/core";

import FormControl from "@material-ui/core/FormControl";

import { useHistory } from "react-router";

import FormLabel from "@material-ui/core/FormLabel";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";

import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  table: {
    minWidth: 700,
  },
  heading: {
    color: "#334443",
  },
  button: {
    display: "inline-block",
    padding: "8px",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "20px",
    marginBlock: "40px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
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
  textarea: {
    width: "75ch",
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default function StudentForm() {
  const [studentformData, setStudentformData] = useState({
    firstname: "",
    lastname: "",
    surname: "",
    fathername: "",
    mothername: "",
    nativeLanguage: "",
    dateOfbirth: "",
    email: "",
    phoneNumber: "",
    alternatePhone: "",
    onlineID: "",
    rollNumber: "",
    age: "",
    class: "",
    address: "",
    city: "",
    pinCode: "",
    state: "",
    country: "India",
    totalPayment: "",
    paymentReceived: "",
    paymentDue: "",
    paymentReceipt: "",
    textarea: "",
    listening: false,
    reading: false,
    writing: false,
    speaking: false,
    admissionDate: "",
    courseCompletion: false,
    IMPS: false,
    GooglePay: false,
    NEFT: false,
    PhonePe: false,
    CASH: "",
    teacherAssigned: [],
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setStudentformData({ ...studentformData, [e.target.name]: e.target.value });
  };
  console.log(studentformData);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createStudent(studentformData));
    // console.log("I am clicked, check to un comment the dispatch actions");
  };

  const [state, setState] = useState(0);
  // Proceed to next step
  const nextStep = (e) => {
    e.preventDefault();
    setState(state + 1);
    handleSubmit(e);
  };

  // Go back to prev step
  const prevStep = (e) => {
    e.preventDefault();
    setState(state - 1);
  };

  const firstStep = (e) => {
    e.preventDefault();
    setState(0);
  };

  switch (state) {
    case 0:
      return (
        <StudentForm1
          nextStep={nextStep}
          studentformData={studentformData}
          handleChange={handleChange}
        />
      );
    case 1:
      return (
        <StudentForm2
          prevStep={prevStep}
          nextStep={nextStep}
          studentformData={studentformData}
          handleChange={handleChange}
        />
      );
    case 2:
      return (
        <StudentForm3
          prevStep={prevStep}
          nextStep={nextStep}
          studentformData={studentformData}
          setStudentformData={setStudentformData}
          handleChange={handleChange}
        />
      );
    case 3:
      return (
        <StudentForm4
          prevStep={prevStep}
          studentformData={studentformData}
          handleSubmit={handleSubmit}
          firstStep={firstStep}
        />
      );

    default:
      console.log("This is a multi-step form built with React.");
      return state;
  }
}

//// const handleClickShowPassword = () => {
//   setValues({ ...values, showPassword: !values.showPassword });
// };

function StudentForm1({ nextStep, studentformData, handleChange }) {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("account"));
  const history = useHistory();
  return (
    <>
      {!user?.result?._id ? (
        history.push("/")
      ) : (
        <>
          <Typography variant="h2" className={classes.heading}>
            Basic details
          </Typography>

          <div className={classes.root}>
            <Paper elevation={3} className={classes.center}>
              <div>
                <Paper elevation={3} className={classes.center}>
                  <div xs="12" sm="6" md="4" lg="4">
                    <TextField
                      label="First Name"
                      name="firstname"
                      value={studentformData.firstname}
                      onChange={handleChange}
                      className={clsx(classes.margin, classes.textField)}
                    />
                    <TextField
                      label="Last Name"
                      name="lastname"
                      value={studentformData.lastname}
                      onChange={handleChange}
                      className={clsx(classes.margin, classes.textField)}
                    />
                    <TextField
                      label="Surname"
                      name="surname"
                      value={studentformData.surname}
                      onChange={handleChange}
                      className={clsx(classes.margin, classes.textField)}
                    />
                  </div>
                  <div xs="12" sm="6" md="4" lg="4">
                    <TextField
                      label="Assign unique roll number"
                      name="rollNumber"
                      value={studentformData.rollNumber}
                      onChange={handleChange}
                      className={clsx(classes.margin, classes.textField)}
                    />
                    <TextField
                      label="Class"
                      name="class"
                      value={studentformData.class}
                      onChange={handleChange}
                      className={clsx(classes.margin, classes.textField)}
                    />
                    <TextField
                      label="Age"
                      name="age"
                      value={studentformData.age}
                      onChange={handleChange}
                      className={clsx(classes.margin, classes.textField)}
                    />{" "}
                  </div>
                  <div xs="12" sm="6" md="4" lg="4">
                    <TextField
                      label="Native spoken language"
                      name="nativeLanguage"
                      value={studentformData.nativeLanguage}
                      onChange={handleChange}
                      className={clsx(classes.margin, classes.textField)}
                    />
                    <TextField
                      label="Father's name"
                      name="fathername"
                      value={studentformData.fathername}
                      onChange={handleChange}
                      className={clsx(classes.margin, classes.textField)}
                    />
                    <TextField
                      label="Mother's name"
                      name="mothername"
                      value={studentformData.mothername}
                      onChange={handleChange}
                      className={clsx(classes.margin, classes.textField)}
                    />
                  </div>
                  <div xs="12" md="12" lg="12" sm="12">
                    <TextField
                      id="standard-multiline-flexible"
                      label="Additional description"
                      name="textarea"
                      multiline
                      rowsMax={4}
                      value={studentformData.textarea}
                      onChange={handleChange}
                      fullWidth
                      className={clsx(classes.margin, classes.textarea)}
                    />
                  </div>
                  <TextField
                    label="Date of birth"
                    name="dateOfbirth"
                    value={studentformData.dateOfbirth}
                    onChange={handleChange}
                    className={clsx(classes.margin, classes.textField)}
                  />
                  <TextField
                    label="Date of admission"
                    name="admissionDate"
                    value={studentformData.admissionDate}
                    onChange={handleChange}
                    className={clsx(classes.margin, classes.textField)}
                  />
                  <TextField
                    disabled
                    id="standard-disabled"
                    label="User name"
                    className={clsx(classes.margin, classes.textField)}
                  />
                </Paper>
              </div>
            </Paper>
          </div>

          <Button
            color="primary"
            variant="contained"
            onClick={nextStep}
            className={classes.button}
          >
            Next
          </Button>
        </>
      )}
    </>
  );
}

function StudentForm2({ prevStep, nextStep, handleChange, studentformData }) {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("account"));
  const history = useHistory();
  return (
    <>
      {!user?.result?._id ? (
        history.push("/")
      ) : (
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
                    name="email"
                    value={studentformData.email}
                    onChange={handleChange}
                    className={clsx(classes.margin, classes.textField)}
                  />
                  <TextField
                    label="Contact number"
                    name="phoneNumber"
                    value={studentformData.phoneNumber}
                    onChange={handleChange}
                    className={clsx(classes.margin, classes.textField)}
                  />
                  <TextField
                    label="Alternate contact number"
                    name="alternatePhone"
                    value={studentformData.alternatePhone}
                    onChange={handleChange}
                    className={clsx(classes.margin, classes.textField)}
                  />

                  <Grid>
                    <TextField
                      label="Address"
                      name="address"
                      value={studentformData.address}
                      onChange={handleChange}
                      className={clsx(classes.margin, classes.textField)}
                    />
                    <TextField
                      label="City"
                      name="city"
                      value={studentformData.city}
                      onChange={handleChange}
                      className={clsx(classes.margin, classes.textField)}
                    />
                    <TextField
                      label="Postal Code"
                      name="pinCode"
                      value={studentformData.pinCode}
                      onChange={handleChange}
                      className={clsx(classes.margin, classes.textField)}
                    />
                  </Grid>

                  <TextField
                    label="State"
                    name="state"
                    value={studentformData.state}
                    onChange={handleChange}
                    className={clsx(classes.margin, classes.textField)}
                  />
                  <TextField
                    label="Country"
                    name="country"
                    value={studentformData.country}
                    onChange={handleChange}
                    className={clsx(classes.margin, classes.textField)}
                  />
                  <TextField
                    label="Skype ID / Any online ID for communication"
                    name="onlineID"
                    value={studentformData.onlineID}
                    onChange={handleChange}
                    className={clsx(classes.margin, classes.textField)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">@</InputAdornment>
                      ),
                    }}
                  />
                </Paper>
              </div>
            </Paper>
          </div>

          <Button
            color="secondary"
            variant="contained"
            onClick={prevStep}
            className={classes.button}
          >
            Back
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={nextStep}
            className={classes.button}
          >
            Next
          </Button>
        </>
      )}
    </>
  );
}

function StudentForm3({
  prevStep,
  nextStep,
  studentformData,
  setStudentformData,
  handleChange,
}) {
  const classes = useStyles();

  const handleBoolean = (event) => {
    setStudentformData({
      ...studentformData,
      [event.target.name]: event.target.checked,
    });
  };

  const user = JSON.parse(localStorage.getItem("account"));
  const history = useHistory();
  return (
    <>
      {!user?.result?._id ? (
        history.push("/")
      ) : (
        <>
          <Typography variant="h2" className={classes.heading}>
            Payment details
          </Typography>

          <div className={classes.root}>
            <Paper elevation={3} className={classes.center}>
              <div>
                <Paper elevation={3} className={classes.center}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Choose module</FormLabel>
                    <FormGroup>
                      <div xs="6" md="3" sm="6" lg="3">
                        <FormControlLabel
                          control={
                            <Switch
                              checked={studentformData.reading}
                              onChange={handleBoolean}
                              name="reading"
                            />
                          }
                          label="reading"
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              checked={studentformData.listening}
                              onChange={handleBoolean}
                              name="listening"
                            />
                          }
                          label="listening"
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              checked={studentformData.speaking}
                              onChange={handleBoolean}
                              name="speaking"
                            />
                          }
                          label="speaking"
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              checked={studentformData.writing}
                              onChange={handleBoolean}
                              name="writing"
                            />
                          }
                          label="writing"
                        />
                      </div>
                    </FormGroup>
                    <FormHelperText>
                      Carefully select all relevant module{" "}
                    </FormHelperText>
                  </FormControl>
                  <div xs="12" sm="12" md="4" lg="4">
                    <TextField
                      label="Total payment"
                      name="totalPayment"
                      value={studentformData.totalPayment}
                      onChange={handleChange}
                      className={clsx(classes.margin, classes.textField)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">Rs</InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      label="Due amount"
                      name="paymentDue"
                      value={studentformData.paymentDue}
                      onChange={handleChange}
                      className={clsx(classes.margin, classes.textField)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">Rs</InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      label="Payment received"
                      name="paymentReceived"
                      value={studentformData.paymentReceived}
                      onChange={handleChange}
                      className={clsx(classes.margin, classes.textField)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">Rs</InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  <div>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">
                        Choose payment mode
                      </FormLabel>
                      <FormGroup
                        className={clsx(classes.margin, classes.textField)}
                      >
                        <FormControlLabel
                          control={
                            <Switch
                              checked={studentformData.IMPS}
                              onChange={handleBoolean}
                              name="IMPS"
                            />
                          }
                          label="IMPS"
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              checked={studentformData.GooglePay}
                              onChange={handleBoolean}
                              name="GooglePay"
                            />
                          }
                          label="GooglePay"
                        />

                        <FormControlLabel
                          control={
                            <Switch
                              checked={studentformData.PhonePe}
                              onChange={handleBoolean}
                              name="PhonePe"
                            />
                          }
                          label="PhonePe"
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              checked={studentformData.NEFT}
                              onChange={handleBoolean}
                              name="NEFT"
                            />
                          }
                          label="NEFT"
                        />

                        <FormControlLabel
                          control={
                            <Switch
                              checked={studentformData.CASH}
                              onChange={handleBoolean}
                              name="CASH"
                            />
                          }
                          label="CASH"
                        />
                      </FormGroup>
                      <FormHelperText>Be careful</FormHelperText>
                    </FormControl>

                    <TextareaAutosize
                      aria-label="Payment receipt note"
                      name="paymentReceipt"
                      value={studentformData.paymentReceipt}
                      onChange={handleChange}
                      rowsMin={5}
                      placeholder="Payment receipt note"
                      className={clsx(classes.margin, classes.textField)}
                    />
                  </div>
                </Paper>
              </div>
            </Paper>
          </div>

          <Button
            color="secondary"
            variant="contained"
            onClick={prevStep}
            className={classes.button}
          >
            Back
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={nextStep}
            className={classes.button}
          >
            Next
          </Button>
        </>
      )}
    </>
  );
}

function StudentForm4({ prevStep, firstStep, studentformData, handleSubmit }) {
  const classes = useStyles();
  const history = useHistory();
  function dashboard(e) {
    history.push("/");
  }

  const user = JSON.parse(localStorage.getItem("account"));

  return (
    <>
      {!user?.result?._id ? (
        history.push("/")
      ) : (
        <>
          <Typography variant="h2" className={classes.heading}>
            Summary
          </Typography>
          <div className={classes.root}>
            <Paper elevation={3} className={classes.center}>
              <div>
                <Paper elevation={3} className={classes.center}>
                  <TableContainer component={Paper} className="padding-grid ">
                    <Table
                      className={classes.table}
                      aria-label="customized table"
                    >
                      <TableHead>
                        <TableRow>
                          <StyledTableCell align="left">Title </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">Value</StyledTableCell>
                        </TableRow>
                      </TableHead>

                      <TableBody>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            First name
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentformData.firstname}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Last name
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentformData.lastname}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Surname
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentformData.surname}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Father name
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentformData.fathername}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Mother name
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentformData.mothername}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Native language
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentformData.nativeLanguage}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Email ID
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentformData.email}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Contact number
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentformData.phoneNumber}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Alternate contact number
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentformData.alternatePhone}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Online ID
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentformData.onlineID}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Roll number assigned
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentformData.rollNumber}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">Age</StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentformData.age}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">Class</StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentformData.class}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Address
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentformData.address}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">City</StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentformData.city}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Postal code
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentformData.pinCode}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Country
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentformData.country}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Total payment
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentformData.totalPayment}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Payment due
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentformData.paymentDue}
                          </StyledTableCell>
                        </StyledTableRow>

                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Additional description{" "}
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentformData.textarea}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Reading module opted
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {!studentformData.reading ? "No" : "Yes"}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Listening module opted
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {!studentformData.listening ? "No" : "Yes"}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Writing module opted
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {!studentformData.writing ? "No" : "Yes"}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Speaking module opted
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {!studentformData.speaking ? "No" : "Yes"}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            {" "}
                            Date of admission
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentformData.admissionDate}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Payment mode - IMPS opted
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {!studentformData.IMPS ? "No" : "Yes"}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Payment mode - GooglePay opted
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {!studentformData.GooglePay ? "No" : "Yes"}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Payment mode - NEFT opted
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {!studentformData.NEFT ? "No" : "Yes"}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Payment mode - PhonePe opted
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {!studentformData.PhonePe ? "No" : "Yes"}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Payment mode - CASH
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {!studentformData.CASH ? "No" : "Yes"}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Payment receipt
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentformData.paymentReceipt}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Teacher assigned
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentformData.teacherAssigned}
                          </StyledTableCell>
                        </StyledTableRow>
                      </TableBody>
                    </Table>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={prevStep}
                      align="centre"
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={handleSubmit}
                      align="centre"
                      className={classes.button}
                    >
                      Submit
                    </Button>
                  </TableContainer>
                </Paper>
              </div>
            </Paper>
          </div>
          <Button
            color="primary"
            variant="contained"
            onClick={firstStep}
            className={classes.button}
          >
            New registration
          </Button>
          <Button
            color="primary-secondary"
            variant="contained"
            onClick={dashboard}
            className={classes.button}
          >
            Dashboard
          </Button>{" "}
        </>
      )}
    </>
  );
}
