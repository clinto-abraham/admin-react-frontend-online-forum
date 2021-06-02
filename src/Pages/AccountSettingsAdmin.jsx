import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { deepOrange } from "@material-ui/core/colors";
import InputAdornment from "@material-ui/core/InputAdornment";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import FileBase from "react-file-base64";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  makeStyles,
  TextField,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { updateAdminAction } from "../redux/actions/adminAction";

const useStyles = makeStyles((theme) => ({
  avatar: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    width: "15ch",
    height: "15ch",
    margin: "auto",
  },
  fileInput: {
    width: "97%",
    margin: "auto",
    display: "block",
  },
}));

const AccountSettingsAdmin = () => {
  const admin = useSelector((state) => state.admin);
  const { teachers, isLoading, students} = useSelector((state) => ({teachers : state.teachers, students: state.students}), shallowEqual);
  // const { adminData, isLoadings } = useSelector((state) => ({
  //   adminData: state.admin.adminData,
  //   isLoadings: state.admin.isLoadings }), shallowEqual);
  console.log(teachers, students, isLoading, admin)
  const user = JSON.parse(localStorage.getItem("account"));
  const history = useHistory();
  const classes = useStyles();
  const [updateAccount, setUpdateAccount] = useState({
    name: "",
    email: "",
    organization: "",
    GST: "",
    contact: "",
    uniqueEmployeeID: "",
    username: "",
    password: "",
    pictureFile: "",
  });
  const dispatch = useDispatch();

  // const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));

  // useEffect(() => {
  //   if (post) setPostData(post);
  // }, [post]);

  const clear = (e) => {
    e.preventDefault();
    setUpdateAccount({
      name: "",
      email: "",
      contact: "",
      organization: "",
      GST: "",
      uniqueEmployeeID: "",
      username: "",
      password: "",
      pictureFile: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(updateAdminAction(updateAccount));
    clear(e);
  };

  const handleChange = (event) => {
    setUpdateAccount({
      ...updateAccount,
      [event.target.name]: event.target.value,
    });
  };

  if (!admin.length && !isLoading)
    return "Not found! Administrator data needed to be updated by backend";
  return (
    <>
      {!user?.result?._id ? (
        history.push("/")
      ) : isLoading ? (
        <CircularProgress />
      ) : (
        <>
          {admin.map((data) => (
            <div key={data._id}>
              <form autoComplete="off" onClick={handleSubmit}>
                <Card style={{ backgroundColor: "transparent" }}>
                  <CardHeader
                    subheader="The information can be edited"
                    title="Profile"
                  />
                  <div className="account-settings">
                    <Divider />
                  </div>
                  {/* photo above */}
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={12} lg={12} xs={12}>
                        <ListItemAvatar>
                          <Avatar
                            className={classes.avatar}
                            key={data.name}
                            src={data.img ? data.img : data.name[0]}>
                            {}
                          </Avatar>
                        </ListItemAvatar>
                        {/* photo below */}
                        <div className={classes.fileInput}>
                          <Typography variant="h6" className="padding-grid ">
                            Upload your Profile Photo
                          </Typography>
                          <FileBase
                            className="center"
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) =>
                              setUpdateAccount({
                                ...updateAccount,
                                pictureFile: base64,
                              })
                            }
                          />
                        </div>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          helperText="Please specify the first name"
                          label="Full name"
                          name="name"
                          onChange={handleChange}
                          required
                          value={updateAccount.name}
                          variant="outlined"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                {" "}
                                {data.name} <ChevronRightIcon />{" "}
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position="end">
                                <BorderColorIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          label="Email id"
                          name="email"
                          onChange={handleChange}
                          required
                          value={updateAccount.email}
                          variant="outlined"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                {data.email} <ChevronRightIcon />
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position="end">
                                <BorderColorIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>

                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          helperText="Please specify the first name"
                          label="Organization name"
                          name="name"
                          onChange={handleChange}
                          required
                          value={updateAccount.organization}
                          variant="outlined"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                {" "}
                                {data.organization} <ChevronRightIcon />{" "}
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position="end">
                                <BorderColorIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          label="Email id"
                          name="GST"
                          onChange={handleChange}
                          required
                          value={updateAccount.GST}
                          variant="outlined"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                {data.GST} <ChevronRightIcon />
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position="end">
                                <BorderColorIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>

                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          label="Contact"
                          name="contact"
                          onChange={handleChange}
                          type="number"
                          required
                          value={updateAccount.contact}
                          variant="outlined"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                {data.contact}
                                <ChevronRightIcon />
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position="end">
                                <BorderColorIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          label="Unique Employee ID"
                          name="uniqueEmployeeID"
                          onChange={handleChange}
                          value={updateAccount.uniqueEmployeeID}
                          variant="outlined"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                {data.uniqueEmployeeID}
                                <ChevronRightIcon />
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position="end">
                                <BorderColorIcon />
                              </InputAdornment>
                            )
                          }}
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          label="Username for login"
                          name="username"
                          onChange={handleChange}
                          required
                          value={updateAccount.username}
                          variant="outlined"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                {data.username}
                                <ChevronRightIcon />
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position="end">
                                <BorderColorIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          label="Change password"
                          name="password"
                          onChange={handleChange}
                          required
                          value={updateAccount.password}
                          variant="outlined"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <ChevronRightIcon />
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position="end">
                                <BorderColorIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <div className="button-account">
                    <Button color="primary" variant="contained" type="submit">
                      Save details
                    </Button>
                  </div>

                  <Divider />
                </Card>
              </form>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default AccountSettingsAdmin;
