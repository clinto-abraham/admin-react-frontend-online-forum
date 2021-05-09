import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { deepOrange } from "@material-ui/core/colors";
import { useSelector } from "react-redux";

// import { useDispatch, useSelector } from 'react-redux';
import FileBase from "react-file-base64";

// import { updateAdmin } from '../../actions/posts';
//
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  square: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
}));

const AccountSettingsAdmin = ({ props, adminData, setAdminData }) => {
  const admin = useSelector((state) => state.admin);
  const [newadminData, setNewadminData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  // const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (post) setPostData(post);
  // }, [post]);

  // const clear = () => {
  //   setCurrentId(0);
  //   setPostData({ title: '', message: '', tags: '', selectedFile: '' });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //     dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
  //     clear();

  // };

  // const teachers = useSelector((state) => state.teachers);
  // edit above

  const user = JSON.parse(localStorage.getItem("account"));
  const history = useHistory();

  const [values, setValues] = useState({
    name: "",
    email: "",
    contact: "",
    uniqueEmployeeID: "",
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const [values2, setValues2] = useState({
    password: "",
    confirm: "",
  });

  const handleChange2 = (event) => {
    setValues2({
      ...values2,
      [event.target.name]: event.target.value,
    });
  };

  const classes = useStyles();

  return (
    <>
      {!user?.result?._id ? (
        history.push("/")
      ) : (
        <>
          {admin.map((data) => (
            <div key={data._id}>
              <form autoComplete="off">
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
                      <Grid item md={6} xs={12}>
                        <Avatar
                          variant="square"
                          className={classes.square}
                          key={data.name}
                        >
                          {data.name[0]}
                        </Avatar>
                        {/* photo below */}
                        <div className={classes.fileInput}>
                          <FileBase
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) =>
                              setNewadminData({
                                ...newadminData,
                                selectedFile: base64,
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
                          value={data.name}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          label="Email id"
                          name="email"
                          onChange={handleChange}
                          required
                          value={data.email}
                          variant="outlined"
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
                          value={data.contact}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          label="Unique Employee ID"
                          name="uniqueEmployeeID"
                          onChange={handleChange}
                          value={data.uniqueEmployeeID}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          label="Username for login"
                          name="username"
                          onChange={handleChange}
                          required
                          value={data.username}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          label="Change password"
                          name="password"
                          onChange={handleChange}
                          required
                          value={data.password}
                          variant="outlined"
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
