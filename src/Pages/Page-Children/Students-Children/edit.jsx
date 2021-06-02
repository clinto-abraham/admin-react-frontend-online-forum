import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import MenuItem from "@material-ui/core/MenuItem";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useHistory, useParams } from "react-router";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import {
  Button,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStudent } from "../../../redux/actions/studentAction";
import { useEdit } from "../../../Custom_Hooks/useEdit";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const OptionCustom = ({
  name,
  label,
  value,
  type,
  onChange,
  handleOptionChange,
  variant,
}) => {
  const { useStyles } = useEdit();
  const classes = useStyles();
  const teachers = useSelector((state) => state.teachers);
  console.log(teachers);
  return (
    <TextField
      select
      type={type}
      id={name}
      name={name}
      value={value}
      placeholder={label}
      onChange={onChange}
      className={classes.textField}
      fullWidth
      autoFocus
      helperText="Please select teacher"
      variant="outlined"
    >
      {teachers.map((option) => (
        <MenuItem key={option._id} value={option._id}>
          {option.firstName} {option.lastName}
        </MenuItem>
      ))}
    </TextField>
  );
};

const TextfieldCustom = ({
  name,
  label,
  value,
  type,
  onChange,
  handleChange,
  variant,
}) => {
  const { useStyles } = useEdit();
  const classes = useStyles();
  return (
    <TextField
      type={type}
      id={name}
      name={name}
      value={value}
      placeholder={label}
      onChange={onChange}
      className={classes.textField}
      fullWidth
      autoFocus
      variant={variant}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <BorderColorIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

const SwitchBarCustom = ({
  name,
  label,
  value,
  onChange,
  handleSwitchChange,
 
}) => {
  const { useStyles } = useEdit();
  const classes = useStyles();
  return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              id={name}
              name={name}
              onChange={onChange}
              className={classes.textField}
              fullWidth
              checked={value}
            />
          }
          label={label}
        />
      </FormGroup>
  );
};

export default function EditStudent({ state, setState }) {
  const [updatedStudent, setUpdatedStudent] = useState({
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
        opted: false,
        dateOfAssign: "",
        moduleEndDate: "",
        moduleCost: "",
        teacherName: "",
        tutorialCost: "",
        lessonComplete: "",
        tutorialHrsComplete: "",
        teacherID: "",
      },
      reading: {
        opted: false,
        dateOfAssign: "",
        moduleEndDate: "",
        moduleCost: "",
        teacherName: "",
        tutorialCost: "",
        lessonComplete: "",
        tutorialHrsComplete: "",
        teacherID: "",
      },

      writing: {
        opted: false,
        dateOfAssign: "",
        moduleEndDate: "",
        moduleCost: "",
        teacherName: "",
        tutorialCost: "",
        lessonComplete: "",
        tutorialHrsComplete: "",
        teacherID: "",
      },

      speaking: {
        opted: false,
        dateOfAssign: "",
        moduleEndDate: "",
        moduleCost: "",
        teacherName: "",
        tutorialCost: "",
        lessonComplete: "",
        tutorialHrsComplete: "",
        teacherID: "",
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
  const Clear = (e) => {
    e.preventDefault();
    setUpdatedStudent({
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
          opted: false,
          dateOfAssign: "",
          moduleEndDate: "",
          moduleCost: "",
          teacherName: "",
          tutorialCost: "",
          lessonComplete: "",
          tutorialHrsComplete: "",
          teacherID: "",
        },
        reading: {
          opted: false,
          dateOfAssign: "",
          moduleEndDate: "",
          moduleCost: "",
          teacherName: "",
          tutorialCost: "",
          lessonComplete: "",
          tutorialHrsComplete: "",
          teacherID: "",
        },

        writing: {
          opted: false,
          dateOfAssign: "",
          moduleEndDate: "",
          moduleCost: "",
          teacherName: "",
          tutorialCost: "",
          lessonComplete: "",
          tutorialHrsComplete: "",
          teacherID: "",
        },

        speaking: {
          opted: false,
          dateOfAssign: "",
          moduleEndDate: "",
          moduleCost: "",
          teacherName: "",
          tutorialCost: "",
          lessonComplete: "",
          tutorialHrsComplete: "",
          teacherID: "",
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
  };

  const {
    StyledTableCell,
    StyledTableRow,
    useStyles,
    history,
    user,
  } = useEdit();

  const handleSwitchChange = (e) => {
    setUpdatedStudent({...updatedStudent, [e.target.name]: !e.target.value})
  }

  const handleOptionChange = (e) => {
    setUpdatedStudent((preUpdatedStudent) => ({
      ...preUpdatedStudent,
      assigned: {
        ...preUpdatedStudent.assigned.listening,
        teacherID: e.target.value,
      },
    }));
    // onChange={(event) => {
    //   setStyle(prevStyle => ({
    //       ...prevStyle,
    //       font: { ...prevStyle.font, align: event.target.value }
    //   }));
    //   const styles = {
    //     font: {
    //         size: {
    //             value: '22',
    //             unit: 'px'
    //         },
    //         weight: 'bold',
    //         color: '#663300',
    //         family: 'arial',
    //         align: 'center'
    //     }
    // };
  };
  const { id } = useParams();
  const classes = useStyles();

  const stu = useSelector((state) =>
    id ? state.students.find((data) => data._id === id) : null
  );

  useEffect(() => {
    if (stu) setUpdatedStudent(stu);
  }, [stu]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/students-info");
    dispatch(updateStudent(id, updatedStudent));
    Clear(e);
    setState(!state);
    console.log(state);
  };

  const handleChange = (e) => {
    setUpdatedStudent({ ...updatedStudent, [e.target.name]: e.target.value });
  };

  console.log(updatedStudent);

  function handleBack() {
    history.push("/students-info");
  }
  return (
    <>
      {!user?.result?._id ? (
        history.push("/")
      ) : (
        <>
          <Typography variant="h2" className={classes.heading}>
            Edit student : {stu.firstname}
          </Typography>
          <div className={classes.root}>
            <Paper elevation={3} className={classes.center}>
              <Button
                onClick={handleBack}
                variant="outlined"
                color="secondary"
                className={classes.buttons}
              >
                <ArrowBackIosIcon />
                Back
              </Button>
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
                          Student document ID
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">{id}</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          First name
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          <TextfieldCustom
                            label="First Name"
                            name="firstName"
                            value={updatedStudent.firstName}
                            onChange={handleChange}
                          />
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Last name
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          <TextfieldCustom
                            label="Last Name"
                            name="lastName"
                            value={updatedStudent.lastName}
                            onChange={handleChange}
                          />
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">Surname</StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          <TextfieldCustom
                            label="Surname"
                            name="surname"
                            value={updatedStudent.surname}
                            onChange={handleChange}
                          />
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Father name
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          <TextfieldCustom
                            label="Father name"
                            name="fatherName"
                            value={updatedStudent.fatherName}
                            onChange={handleChange}
                          />
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Mother name
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          <TextfieldCustom
                            label="Mother name"
                            name="motherName"
                            value={updatedStudent.motherName}
                            onChange={handleChange}
                          />
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Native language
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          <TextfieldCustom
                            label="Native language"
                            name="nativeLanguage"
                            value={updatedStudent.nativeLanguage}
                            onChange={handleChange}
                          />
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Date of birth
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          <TextfieldCustom
                            label="Date of birth"
                            name="dateOfBirth"
                            value={updatedStudent.dateOfBirth}
                            onChange={handleChange}
                          />
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Email address
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          <TextfieldCustom
                            label="Email"
                            name="email"
                            value={updatedStudent.email}
                            onChange={handleChange}
                          />
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Contact number
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          <TextfieldCustom
                            label="Contact number"
                            name="phoneNumber"
                            value={updatedStudent.phoneNumber}
                            onChange={handleChange}
                          />
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Alternate contact number
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          <TextfieldCustom
                            label="Alternate contact No."
                            name="alternatePhone"
                            value={updatedStudent.alternatePhone}
                            onChange={handleChange}
                          />
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">OnlineID</StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          <TextfieldCustom
                            label="OnlineID@"
                            name="onlineID"
                            value={updatedStudent.onlineID}
                            onChange={handleChange}
                          />
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Listening
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          <TextfieldCustom
                            type="Date"
                            variant="outlined"
                            label="Date of assign"
                            name="dateOfAssign"
                            value={updatedStudent.assigned.listening.dateOfAssign}
                            onChange={handleChange}
                          />
                          <TextfieldCustom
                            type="Date"
                            variant="outlined"
                            label="Module end date"
                            name="moduleEndDate"
                            value={updatedStudent.assigned.listening.moduleEndDate}
                            onChange={handleChange}
                          />
                          <TextfieldCustom
                            label="Module cost"
                            name="moduleCost"
                            value={updatedStudent.assigned.listening.moduleCost}
                            onChange={handleChange}
                          />
                          <OptionCustom
                            label="Select"
                            name="teacherID"
                            value={updatedStudent.assigned.listening.teacherID}
                            onChange={handleOptionChange}
                          />
                          <TextfieldCustom
                            label="Cost of tutorial"
                            name="tutorialCost"
                            value={updatedStudent.assigned.listening.tutorialCost}
                            onChange={handleChange}
                          />
                          <TextfieldCustom
                            label="Number of lesson complete"
                            name="lessonComplete"
                            value={updatedStudent.assigned.listening.lessonComplete}
                            onChange={handleChange}
                          />

                          <SwitchBarCustom
                            label="Switch listening module"
                            name="opted"
                            value={updatedStudent.assigned.listening.opted}
                            onChange={handleSwitchChange}
                          />
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">Class</StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          {stu.class}
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">Address</StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          {stu.address}
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">City</StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          {stu.city}
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Postal code
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          {stu.pinCode}
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">Country</StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          {stu.country}
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Total payment
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          {stu.totalPayment}
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Payment due
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          {stu.paymentDue}
                        </StyledTableCell>
                      </StyledTableRow>

                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Additional description{" "}
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          {stu.textarea}
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Reading module opted
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          {(stu.reading = false ? "Yes" : "No")}
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Listening module opted
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          {(stu.listening = false ? "Yes" : "No")}
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Writing module opted
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          {(stu.writing = false ? "Yes" : "No")}
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Speaking module opted
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          {(stu.speaking = false ? "Yes" : "No")}
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          {" "}
                          Date of admission
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          {stu.admissionDate}
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Payment mode - IMPS opted
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          {(stu.IMPS = false ? "Yes" : "No")}
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Payment mode - GooglePay opted
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          {(stu.GooglePay = false ? "Yes" : "No")}
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Payment mode - NEFT opted
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          {(stu.NEFT = false ? "Yes" : "No")}
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Payment mode - PhonePe opted
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          {(stu.PhonePe = false ? "Yes" : "No")}
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Payment mode - CASH
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          {(stu.CASH = false ? "Yes" : "No")}
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Payment receipt
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          {stu.paymentReceipt}
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Teacher assigned
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          {stu.teacherAssigned}
                        </StyledTableCell>
                      </StyledTableRow>
                    </TableBody>

                    <Button
                      color="primary"
                      variant="contained"
                      onClick={handleSubmit}
                      align="centre"
                      className={classes.buttons}
                    >
                      Update
                    </Button>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={Clear}
                      align="centre"
                      className={classes.buttons}
                    >
                      Clear
                    </Button>
                  </Table>
                </TableContainer>
              </Paper>
            </Paper>
          </div>
        </>
      )}
    </>
  );
}
