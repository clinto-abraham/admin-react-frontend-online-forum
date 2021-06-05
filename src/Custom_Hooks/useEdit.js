import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import TableCell from "@material-ui/core/TableCell";
import { withStyles, makeStyles} from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";

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
  onChange,
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
              
              
              checked={value}
            />
          }
          label={label}
        />
      </FormGroup>
  );
};


export const useEdit = (defaultState) => {
   const [updatedStudent, setUpdatedStudent] = useState(defaultState)
    
     

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
     
    return [ <OptionCustom />, <TextfieldCustom />, <SwitchBarCustom />, updatedStudent,  useStyles, StyledTableCell, StyledTableRow, history, user, setUpdatedStudent ]
}
