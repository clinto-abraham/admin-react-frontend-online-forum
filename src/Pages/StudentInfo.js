import React from "react";
import { Link, useHistory } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from "@material-ui/core";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import { deleteStudent } from "../redux/actions/studentAction";
import View from "./Page-Children/Students-Children/view";
import EditIcon from "@material-ui/icons/Edit";
import EditStudent from "./edit";

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

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function StudentInfo() {
  const students = useSelector((state) => state.students);
  console.log(students);
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("account"));
  const history = useHistory();
  return (
    <>
      {!user?.result?._id ? (
        history.push("/")
      ) : (
        <div className="margin-grid-40">
          <Box
            boxShadow={3}
            bgcolor="background.paper"
            m={1}
            p={1}
            className="padding-grid"
          >
            <TableContainer component={Paper} className="padding-grid ">
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="left">VIEW</StyledTableCell>
                    <StyledTableCell>NAME OF STUDENT </StyledTableCell>
                    <StyledTableCell align="right">EMAIL</StyledTableCell>
                    <StyledTableCell align="right">CLASS</StyledTableCell>
                    <StyledTableCell align="right">EDIT</StyledTableCell>
                    <StyledTableCell align="right">DELETE</StyledTableCell>
                  </TableRow>
                </TableHead>
                {students.map((data) => (
                  <TableBody>
                    <StyledTableRow key={data._id}>
                      <StyledTableCell align="left" key={data.rollNumber}>
                        <View data={data} />
                      </StyledTableCell>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        key={data.firstname}
                      >
                        {data.firstname}
                      </StyledTableCell>
                      <StyledTableCell align="right" key={data.email}>
                        {data.email}
                      </StyledTableCell>

                      <StyledTableCell align="right" key={data.class}>
                        {data.class}
                      </StyledTableCell>
                      {data.contact}
                      <StyledTableCell align="right" key={data._id}>
                        <Link to="/edit-student-info/:id">
                          <EditStudent data={data}>
                            {" "}
                            <EditIcon />{" "}
                          </EditStudent>
                        </Link>
                      </StyledTableCell>
                      <StyledTableCell align="right" key={data._id}>
                        <Button
                          key={data._id}
                          onClick={() => dispatch(deleteStudent(data._id))}
                        >
                          <DeleteSweepIcon />
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                ))}
              </Table>
            </TableContainer>
          </Box>
        </div>
      )}
    </>
  );
}

export default StudentInfo;
