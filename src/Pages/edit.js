import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useHistory, useParams } from "react-router";
import {
  Button,
  makeStyles,
  Paper,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateStudent } from "../redux/actions/studentAction";

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

export default function EditStudent({ data }) {
  const [updateStudentData, setUpdateStudentData] = useState(0);
  const { id } = useParams();

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    dispatch(updateStudent(id, updateStudentData));
  };
  const classes = useStyles();
  const history = useHistory();
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
                            {data.firstname}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Last name
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {data.lastname}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Surname
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {data.surname}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Father name
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {data.fathername}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Mother name
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {data.mothername}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Native language
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {data.nativeLanguage}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Email ID
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {data.email}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Contact number
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {data.phoneNumber}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Alternate contact number
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {data.alternatePhone}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Online ID
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {data.onlineID}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Roll number assigned
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {data.rollNumber}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">Age</StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {data.age}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">Class</StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {data.class}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Address
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {data.address}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">City</StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {data.city}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Postal code
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {data.pinCode}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Country
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {data.country}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Total payment
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {data.totalPayment}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Payment due
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {data.paymentDue}
                          </StyledTableCell>
                        </StyledTableRow>

                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Additional description{" "}
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {data.textarea}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Reading module opted
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {(data.reading = false ? "Yes" : "No")}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Listening module opted
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {(data.listening = false ? "Yes" : "No")}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Writing module opted
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {(data.writing = false ? "Yes" : "No")}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Speaking module opted
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {(data.speaking = false ? "Yes" : "No")}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            {" "}
                            Date of admission
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {data.admissionDate}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Payment mode - IMPS opted
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {(data.IMPS = false ? "Yes" : "No")}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Payment mode - GooglePay opted
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {(data.GooglePay = false ? "Yes" : "No")}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Payment mode - NEFT opted
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {(data.NEFT = false ? "Yes" : "No")}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Payment mode - PhonePe opted
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {(data.PhonePe = false ? "Yes" : "No")}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Payment mode - CASH
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {(data.CASH = false ? "Yes" : "No")}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Payment receipt
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {data.paymentReceipt}
                          </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                          <StyledTableCell align="left">
                            Teacher assigned
                          </StyledTableCell>
                          <StyledTableCell align="left">:</StyledTableCell>
                          <StyledTableCell align="left">
                            {data.teacherAssigned}
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
        </>
      )}
    </>
  );
}
