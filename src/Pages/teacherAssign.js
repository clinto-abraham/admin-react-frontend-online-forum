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

import { TextField } from "@material-ui/core";

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

function createData(studentName, id, stdClass) {
  return { studentName, id, stdClass };
}

const rows = [
  createData("Shalini", 159, "I"),
  createData("Frank Underwood", 237, "III"),
  createData("Meenu Jacob", 262, "IV"),
  createData("Shyama", 305, "VII"),
  createData("Marykutty", 356, "X"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const states = [
  { value: "teacher", label: "Teacher" },
  { value: "Morgan", label: "Morgan" },
  { value: "Jolly", label: "Jolly" },
  { value: "Ajimon", label: "Ajimon" },
  { value: "Marykutty", label: "Marykutty" },
  { value: "Varkey", label: "Varkey" },
  { value: "Shyam", label: "Shyam" },
  { value: "mizoram", label: "Mizoram" },
  { value: "nagaland", label: "Nagaland" },
  { value: "sikkim", label: "Sikkim" },
  { value: "tamil_nadu", label: "Tamil Nadu" },
  { value: "tripura", label: "Tripura" },
  { value: "uttaranchal", label: "Uttaranchal" },
  { value: "uttar_pradesh", label: "Uttar Pradesh" },
  { value: "haryana", label: "Haryana" },
  { value: "himachal_pradesh", label: "Himachal Pradesh" },
  { value: "andhra_pradesh", label: "Andhra Pradesh" },
  { value: "jammu_and_kashmir", label: "Jammu and Kashmir" },
  { value: "jharkhand", label: "Jharkhand" },

  { value: "bihar", label: "Bihar" },

  { value: "gujarat", label: "Gujarat" },

  { value: "west_bengal", label: "West Bengal" },
  { value: "karnataka", label: "Karnataka" },

  { value: "madhya_pradesh", label: " Madhya Pradesh" },
  { value: "maharashtra", label: "Maharashtra" },

  { value: "punjab", label: "Punjab" },
  { value: "rajasthan", label: "Rajasthan" },

  { value: "arunachal_pradesh", label: "Arunachal Pradesh" },
  { value: "assam", label: "Assam" },
];

function TeacherAssigning() {
  const user = JSON.parse(localStorage.getItem("account"));
  const history = useHistory();
  const classes = useStyles();
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

  return (
    <>
      {!user?.result?._id ? (
        history.push("/")
      ) : (
        <div className="assign-teacher-container">
          <TableContainer component={Paper}>
            <h3>
              Assign teachers to the students according to the modules listed
              below:
            </h3>
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
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.studentName}>
                    <StyledTableCell align="left">{row.id}</StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {row.studentName}
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
                        {states.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
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
                        {states.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
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
                        {states.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
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
                        {states.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
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
