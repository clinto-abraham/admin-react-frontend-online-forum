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
import { useSelector } from "react-redux";
//  <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
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

function StudentInfo({ studentformData, setStudentformData }) {
  const students = useSelector((state) => state.students);
  console.log(students);
  const [data, setData] = useState({
    name: "",
    contact: "",
    studentname: "",
    email: "",
    rollNumber: "",
  });
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("account"));
  const history = useHistory();
  return (
    <>
      {!user?.result?._id ? (
        history.push("/")
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                  <StyledTableCell align="right">Calories</StyledTableCell>
                  <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                  <StyledTableCell align="right">
                    Carbs&nbsp;(g)
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    Protein&nbsp;(g)
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow key={data.name}>
                  <StyledTableCell component="th" scope="row">
                    {data.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{data.email}</StyledTableCell>
                  <StyledTableCell align="right">
                    {data.studentname}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {data.rollNumber}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {data.contact}
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </>
  );
}

export default StudentInfo;
