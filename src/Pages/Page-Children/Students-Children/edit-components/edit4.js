import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import EditIcon from "@material-ui/icons/Edit";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";

import { updateStudent } from "../../../../redux/actions/studentAction";

export default function Edit4({ data, prevStep, nextStep }) {
  const dispatch = useDispatch();

  const [studentupdateData, setStudentupdateData] = useState({
    fullname: "",
    email: "",
    rollNumber: "",
    selectedFile: "",
  });
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(updateStudent(...studentupdateData, studentupdateData));
    // clear();
  };
  return (
    <div>
      <Button onClick={handleClickOpen}>
        <EditIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Edit selected student's profile:"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <AppBar title="Enter User Details" />
            <form onSubmit={handleSubmit} key={data._id}>
              <TextField
                placeholder="Enter Your First Name"
                label="First Name"
                name="fullname"
                onChange={(e) =>
                  setStudentupdateData({
                    ...studentupdateData,
                    fullname: e.target.value,
                  })
                }
                defaultValue={data.fullname}
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
                placeholder="Change unique roll number"
                label="Unique roll number"
                name="rollNumber"
                onChange={(e) =>
                  setStudentupdateData({
                    ...studentupdateData,
                    fullname: e.target.value,
                  })
                }
                defaultValue={data.rollNumber}
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
                placeholder="Enter Your Email"
                label="Email"
                name="email"
                onChange={(e) =>
                  setStudentupdateData({
                    ...studentupdateData,
                    email: e.target.value,
                  })
                }
                defaultValue={data.email}
                margin="normal"
                fullWidth
              />
              <br />
              <Button
                color="primary"
                type="submit"
                variant="contained"
                onClick={nextStep}
              >
                Next
              </Button>
              <Button color="secondary" variant="contained" onClick={prevStep}>
                Back
              </Button>
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
