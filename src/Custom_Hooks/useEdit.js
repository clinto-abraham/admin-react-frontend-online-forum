import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import TableCell from "@material-ui/core/TableCell";
import { withStyles, makeStyles} from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
export const useEdit = () => {
//    const [updatedStudent, setUpdatedStudent] = useState()
    
     

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
          margin: "auto",
          padding: "100px",
        },
        textField: {
          width: "25ch",
          margin: theme.spacing(1),
          display: "block",
        },
        buttons: {
          margin: "10px",
        }
      }));
      const history = useHistory();
      const user = JSON.parse(localStorage.getItem("account"));
     
    return { useStyles, StyledTableCell, StyledTableRow, history, user }
}
