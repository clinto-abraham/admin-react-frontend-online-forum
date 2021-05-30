import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";
// import FormGroup from "@material-ui/core/FormGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
// import Switch from "@material-ui/core/Switch";
import { useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
// import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
// import Checkbox from "@material-ui/core/Checkbox";
// import Chip from "@material-ui/core/Chip";
import { createTeacherAction } from "../redux/actions/teacherActions.js";

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

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
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

export default function TeacherForm() {
  const [teacherFormData, setTeacherFormData] = useState({
    firstName: "",
    lastName: "",
    surname: "",
    userName: "",
    password: "",
    dateOfJoining: "",
    accountName: "",
    accountNumber: "",
    IFSC: "",
    parentName: "",
    spouse: "",
    nativeLanguage: "",
    uniqueEmployeeID: "",
    dob: "",
    textarea: "",
    email: "",
    phoneNumber: "",
    alternatePhone: "",
    address: "",
    city: "",
    pinCode: "",
    state: "",
    country: "India",
    onlineID: "",
    classes: "",
    module: "",
    lang: "",
    subject: "",
    experience: "",
    preOrganization: "",
    costHr: "",
    lessonCost: ""
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTeacherFormData({ ...teacherFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTeacherAction(teacherFormData));
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
        <TeacherForm1
          nextStep={nextStep}
          teacherFormData={teacherFormData}
          handleChange={handleChange}
        />
      );
    case 1:
      return (
        <TeacherForm2
          prevStep={prevStep}
          nextStep={nextStep}
          teacherFormData={teacherFormData}
          handleChange={handleChange}
        />
      );
    case 2:
      return (
        <TeacherForm3
          prevStep={prevStep}
          nextStep={nextStep}
          teacherFormData={teacherFormData}
          setTeacherFormData={setTeacherFormData}
          handleChange={handleChange}
        />
      );
    case 3:
      return (
        <TeacherForm4
          prevStep={prevStep}
          teacherFormData={teacherFormData}
          handleSubmit={handleSubmit}
          firstStep={firstStep}
        />
      );

    default:
      console.log("This is a multi-step form built with React.");
      return state;
  }
}

// function getStyles(name, teacherFormData, theme) {
//   return {
//     fontWeight:
//       teacherFormData.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const choices = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
// const modules = ["reading", "writing", "speaking", "listening"];
// const subjects = ["Maths", "Science", "Physics", "Chemistry", "Biology", "Environmental Science", "Social Studies", "Moral Science"];
// const languages = ["reading", "writing", "speaking", "listening"];

function TeacherForm1({ nextStep, teacherFormData, handleChange }) {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("account"));
  const history = useHistory();
  // const theme = useTheme();

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
            <Paper
              elevation={3}
              className={classes.center}
              style={{ backgroundColor: "transparent" }}>
              <div>
                <Paper
                  elevation={3}
                  className={classes.center}
                  style={{ backgroundColor: "transparent" }}>
                  <div xs={12} sm={6} md={4} lg={4}>
                    <TextField
                      label="First Name"
                      name="firstName"
                      value={teacherFormData.firstName}
                      onChange={handleChange}
                      className={`${classes.margin} ${classes.textField}`}
                    />
                    <TextField
                      label="Last Name"
                      name="lastName"
                      value={teacherFormData.lastName}
                      onChange={handleChange}
                      className={`${classes.margin} ${classes.textField}`}
                    />
                    <TextField
                      label="Surname"
                      name="surname"
                      value={teacherFormData.surname}
                      onChange={handleChange}
                      className={`${classes.margin} ${classes.textField}`}
                    />
                  </div>
                  <div xs="12" sm="6" md="4" lg="4">
                    <TextField
                      label="Assign Username"
                      name="userName"
                      value={teacherFormData.userName}
                      onChange={handleChange}
                      className={`${classes.margin} ${classes.textField}`}
                    />
                    <TextField
                      label="Assign Password"
                      name="password"
                      value={teacherFormData.password}
                      onChange={handleChange}
                      className={`${classes.margin} ${classes.textField}`}
                    />
                    <TextField
                      label="Date of joining"
                      name="dateOfJoining"
                      value={teacherFormData.dateOfJoining}
                      onChange={handleChange}
                      className={`${classes.margin} ${classes.textField}`}
                    />
                  </div>
                  <div xs="12" sm="6" md="4" lg="4">
                    <TextField
                      label="Bank account holder full name"
                      name="accountName"
                      value={teacherFormData.accountName}
                      onChange={handleChange}
                      className={`${classes.margin} ${classes.textField}`}
                    />
                    <TextField
                      label="Bank account number"
                      name="accountNumber"
                      value={teacherFormData.accountNumber}
                      onChange={handleChange}
                      className={`${classes.margin} ${classes.textField}`}
                    />
                    <TextField
                      label="IFSC Code"
                      name="IFSC"
                      value={teacherFormData.IFSC}
                      onChange={handleChange}
                      className={`${classes.margin} ${classes.textField}`}
                    />
                  </div>
                  <div xs="12" md="12" lg="12" sm="12">
                    <TextField
                      label="Father or Mother's name"
                      name="parentName"
                      value={teacherFormData.parentName}
                      onChange={handleChange}
                      className={`${classes.margin} ${classes.textField}`}
                    />
                    <TextField
                      label="Spouse's name"
                      name="spouse"
                      value={teacherFormData.spouse}
                      onChange={handleChange}
                      className={`${classes.margin} ${classes.textField}`}
                    />

                    <TextField
                      label="Native language"
                      name="nativeLanguage"
                      value={teacherFormData.nativeLanguage}
                      onChange={handleChange}
                      className={`${classes.margin} ${classes.textField}`}
                    />
                  </div>

                  <div xs="12" md="12" lg="12" sm="12">
                    <TextField
                      label="Employee ID"
                      name="uniqueEmployeeID"
                      value={teacherFormData.uniqueEmployeeID}
                      onChange={handleChange}
                      className={`${classes.margin} ${classes.textField}`}
                    />
                    <TextField
                      label="Date of birth"
                      name="dob"
                      value={teacherFormData.dob}
                      onChange={handleChange}
                      className={`${classes.margin} ${classes.textField}`}
                    />
                    <TextField
                      id="standard-multiline-flexible"
                      label="Additional description"
                      name="textarea"
                      multiline
                      rowsMax={4}
                      value={teacherFormData.textarea}
                      onChange={handleChange}
                      className={`${classes.margin} ${classes.textField}`}
                    />
                  </div>
                </Paper>
              </div>
            </Paper>
          </div>

          <Button
            color="primary"
            variant="contained"
            onClick={nextStep}
            className={classes.button}>
            Next
          </Button>
        </>
      )}
    </>
  );
}

function TeacherForm2({ prevStep, nextStep, handleChange, teacherFormData }) {
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
            <Paper elevation={3} className={classes.center} style={{ backgroundColor: "transparent" }}>
              <div>
                <Paper elevation={3} className={classes.center} style={{ backgroundColor: "transparent" }}>
                  <TextField
                    label="Enter email id"
                    name="email"
                    value={teacherFormData.email}
                    onChange={handleChange}
                    className={`${classes.margin} ${classes.textField}`}
                  />
                  <TextField
                    label="Contact number"
                    name="phoneNumber"
                    value={teacherFormData.phoneNumber}
                    onChange={handleChange}
                    className={`${classes.margin} ${classes.textField}`}
                  />
                  <TextField
                    label="Alternate contact number"
                    name="alternatePhone"
                    value={teacherFormData.alternatePhone}
                    onChange={handleChange}
                    className={`${classes.margin} ${classes.textField}`}
                  />

                  <Grid>
                    <TextField
                      label="Address"
                      name="address"
                      value={teacherFormData.address}
                      onChange={handleChange}
                      className={`${classes.margin} ${classes.textField}`}
                    />
                    <TextField
                      label="City"
                      name="city"
                      value={teacherFormData.city}
                      onChange={handleChange}
                      className={`${classes.margin} ${classes.textField}`}
                    />
                    <TextField
                      label="Postal Code"
                      name="pinCode"
                      value={teacherFormData.pinCode}
                      onChange={handleChange}
                      className={`${classes.margin} ${classes.textField}`}
                    />
                  </Grid>

                  <TextField
                    label="State"
                    name="state"
                    value={teacherFormData.state}
                    onChange={handleChange}
                    className={`${classes.margin} ${classes.textField}`}
                  />
                  <TextField
                    label="Country"
                    name="country"
                    value={teacherFormData.country}
                    onChange={handleChange}
                    className={`${classes.margin} ${classes.textField}`}
                  />
                  <TextField
                    label="Online ID for communication"
                    name="onlineID"
                    value={teacherFormData.onlineID}
                    onChange={handleChange}
                    className={`${classes.margin} ${classes.textField}`}
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
            className={classes.button}>
            Back
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={nextStep}
            className={classes.button}>
            Next
          </Button>
        </>
      )}
    </>
  );
}

function TeacherForm3({
  prevStep,
  nextStep,
  handleChange,
  teacherFormData,
  setTeacherFormData,
}) {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("account"));
  const history = useHistory();
  // const [personName, setPersonName] = useState([]);

  // const handleChange = (e) => {
  //   setPersonName({ ...personName, [e.target.name]: e.target.value });
  // };

  // const handleChangeMultiple = (e) => {
  //   const { options } = e.target.HTMLSelectElement;
  //   const value = [];
  //   for (let i = 0, l = options.length; i < l; i += 1) {
  //     if (options[i].selected) {
  //       value.push(options[i].value);
  //     }
  //   }
  //   setTeacherFormData({...teacherFormData, [e.target.name]: e.target.value});
  //   console.log("539 line -value: ", value);
  // };
  // simple select

  // const [age, setAge] = useState();

  // const handleChange = (e) => {
  //   setAge({ ...age, [e.target.name]: e.target.value });
  // };

  return (
    <>
      {!user?.result?._id ? (
        history.push("/")
      ) : (
        <>
          <Typography variant="h2" className={classes.heading}>
            Professional
          </Typography>

          <div className={classes.root}>
            <Paper elevation={3} className={classes.center} style={{ backgroundColor: "transparent" }}>
              <div>
                <Paper elevation={3} className={classes.center} style={{ backgroundColor: "transparent" }}>
                  <div xs="12" sm="6" md="3" lg="3">
                    {/* <FormControl className={classes.formControl}>
                      <InputLabel id="demo-mutiple-chip-label">
                        Select multiple class
                      </InputLabel>
                      <Select
                        labelId="demo-mutiple-chip-label"
                        id="demo-mutiple-chip"
                        multiple
                        value={teacherFormData.classes}
                        onChange={handleChange}
                        input={<Input id="select-multiple-chip" />}
                        renderValue={(selected) => (
                          <div className={classes.chips}>
                            {selected.map((value) => (
                              <Chip
                                key={value}
                                label={value}
                                className={classes.chip}
                                onChange={handleChangeMultiple}
                              />
                            ))}
                          </div>
                        )}
                        MenuProps={MenuProps}>
                        {choices.map((number) => (
                          <MenuItem
                            key={number}
                            value={number}
                            name="classes"
                            >
                            {"Class "}
                            {number}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl> */}

                    {/* <FormControl className={classes.formControl}>
                      <InputLabel >
                        Select multiple modules
                      </InputLabel>
                      <Select
                      
                       
                        multiple
                        value={teacherFormData.module}
                        onChange={handleChange}
                        input={<Input  />}
                        renderValue={(selected) => (
                          <div className={classes.chips}>
                            {selected.map((value) => (
                              <Chip
                                key={value}
                                label={value}
                                className={classes.chip}
                                onChange={handleChangeMultiple}
                              />
                            ))}
                          </div>
                        )}
                        MenuProps={MenuProps}>
                        {modules.map((mod) => (
                          <MenuItem
                            key={mod}
                            value={mod}
                            name="module"
                            >
                            
                            {mod}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl> */}

                    {/* <FormControl className={classes.formControl}>
                      <InputLabel >
                        Select multiple spoken languages
                      </InputLabel>
                      <Select
                      
                       
                        multiple
                        value={teacherFormData.lang}
                        onChange={handleChange}
                        input={<Input  />}
                        renderValue={(selected) => (
                          <div className={classes.chips}>
                            {selected.map((value) => (
                              <Chip
                                key={value}
                                label={value}
                                className={classes.chip}
                                onChange={handleChangeMultiple}
                              />
                            ))}
                          </div>
                        )}
                        MenuProps={MenuProps}>
                        {languages.map((lang) => (
                          <MenuItem
                            key={lang}
                            value={lang}
                            name="lang"
                            >
                            
                            {lang}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                      <InputLabel >
                        Select multiple subjects
                      </InputLabel>
                      <Select
                      
                       
                        multiple
                        value={teacherFormData.subject}
                        onChange={handleChange}
                        input={<Input  />}
                        renderValue={(selected) => (
                          <div className={classes.chips}>
                            {selected.map((value) => (
                              <Chip
                                key={value}
                                label={value}
                                className={classes.chip}
                                onChange={handleChangeMultiple}
                              />
                            ))}
                          </div>
                        )}
                        MenuProps={MenuProps}>
                        {subjects.map((mod) => (
                          <MenuItem
                            key={mod}
                            value={mod}
                            name="subject"
                            >
                            
                            {mod}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl> */}


                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-helper-label">
                        Experience
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={teacherFormData.experience}
                        onChange={handleChange}>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>One year of exp.</MenuItem>
                        <MenuItem value={2}>Two year of exp.</MenuItem>
                        <MenuItem value={3}>Three year of exp.</MenuItem>
                        <MenuItem value={4}>Four year of exp.</MenuItem>
                        <MenuItem value={5}>Five year of exp.</MenuItem>
                        <MenuItem value={6}>Six year of exp.</MenuItem>
                      </Select>
                      <FormHelperText>
                        Some important helper text
                      </FormHelperText>
                    </FormControl>

                    <TextField
                      label="Previous organization name"
                      name="preOrganization"
                      value={teacherFormData.preOrganization}
                      onChange={handleChange}
                      className={`${classes.margin} ${classes.textField}`}
                    />
                  </div>
                  <TextField
                    label="Charge per hour"
                    name="costHr"
                    value={teacherFormData.costHr}
                    onChange={handleChange}
                    className={`${classes.margin} ${classes.textField}`}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">Rs</InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">/-</InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    label="Charge per lesson"
                    name="lessonCost"
                    value={teacherFormData.lessonCost}
                    onChange={handleChange}
                    className={`${classes.margin} ${classes.textField}`}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">Rs</InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">/-</InputAdornment>
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
            className={classes.button}>
            Back
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={nextStep}
            className={classes.button}>
            Next
          </Button>
        </>
      )}
    </>
  );
}

function TeacherForm4({ prevStep, firstStep, teacherFormData, handleSubmit }) {
  const classes = useStyles();
  const history = useHistory();
  function dashboard(e) {
    history.push("/dashboard");
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
            <Paper elevation={3} className={classes.center} style={{ backgroundColor: "transparent" }}>
              <div>
                <Paper elevation={3} className={classes.center} style={{ backgroundColor: "transparent" }}>
                  <TableContainer component={Paper} className="padding-grid " style={{ backgroundColor: "transparent" }}>
                    <Table
                      className={classes.table}
                      aria-label="customized table">
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
                            {teacherFormData.firstName}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Last name
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {teacherFormData.lastName}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Surname
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {teacherFormData.surname}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Parent name
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {teacherFormData.parentName}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Spouse
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {teacherFormData.spouse}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Native language
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {teacherFormData.nativeLanguage}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Employee ID
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {teacherFormData.uniqueEmployeeID}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Date of birth
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {teacherFormData.dob}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Brief description
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {teacherFormData.textarea}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Email address
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {teacherFormData.email}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Phone number
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {teacherFormData.phoneNumber}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">Alternate phone number</StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {teacherFormData.alternatePhone}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">Address</StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {teacherFormData.address}
                          </StyledTableCell>
                        </StyledTableRow>
                      
                        <StyledTableRow>
                          <StyledTableCell align="left">City</StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {teacherFormData.city}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Postal code
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {teacherFormData.pinCode}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            State
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {teacherFormData.state}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Country
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {teacherFormData.country}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Online _id
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {teacherFormData.onlineID}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            classes
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {teacherFormData.classes}
                          </StyledTableCell>
                        </StyledTableRow>

                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Module selected
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {teacherFormData.module}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Spoken languages
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {teacherFormData.lang}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Specialized subjects
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {teacherFormData.subject}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Experience
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {teacherFormData.experience}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Previous organization
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {teacherFormData.preOrganization}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Charge per hour teaching
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {teacherFormData.costHR}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Charge per lesson 
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {teacherFormData.lessonCost}
                          </StyledTableCell>
                        </StyledTableRow>
                       
                      </TableBody>
                    </Table>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={prevStep}
                      align="centre"
                      className={classes.button}>
                      Back
                    </Button>
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={handleSubmit}
                      align="centre"
                      className={classes.button}>
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
            className={classes.button}>
            New registration
          </Button>
          <Button
            color="primary-secondary"
            variant="contained"
            onClick={dashboard}
            className={classes.button}>
            Dashboard
          </Button>{" "}
        </>
      )}
    </>
  );
}
