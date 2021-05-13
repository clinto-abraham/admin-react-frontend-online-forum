import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useHistory } from "react-router";
import {
  Button,
  makeStyles,
  Paper,
  Typography,
  withStyles,
} from "@material-ui/core";
import React from "react";

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
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

export default function EditStudent({
  data,
  firstStep,
  studentformData,
  handleSubmit,
}) {
  const classes = useStyles();
  const history = useHistory();
  function dashboard(e) {
    history.push("/");
  }
  return (
    <>
      <Typography variant="h2" className={classes.heading}>
        Summary
      </Typography>
      <div className={classes.root}>
        <Paper elevation={3} className={classes.center}>
          <div>
            <Paper elevation={3} className={classes.center}>
              <TableContainer component={Paper} className="padding-grid ">
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="left">Title </StyledTableCell>
                      <StyledTableCell align="left">:</StyledTableCell>
                      <StyledTableCell align="left">Value</StyledTableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    <StyledTableRow>
                      <StyledTableCell align="left">First name</StyledTableCell>
                      <StyledTableCell align="left">:</StyledTableCell>
                      <StyledTableCell align="left">
                        {studentformData.firstname}
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell align="left">Last name</StyledTableCell>
                      <StyledTableCell align="left">:</StyledTableCell>
                      <StyledTableCell align="left">
                        {studentformData.lastname}
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell align="left">Surname</StyledTableCell>
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
                      <StyledTableCell align="left">Email ID</StyledTableCell>
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
                      <StyledTableCell align="left">Online ID</StyledTableCell>
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
                      <StyledTableCell align="left">Address</StyledTableCell>
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
                      <StyledTableCell align="left">Country</StyledTableCell>
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
                        {(studentformData.reading = false ? "Yes" : "No")}
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell align="left">
                        Listening module opted
                      </StyledTableCell>
                      <StyledTableCell align="left">:</StyledTableCell>
                      <StyledTableCell align="left">
                        {(studentformData.listening = false ? "Yes" : "No")}
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell align="left">
                        Writing module opted
                      </StyledTableCell>
                      <StyledTableCell align="left">:</StyledTableCell>
                      <StyledTableCell align="left">
                        {(studentformData.writing = false ? "Yes" : "No")}
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell align="left">
                        Speaking module opted
                      </StyledTableCell>
                      <StyledTableCell align="left">:</StyledTableCell>
                      <StyledTableCell align="left">
                        {(studentformData.speaking = false ? "Yes" : "No")}
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
                        {(studentformData.IMPS = false ? "Yes" : "No")}
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell align="left">
                        Payment mode - GooglePay opted
                      </StyledTableCell>
                      <StyledTableCell align="left">:</StyledTableCell>
                      <StyledTableCell align="left">
                        {(studentformData.GooglePay = false ? "Yes" : "No")}
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell align="left">
                        Payment mode - NEFT opted
                      </StyledTableCell>
                      <StyledTableCell align="left">:</StyledTableCell>
                      <StyledTableCell align="left">
                        {(studentformData.NEFT = false ? "Yes" : "No")}
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell align="left">
                        Payment mode - PhonePe opted
                      </StyledTableCell>
                      <StyledTableCell align="left">:</StyledTableCell>
                      <StyledTableCell align="left">
                        {(studentformData.PhonePe = false ? "Yes" : "No")}
                      </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell align="left">
                        Payment mode - CASH
                      </StyledTableCell>
                      <StyledTableCell align="left">:</StyledTableCell>
                      <StyledTableCell align="left">
                        {(studentformData.CASH = false ? "Yes" : "No")}
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
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={handleSubmit}
                    align="centre"
                  >
                    Submit
                  </Button>
                </Table>
              </TableContainer>
            </Paper>
          </div>
        </Paper>
      </div>
      <Button color="primary" variant="contained" onClick={firstStep}>
        New registration
      </Button>
      <Button color="primary-secondary" variant="contained" onClick={dashboard}>
        Dashboard
      </Button>{" "}
    </>
  );
}
