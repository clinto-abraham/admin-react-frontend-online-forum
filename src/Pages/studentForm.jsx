import React, { useState } from "react";
import { createStudent } from "../redux/actions/studentAction";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
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
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
    margin: theme.spacing(1),
  },
  module:{
    margin: "auto",
    alignSelf: "left",
    justifySelf: "left",
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
  const [studentFormData, setStudentFormData] = useState({
    firstName: "",
    lastName: "",
    surname: "",
    fatherName: "",
    motherName: "",
    nativeLanguage: "",
    dateOfBirth: "",
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
    assigned: {
      listening: {
        Lopted: false,
        LdateOfAssign: "",
        LmoduleEndDate: "",
        LmoduleCost: "",
        LteacherName: "",
        LtutorialCost: "",
        LlessonComplete: "",
        LtutorialHrsComplete: "",
        LteacherID: "",
      },
      reading: {
        Ropted: false,
        RdateOfAssign: "",
        RmoduleEndDate: "",
        RmoduleCost: "",
        RteacherName: "",
        RtutorialCost: "",
        RlessonComplete: "",
        RtutorialHrsComplete: "",
        RteacherID: "",
      },

      writing: {
        Wopted: false,
        WdateOfAssign: "",
        WmoduleEndDate: "",
        WmoduleCost: "",
        WteacherName: "",
        WtutorialCost: "",
        WlessonComplete: "",
        WtutorialHrsComplete: "",
        WteacherID: "",
      },

      speaking: {
        Sopted: false,
        SdateOfAssign: "",
        SmoduleEndDate: "",
        SmoduleCost: "",
        SteacherName: "",
        StutorialCost: "",
        SlessonComplete: "",
        StutorialHrsComplete: "",
        SteacherID: "",
      },
    },

    admissionDate: "",
    courseCompletion: false,
    IMPS: false,
    GooglePay: false,
    NEFT: false,
    PhonePe: false,
    CASH: false,
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (e) => {
    setStudentFormData({ ...studentFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createStudent(studentFormData));
    history.push("/register-student");
  };

  const [state, setState] = useState(0);

  const nextStep = (e) => {
    e.preventDefault();
    setState(state + 1);
  };

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
          studentFormData={studentFormData}
          handleChange={handleChange}
        />
      );
    case 1:
      return (
        <StudentForm2
          prevStep={prevStep}
          nextStep={nextStep}
          studentFormData={studentFormData}
          handleChange={handleChange}
        />
      );
    case 2:
      return (
        <StudentForm3
          prevStep={prevStep}
          nextStep={nextStep}
          studentFormData={studentFormData}
          setStudentFormData={setStudentFormData}
          handleChange={handleChange}
        />
      );
    case 3:
      return (
        <StudentForm4
          prevStep={prevStep}
          nextStep={nextStep}
          studentFormData={studentFormData}
          setStudentFormData={setStudentFormData}
          handleChange={handleChange}
        />
      );
      case 4:
      return (
        <StudentForm5
          prevStep={prevStep}
          studentFormData={studentFormData}
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

function StudentForm1({ nextStep, studentFormData, handleChange }) {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("account"));
  const history = useHistory();
  const back = () => {
    history.push("/dashboard");
  };
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
              <Button variant="outlined" onClick={back} color="secondary">
                Back
              </Button>
              <Paper elevation={3} className={classes.center}>
                <div xs="12" sm="6" md="4" lg="4">
                  <TextField
                    label="First Name"
                    name="firstName"
                    value={studentFormData.firstName}
                    onChange={handleChange}
                    className={classes.textField}
                  />
                  <TextField
                    label="Last Name"
                    name="lastName"
                    value={studentFormData.lastName}
                    onChange={handleChange}
                    className={classes.textField}
                  />
                  <TextField
                    label="Surname"
                    name="surname"
                    value={studentFormData.surname}
                    onChange={handleChange}
                    className={classes.textField}
                  />

                  <TextField
                    label="Assign unique roll number"
                    name="rollNumber"
                    value={studentFormData.rollNumber}
                    onChange={handleChange}
                    className={classes.textField}
                  />
                </div>
                <div xs="12" sm="6" md="4" lg="4">
                  <TextField
                    label="Class"
                    name="class"
                    value={studentFormData.class}
                    onChange={handleChange}
                    className={classes.textField}
                  />
                  <TextField
                    label="Age"
                    name="age"
                    value={studentFormData.age}
                    onChange={handleChange}
                    className={classes.textField}
                  />{" "}
                  <TextField
                    label="Native spoken language"
                    name="nativeLanguage"
                    value={studentFormData.nativeLanguage}
                    onChange={handleChange}
                    className={classes.textField}
                  />
                  <TextField
                    label="Father's name"
                    name="fatherName"
                    value={studentFormData.fatherName}
                    onChange={handleChange}
                    className={classes.textField}
                  />{" "}
                </div>
                <div xs="12" sm="6" md="4" lg="4">
                  <TextField
                    label="Mother's name"
                    name="motherName"
                    value={studentFormData.motherName}
                    onChange={handleChange}
                    className={classes.textField}
                  />

                  <TextField
                    label="Date of birth"
                    name="dateOfBirth"
                    value={studentFormData.dateOfBirth}
                    onChange={handleChange}
                    className={classes.textField}
                  />
                  <TextField
                    label="Date of admission"
                    name="admissionDate"
                    value={studentFormData.admissionDate}
                    onChange={handleChange}
                    className={classes.textField}
                  />
                  <TextField
                    disabled
                    id="standard-disabled"
                    label="User name"
                    className={classes.textField}
                  />
                </div>
                <div xs="8" md="8" lg="8" sm="8">
                  <TextField
                    id="standard-multiline-flexible"
                    label="Additional description"
                    name="textarea"
                    multiline
                    rowsMax={4}
                    value={studentFormData.textarea}
                    onChange={handleChange}
                    fullWidth
                    className={classes.textField}
                  />
                </div>
              </Paper>
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

function StudentForm2({ prevStep, nextStep, handleChange, studentFormData }) {
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
                  <div xs="12" sm="6" md="4" lg="4">
                    <TextField
                      label="Enter email id"
                      name="email"
                      value={studentFormData.email}
                      onChange={handleChange}
                      className={classes.textField}
                    />
                    <TextField
                      label="Contact number"
                      name="phoneNumber"
                      value={studentFormData.phoneNumber}
                      onChange={handleChange}
                      className={classes.textField}
                    />
                    <TextField
                      label="Alternate contact number"
                      name="alternatePhone"
                      value={studentFormData.alternatePhone}
                      onChange={handleChange}
                      className={classes.textField}
                    />
                    <TextField
                      label="Address"
                      name="address"
                      value={studentFormData.address}
                      onChange={handleChange}
                      className={classes.textField}
                    />{" "}
                  </div>
                  <div xs="12" sm="6" md="4" lg="4">
                    <TextField
                      label="City"
                      name="city"
                      value={studentFormData.city}
                      onChange={handleChange}
                      className={classes.textField}
                    />
                    <TextField
                      label="Postal Code"
                      name="pinCode"
                      value={studentFormData.pinCode}
                      onChange={handleChange}
                      className={classes.textField}
                    />

                    <TextField
                      label="State"
                      name="state"
                      value={studentFormData.state}
                      onChange={handleChange}
                      className={classes.textField}
                    />
                    <TextField
                      label="Country"
                      name="country"
                      value={studentFormData.country}
                      onChange={handleChange}
                      className={classes.textField}
                    />
                  </div>
                  <TextField
                    label="Skype ID / Any online ID for communication"
                    name="onlineID"
                    value={studentFormData.onlineID}
                    onChange={handleChange}
                    className={classes.textField}
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
const CustomSwitch = ({checked, onChange,handleBoolean, name, label}) => {
  const classes = useStyles();
  return (
    <Grid item lg={12}>
                        <FormControlLabel
                          control={
                            <Switch
                              checked={checked}
                              onChange={onChange}
                              name={name}
                            />
                          }
                          label={label}
                        />
                      </Grid>
  )
}

const CustomTextfield = ({Adornment, type, name, value, onChange, handleChange, helperText}) => {
  const classes = useStyles();
  return (<Grid item lg={12}>
  {Adornment ? <TextField
                          type={type}
                          name={name}
                          value={value}
                          onChange={onChange}
                          className={classes.textField}
                          id={name}
                          helperText={helperText}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                {Adornment}
                              </InputAdornment>
                            ),
                          }}
                        /> : 
    <TextField
                          type={type}
                          name={name}
                          value={value}
                          onChange={onChange}
                          className={classes.textField}
                          id={name}
                          helperText={helperText}
                         
                        /> }
                        </Grid>
  )
}

function StudentForm3({
  prevStep,
  nextStep,
  studentFormData,
  setStudentFormData,
  handleChange,
}) {
  const classes = useStyles();

  const handleBoolean = (event) => {
    setStudentFormData({
      ...studentFormData,
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
            Select modules
          </Typography>

          <div className={classes.root}>
            <Paper elevation={3} className={classes.center}>
              <Paper elevation={3} className={classes.center}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Choose module</FormLabel>
                  <FormGroup>
                  <div xs="12"  sm="12" md="6" lg="6">
                    <Grid container spacing={1} className={classes.module}>
    <CustomSwitch label="Reading" checked={studentFormData.Ropted} onChange={handleBoolean} name="Ropted" />                  
                      
    <CustomTextfield type="Date" name="RdateOfAssign" value={studentFormData.RdateOfAssign} onChange={handleChange} helperText="Date Of Assign"  />
    <CustomTextfield type="Date" name="RmoduleEndDate" value={studentFormData.RmoduleEndDate} onChange={handleChange} helperText="Expected end date of module"  />
    <CustomTextfield Adornment="Rs" type="number" name="RmoduleCost" value={studentFormData.RmoduleCost} onChange={handleChange} helperText="Cost of reading module"  />
    <CustomTextfield Adornment={<ArrowDropDownIcon />} name="RteacherName" value={studentFormData.RteacherName} onChange={handleChange} helperText="Assign teacher for reading"  />
    <CustomTextfield Adornment="Rs" type="number" name="RtutorialCost" value={studentFormData.RtutorialCost} onChange={handleChange} helperText="Expected cost of tutorial as per assigned teacher"  />

                     
                    </Grid>
                    <Grid container spacing={1} className={classes.module}>
    <CustomSwitch label="Listening" checked={studentFormData.Lopted} onChange={handleBoolean} name="Lopted" />                  
                      
    <CustomTextfield type="Date" name="LdateOfAssign" value={studentFormData.LdateOfAssign} onChange={handleChange} helperText="Date Of Assign"  />
    <CustomTextfield type="Date" name="LmoduleEndDate" value={studentFormData.LmoduleEndDate} onChange={handleChange} helperText="Expected end date of module"  />
    <CustomTextfield Adornment="Rs" type="number" name="LmoduleCost" value={studentFormData.LmoduleCost} onChange={handleChange} helperText="Cost of listening module"  />
    <CustomTextfield Adornment={<ArrowDropDownIcon />} name="LteacherName" value={studentFormData.LteacherName} onChange={handleChange} helperText="Assign teacher for listening"  />
    <CustomTextfield Adornment="Rs" type="number" name="LtutorialCost" value={studentFormData.LtutorialCost} onChange={handleChange} helperText="Expected cost of tutorial as per assigned teacher"  />
    
                     
                    </Grid>
                    <Grid container spacing={1} className={classes.module}>
    <CustomSwitch label="Writing" checked={studentFormData.Wopted} onChange={handleBoolean} name="Wopted" />                  
                      
    <CustomTextfield type="Date" name="WdateOfAssign" value={studentFormData.WdateOfAssign} onChange={handleChange} helperText="Date Of Assign"  />
    <CustomTextfield type="Date" name="WmoduleEndDate" value={studentFormData.WmoduleEndDate} onChange={handleChange} helperText="Expected end date of module"  />
    <CustomTextfield Adornment="Rs" type="number" name="WmoduleCost" value={studentFormData.WmoduleCost} onChange={handleChange} helperText="Cost of writing module"  />
    <CustomTextfield Adornment={<ArrowDropDownIcon />} name="WteacherName" value={studentFormData.WteacherName} onChange={handleChange} helperText="Assign teacher for writing"  />
    <CustomTextfield Adornment="Rs" type="number" name="WtutorialCost" value={studentFormData.WtutorialCost} onChange={handleChange} helperText="Expected cost of tutorial as per assigned teacher"  />
    
                     
                    </Grid>
                    <Grid container spacing={1} className={classes.module}>
    <CustomSwitch label="Speaking" checked={studentFormData.Sopted} onChange={handleBoolean} name="Sopted" />                  
                      
    <CustomTextfield type="Date" name="SdateOfAssign" value={studentFormData.SdateOfAssign} onChange={handleChange} helperText="Date Of Assign"  />
    <CustomTextfield type="Date" name="SmoduleEndDate" value={studentFormData.SmoduleEndDate} onChange={handleChange} helperText="Expected end date of module"  />
    <CustomTextfield Adornment="Rs" type="number" name="SmoduleCost" value={studentFormData.SmoduleCost} onChange={handleChange} helperText="Cost of speaking module"  />
    <CustomTextfield Adornment={<ArrowDropDownIcon />} name="SteacherName" value={studentFormData.SteacherName} onChange={handleChange} helperText="Assign teacher for speaking"  />
    <CustomTextfield Adornment="Rs" type="number" name="StutorialCost" value={studentFormData.StutorialCost} onChange={handleChange} helperText="Expected cost of tutorial as per assigned teacher"  />
    
                     
                    </Grid>
                    
                      {/* <FormControlLabel
                        control={
                          <Switch
                            checked={studentFormData.listening}
                            onChange={handleBoolean}
                            name="listening"
                          />
                        }
                        label="listening"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={studentFormData.speaking}
                            onChange={handleBoolean}
                            name="speaking"
                          />
                        }
                        label="speaking"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={studentFormData.writing}
                            onChange={handleBoolean}
                            name="writing"
                          />
                        }
                        label="writing"
                      /> */}
                    </div>
                  </FormGroup>
                </FormControl>
                
              </Paper>
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

function StudentForm4({
  prevStep,
  nextStep,
  studentFormData,
  setStudentFormData,
  handleChange,
}) {
  const classes = useStyles();

  const handleBoolean = (event) => {
    setStudentFormData({
      ...studentFormData,
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
              <Paper elevation={3} className={classes.center}>


<div xs="12" sm="12" md="4" lg="4">
                  <TextField
                    label="Total payment"
                    name="totalPayment"
                    value={studentFormData.totalPayment}
                    onChange={handleChange}
                    className={classes.textField}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">Rs</InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    label="Due amount"
                    name="paymentDue"
                    value={studentFormData.paymentDue}
                    onChange={handleChange}
                    className={classes.textField}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">Rs</InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    label="Payment received"
                    name="paymentReceived"
                    value={studentFormData.paymentReceived}
                    onChange={handleChange}
                    className={classes.textField}
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
                    <FormGroup className={classes.textField}>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={studentFormData.IMPS}
                            onChange={handleBoolean}
                            name="IMPS"
                          />
                        }
                        label="IMPS"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={studentFormData.GooglePay}
                            onChange={handleBoolean}
                            name="GooglePay"
                          />
                        }
                        label="GooglePay"
                      />

                      <FormControlLabel
                        control={
                          <Switch
                            checked={studentFormData.PhonePe}
                            onChange={handleBoolean}
                            name="PhonePe"
                          />
                        }
                        label="PhonePe"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={studentFormData.NEFT}
                            onChange={handleBoolean}
                            name="NEFT"
                          />
                        }
                        label="NEFT"
                      />

                      <FormControlLabel
                        control={
                          <Switch
                            checked={studentFormData.CASH}
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
                    value={studentFormData.paymentReceipt}
                    onChange={handleChange}
                    rowsMin={5}
                    placeholder="Payment receipt note"
                    className={classes.textField}
                  />
                </div>

              </Paper>  </Paper>
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



function StudentForm5({ prevStep, firstStep, studentFormData, handleSubmit }) {
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
                            {studentFormData.firstName}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Last name
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentFormData.lastName}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Surname
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentFormData.surname}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Father name
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentFormData.fatherName}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Mother name
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentFormData.motherName}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Native language
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentFormData.nativeLanguage}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Email ID
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentFormData.email}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Contact number
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentFormData.phoneNumber}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Alternate contact number
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentFormData.alternatePhone}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Online ID
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentFormData.onlineID}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Roll number assigned
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentFormData.rollNumber}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">Age</StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentFormData.age}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">Class</StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentFormData.class}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Address
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentFormData.address}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">City</StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentFormData.city}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Postal code
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentFormData.pinCode}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Country
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentFormData.country}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Total payment
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentFormData.totalPayment}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Payment due
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentFormData.paymentDue}
                          </StyledTableCell>
                        </StyledTableRow>

                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Additional description{" "}
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentFormData.textarea}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            <Typography> Reading module opted</Typography>
                            <Typography>Date of reading assigned</Typography>
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            <Typography>
                              {" "}
                              {!studentFormData.reading ? "No" : "Yes"}
                            </Typography>
                            <Typography>
                              {" "}
                              {studentFormData.RdateOfAssign}
                            </Typography>
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Listening module opted
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {!studentFormData.listening ? "No" : "Yes"}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Writing module opted
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {!studentFormData.writing ? "No" : "Yes"}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Speaking module opted
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {!studentFormData.speaking ? "No" : "Yes"}
                          </StyledTableCell>
                        </StyledTableRow>

                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Payment mode - IMPS opted
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {!studentFormData.IMPS ? "No" : "Yes"}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Payment mode - GooglePay opted
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {!studentFormData.GooglePay ? "No" : "Yes"}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Payment mode - NEFT opted
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {!studentFormData.NEFT ? "No" : "Yes"}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Payment mode - PhonePe opted
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {!studentFormData.PhonePe ? "No" : "Yes"}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Payment mode - CASH
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {!studentFormData.CASH ? "No" : "Yes"}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Payment receipt
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentFormData.paymentReceipt}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Teacher assigned
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {studentFormData.teacherAssigned}
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
        </>
      )}
    </>
  );
}
