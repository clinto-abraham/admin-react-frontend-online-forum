import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import MenuItem from "@material-ui/core/MenuItem";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useHistory, useParams } from "react-router";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import {CircularProgress, makeStyles} from "@material-ui/core";
import {
  Button,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStudent } from "../../../redux/actions/studentAction";
import useEdit, {  useStyles, TextfieldCustom, OptionCustom, SwitchBarCustom } from "../../../Custom_Hooks/useEdit";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';




// 

export default function EditCopy({ state, setState }) {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("account"));

 const { id } = useParams();
  const classes = useStyles();

  const stu = useSelector((state) =>
    id ? state.students.find((data) => data._id === id) : null
  );

  
  useEffect(() => {
    if (stu) setUpdatedStudent( stu);
    return function cleanup () {
      setUpdatedStudent(!stu)
    }
  }, [stu]);
 

  const [
    
    updatedStudent, 
    setUpdatedStudent,
    handleRBoolean,
    handleLBoolean,
    handleWBoolean,
    handleSBoolean,
    handleReadingChange,
    handleSpeakingChange,
    handleListeningChange,
    handleWritingChange,
    StyledTableCell, 
    StyledTableRow, 
    handleChange
  
   ]= useEdit();


  // const handleOptionChange = (e) => {
  //   setUpdatedStudent({...updatedStudent, assigned: {
  //     ...updatedStudent.assigned, reading : {
  //       ...updatedStudent.assigned.reading, [e.target.name]: e.target.value
  //     }
  //   }})
  // }
  
  // const handleChange = useCallback((e) => {
  //   // e.persist()
  //   // setUpdatedStudent({ ...updatedStudent, [e.target.name]: e.target.value });
  //    console.log("handleChange of edit jsx is hit", updatedStudent)
     
  //  }, [updatedStudent]);
 
 

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/students-info");
    dispatch(updateStudent(id, updatedStudent));
    // Clear(e);
    setState(!state);
    // console.log(state);
  };

console.log("this is useSelector state log",stu)

  // if (!stu.length) return <CircularProgress />
  
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
                            key="1"
                            label="First Name"
                            name="firstName"
                            value={updatedStudent.firstName || ""}
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
                            name="LdateOfAssign"
                            value={updatedStudent.LdateOfAssign || ""}
                            onChange={handleListeningChange}
                          />
                        

                          <SwitchBarCustom
                            label="Switch listening module"
                            name="Lopted"
                            value={updatedStudent.Lopted || ""}
                            onChange={handleLBoolean}
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
                    {/* <Button
                      color="secondary"
                      variant="contained"
                      onClick={Clear}
                      align="centre"
                      className={classes.buttons}
                    >
                      Clear
                    </Button> */}
              </Paper>
            </Paper>
          </div>
        </>
      )}
    </>
  );
}

   