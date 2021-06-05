import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, CircularProgress, TextField, Typography } from "@material-ui/core";
import {useDispatch, useSelector } from "react-redux";
import { updateStudent } from "../redux/actions/studentAction";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
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

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});



function TeacherAssigning() {
  const user = JSON.parse(localStorage.getItem("account"));
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [updateMany, setUpdateMany] = useState()
  const  tutor = useSelector((state) => state.teachers)
  const  learner = useSelector((state) => state.students)
  console.log(tutor, learner)
  const [values, setValues] = useState({
    reading: "Teacher",
    writing: "Teacher",
    listening: "Teacher",
    speaking: "Teacher",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleUpdateSubmit = () => {
    dispatch(updateStudent(updateMany))
  }
  return (
    <>
      {!user?.result?._id ? (
        history.push("/")
      ) : (
        <div className="assign-teacher-container">
          <TableContainer component={Paper} style={{ backgroundColor: "transparent" }}>
            <Typography variant="h3">
              Assign teachers 
            </Typography>
            <Button onClick={handleUpdateSubmit} color="secondary" variant="outlined">Update</Button>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">
                    Roll No&nbsp;(id)
                  </StyledTableCell>
                  <StyledTableCell> Name of student</StyledTableCell>
                  <StyledTableCell align="right">Reading</StyledTableCell>
                  <StyledTableCell align="right">Writing</StyledTableCell>
                  <StyledTableCell align="right">Listening</StyledTableCell>
                  <StyledTableCell align="right">Speaking</StyledTableCell>

                  <StyledTableCell align="right">STD</StyledTableCell>
                </TableRow>
              </TableHead>
              {!tutor.length && !learner.length  ? <CircularProgress /> : null}
              <TableBody>
                {learner.map((row) => (
                  <StyledTableRow key={row.rollNumber}>
                    <StyledTableCell align="left">{row.rollNumber}</StyledTableCell>
                    <StyledTableCell component="th" scope="row" key={row.firstName}>
                      {row.firstName}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <TextField
                        fullWidth
                        label="Select Teacher"
                        name="reading"
                        onChange={handleChange}
                        required
                        select
                        SelectProps={{ native: true }}
                        value={values.state}
                        variant="outlined"
                      >
                        {tutor.map((option) => (
                          <option key={option._id} value={option._id}>
                            {option.firstName}
                          </option>
                        ))}
                      </TextField>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <TextField
                        fullWidth
                        label="Select Teacher"
                        name="writing"
                        onChange={handleChange}
                        required
                        select
                        SelectProps={{ native: true }}
                        value={values.state}
                        variant="outlined"
                      >
                        {tutor.map((option) => (
                          <option key={option._id} value={option._id}>
                            {option.firstName}
                          </option>
                        ))}
                      </TextField>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <TextField
                        fullWidth
                        label="Select Teacher"
                        name="Listening"
                        onChange={handleChange}
                        required
                        select
                        SelectProps={{ native: true }}
                        value={values.state}
                        variant="outlined"
                      >
                       {tutor.map((option) => (
                          <option key={option._id} value={option._id}>
                            {option.firstName}
                          </option>
                        ))}
                      </TextField>
                    </StyledTableCell>

                    <StyledTableCell align="right">
                      <TextField
                        fullWidth
                        label="Select Teacher"
                        name="speaking"
                        onChange={handleChange}
                        required
                        select
                        SelectProps={{ native: true }}
                        value={values.state}
                        variant="outlined"
                      >
                       {tutor.map((option) => (
                          <option key={option._id} value={option._id}>
                            {option.firstName}
                          </option>
                        ))}
                      </TextField>
                    </StyledTableCell>
                    
                    <StyledTableCell align="right">
                      {row.stdClass}
                    </StyledTableCell> 
                  </StyledTableRow>
                ))}
               
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </>
  );
}

export default TeacherAssigning;
