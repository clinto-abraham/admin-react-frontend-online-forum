import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
//
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signup } from "../redux/actions/auth";
import { FormControl, InputLabel, makeStyles } from "@material-ui/core";

const initialState = {
  username: "",
  teachername: "",
  contact: "",
  email: "",
  uniqueEmployeeID: "",
  password: "",
};
//
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));

const Register = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("account"));
  const history = useHistory();

  const [registerForm, setRegisterForm] = useState({
    username: "",
    teachername: "",
    contact: "",
    email: "",
    uniqueEmployeeID: "",
    password: "",
  });

  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handlePasswordChange = (prop) => (event) => {
    setRegisterForm({ ...registerForm, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function clear() {
    setRegisterForm(initialState);
  }

  function handleChange(e) {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(registerForm);
    dispatch(signup(registerForm, history));
    clear();
  }
  return (
    <>
      {!user?.result?._id ? (
        history.push("/")
      ) : (
        <>
          <div className="c-app c-default-layout flex-row align-items-center teacher-register">
            <CContainer>
              <CRow className="justify-content-center">
                <CCol md="9" lg="7" xl="6">
                  <CCard className="mx-4">
                    <CCardBody className="p-4">
                      <CForm onSubmit={handleSubmit}>
                        <h1> Register Teacher</h1>
                        <p className="text-muted">Create teacher's account</p>

                        <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-user" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput
                            name="username"
                            value={registerForm.username}
                            onChange={handleChange}
                            type="text"
                            placeholder="Username"
                            autoComplete="username"
                            variant="outlined"
                          />
                        </CInputGroup>

                        <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-user" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput
                            name="teachername"
                            value={registerForm.teachername}
                            onChange={handleChange}
                            type="text"
                            placeholder="Enter full name"
                          />
                        </CInputGroup>

                        <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-user" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput
                            name="contact"
                            value={registerForm.contact}
                            onChange={handleChange}
                            type="number"
                            placeholder="Enter phone number"
                          />
                        </CInputGroup>

                        <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-user" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput
                            name="email"
                            value={registerForm.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="Enter email id"
                          />
                        </CInputGroup>

                        <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-user" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput
                            name="uniqueEmployeeID"
                            value={registerForm.uniqueEmployeeID}
                            onChange={handleChange}
                            type="text"
                            placeholder="Enter unique employee ID"
                          />
                        </CInputGroup>

                        <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-lock-locked" />
                            </CInputGroupText>
                          </CInputGroupPrepend>

                          <CInput
                            name="password"
                            value={registerForm.password}
                            onChange={handleChange}
                            type="password"
                            placeholder="Password"
                          />
                        </CInputGroup>

                        <FormControl
                          fullWidth
                          className={classes.margin}
                          variant="outlined"
                        >
                          <InputLabel>Password</InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? "text" : "password"}
                            value={values.password}
                            onChange={handlePasswordChange("password")}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {values.showPassword ? (
                                    <Visibility />
                                  ) : (
                                    <VisibilityOff />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                            labelWidth={70}
                          />
                        </FormControl>
                        <CButton type="submit" color="success" block>
                          Create Teacher Account
                        </CButton>
                      </CForm>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CContainer>
          </div>
        </>
      )}
    </>
  );
};

export default Register;

// import Button from '@material-ui/core/Button';
// import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
// import { makeStyles, Theme } from '@material-ui/core/styles';

// function Alert(props: AlertProps) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

// const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     width: '100%',
//     '& > * + *': {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));

// export default function CustomizedSnackbars() {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);

//   const handleClick = () => {
//     setOpen(true);
//   };

//   const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
//     if (reason === 'clickaway') {
//       return;
//     }

//     setOpen(false);
//   };

//   return (
//     <div className={classes.root}>
//       <Button variant="outlined" onClick={handleClick}>
//         Open success snackbar
//       </Button>
//       <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
//         <Alert onClose={handleClose} severity="success">
//           This is a success message!
//         </Alert>
//       </Snackbar>
//       <Alert severity="error">This is an error message!</Alert>
//       <Alert severity="warning">This is a warning message!</Alert>
//       <Alert severity="info">This is an information message!</Alert>
//       <Alert severity="success">This is a success message!</Alert>
//     </div>
//   );
// }
