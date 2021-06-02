import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";
import useStyles from "../Styles/makeStyles";
import { CCardBody } from "@coreui/react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Grid from "@material-ui/core/Grid";

import { useDispatch } from "react-redux";
import { signin } from "../redux/actions/auth";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     "& > * + *": {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));
const initialState = { username: "", password: "" };

export default function AdminSignIn() {
  const [form, setForm] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form, history);
    dispatch(signin(form, history));
    clear();
  }

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  function clear() {
    setForm(initialState);
  }
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <CCardBody>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="username"
                name="username"
                autoComplete="username"
                autoFocus
                value={form.username}
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={form.password}
                name="password"
                label="password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}

                error
                helperText="Incorrect entry."
          
              />
              {/* <FormControlLabel
                control={
                  <Checkbox name="remember" value="remember" color="primary" />
                }
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleClick}
              >
                Sign In
              </Button>
              {/* <div className={classes.root}> */}
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity="success">
                  You have successfully logged in!
                </Alert>
                {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert> */}
              </Snackbar>

              {/* <Grid container>
            <Grid item xs>
                Forgot password?
            </Grid>
          </Grid> */}
            </form>
          </div>
          <Box mt={8}></Box>
        </Container>
      </CCardBody>
    </>
  );
}
//
