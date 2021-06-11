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
import useEdit  from "../../../Custom_Hooks/useEdit";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const OptionCustom = ({
  name,
  label,
  value,
  type,
  onChange,
  handleReadingChange,
  handleSpeakingChange,
  handleListeningChange,
  handleWritingChange,
  variant,
}) => {
  const [ useStyles ] = useEdit();
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
      autofocus
      helperText="Please select teacher"
      variant="outlined"
    >
      {teachers.map((option) => (
        <MenuItem key={option._id} value={option._id}>
          {option.firstName?option.firstName: "_"} {option.lastName ? option.lastName : "_"}
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
  handleChange,
  handleReadingChange,
  handleListeningChange,
  handleSpeakingChange,
  handleWritingChange,
  handleLBoolean,
  handleRBoolean,
  handleWBoolean,
  handleSBoolean,
  variant,
}) => {
  const [ useStyles ] = useEdit();
  const classes = useStyles();
  return (
    <TextField
      type={type}
      id={name}
      name={name}
      value={value}
      placeholder={label}
      onChange={handleChange}
      className={classes.textField}
      fullWidth
      autofocus
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
  handleRBoolean,
  handleLBoolean,
  handleWBoolean,
  handleSBoolean,
 
}) => {
  const [ useStyles ] = useEdit();
  const classes = useStyles();
  return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              id={name}
              name={name}
              onChange={onChange}
              
              
              checked={value}
            />
          }
          label={label}
        />
      </FormGroup>
  );
};
// 

export default function EditStudent({ state, setState }) {
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem("account"));

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
  };

  const [
    useStyles, StyledTableCell, StyledTableRow
  ] = useEdit();

 

  // const handleOptionChange = (e) => {
  //   setUpdatedStudent({...updatedStudent, assigned: {
  //     ...updatedStudent.assigned, reading : {
  //       ...updatedStudent.assigned.reading, [e.target.name]: e.target.value
  //     }
  //   }})
  // }
  
  
 
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
    // console.log(state);
  };

   // const handleRBoolean = (e) => {
  //   setUpdatedStudent({...updatedStudent, [e.target.name]: !e.target.value})
  // }
  const handleRBoolean = (e) => {
    setUpdatedStudent({...updatedStudent, assigned: {
      ...updatedStudent.assigned, reading : {
         ...updatedStudent.reading, [e.target.name]: !e.target.value
      }
    }})
  }
  const handleLBoolean = (e) => {
    setUpdatedStudent({...updatedStudent, assigned: {
      ...updatedStudent.assigned, listening : {
        ...updatedStudent.listening, [e.target.name]: !e.target.checked
      }
    }})
  }
  const handleSBoolean = (e) => {
    setUpdatedStudent({...updatedStudent, assigned: {
      ...updatedStudent.assigned, speaking : {
        ...updatedStudent.speaking, [e.target.name]: !e.target.checked
      }
    }})
  }
  const handleWBoolean = (e) => {
    setUpdatedStudent({...updatedStudent, assigned: {
      ...updatedStudent.assigned, writing : {
        ...updatedStudent.writing, [e.target.name]: !e.target.checked
      }
    }})
  }
  const handleReadingChange = (e) => {
    setUpdatedStudent({...updatedStudent, assigned: {
      ...updatedStudent.assigned, reading : {
        ...updatedStudent.reading, [e.target.name]: e.target.value
      }
    }})
  }

  const handleListeningChange = (e) => {
    setUpdatedStudent({...updatedStudent, assigned: {
      ...updatedStudent.assigned, listening : {
        ...updatedStudent.listening, [e.target.name]: e.target.value
      }
    }})
    
  }
  console.log(updatedStudent)
  const handleWritingChange = (e) => {
    setUpdatedStudent({...updatedStudent, assigned: {
      ...updatedStudent.assigned, writing : {
        ...updatedStudent.writing, [e.target.name]: e.target.value
      }
    }})
  }
  const handleSpeakingChange = (e) => {
    setUpdatedStudent({...updatedStudent, assigned: {
      ...updatedStudent.assigned, speaking : {
        ...updatedStudent.speaking, [e.target.name]: e.target.value
      }
    }})
  }
  const handleChange = (e) => {
    setUpdatedStudent({ ...updatedStudent, [e.target.name]: e.target.value });
  };

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
                            handleChange={handleChange}
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
                            handleChange={handleChange}
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
                            handleChange={handleChange}
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
                            handleChange={handleChange}
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
                            handleChange={handleChange}
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
                            handleChange={handleChange}
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
                            type="Date"
                            name="dateOfBirth"
                            value={updatedStudent.dateOfBirth}
                            handleChange={handleChange}
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
                            handleChange={handleChange}
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
                            type="number"
                            value={updatedStudent.phoneNumber}
                            handleChange={handleChange}
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
                            type="number"
                            name="alternatePhone"
                            value={updatedStudent.alternatePhone}
                            handleChange={handleChange}
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
                            handleChange={handleChange}
                          />
                        </StyledTableCell>
                      </StyledTableRow>

                      <StyledTableRow>
                        <StyledTableCell align="left">Roll number assigned</StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          <TextfieldCustom
                            label="Roll number"
                            name="rollNumber"
                        
                            value={updatedStudent.rollNumber}
                            handleChange={handleChange}
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
                            name="LdateOfAssign"
                            value={updatedStudent.LdateOfAssign}
                            onChange={handleListeningChange}
                          />
                          <TextfieldCustom
                            type="Date"
                            variant="outlined"
                            label="Module end date"
                            name="LmoduleEndDate"
                            value={updatedStudent.LmoduleEndDate}
                            onChange={handleListeningChange}
                          />
                          <TextfieldCustom
                            label="Module cost"
                            name="LmoduleCost"
                            value={updatedStudent.LmoduleCost}
                            onChange={handleListeningChange}
                          />
                          <OptionCustom
                            label="Select"
                            name="LteacherID"
                            value={updatedStudent.LteacherID}
                            onChange={handleListeningChange}
                          />
                          <TextfieldCustom
                            label="Cost of tutorial"
                            name="LtutorialCost"
                            value={updatedStudent.LtutorialCost}
                            onChange={handleListeningChange}
                          />
                          <TextfieldCustom
                            label="Number of lesson complete"
                            name="LlessonComplete"
                            value={updatedStudent.LlessonComplete}
                            onChange={handleListeningChange}
                          />

                          <SwitchBarCustom
                            label="Switch listening module"
                            name="Lopted"
                            value={updatedStudent.Lopted}
                            onChange={handleLBoolean}
                          />
                        </StyledTableCell>
                      </StyledTableRow>


                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Reading
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          <TextfieldCustom
                            type="Date"
                            variant="outlined"
                            label="Date of assign"
                            name="RdateOfAssign"
                            value={updatedStudent.RdateOfAssign}
                            handleReadingChange={handleReadingChange}
                          />
                          <TextfieldCustom
                            type="Date"
                            variant="outlined"
                            label="Module end date"
                            name="RmoduleEndDate"
                            value={updatedStudent.RmoduleEndDate}
                            handleReadingChange={handleReadingChange}
                          />
                          <TextfieldCustom
                            label="Module cost"
                            name="RmoduleCost"
                            value={updatedStudent.RmoduleCost}
                            handleReadingChange={handleReadingChange}
                          />
                          <OptionCustom
                            label="Select"
                            name="RteacherID"
                            value={updatedStudent.RteacherID}
                            handleReadingChange={handleReadingChange}
                          />
                          <TextfieldCustom
                            label="Cost of tutorial"
                            name="RtutorialCost"
                            value={updatedStudent.RtutorialCost}
                            handleReadingChange={handleReadingChange}
                          />
                          <TextfieldCustom
                            label="Number of lesson complete"
                            name="RlessonComplete"
                            value={updatedStudent.RlessonComplete}
                            handleReadingChange={handleReadingChange}
                          />

                          <SwitchBarCustom
                            label="Switch Reading module"
                            name="Ropted"
                            value={updatedStudent.Ropted}
                            handleRBoolean={handleRBoolean}
                          />
                        </StyledTableCell>
                      </StyledTableRow>


                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Speaking
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          <TextfieldCustom
                            type="Date"
                            variant="outlined"
                            label="Date of assign"
                            name="SdateOfAssign"
                            value={updatedStudent.SdateOfAssign}
                            onChange={handleSpeakingChange}
                          />
                          <TextfieldCustom
                            type="Date"
                            variant="outlined"
                            label="Module end date"
                            name="SmoduleEndDate"
                            value={updatedStudent.SmoduleEndDate}
                            onChange={handleSpeakingChange}
                          />
                          <TextfieldCustom
                            label="Module cost"
                            name="SmoduleCost"
                            value={updatedStudent.SmoduleCost}
                            onChange={handleSpeakingChange}
                          />
                          <OptionCustom
                            label="Select"
                            name="SteacherID"
                            value={updatedStudent.SteacherID}
                            onChange={handleSpeakingChange}
                          />
                          <TextfieldCustom
                            label="Cost of tutorial"
                            name="StutorialCost"
                            value={updatedStudent.StutorialCost}
                            onChange={handleSpeakingChange}
                          />
                          <TextfieldCustom
                            label="Number of lesson complete"
                            name="SlessonComplete"
                            value={updatedStudent.SlessonComplete}
                            onChange={handleSpeakingChange}
                          />

                          <SwitchBarCustom
                            label="Switch Speaking module"
                            name="Sopted"
                            value={updatedStudent.Sopted}
                            onChange={handleSBoolean}
                          />
                        </StyledTableCell>
                      </StyledTableRow>


                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Writing
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          <TextfieldCustom
                            type="Date"
                            variant="outlined"
                            label="Date of assign"
                            name="WdateOfAssign"
                            value={updatedStudent.WdateOfAssign}
                            onChange={handleWritingChange}
                          />
                          <TextfieldCustom
                            type="Date"
                            variant="outlined"
                            label="Module end date"
                            name="WmoduleEndDate"
                            value={updatedStudent.WmoduleEndDate}
                            onChange={handleWritingChange}
                          />
                          <TextfieldCustom
                            label="Module cost"
                            name="WmoduleCost"
                            value={updatedStudent.WmoduleCost}
                            onChange={handleWritingChange}
                          />
                          <OptionCustom
                            label="Select"
                            name="WteacherID"
                            value={updatedStudent.WteacherID}
                            onChange={handleWritingChange}
                          />
                          <TextfieldCustom
                            label="Cost of tutorial"
                            name="WtutorialCost"
                            value={updatedStudent.WtutorialCost}
                            onChange={handleWritingChange}
                          />
                          <TextfieldCustom
                            label="Number of lesson complete"
                            name="WlessonComplete"
                            value={updatedStudent.WlessonComplete}
                            onChange={handleWritingChange}
                          />

                          <SwitchBarCustom
                            label="Switch Writing module"
                            name="Wopted"
                            value={updatedStudent.Wopted}
                            onChange={handleWBoolean}
                          />
                        </StyledTableCell>
                      </StyledTableRow>
                      
                      <StyledTableRow>
                        <StyledTableCell align="left">Age</StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                          <TextfieldCustom
                            label="Age"
                            name="age"
                            type="number"
                            value={updatedStudent.age}
                            handleChange={handleChange}
                          />
                        </StyledTableCell>
                      </StyledTableRow>

                      <StyledTableRow>
                        <StyledTableCell align="left">Class</StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                        <TextfieldCustom
                            label="Class"
                            name="class"
                            
                            value={updatedStudent.class}
                            handleChange={handleChange}
                          />
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">Address</StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                        <TextfieldCustom
                            label="Address"
                            name="address"
                          
                            value={updatedStudent.address}
                            handleChange={handleChange}
                          />
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">City</StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                        <TextfieldCustom
                            label="City"
                            name="city"
                            
                            value={updatedStudent.city}
                            handleChange={handleChange}
                          />
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Postal code
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                        <TextfieldCustom
                            label="Postal Code"
                            name="pinCode"
                            type="number"
                            value={updatedStudent.pinCode}
                            handleChange={handleChange}
                          />
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">Country</StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                        <TextfieldCustom
                            label="Country"
                            name="country"
                            
                            value={updatedStudent.country}
                            handleChange={handleChange}
                          />
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Total payment
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                        <TextfieldCustom
                            label="Total Payment"
                            name="totalPayment"
                            type="number"
                            value={updatedStudent.totalPayment}
                            handleChange={handleChange}
                          />
                        </StyledTableCell>
                      </StyledTableRow>

                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Payment received
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                        <TextfieldCustom
                            label="paymentReceived"
                            name="paymentReceived"
                            type="number"
                            value={updatedStudent.paymentReceived}
                            handleChange={handleChange}
                          />
                        </StyledTableCell>
                      </StyledTableRow>

                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Payment due
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                        <TextfieldCustom
                            label="Payment due"
                            name="paymentDue"
                            type="number"
                            value={updatedStudent.paymentDue}
                            handleChange={handleChange}
                          />
                        </StyledTableCell>
                      </StyledTableRow>

                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Payment receipt
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                        <TextfieldCustom
                            label="Payment receipt"
                            name="paymentReceipt"
                            
                            value={updatedStudent.paymentReceipt}
                            handleChange={handleChange}
                          />
                        </StyledTableCell>
                      </StyledTableRow>

                      <StyledTableRow>
                        <StyledTableCell align="left">
                          Additional description{" "}
                        </StyledTableCell>
                        <StyledTableCell align="left">:</StyledTableCell>
                        <StyledTableCell align="left">
                        <TextfieldCustom
                            label="Text area"
                            name="textarea"
                            
                            value={updatedStudent.textarea}
                            handleChange={handleChange}
                          />
                        </StyledTableCell>
                      </StyledTableRow>
                 
                    </TableBody>

                    
                  </Table>
                </TableContainer>
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
              </Paper>
            </Paper>
          </div>
        </>
      )}
    </>
  );
}

    //  <StyledTableRow>
    //                     <StyledTableCell align="left">
    //                       Reading module opted
    //                     </StyledTableCell>
    //                     <StyledTableCell align="left">:</StyledTableCell>
    //                     <StyledTableCell align="left">
    //                       {(stu.reading = false ? "Yes" : "No")}
    //                     </StyledTableCell>
    //                   </StyledTableRow>
    //                   <StyledTableRow>
    //                     <StyledTableCell align="left">
    //                       Listening module opted
    //                     </StyledTableCell>
    //                     <StyledTableCell align="left">:</StyledTableCell>
    //                     <StyledTableCell align="left">
    //                       {(stu.listening = false ? "Yes" : "No")}
    //                     </StyledTableCell>
    //                   </StyledTableRow>
    //                   <StyledTableRow>
    //                     <StyledTableCell align="left">
    //                       Writing module opted
    //                     </StyledTableCell>
    //                     <StyledTableCell align="left">:</StyledTableCell>
    //                     <StyledTableCell align="left">
    //                       {(stu.writing = false ? "Yes" : "No")}
    //                     </StyledTableCell>
    //                   </StyledTableRow>
    //                   <StyledTableRow>
    //                     <StyledTableCell align="left">
    //                       Speaking module opted
    //                     </StyledTableCell>
    //                     <StyledTableCell align="left">:</StyledTableCell>
    //                     <StyledTableCell align="left">
    //                       {(stu.speaking = false ? "Yes" : "No")}
    //                     </StyledTableCell>
    //                   </StyledTableRow>
    //                   <StyledTableRow>
    //                     <StyledTableCell align="left">
    //                       {" "}
    //                       Date of admission
    //                     </StyledTableCell>
    //                     <StyledTableCell align="left">:</StyledTableCell>
    //                     <StyledTableCell align="left">
    //                       {stu.admissionDate}
    //                     </StyledTableCell>
    //                   </StyledTableRow>
    //                   <StyledTableRow>
    //                     <StyledTableCell align="left">
    //                       Payment mode - IMPS opted
    //                     </StyledTableCell>
    //                     <StyledTableCell align="left">:</StyledTableCell>
    //                     <StyledTableCell align="left">
    //                       {(stu.IMPS = false ? "Yes" : "No")}
    //                     </StyledTableCell>
    //                   </StyledTableRow>
    //                   <StyledTableRow>
    //                     <StyledTableCell align="left">
    //                       Payment mode - GooglePay opted
    //                     </StyledTableCell>
    //                     <StyledTableCell align="left">:</StyledTableCell>
    //                     <StyledTableCell align="left">
    //                       {(stu.GooglePay = false ? "Yes" : "No")}
    //                     </StyledTableCell>
    //                   </StyledTableRow>
    //                   <StyledTableRow>
    //                     <StyledTableCell align="left">
    //                       Payment mode - NEFT opted
    //                     </StyledTableCell>
    //                     <StyledTableCell align="left">:</StyledTableCell>
    //                     <StyledTableCell align="left">
    //                       {(stu.NEFT = false ? "Yes" : "No")}
    //                     </StyledTableCell>
    //                   </StyledTableRow>
    //                   <StyledTableRow>
    //                     <StyledTableCell align="left">
    //                       Payment mode - PhonePe opted
    //                     </StyledTableCell>
    //                     <StyledTableCell align="left">:</StyledTableCell>
    //                     <StyledTableCell align="left">
    //                       {(stu.PhonePe = false ? "Yes" : "No")}
    //                     </StyledTableCell>
    //                   </StyledTableRow>
    //                   <StyledTableRow>
    //                     <StyledTableCell align="left">
    //                       Payment mode - CASH
    //                     </StyledTableCell>
    //                     <StyledTableCell align="left">:</StyledTableCell>
    //                     <StyledTableCell align="left">
    //                       {(stu.CASH = false ? "Yes" : "No")}
    //                     </StyledTableCell>
    //                   </StyledTableRow>
    //                   <StyledTableRow>
    //                     <StyledTableCell align="left">
    //                       Payment receipt
    //                     </StyledTableCell>
    //                     <StyledTableCell align="left">:</StyledTableCell>
    //                     <StyledTableCell align="left">
    //                       {stu.paymentReceipt}
    //                     </StyledTableCell>
    //                   </StyledTableRow>
    //                   <StyledTableRow>
    //                     <StyledTableCell align="left">
    //                       Teacher assigned
    //                     </StyledTableCell>
    //                     <StyledTableCell align="left">:</StyledTableCell>
    //                     <StyledTableCell align="left">
    //                       {stu.teacherAssigned}
    //                     </StyledTableCell>
    //                   </StyledTableRow> 